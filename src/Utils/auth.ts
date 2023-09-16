
import GoogleProvider from "next-auth/providers/google";
import axios from "axios"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    database: process.env.MONGODB_URI,
    secret: process.env.SECRET,
    callbacks: {
      async signIn({ user, account, profile }) {
        const response = await axios.get(`https://e-commerce-product-visualization-using-augmented-reality.vercel.app/api/user?email=${profile.email}`,
        );
        if(response.data.message !== "User not found"){
          return true;
        } else {
          console.log("user not existed")
          const data = {
            firstName: profile.given_name,
            lastName: profile.family_name,
            email: profile.email,
            password: profile.at_hash,
            avatar: profile.picture,
          };
          const response = await axios.post("https://e-commerce-product-visualization-using-augmented-reality.vercel.app/api/user",
            data
          );
          if (response.status !== 201) {
            return false;
          }
          return true;
        }
      },
      }
};
