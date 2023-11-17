import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const seedUser = () => {
    prisma.user.create({data: {
        email: "admin@gmail.com",
        password: "admin",
        name: "Admin",
        list_of_invoices: {
            create: [
                {
                    amount:50,
                    due_date: new Date("2024-01-16 09:00:00"),
                    details: "More details about the invoice"
                },
                {
                    amount:10,
                    due_date: new Date("2024-01-17 11:00:00"),
                    details: "Some details about the invoice"
                },
                {
                    amount:20,
                    due_date: new Date("2024-01-19 10:00:00"),
                    details: "Not so many details about the invoice"
                },
            ]
        },
        list_of_bills: ["Netflix", "Energy", "Food"]
    }}).then(() => console.log("feed made"))
    .catch(err => console.log(err))
}

seedUser();