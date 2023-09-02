import { Axios } from "axios";

export class SteamWebAPI {
  private api: Axios
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.api = new Axios({
      baseURL: "https://www.steamwebapi.com/",
    })
  }

  /**
   * Currency Endpoints
   */

  public ListAllCurrencies = async (base: string = "USD") => {
    return (await this.api.get(`currency/api/list?key=${this.apiKey}&base=${base}`)).data;
  }

  public ExchangeRates = async (change: string, base: string = "USD") => {
    return (await this.api.get(`currency/api/exchange?key=${this.apiKey}&change=${change}&base=${base}`)).data;
  }

  /**
   * Explore Endpoints
   */

  public GetRandomProfiles = async (limit: number = 5) => {
    return (await this.api.get(`explore/api/random?key=${this.apiKey}&limit=${limit}`)).data;
  }

  public GetLastRandomProfiles = async (limit: number = 5) => {
    return (await this.api.get(`explore/api/last?key=${this.apiKey}&limit=${limit}`)).data;
  }

  public GetToplistProfiles = async (limit: number = 5) => {
    return (await this.api.get(`explore/api/toplist?key=${this.apiKey}&limit=${limit}`)).data;
  }

  /**
   * Float Endpoints
   */

  // public GetFloat = async (inspectlink: string, s: string, m: string, a: string, d: string) => {
  //   return (await this.api.get(`float/api/item?key=${this.apiKey}&inspectlink=${inspectlink}&s=${s}&m=${m}&a=${a}&d=${d}`)).data;
  // }

  /**
   * Items Endpoints
   */

  public GetAllItems = async (game: string = "csgo", currency: string = "usd", no_cache: boolean = false) => {
    return (await this.api.get(`steam/api/items?key=${this.apiKey}&game=${game}&currency=${currency}&no_cache=${no_cache}`)).data;
  }

  public GetItemInfo = async (game: string = "csgo", type: "groups" | "items" | "types" = "groups", no_cache: boolean = false) => {
    return (await this.api.get(`steam/api/items/info?key=${this.apiKey}&game=${game}&type=${type}&no_cache=${no_cache}`)).data;
  }

  public FindItem = async (search: string, type: "group" | "item" | "type", game: string = "csgo") => {
    return (await this.api.get(`steam/api/items/find?key=${this.apiKey}&game=${game}&search=${search}&type=${type}`)).data;
  }

  public GetItemDetail = async (market_hash_name: string, currency: string = "usd") => {
    return (await this.api.get(`steam/api/item?key=${this.apiKey}&market_hash_name=${market_hash_name}&currency=${currency}`)).data;
  }

  // public PriceHistory = async (markethashname: string, currency: string = "usd") => {
  //   return (await this.api.get(`steam/api/pricehistory?key=${this.apiKey}&markethashname=${markethashname}&currency=${currency}`)).data;
  // }

  /**
   * Inventory Endpoints
   */

  public GetInventory = async (steam_id: string, game: string = "csgo", parse: number = 1, language: string = "english", no_cache: boolean = false, group: number = 0, sort: string = "price_max", currency: string = "usd", withProfile: boolean = false) => {
    return (await this.api.get(`steam/api/inventory?key=${this.apiKey}&steam_id=${steam_id}&game=${game}&parse=${parse}&language=${language}&no_cache=${no_cache}&group=${group}&sort=${sort}&currency=${currency}&withProfile=${withProfile}`)).data;
  }

  public GetInventoryOnDay = async (steam_id: string, date: string) => {
    return (await this.api.get(`steam/api/inventory/tracked/day?key=${this.apiKey}&steam_id=${steam_id}&date=${date}`)).data;
  }

  /**
   * Profile Endpoints
   */

  public ConvertSteamID = async (steam_id: string) => {
    return (await this.api.get(`steam/api/steamid?key=${this.apiKey}&steam_id=${steam_id}`)).data;
  }

  public GetProfile = async (id: string, no_cache: boolean = false) => {
    return (await this.api.get(`steam/api/profile?key=${this.apiKey}&id=${id}&no_cache=${no_cache}`)).data;
  }

  // public GetFriendlist = async (id: string, parse: number = 1, no_cache: number = 1) => {
  //   return (await this.api.get(`steam/api/friendlist?key=${this.apiKey}&id=${id}&parse=${parse}&no_cache=${no_cache}`)).data;
  // }

}