const HistoryData = [
  {
    type: "Waste Disposal",
    date: "07 June 2022",
    mainDetails: "13 kg of waste was disposed",
    details: {
      points: 1300,
      pickupDate: "Sunday, 07 June 2022 / 8:00AM",
      pickupTime: "08:00AM",
      wasteType: 
        {
          organic: {
            weight: "1kg Organic",
          },
          inorganic: {
            weight: "12kg Inorganic",
            weightBreakdown: {
              plastic: "6kg Plastic",
              tin: "5kg Metal Tin",
              styrofoam: "1kg Styrofoam",
            },
          },
        },
    },
  },
  {
    type: "Voucher Purchase",
    date: "07 June 2022",
    mainDetails: "50% Discount Coupon at Chatime",
    details: {
      other: "1 voucher exchanged",
      points: 300,
    },
  },
  {
    type: "Points Exchange",
    date: "07 June 2022",
    mainDetails: "You exchanged 3000 points via GoPay",
    details: {
      points: 3000,
    },
  },
  {
    type: "Payment",
    date: "04 June 2022",
    mainDetails: "Pending payment of Rp. 20,000",
    details: {
      other: "Pending payment of Rp. 20,000 due June 5, 2022 / 11:15"
    },
  },
];

export default HistoryData;
