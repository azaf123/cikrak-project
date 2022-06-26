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
      quantity: 1,
      points: 300,
    },
  },
  {
    type: "Points Exchange",
    date: "07 June 2022",
    details: {
      points: 3000,
    },
  },
  {
    type: "Payment",
    date: "08 June 2022",
    details: {
      status: "pending",
      total: "Rp. 11,000",
      date: "June 20, 2022",
      time: "18:10",
    },
  },
];

export default HistoryData;
