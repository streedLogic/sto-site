import Prismic from "prismic-javascript";

const REPOSITORY = "sto-site";
export const API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;

export const client = Prismic.client(API_URL);
