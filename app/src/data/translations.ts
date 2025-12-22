export type Language = 'jp' | 'en' | 'th';

export const translations = {
  jp: {
    title: "janie's greekie",
    hero: {
      headline: "濃厚で、クリーミーで、\n罪悪感ゼロ。",
      subheadline: "あなたの日常を変える、究極の一品。",
      cta: "Grabで注文する",
    },
    nav: {
      about: "こだわり",
      menu: "メニュー",
      reviews: "お客様の声",
      access: "レビュー",
    },
    features: {
      title: "Our Secret",
      subtitle: "3つのこだわり",
      items: [
        {
          title: "濃厚さ",
          description: "48時間水切り。クリームチーズのような、もったり超濃厚食感。"
        },
        {
          title: "健康",
          description: "100%ナチュラル。保存料・砂糖不使用。素材本来の美味しさ。"
        },
        {
          title: "鮮度",
          description: "毎日手作り。バンコクのキッチンで、毎日新鮮な分だけを製造。"
        }
      ]
    },
    menu: {
      title: "Menu",
      popular: "おすすめメニュー",
      items: [
        {
          name: "100% Pure Honey",
          description: "純度100%のハチミツ"
        },
        {
          name: "Greek yogurt with 4 kinds fruits",
          description: "4種のフルーツ贅沢盛り"
        },
        {
          name: "Greek yogurt with Honey",
          description: "シンプル嗜好の方へ"
        }
      ]
    },
    reviews: {
      title: "Reviews",
      subtitle: "お客様の声",
      items: [
        {
          name: "Shun",
          content: "本当に美味しかったです。ボリュームもたっぷりで、フルーツも新鮮で美味しかったです。",
          rating: 5
        },
        {
          name: "Sarah",
          content: "バンコクで一番美味しいグリークヨーグルト！濃厚さが違います。",
          rating: 5
        },
        {
          name: "Kenji",
          content: "毎朝の習慣になりました。タンパク質が摂れて嬉しい。",
          rating: 5
        },
        {
          name: "Emily",
          content: "ハチミツが最高に美味しい。巣蜜の食感がたまりません。",
          rating: 5
        },
        {
          name: "David",
          content: "値段以上の価値があります。リピート確定です。",
          rating: 5
        }
      ]
    },
    delivery: {
      title: "Delivery",
      text: "GrabとLINE MANで注文可能。毎日数量限定販売。",
    },
    cta: {
      grab: "Grabで注文",
      lineman: "LINE MANで注文",
    },
    footer: {
      copyright: "© 2024 janie's greekie. All rights reserved.",
    },
  },
  en: {
    title: "janie's greekie",
    hero: {
      headline: "Velvety. Rich.\nGuilt-Free.",
      subheadline: "Elevate your daily routine with the ultimate Greek yogurt experience.",
      cta: "Order on Grab",
    },
    nav: {
      about: "Our Secret",
      menu: "Menu",
      reviews: "Community",
      access: "Reviews",
    },
    features: {
      title: "Our Secret",
      subtitle: "Why Janie's?",
      items: [
        {
          title: "48h Strained",
          description: "Signature 48-hour straining process. Experience a texture so thick and creamy, it's like cream cheese."
        },
        {
          title: "Clean Label",
          description: "100% Natural. No preservatives, no added sugar. Just pure, probiotic-packed goodness."
        },
        {
          title: "Small Batch",
          description: "Crafted with love in Bangkok. Handmade in small batches every single day for peak freshness."
        }
      ]
    },
    menu: {
      title: "The Menu",
      popular: "Our Favorites",
      items: [
        {
          name: "Premium Pure Honey (The Perfect Pairing)",
          description: "100% Pure Honey"
        },
        {
          name: "The Signature 4-Fruit Medley",
          description: "Luxury mix with 4 fruits"
        },
        {
          name: "The Classic: Honey & Yogurt",
          description: "For simple honey lovers"
        }
      ]
    },
    reviews: {
      title: "Reviews",
      subtitle: "What Our Customers Say",
      items: [
        {
          name: "Shun",
          content: "Absolutely divine. Generous portions and the fruit was incredibly fresh.",
          rating: 5
        },
        {
          name: "Sarah",
          content: "Best Greek yogurt in BKK! The thickness is on another level.",
          rating: 5
        },
        {
          name: "Kenji",
          content: "My new morning ritual. Love the high-protein boost!",
          rating: 5
        },
        {
          name: "Emily",
          content: "The honey is a game changer. That honeycomb texture is everything.",
          rating: 5
        },
        {
          name: "David",
          content: "Pure quality. Worth every Baht—I'm officially a regular.",
          rating: 5
        }
      ]
    },
    delivery: {
      title: "Delivery",
      text: "Available on Grab and LINE MAN. Daily Batch - Limited quantity!",
    },
    cta: {
      grab: "Order on Grab",
      lineman: "Order on LINE MAN",
    },
    footer: {
      copyright: "© 2024 janie's greekie. All rights reserved.",
    },
  },
  th: {
    title: "janie's greekie",
    hero: {
      headline: "เนื้อเนียน เข้มข้น...\nอร่อยแบบไม่รู้สึกผิด",
      subheadline: "ยกระดับวันธรรมดาของคุณ ด้วยกรีกโยเกิร์ตระดับพรีเมียม",
      cta: "สั่งผ่าน Grab",
    },
    nav: {
      about: "เคล็ดลับของเรา",
      menu: "เมนู",
      reviews: "รีวิวจากลูกค้า",
      access: "รีวิว",
    },
    features: {
      title: "ทำไมต้อง janie's greekie?",
      subtitle: "3 จุดเด่นของเรา",
      items: [
        {
          title: "เข้มข้นพิเศษ",
          description: "บ่มและกรองนานถึง 48 ชม. จนได้เนื้อสัมผัสที่แน่น นุ่มละมุน คล้ายครีมชีส"
        },
        {
          title: "ธรรมชาติ 100%",
          description: "Clean & Healthy ไม่ใส่วัตถุกันเสีย ไม่เติมน้ำตาล ได้รสสัมผัสจากธรรมชาติแท้ๆ"
        },
        {
          title: "ทำสดใหม่ทุกวัน",
          description: "โฮมเมดสูตรพิเศษ ทำสดใหม่ทุกวันจากครัวของเราในกรุงเทพฯ"
        }
      ]
    },
    menu: {
      title: "เมนูของเรา",
      popular: "เมนูแนะนำ",
      items: [
        {
          name: "กรีกโยเกิร์ตน้ำผึ้งแท้ 100% (สูตรพรีเมียม)",
          description: "น้ำผึ้งแท้ 100%"
        },
        {
          name: "กรีกโยเกิร์ตหน้าผลไม้รวม 4 ชนิด (Signature)",
          description: "กรีกโยเกิร์ตพร้อมผลไม้ 4 ชนิด"
        },
        {
          name: "กรีกโยเกิร์ตราดน้ำผึ้งหอมละมุน",
          description: "กรีกโยเกิร์ตราดน้ำผึ้ง"
        }
      ]
    },
    reviews: {
      title: "รีวิว",
      subtitle: "เสียงจากลูกค้าของเรา",
      items: [
        {
          name: "Shun",
          content: "อร่อยมากครับ ให้เยอะจุใจ ผลไม้สดและเข้ากันได้ดีสุดๆ",
          rating: 5
        },
        {
          name: "Sarah",
          content: "กรีกโยเกิร์ตที่อร่อยที่สุดในกรุงเทพ! เนื้อแน่นฟินมากค่ะ",
          rating: 5
        },
        {
          name: "Kenji",
          content: "กลายเป็นมื้อเช้าประจำไปแล้วครับ ได้โปรตีนเน้นๆ ดีต่อสุขภาพ",
          rating: 5
        },
        {
          name: "Emily",
          content: "น้ำผึ้งคือที่สุด! ชอบ Texture มากๆ อร่อยแบบหยุดไม่ได้เลยค่ะ",
          rating: 5
        },
        {
          name: "David",
          content: "คุ้มค่าคุ้มราคามากครับ คุณภาพพรีเมียมจริงๆ ต้องสั่งซ้ำแน่นอน",
          rating: 5
        }
      ]
    },
    delivery: {
      title: "Delivery",
      text: "สั่งได้เลยที่ Grab และ LINE MAN - สินค้ามีจำนวนจำกัดต่อวัน",
    },
    cta: {
      grab: "สั่งผ่าน Grab",
      lineman: "สั่งผ่าน LINE MAN",
    },
    footer: {
      copyright: "© 2024 janie's greekie. All rights reserved.",
    },
  },
};
