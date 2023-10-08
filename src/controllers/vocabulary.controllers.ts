import { HTTP_CODE_ERRORS } from "@/constants";
import { Vocabulary } from "@/models";
import {
  TVocabulary,
  TVocabularyDelete,
  TVocabularyGet,
  TVocabularyGetById,
  TVocabularyUpdate,
} from "@/types";
import { isEmpty } from "@/utils";

export const createVocabulary = async ({
  headers,
  body,
}: TVocabulary): Promise<Response> => {
  if (!body.categoryId) {
    return new Response(JSON.stringify({ message: "Missing categoryId" }), {
      status: HTTP_CODE_ERRORS.BAD_REQUEST,
    });
  }

  if (!body.word) {
    return new Response(JSON.stringify({ message: "Missing word" }), {
      status: HTTP_CODE_ERRORS.BAD_REQUEST,
    });
  }

  if (!body.meaning) {
    return new Response(JSON.stringify({ message: "Missing meaning" }), {
      status: HTTP_CODE_ERRORS.BAD_REQUEST,
    });
  }

  body.userId = headers.userId;

  try {
    const vocabulary = new Vocabulary(body);
    const vocabularySaved = await vocabulary.save();
    return new Response(JSON.stringify(vocabularySaved));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export const getVocabulary = async ({
  headers,
}: TVocabularyGet | any): Promise<Response> => {
  try {
    const vocabularies =
      (await Vocabulary.find({ userId: headers.userId })) || [];
    return new Response(JSON.stringify(vocabularies));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export const getVocabularyById = async ({
  headers,
  params: { id },
}: TVocabularyGetById | any): Promise<Response> => {
  try {
    const vocabulary =
      (await Vocabulary.findOne({
        userId: headers.userId,
        _id: id,
      })) || [];
    return new Response(JSON.stringify(vocabulary));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export const updateVocabulary = async ({
  body,
  headers,
  params: { id },
}: TVocabularyUpdate | any): Promise<Response> => {
  if (isEmpty(body)) {
    return new Response(JSON.stringify({ message: "Missing field" }), {
      status: HTTP_CODE_ERRORS.BAD_REQUEST,
    });
  }

  try {
    const vocabulary = await Vocabulary.findOneAndUpdate(
      { userId: headers.userId, _id: id },
      body,
      { new: true }
    );
    return new Response(JSON.stringify(vocabulary));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export const deleteVocabulary = async ({
  headers,
  params: { id },
}: TVocabularyDelete | any): Promise<Response> => {
  const vocabulary = await Vocabulary.findOne({
    userId: headers.userId,
    _id: id,
  });

  if (!vocabulary) {
    return new Response(JSON.stringify({ message: "Vocabulary not found" }), {
      status: HTTP_CODE_ERRORS.BAD_REQUEST,
    });
  }

  try {
    await Vocabulary.deleteOne({ userId: headers.userId, _id: id });
    return new Response(
      JSON.stringify({
        message: "Delete vocabulary successfully",
      })
    );
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};
