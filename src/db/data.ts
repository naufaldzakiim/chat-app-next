interface IData {
  results: {
    room: {
      name: string;
      id: number;
      image_url: string;
      participant: {
        id: string;
        name: string;
        role?: number;
      }[];
    };
    comments: {
      id: number;
      type: string;
      message: string;
      sender: string;
      media_url?: string;
    }[];
  }[];
}

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
            role: 0,
          },
          {
            id: "agent@mail.com",
            name: "Agent A",
            role: 1,
          },
          {
            id: "customer@mail.com",
            name: "king customer",
            role: 2,
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
      ],
    },
    {
      room: {
        name: "Agent B",
        id: 12457,
        image_url:
          "https://ih1.redbubble.net/image.5326001228.6216/raf,360x360,075,t,fafafa:ca443f4786.jpg",
        participant: [
          {
            id: "agentb@mail.com",
            name: "Agent B",
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
          sender: "agentb@mail.com",
        },
        {
          id: 895514,
          type: "text",
          message: "Ada yang bisa saya bantu?",
          sender: "agentb@mail.com",
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
          media_url:
            "https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/osCUAExz0FtFREhUQMEDnIf6IfRDAeq1Donoor/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=820&bt=410&cs=0&ds=6&ft=I~da4oA-D12NvktlPeIxRw5SblBF-UjNSaopiX&mime_type=video_mp4&qs=0&rc=NDdmZmY6OGllM2U8Z2U8PEBpanJvaG05cmRqczMzODgzNEAyLzM1LWNgNTIxNWEyMjJhYSNyNWpoMmQ0c2dgLS1kLzFzcw%3D%3D&btag=e000b0000&expire=1733356269&l=20241204175056140EFB1281065D2AB05B&ply_type=2&policy=2&signature=356adc320da3f13d1a728b3e59db046c&tk=tt_chain_token",
          sender: "agentb@mail.com",
        },
        {
          id: 895517,
          type: "text",
          message: "Baik, akan saya cek terlebih dahulu",
          sender: "agentb@mail.com",
        },
        {
          id: 895518,
          type: "text",
          message:
            "Setelah saya cek memang benar ternyata terdapat sedikit kesalahan pada product tersebut",
          sender: "agentb@mail.com",
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
          sender: "agentb@mail.com",
        },
        {
          id: 895522,
          type: "image",
          message: "catto-sowwy.jpg",
          media_url:
            "https://i.pinimg.com/564x/f5/4c/2f/f54c2fae3348ca4543112c1764fd825c.jpg",
          sender: "agentb@mail.com",
        },
        {
          id: 895523,
          type: "text",
          message:
            "Kami hanya dapat membantu dengan memberikan manual produk tersebut jika ingin melakukan perbaikan sendiri",
          sender: "agentb@mail.com",
        },
        {
          id: 895524,
          type: "pdf",
          message: "manual-product.pdf",
          media_url: "https://manual-product-fzk.tiiny.site/",
          sender: "agentb@mail.com",
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
  ],
};
