import { BonfidaTrade } from './types';

export default class BalisariApi {
  static URL: string = 'https://api.raydium.io/';

  static async get(path: string) {
    try {
      const response = await fetch(this.URL + path);
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.success ? responseJson.data : null;
      }
    } catch (err) {
      console.log(`Error fetching from Raydium API ${path}: ${err}`);
    }
    return null;
  }

  static async getRecentTrades(
    marketAddress: string,
  ): Promise<BonfidaTrade[] | null> {
    return BalisariApi.get(`trade/address?market=${marketAddress}`);
  }
}

export const BONFIDA_DATA_FEED = 'https://serum-api.bonfida.com/tv';
