import { IData, USER_ROLE } from "@/types/chat";

export const data: IData = {
  results: [
    {
      room: {
        name: "Product A",
        id: 12456,
        image_url: "https://picsum.photos/id/237/200/300",
        participant: [
          {
            id: "admin@mail.com",
            name: "Admin",
            role: USER_ROLE.Admin,
          },
          {
            id: "agent@mail.com",
            name: "Agent A",
            role: USER_ROLE.Agent,
          },
          {
            id: "customer@mail.com",
            name: "king customer",
            role: USER_ROLE.Customer,
          },
        ],
      },
      comments: [
        {
          id: 885512,
          type: "text",
          message: "Selamat malam",
          sender: "customer@mail.com",
        },
        {
          id: 885513,
          type: "text",
          message: "Malam",
          sender: "agent@mail.com",
        },
        {
          id: 885514,
          type: "text",
          message: "Ada yang bisa saya bantu?",
          sender: "agent@mail.com",
        },
        {
          id: 885515,
          type: "text",
          message:
            "Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal",
          sender: "customer@mail.com",
        },
        {
          id: 885516,
          type: "text",
          message: "Baik, silahkan kirimkan lampiran bukti pembayarannya",
          sender: "agent@mail.com",
        },
        {
          id: 885517,
          type: "pdf",
          message: "manual-product.pdf",
          media_url: "https://manual-product-fzk.tiiny.site/",
          sender: "customer@mail.com",
        },
      ],
    },
    {
      room: {
        name: "Atmin Catoru",
        id: 12457,
        image_url:
          "https://ih1.redbubble.net/image.5326001228.6216/raf,360x360,075,t,fafafa:ca443f4786.jpg",
        participant: [
          {
            id: "atmincatoru@mail.com",
            name: "Atmin Catoru",
          },
          {
            id: "customer@mail.com",
            name: "king customer",
          },
        ],
      },
      comments: [
        {
          id: 895512,
          type: "text",
          message: "Selamat Pagi",
          sender: "customer@mail.com",
        },
        {
          id: 895513,
          type: "text",
          message: "Pagi",
          sender: "atmincatoru@mail.com",
        },
        {
          id: 895514,
          type: "text",
          message: "Ada yang bisa saya bantu?",
          sender: "atmincatoru@mail.com",
        },
        {
          id: 895515,
          type: "text",
          message:
            "Saya mendapatkan kendala pada product ini dengan video sebagai berikut",
          sender: "customer@mail.com",
        },
        {
          id: 895516,
          type: "video",
          message: "20241202124554.mp4",
          media_url: "https://ik.imagekit.io/ikmedia/example_video.mp4",
          sender: "customer@mail.com",
        },
        {
          id: 895517,
          type: "text",
          message: "Baik, akan saya cek terlebih dahulu",
          sender: "atmincatoru@mail.com",
        },
        {
          id: 895518,
          type: "text",
          message:
            "Setelah saya cek memang benar ternyata terdapat sedikit kesalahan pada product tersebut",
          sender: "atmincatoru@mail.com",
        },
        {
          id: 895519,
          type: "text",
          message: "Apakah saya dapat melakukan klaim garansi?",
          sender: "customer@mail.com",
        },
        {
          id: 895520,
          type: "image",
          message: "sad-hamster.webp",
          media_url:
            "https://static.wikia.nocookie.net/nicos-nextbots-fanmade/images/d/da/Sad_sister_hampster.webp/revision/latest/thumbnail/width/360/height/360?cb=20240901135040",
          sender: "customer@mail.com",
        },
        {
          id: 895521,
          type: "text",
          message:
            "Maaf tidak bisa kak, karena kerusakan tersebut bukan dari pihak kami",
          sender: "atmincatoru@mail.com",
        },
        {
          id: 895522,
          type: "image",
          message: "catto-sowwy.jpg",
          media_url:
            "https://i.pinimg.com/564x/f5/4c/2f/f54c2fae3348ca4543112c1764fd825c.jpg",
          sender: "atmincatoru@mail.com",
        },
        {
          id: 895523,
          type: "text",
          message:
            "Kami hanya dapat membantu dengan memberikan manual produk tersebut jika ingin melakukan perbaikan sendiri",
          sender: "atmincatoru@mail.com",
        },
        {
          id: 895524,
          type: "pdf",
          message: "manual-product.pdf",
          media_url: "https://manual-product-fzk.tiiny.site/",
          sender: "atmincatoru@mail.com",
        },
        {
          id: 895525,
          type: "text",
          message: "Baik terima kasih",
          sender: "customer@mail.com",
        },
        {
          id: 895526,
          type: "image",
          message: "cat-oghe.jpg",
          media_url:
            "https://i.pinimg.com/originals/39/b0/38/39b0387991f713f5154683ab4c277bb7.jpg",
          sender: "customer@mail.com",
        },
      ],
    },
    {
      room: {
        name: "Product B",
        id: 15458,
        image_url:
          "https://cdn.rri.co.id/berita/Palangkaraya/o/1725240142241-IMG_2131/ai7sj55d0mo35hh.jpeg",
        participant: [
          {
            id: "admin@mail.com",
            name: "Admin",
            role: USER_ROLE.Admin,
          },
          {
            id: "agentb@mail.com",
            name: "Agent B",
            role: USER_ROLE.Agent,
          },
          {
            id: "customer@mail.com",
            name: "king customer",
            role: USER_ROLE.Customer,
          },
        ],
      },
      comments: [
        {
          id: 985512,
          type: "text",
          message: "Selamat malam",
          sender: "customer@mail.com",
        },
        {
          id: 985513,
          type: "text",
          message: "Malam",
          sender: "agentb@mail.com",
        },
        {
          id: 985514,
          type: "text",
          message: "Ada yang bisa saya bantu?",
          sender: "agentb@mail.com",
        },
        {
          id: 985515,
          type: "text",
          message: "Apakah ada pap imutnya hari ini?",
          sender: "customer@mail.com",
        },
        {
          id: 985516,
          type: "image",
          message: "cat-oghe.jpg",
          media_url:
            "https://media.tenor.com/VKZCcXu7S14AAAAM/cat-angry.gif",
          sender: "agentb@mail.com",
        },
        {
          id: 985517,
          type: "text",
          message: "ihh lucu bgtt >///<",
          sender: "customer@mail.com",
        },
      ],
    },
    {
      room: {
        name: "Okarun",
        id: 12459,
        image_url:
          "https://i.kym-cdn.com/photos/images/newsfeed/002/925/412/9d1.jpeg",
        participant: [
          {
            id: "kentakakura@mail.com",
            name: "Okarun",
          },
          {
            id: "customer@mail.com",
            name: "king customer",
          },
        ],
      },
      comments: [
        {
          id: 985515,
          type: "text",
          message: "Weh, video yang pas lawan nenek turbo kemarin dong",
          sender: "customer@mail.com",
        },
        {
          id: 985516,
          type: "video",
          message: "video.mp4",
          media_url: "https://ik.imagekit.io/ikmedia/example_video.mp4",
          sender: "kentakakura@mail.com",
        },
      ],
    },
  ],
};
