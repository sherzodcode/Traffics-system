export interface addSmsDto {
    your_number: string,
    price: string,
    traffic: string,
    client_number: string
}

// your_number String
//   sendedAt DateTime @default(now())
//   payedAt DateTime @default(now())
//   price String
//   traffic String
//   client_number String
//   status String @default("Error")