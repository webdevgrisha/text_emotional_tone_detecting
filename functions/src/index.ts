import './init';
import functions from 'firebase-functions';
import { LanguageServiceClient } from '@google-cloud/language';
import { onCall } from 'firebase-functions/v2/https';
import { CallableRequest } from 'firebase-functions/lib/common/providers/https';
import { FirebaseError } from 'firebase-admin';

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
        const err = error as FirebaseError;
        console.error('Error analyzing tone:', error);
        return { error: err.message }
    }
});
