import ApiService from './ApiService';
import {FACTS, RANDOM} from './constants';

export const getRandomFacts = async (amount = 10) => {
  const response = await ApiService.get(
    `${FACTS}${RANDOM}?animal_type=cat&amount=${amount}`,
  );
  return response.data;
};
