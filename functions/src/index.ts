import './init';
import functions from 'firebase-functions';
import { LanguageServiceClient } from '@google-cloud/language';
import { onCall } from 'firebase-functions/v2/https';
import { CallableRequest } from 'firebase-functions/lib/common/providers/https';

const client = new LanguageServiceClient();

export const analyzeTone = onCall(async (request: CallableRequest<{ text: string }>) => {
    const { text } = request.data;

    if (!text) {
        throw new functions.https.HttpsError('invalid-argument', 'There is no text');
    }

    try {
        const document = {
            content: text,
            type: 'PLAIN_TEXT' as const,
            encodingType: 'UTF8',
        };

        const [result] = await client.analyzeSentiment({ document });

        return result;
    } catch (error) {
        console.error('Error analyzing tone:', error);
        throw new functions.https.HttpsError('internal', 'Text analysis error');
    }
});
