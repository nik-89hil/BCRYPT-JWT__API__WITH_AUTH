const bcrypt = require("bcrypt");

const myPlaintextPassword = "admin";

const HashArray  = ["$2b$10$/v1KRCaKfkIrTyevGauduu/.YJd5bynGzl3/ndbpZVyYUBlxvP94S",
"$2b$10$7mNfdZPTy.2oX2dlmIQ9fujTB5ZWmH2V/tTxPn8O5Nwn.qVjPURsC",
"$2b$10$.Ta0ZiVfUlBSmK9a6pKLx.Ym9fONigOl1XSq9uwTQakQmL2k3VeFi",
"$2b$10$Cyxl7GRD.vkhevCqDCJGFevGslrX13IPBeeq8Y5.Y8DtgilWeAqrW"
]

// function convert value into hash

async function convertIntoHash(){
    const hashValue = await bcrypt.hash(myPlaintextPassword, 10)
    console.log(myPlaintextPassword,hashValue);
}

// convertIntoHash()


// function verify hash value

async function verifyHashvalue(){
    for (let index = 0; index < HashArray.length; index++) {
        const element = HashArray[index]
        const result = await bcrypt.compare(myPlaintextPassword,element)
        console.log(result);
    }
    
}

// verifyHashvalue()