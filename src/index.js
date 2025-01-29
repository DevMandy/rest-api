var express = require('express');
var app = express();

app.get('/payouts', (req, res, next) => {
  res.json({
    payouts: [
      {
        id: 'po_d001cb2c-82cd-11ec-b8a4-02420a140004',
        status: 'SENT',
        location_id: '{LOCATION_ID}',
        created_at: '2022-01-31T19:41:41Z',
        updated_at: '2022-01-31T19:41:41Z',
        amount_money: {
          amount: -88,
          currency_code: 'EUR',
        },
        destination: {
          type: 'BANK_ACCOUNT',
          id: 'bact:cgvL1yv43VFjexample',
        },
        version: 1,
        type: 'BATCH',
        arrival_date: '2022-02-02',
        end_to_end_id: 'L2100000006',
      },
      {
        id: 'po_989fdac5-7fa9-11ec-b8a4-02420a140004',
        status: 'SENT',
        location_id: '{LOCATION_ID}',
        created_at: '2022-01-27T19:44:53Z',
        updated_at: '2022-01-27T19:44:53Z',
        amount_money: {
          amount: 3997,
          currency_code: 'EUR',
        },
        destination: {
          type: 'BANK_ACCOUNT',
          id: 'bact:cgvL1yv43VFjexample',
        },
        version: 1,
        type: 'BATCH',
        arrival_date: '2022-01-28',
        end_to_end_id: 'L2100000005',
      },
      {
        id: 'po_eb4dd46f-29f9-11ec-aaa1-02420a140004',
        status: 'SENT',
        location_id: '{LOCATION_ID}',
        created_at: '2021-10-10T18:43:11Z',
        updated_at: '2021-10-10T18:43:11Z',
        amount_money: {
          amount: 229,
          currency_code: 'EUR',
        },
        destination: {
          type: 'BANK_ACCOUNT',
          id: 'bact:cgvL1yv43VFjexample',
        },
        version: 1,
        type: 'BATCH',
        end_to_end_id: 'L2100000004',
      },
      {
        id: 'po_3cd4afed-f878-11eb-a8bb-02420a140009',
        status: 'SENT',
        location_id: '{LOCATION_ID}',
        created_at: '2021-08-08T18:41:27Z',
        updated_at: '2021-08-08T18:41:27Z',
        amount_money: {
          amount: 26,
          currency_code: 'EUR',
        },
        destination: {
          type: 'BANK_ACCOUNT',
          id: 'bact:cgvL1yv43VFjexample',
        },
        version: 1,
        type: 'BATCH',
        end_to_end_id: 'L2100000003',
      },
      {
        id: 'po_dd5909a2-ee44-11eb-a8bb-02420a140009',
        status: 'SENT',
        location_id: '{LOCATION_ID}',
        created_at: '2021-07-26T19:08:30Z',
        updated_at: '2021-07-26T19:08:30Z',
        amount_money: {
          amount: 239,
          currency_code: 'EUR',
        },
        destination: {
          type: 'BANK_ACCOUNT',
          id: 'bact:cgvL1yv43VFjexample',
        },
        version: 1,
        type: 'BATCH',
        end_to_end_id: 'L2100000002',
      },
      {
        id: 'po_dd590570-ee44-11eb-a8bb-02420a140009',
        status: 'SENT',
        location_id: '{LOCATION_ID}',
        created_at: '2021-07-26T19:08:30Z',
        updated_at: '2021-07-26T19:08:30Z',
        amount_money: {
          amount: 91,
          currency_code: 'EUR',
        },
        destination: {
          type: 'BANK_ACCOUNT',
          id: 'bact:cgvL1yv43VFjexample',
        },
        version: 1,
        type: 'BATCH',
        end_to_end_id: 'L2100000001',
      },
      {
        id: 'po_070431e4-e351-11eb-a8bb-02420a140009',
        status: 'SENT',
        location_id: '{LOCATION_ID}',
        created_at: '2021-07-12T20:37:51Z',
        updated_at: '2022-03-27T20:37:51Z',
        amount_money: {
          amount: 457,
          currency_code: 'EUR',
        },
        destination: {
          type: 'BANK_ACCOUNT',
          id: 'bact:cgvL1yv43VFjexample',
        },
        version: 1,
        type: 'BATCH',
        arrival_date: '2021-07-13',
        end_to_end_id: 'L2100000000',
      },
    ],
    port: PORT,
  });
});

app.get('/bank_accounts', (req, res, next) => {
  res.json({
    bank_account: {
      id: 'xxxbact:cgvL1yv43VFjexample',
      account_number_suffix: '526',
      country: 'US',
      currency: 'USD',
      account_type: 'CHECKING',
      holder_name: 'John Doe',
      primary_bank_identification_number: '101211111',
      location_id: 'S8GWD5example',
      status: 'VERIFICATION_SUCCEEDED',
      creditable: true,
      debitable: true,
      version: 5,
      bank_name: 'Bank Name',
    },
  });
});

app.get('/cards', (req, res, next) => {
  res.json({
    cards: [
      {
        id: '8002-0ccof:uIbfJXhXETSP197M3GB',
        billing_address: {
          address_line_1: '500 Electric Ave',
          address_line_2: 'Suite 600',
          locality: 'New York',
          administrative_district_level_1: 'NY',
          postal_code: '10003',
          country: 'US',
        },
        bin: '411111',
        card_brand: 'VISA',
        card_type: 'CREDIT',
        cardholder_name: 'Amelia Earhart',
        customer_id: 'VDKXEEKPJN48QDG3BGGFAK05P8',
        enabled: true,
        exp_month: 11,
        exp_year: 2018,
        last_4: '1111',
        prepaid_type: 'NOT_PREPAID',
        reference_id: 'user-id-1',
        version: "version 2",
      },
    ],
  });
});

app.get('/users', (req, res, next) => {
  res.json({
     id: 1,
     username: "emilys",
     email: "emily.johnson@x.dummyjson.com",
     firstName: "Emily",
     lastName: "Johnson",
     gender: "female",
     image: "https://dummyjson.com/icon/emilys/128",
     accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT accessToken (for backward compatibility) in response and cookies
     refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // refreshToken in response and cookies
   });
});

const PORT = 8001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
