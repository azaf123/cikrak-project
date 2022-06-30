import HistoryData from "../../data/HistoryData";

type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }

interface HistoryMainState {
    type: string;
    date: string;
    mainDetails: string;
    details: HistoryDetailsTypes;
    wasteType: object;
  }
  
  interface WasteType {
    organic: {
      weight: string;
    };
    inorganic: {
      weight: string;
      weightBreakdown: {
        plastic: string;
        tin: string;
        styrofoam: string;
      };
    };
  }
  
  interface HistoryDetailsTypes {
    points: number;
    quantity: number | null;
    pickupDate: string;
    pickupTime: string;
    status: string | null;
    total: string;
    date: string;
    time: string;
    wasteType: WasteType | null;
  }

function fetchHistoryDetails() {
    const wasteDetailsIndex = HistoryData[0];

}

export default fetchHistoryDetails;