import { adjectives, animals, colors, uniqueNamesGenerator } from 'unique-names-generator';
export const handler = async () => {
  const name = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })
  return {
    statusCode: 200,
    body: JSON.stringify({ payload: `Unique name is ${name}` }),
  };
};
