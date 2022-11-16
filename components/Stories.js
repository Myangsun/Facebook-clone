import { useSession } from "next-auth/react";
import React from "react";
import StoryCard from "./StoryCard";

function Stories() {
  const { data: session } = useSession();
  const stories = [
    {
      name: session.user.name,
      src: session.user.image,
      profile:
        "https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/70591503_117014826338486_9048294459606827008_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fKQq77kMX-IAX_drpV7&_nc_ht=scontent-bos5-1.xx&oh=00_AfBqr13ysGsZqC5bSp9iHEkt3-hRI6LcUkraTzy1wrhQfw&oe=638FE546",
    },
    {
      name: "Rihanna",
      src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/313266520_660124108818505_2814203090010849312_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JOhMnayyGsYAX8sNTKl&_nc_ht=scontent-bos5-1.xx&oh=00_AfB-JqkW4oD8fZaCJWxGPovwT92rMAlNjGx7-sFAlmPFlA&oe=636CA13A",
      profile:
        "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/313405697_665253804972202_576108643247840608_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MgMevkohPI4AX90sOJa&tn=YXdFQ8EH8NCuO-hj&_nc_ht=scontent-bos5-1.xx&oh=00_AfCSCvDECOPi1lm6W5O60pKjK4497wTL74QeDSAX_pAMYA&oe=636D587D",
    },
    {
      name: "Mark Zuckerberg",
      src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/312257846_10114737758665291_6588360857015169674_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aAM-vnaHX2EAX9_c_nV&_nc_ht=scontent-bos5-1.xx&oh=00_AfBMqFVMr7-h10gvtW6TlLYCpSrTGTm5m6-WGm5mOTobDA&oe=636D326E",
      profile:
        "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/310574751_10114721677062951_4275554924859677879_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=ofpujmNRlDsAX-JxvQC&_nc_ht=scontent-bos5-1.xx&oh=00_AfAv5WRZSNiyLlLzzkZW4FyYAm7Cov8UivkqG4w9G9j4Jw&oe=636DB637",
    },
    {
      name: "Bill Gates",
      src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/302050398_634809458009990_5460100074060768417_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lYsWfZ0f3jYAX8YTvai&_nc_ht=scontent-bos5-1.xx&oh=00_AfBsM9mqgdtNBH3vDIT-RivoMfEdUYZGbKutS0WGWHcm1Q&oe=636D976D",
      profile:
        "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/313867316_683573316466937_3836122414796734235_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=F7Ngfa0OUFkAX_VPd5o&tn=YXdFQ8EH8NCuO-hj&_nc_ht=scontent-bos5-1.xx&oh=00_AfC3B3FHFFdDH5F1fvE9YlWqbxH_wc_Jyq2uNRbUhIrRMA&oe=636D0045",
    },
    {
      name: "Eminem",
      src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/305444498_643066097187871_134145449597025045_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=A6eP-7rhfsoAX8K1iQI&_nc_ht=scontent-bos5-1.xx&oh=00_AfDFWxtNDQRstxYFWyOlumlp6rtpKxhEJwJN43ujgmDNGQ&oe=636E636C",
      profile:
        "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/312011889_674842557343558_1682590567305265743_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=YOFu8GyH0YAAX-tnpmh&_nc_ht=scontent-bos5-1.xx&oh=00_AfCZ6kv5h2spL5slTuBU8pS1Uy1ZW4mPGsCEFzxToi-MWw&oe=636D29F9",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
