dataSetVersion = "2024-09-28"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "キャラタイプ",
    key: "type",
    tooltip: "タイプフィルター",
    checked: false,
    sub: [
      { name: "モンスター娘", key: "ch" },
      { name: "獣神", key: "db" },
      { name: "???", key: "gsj" }
    ]
  },
  {
    name: "年別",
    key: "year",
    tooltip: "年別フィルター",
    checked: false,
    sub: [
      { name: "2022", key: "2022" },
      { name: "2023", key: "2023" },
      { name: "2024", key: "2024" }
    ]
  },
  {
    name: "属性",
    key: "attr",
    tooltip: "属性フィルター",
    checked: false,
    sub: [
      { name: "火属性", key: "fire" },
      { name: "水属性", key: "water" },
      { name: "風属性", key: "wind" },
      { name: "地属性", key: "earth" },
      { name: "光属性", key: "light" },
      { name: "闇属性", key: "dark" }
    ]
  },
  {
    name: "武器",
    key: "weapon",
    tooltip: "武器フィルター",
    checked: false,
    sub: [
      { name: "曲刀　", key: "scimitar" },
      { name: "槍　　", key: "spear" },
      { name: "斧　　", key: "axe" },
      { name: "拳　　", key: "fist" },
      { name: "剣盾　", key: "sword" },
      { name: "こん棒", key: "hammer" },
      { name: "大太刀", key: "tachi" },
      { name: "弓　　", key: "bow" },
      { name: "銃　　", key: "gun" },
      { name: "杖　　", key: "staff" },
      { name: "本　　", key: "book" },
      { name: "人形　", key: "puppet" },
      { name: "錫杖　", key: "scepter" },
      { name: "オーブ", key: "orb" },
      { name: "短剣　", key: "dagger" },
      { name: "扇　　", key: "fan" },
      { name: "手裏剣", key: "shuriken" },
      { name: "霊枝　", key: "twig" },
      { name: "楽器　", key: "instrument" }
    ]
  },
  {
    name: "別バージョン除外",
    key: "alt",
    tooltip: "水着や花嫁など、別バージョンを除外するオプション",
    checked: false
  },
  {
    name: "コラボ除外",
    key: "collab",
    tooltip: "TD祭やもんむす・くえすとなどの、コラボキャラを除外するオプション",
    checked: false
  },
  /*
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  }
  */
];

dataSet[dataSetVersion].characterData = [
  {
    name: "エテジア",
    img: "icon_10001_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["sword"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10002_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "フェルミ",
    img: "icon_10003_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fan"],
    }
  },
  {
    name: "アニス",
    img: "icon_10004_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["bow"],
    }
  },
  {
    name: "シルフィーネ",
    img: "icon_10005_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fan"],
    }
  },
  {
    name: "リン",
    img: "icon_10006_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["orb"],
    }
  },
  {
    name: "オキシー",
    img: "icon_10007_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["scepter"],
    }
  },
  {
    name: "プネーマ",
    img: "icon_10008_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["staff"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10009_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "イグニ",
    img: "icon_10010_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["spear"],
    }
  },
  {
    name: "ポデル",
    img: "icon_10011_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["axe"],
    }
  },
  {
    name: "ペトラ",
    img: "icon_10012_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["bow"],
    }
  },
  {
    name: "シジメ",
    img: "icon_10013_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["dagger"],
    }
  },
  {
    name: "フランシ",
    img: "icon_10014_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["dagger"],
    }
  },
  {
    name: "ユーシィ",
    img: "icon_10015_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["scimitar"],
    }
  },
  {
    name: "シルバ",
    img: "icon_10016_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["axe"],
    }
  },
  {
    name: "レティア",
    img: "icon_10017_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["bow"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10018_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "ティーレ",
    img: "icon_10019_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["staff"],
    }
  },
  {
    name: "ネリー",
    img: "icon_10020_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["bow"],
    }
  },
  {
    name: "クロミ",
    img: "icon_10021_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["book"],
    }
  },
  {
    name: "スズ",
    img: "icon_10022_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["bow"],
    }
  },
  {
    name: "セレン",
    img: "icon_10023_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["hammer"],
    }
  },
  {
    name: "アメリ",
    img: "icon_10024_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["gun"],
    }
  },
  {
    name: "タンタル",
    img: "icon_10025_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["book"],
    }
  },
  {
    name: "プラチナ",
    img: "icon_10026_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["sword"],
    }
  },
  {
    name: "テルル",
    img: "icon_10027_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["gun"],
    }
  },
  {
    name: "ローレン",
    img: "icon_10028_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["staff"],
    }
  },
  {
    name: "アスタ",
    img: "icon_10029_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["hammer"],
    }
  },
  {
    name: "ペリリ",
    img: "icon_10030_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["book"],
    }
  },
  {
    name: "ネル",
    img: "icon_10031_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["dagger"],
    }
  },
  {
    name: "アニシラ",
    img: "icon_10032_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["twig"],
    }
  },
  {
    name: "ユイル",
    img: "icon_10033_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["gun"],
    }
  },
  {
    name: "チール",
    img: "icon_10034_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["orb"],
    }
  },
  {
    name: "カリス",
    img: "icon_10035_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["axe"],
    }
  },
  {
    name: "ニャルタン",
    img: "icon_10036_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["scimitar"],
    }
  },
  {
    name: "メリッサ",
    img: "icon_10037_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["twig"],
    }
  },
  {
    name: "オキュー",
    img: "icon_10038_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["spear"],
    }
  },
  {
    name: "ディフニラ",
    img: "icon_10039_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["sword"],
    }
  },
  {
    name: "ニィル",
    img: "icon_10040_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["dagger"],
    }
  },
  {
    name: "メロン",
    img: "icon_10041_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["hammer"],
    }
  },
  {
    name: "パステノ",
    img: "icon_10042_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["scepter"],
    }
  },
  {
    name: "アックァ",
    img: "icon_10043_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["hammer"],
      collab:true
    }
  },
  {
    name: "ラゴス",
    img: "icon_10044_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["axe"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10045_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "ルルゥ",
    img: "icon_10046_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["orb"],
    }
  },
  {
    name: "アミラミ",
    img: "icon_10047_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["staff"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10048_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "アテエル",
    img: "icon_10049_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["scepter"],
    }
  },
  {
    name: "トルス",
    img: "icon_10050_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["gun"],
    }
  },
  {
    name: "クリフォ",
    img: "icon_10051_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fan"],
    }
  },
  {
    name: "テナ",
    img: "icon_10052_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["staff"],
    }
  },
  {
    name: "スゥノ",
    img: "icon_10053_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["book"],
    }
  },
  {
    name: "ティア",
    img: "icon_10054_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["instrument"],
    }
  },
  {
    name: "ミィマ",
    img: "icon_10055_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["hammer"],
    }
  },
  {
    name: "ロトーナ",
    img: "icon_10056_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["sword"],
    }
  },
  {
    name: "サウラ",
    img: "icon_10057_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["sword"],
    }
  },
  {
    name: "ケィナ",
    img: "icon_10058_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["gun"],
    }
  },
  {
    name: "エピル",
    img: "icon_10059_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["dagger"],
    }
  },
  {
    name: "バウ",
    img: "icon_10060_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["spear"],
    }
  },
  {
    name: "エリュート",
    img: "icon_10061_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["scimitar"],
    }
  },
  {
    name: "ラプワーン",
    img: "icon_10062_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["scimitar"],
    }
  },
  {
    name: "クレッタ",
    img: "icon_10063_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["sword"],
    }
  },
  {
    name: "ラキオン",
    img: "icon_10064_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["bow"],
    }
  },
  {
    name: "ニグリュ",
    img: "icon_10065_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["bow"],
    }
  },
  {
    name: "ワエマワ",
    img: "icon_10066_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["book"],
    }
  },
  {
    name: "ディリオ",
    img: "icon_10067_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["dagger"],
    }
  },
  {
    name: "カヅネ",
    img: "icon_10068_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["twig"],
    }
  },
  {
    name: "ミテラス",
    img: "icon_10069_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["twig"],
    }
  },
  {
    name: "ヴィルエ",
    img: "icon_10070_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["scepter"],
    }
  },
  {
    name: "ドネ",
    img: "icon_10071_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["scepter"],
    }
  },
  {
    name: "ウィウィ",
    img: "icon_10072_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["orb"],
    }
  },
  {
    name: "ハギナ",
    img: "icon_10073_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["spear"],
    }
  },
  {
    name: "ガウミィ",
    img: "icon_10074_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["spear"],
    }
  },
  {
    name: "アルギュロ",
    img: "icon_10075_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["instrument"],
    }
  },
  {
    name: "リクリフ",
    img: "icon_10076_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fan"],
    }
  },
  {
    name: "ニホ",
    img: "icon_10077_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["book"],
    }
  },
  {
    name: "ルナミーラ",
    img: "icon_10078_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["spear"],
    }
  },
  {
    name: "ナルケパフネ",
    img: "icon_10079_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["axe"],
    }
  },
  {
    name: "フリス",
    img: "icon_10080_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["spear"],
    }
  },
  {
    name: "マズル",
    img: "icon_10081_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["gun"],
    }
  },
  {
    name: "ソレイア",
    img: "icon_10082_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["staff"],
    }
  },
  {
    name: "ヴェラートゥ",
    img: "icon_10083_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["scimitar"],
    }
  },
  {
    name: "ロイエ",
    img: "icon_10084_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["fist"],
    }
  },
  {
    name: "マウロ",
    img: "icon_10085_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["axe"],
    }
  },
  {
    name: "テティ",
    img: "icon_10086_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["axe"],
    }
  },
  {
    name: "シャバフ",
    img: "icon_10087_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["dagger"],
    }
  },
  {
    name: "デルボア",
    img: "icon_10088_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["axe"],
    }
  },
  {
    name: "ルキュレ",
    img: "icon_10089_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["dagger"],
    }
  },
  {
    name: "レントープ",
    img: "icon_10090_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["bow"],
    }
  },
  {
    name: "アーラ",
    img: "icon_10091_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["scimitar"],
    }
  },
  {
    name: "ラタ",
    img: "icon_10092_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["dagger"],
    }
  },
  {
    name: "【常夏】アテエル",
    img: "icon_10093_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["hammer"],
      alt:   true
    }
  },
  {
    name: "【浜辺】テルル",
    img: "icon_10094_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["dagger"],
      alt:   true
    }
  },
  {
    name: "ラフーカ",
    img: "icon_10095_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["staff"],
    }
  },
  {
    name: "エーティ",
    img: "icon_10096_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["fist"],
    }
  },
  {
    name: "ユラ",
    img: "icon_10097_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["dagger"],
    }
  },
  {
    name: "ロジカ",
    img: "icon_10098_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["spear"],
    }
  },
  {
    name: "ヴァリナ",
    img: "icon_10099_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["spear"],
    }
  },
  {
    name: "メド",
    img: "icon_10100_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["axe"],
    }
  },
  {
    name: "アイレン",
    img: "icon_10101_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["fist"],
    }
  },
  {
    name: "ウォルーザ",
    img: "icon_10102_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["fist"],
    }
  },
  {
    name: "メアルス",
    img: "icon_10103_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["sword"],
    }
  },
  {
    name: "アンセ",
    img: "icon_10104_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["instrument"],
    }
  },
  {
    name: "ミヨ",
    img: "icon_10105_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["staff"],
    }
  },
  {
    name: "ロヴィリス",
    img: "icon_10106_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["sword"],
    }
  },
  {
    name: "リコ",
    img: "icon_10107_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["staff"],
    }
  },
  {
    name: "バーダギ",
    img: "icon_10108_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["fist"],
    }
  },
  {
    name: "ランケ",
    img: "icon_10109_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["axe"],
    }
  },
  {
    name: "ウシオ",
    img: "icon_10110_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["tachi"],
    }
  },
  {
    name: "ダナディリー",
    img: "icon_10111_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["bow"],
    }
  },
  {
    name: "ミスレナ",
    img: "icon_10112_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["hammer"],
    }
  },
  {
    name: "ルププ",
    img: "icon_10113_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["dagger"],
    }
  },
  {
    name: "プテリア",
    img: "icon_10114_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["sword"],
    }
  },
  {
    name: "レップ",
    img: "icon_10115_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["axe"],
    }
  },
  {
    name: "リュプチェ",
    img: "icon_10116_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["twig"],
    }
  },
  {
    name: "ウキスサ",
    img: "icon_10117_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["scimitar"],
    }
  },
  {
    name: "ネイス",
    img: "icon_10118_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["fist"],
    }
  },
  {
    name: "ウルネッラ",
    img: "icon_10119_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["instrument"],
    }
  },
  {
    name: "ソーヴェグラー",
    img: "icon_10120_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["book"],
    }
  },
  {
    name: "ペント",
    img: "icon_10121_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["staff"],
    }
  },
  {
    name: "マージェル",
    img: "icon_10122_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["twig"],
    }
  },
  {
    name: "ハリエラ",
    img: "icon_10123_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["instrument"],
    }
  },
  {
    name: "シリコ",
    img: "icon_10124_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["fist"],
    }
  },
  {
    name: "マリドゥーラ",
    img: "icon_10125_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["instrument"],
    }
  },
  {
    name: "プリン",
    img: "icon_10126_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["sword"],
    }
  },
  {
    name: "ヤーセファ",
    img: "icon_10127_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["book"],
    }
  },
  {
    name: "ヤナギ",
    img: "icon_10128_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["scimitar"],
    }
  },
  {
    name: "ブンコ",
    img: "icon_10129_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["instrument"],
    }
  },
  {
    name: "ヌタバ",
    img: "icon_10130_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["spear"],
    }
  },
  {
    name: "チファ",
    img: "icon_10131_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["sword"],
    }
  },
  {
    name: "ベルティオ",
    img: "icon_10132_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["bow"],
    }
  },
  {
    name: "ペロロス",
    img: "icon_10133_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["sword"],
    }
  },
  {
    name: "【鈴音】マズル",
    img: "icon_10134_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["instrument"],
      alt:   true
    }
  },
  {
    name: "ホヅキ",
    img: "icon_10135_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["hammer"],
    }
  },
  {
    name: "イフィジャール",
    img: "icon_10136_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["hammer"],
    }
  },
  {
    name: "【灯火】ミテラス",
    img: "icon_10137_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["spear"],
      alt:   true
    }
  },
  {
    name: "リッティ",
    img: "icon_10138_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["axe"],
      collab:true
    }
  },
  {
    name: "ラピス",
    img: "icon_10139_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["book"],
      collab:true
    }
  },
  {
    name: "きつね",
    img: "icon_10140_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["dagger"],
      collab:true
    }
  },
  {
    name: "ライム",
    img: "icon_10141_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["gun"],
      collab:true
    }
  },
  {
    name: "ヌイ",
    img: "icon_10142_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["bow"],
    }
  },
  {
    name: "【迎春】プラチナ",
    img: "icon_10143_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["bow"],
      alt:   true
    }
  },
  {
    name: "マギー",
    img: "icon_10144_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["bow"],
    }
  },
  {
    name: "【初雷】ワエマワ",
    img: "icon_10145_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["scimitar"],
      alt:   true
    }
  },
  {
    name: "アルマエルマ",
    img: "icon_10146_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fist"],
      collab:true
    }
  },
  {
    name: "へディア",
    img: "icon_10147_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["hammer"],
    }
  },
  {
    name: "たまも",
    img: "icon_10148_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["twig"],
      collab:true
    }
  },
  {
    name: "グランベリア",
    img: "icon_10149_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["axe"],
      collab:true
    }
  },
  {
    name: "アリスフィーズ",
    img: "icon_10150_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["staff"],
      collab:true
    }
  },
  {
    name: "ラミ",
    img: "icon_10151_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["book"],
      collab:true
    }
  },
  {
    name: "エルベティエ",
    img: "icon_10152_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["orb"],
      collab:true
    }
  },
  {
    name: "ピューリ",
    img: "icon_10153_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["bow"],
    }
  },
  {
    name: "リデル",
    img: "icon_10154_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["axe"],
    }
  },
  {
    name: "イチ",
    img: "icon_10155_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["shuriken"],
    }
  },
  {
    name: "ノーティー",
    img: "icon_10156_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["gun"],
    }
  },
  {
    name: "キョウ",
    img: "icon_10157_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fan"],
    }
  },
  {
    name: "プリムヴィル",
    img: "icon_10158_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["book"],
    }
  },
  {
    name: "オラムス",
    img: "icon_10159_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["twig"],
    }
  },
  {
    name: "チカ",
    img: "icon_10160_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["hammer"],
    }
  },
  {
    name: "メジエ",
    img: "icon_10161_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["staff"],
    }
  },
  {
    name: "コウタ",
    img: "icon_10162_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["shuriken"],
    }
  },
  {
    name: "フォンテイン",
    img: "icon_10163_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["dagger"],
    }
  },
  {
    name: "【女教師】ローレン",
    img: "icon_10164_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["dagger"],
      alt:   true
    }
  },
  {
    name: "【転校生】メロン",
    img: "icon_10165_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fist"],
      alt:   true
    }
  },
  {
    name: "ラプルム",
    img: "icon_10166_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["book"],
    }
  },
  {
    name: "ラルヴァ",
    img: "icon_10167_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["axe"],
    }
  },
  {
    name: "ツネ",
    img: "icon_10168_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["shuriken"],
    }
  },
  {
    name: "ラッツェル",
    img: "icon_10169_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["dagger"],
    }
  },
  {
    name: "バロウ",
    img: "icon_10170_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["scepter"],
    }
  },
  {
    name: "ココノハ",
    img: "icon_10171_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["twig"],
    }
  },
  {
    name: "ハガネ",
    img: "icon_10172_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["tachi"],
    }
  },
  {
    name: "ディフォーラ",
    img: "icon_10173_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["hammer"],
    }
  },
  {
    name: "ヤソメ",
    img: "icon_10174_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["shuriken"],
    }
  },
  {
    name: "【遊水】オキュー",
    img: "icon_10175_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["gun"],
      alt:   true
    }
  },
  {
    name: "【花嫁】エリュート",
    img: "icon_10176_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["gun"],
      alt:   true
    }
  },
  {
    name: "【周年】スズ",
    img: "icon_10177_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["bow"],
      alt:   true
    }
  },
  {
    name: "【周年】リン",
    img: "icon_10178_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["orb"],
      alt:   true
    }
  },
  {
    name: "マシュロア",
    img: "icon_10179_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["spear"],
    }
  },
  {
    name: "トモミ",
    img: "icon_10180_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["bow"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10181_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "ミラドラ",
    img: "icon_10182_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["gun"],
      collab:true
    }
  },
  {
    name: "パリオス",
    img: "icon_10183_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["spear"],
      collab:true
    }
  },
  {
    name: "ユージェン",
    img: "icon_10184_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["bow"],
      collab:true
    }
  },
  {
    name: "ウスコ",
    img: "icon_10185_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["orb"],
    }
  },
  // {
  //   name: "アンティモー",
  //   img: "icon_10186_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["spear"],
  //   }
  // },
  {
    name: "シロタエ",
    img: "icon_10187_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["spear"],
    }
  },
  {
    name: "ヤノ",
    img: "icon_10188_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["shuriken"],
    }
  },
  {
    name: "チヅ",
    img: "icon_10189_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["book"],
    }
  },
  {
    name: "イオ",
    img: "icon_10190_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["gun"],
    }
  },
  {
    name: "ハギ",
    img: "icon_10191_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["orb"],
    }
  },
  {
    name: "ムツ",
    img: "icon_10192_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["instrument"],
    }
  },
  {
    name: "グリース",
    img: "icon_10193_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["scepter"],
    }
  },
  // {
  //   name: "マイネートー",
  //   img: "icon_10194_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["light"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "オシュネー",
    img: "icon_10195_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["sword"],
    }
  },
  {
    name: "【浜遊】ディフニラ",
    img: "icon_10196_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["bow"],
      alt:   true
    }
  },
  {
    name: "ポルペ",
    img: "icon_10197_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fan"],
    }
  },
  {
    name: "【西瓜割】ペリリ",
    img: "icon_10198_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["hammer"],
      alt:   true
    }
  },
  {
    name: "【戯祭】ラゴス",
    img: "icon_10199_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["staff"],
      alt:   true
    }
  },
  {
    name: "キシコ",
    img: "icon_10200_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["hammer"],
    }
  },
  {
    name: "シクル",
    img: "icon_10201_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["shuriken"],
    }
  },
  {
    name: "【号令】アルギュロ",
    img: "icon_10202_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["gun"],
      alt:   true
    }
  },
  {
    name: "【援武】ニグリュ",
    img: "icon_10203_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["dagger"],
      alt:   true
    }
  },
  {
    name: "ティターレア",
    img: "icon_10204_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["orb"],
    }
  },
  {
    name: "ダルシー",
    img: "icon_10205_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["axe"],
    }
  },
  {
    name: "【蹴才】フェルミ",
    img: "icon_10206_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fist"],
      alt:   true
    }
  },
  {
    name: "シナツ",
    img: "icon_10207_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["gun"],
    }
  },
  {
    name: "チザネ",
    img: "icon_10208_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["fist"],
    }
  },
  {
    name: "【周年】イグニ",
    img: "icon_10209_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["fan"],
      alt:   true
    }
  },
  {
    name: "【周年】テルル",
    img: "icon_10210_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["gun"],
      alt:   true
    }
  },
  {
    name: "【槌投】アメリ",
    img: "icon_10211_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["hammer"],
      alt:   true
    }
  },
  {
    name: "アルコス",
    img: "icon_10212_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["staff"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10213_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "ペルペ",
    img: "icon_10214_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["book"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10215_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10216_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "【祝砲】リクリフ",
    img: "icon_10217_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["gun"],
      alt:   true
    }
  },
  {
    name: "【周年】ペトラ",
    img: "icon_10218_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["instrument"],
      alt:   true
    }
  },
  {
    name: "【聖菓】テティ",
    img: "icon_10219_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["fist"],
      alt:   true
    }
  },
  {
    name: "エルタ",
    img: "icon_10220_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["orb"],
    }
  },
  {
    name: "【巫女舞】サウラ",
    img: "icon_10221_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["twig"],
	    alt:   true
    }
  },
  {
    name: "イヅツ",
    img: "icon_10222_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["twig"],
    }
  },
  {
    name: "ミクマ",
    img: "icon_10223_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["tachi"],
    }
  },
  {
    name: "【雪鹿】ラフーカ",
    img: "icon_10224_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["axe"],
      alt:   true
    }
  },
  {
    name: "【氷雪】リュプチェ",
    img: "icon_10225_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["sword"],
      alt:   true
    }
  },
  {
    name: "リッチ",
    img: "icon_10226_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["staff"],
      collab:true
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10227_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["dark"],
  //     weapon:["bow"],
  //   }
  // },
  {
    name: "【賀照】ソレイア",
    img: "icon_10228_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["hammer"],
    }
  },
  {
    name: "【華春】ディリオ",
    img: "icon_10229_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["spear"],
    }
  },
  {
    name: "ログダンノ",
    img: "icon_10230_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fist"],
    }
  },
  {
    name: "トバリ",
    img: "icon_10231_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["tachi"],
    }
  },
  {
    name: "メイム",
    img: "icon_10232_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["book"],
    }
  },
  {
    name: "マコモ",
    img: "icon_10233_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["shuriken"],
    }
  },
  {
    name: "【焼艶】ヴェラートゥ",
    img: "icon_10234_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["gun"],
    }
  },
  {
    name: "【甘癒】アイレン",
    img: "icon_10235_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["scepter"],
    }
  },
  {
    name: "【愛飲】リン",
    img: "icon_10236_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["dagger"],
    }
  },
  {
    name: "【参詣】ロヴィリス",
    img: "icon_10237_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["staff"],
    }
  },
  {
    name: "アージェ",
    img: "icon_10238_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["axe"],
	    collab:true
    }
  },
  {
    name: "【旋律】アテエル",
    img: "icon_10239_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["staff"],
	    collab:true,
	    alt   :true
    }
  },
  {
    name: "パーク",
    img: "icon_10240_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["dagger"],
    }
  },
  {
    name: "オプスカリテ",
    img: "icon_10241_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["staff"],
    }
  },
  {
    name: "ブリュンヒルデ",
    img: "icon_10242_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["hammer"],
	    collab:true
    }
  },
  {
    name: "イリアス",
    img: "icon_10243_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["twig"],
	    collab:true
    }
  },
  {
    name: "プロメスティン",
    img: "icon_10244_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["scepter"],
	    collab:true
    }
  },
  {
    name: "アリストロメリア",
    img: "icon_10245_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["staff"],
	    collab:true
    }
  },
  {
    name: "ヴァニラ",
    img: "icon_10246_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["dagger"],
      collab:true
    }
  },
  {
    name: "【牛頭鬼】シルバ",
    img: "icon_10247_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["hammer"],
      alt   :true
    }
  },
  {
    name: "【双鳴】ルププ&タンタル",
    img: "icon_10248_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["instrument"],
	    collab:true,
	    alt   :true
    }
  },
  {
    name: "ルガル",
    img: "icon_10249_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["hammer"],
	    collab:true
    }
  },
  {
    name: "ペッシェ",
    img: "icon_10250_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["book"],
    }
  },
  {
    name: "ヒミノ",
    img: "icon_10251_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["staff"],
    }
  },
  {
    name: "パナティス",
    img: "icon_10252_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["fist"],
    }
  },
  {
    name: "チュニーラ",
    img: "icon_10253_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["instrument"],
    }
  },
  {
    name: "シィール",
    img: "icon_10254_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fan"],
    }
  },
  {
    name: "【周年】クロミ",
    img: "icon_10255_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["book"],
	    alt   :true
    }
  },
  {
    name: "エッシェル",
    img: "icon_10256_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["dagger"],
    }
  },
  {
    name: "デイン",
    img: "icon_10257_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["sword"],
    }
  },
  {
    name: "【周年】ローレン",
    img: "icon_10258_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["staff"],
	    alt   :true
    }
  },
  {
    name: "【周年】セレン",
    img: "icon_10259_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["hammer"],
	    alt   :true
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10260_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10261_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10262_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  {
    name: "【魔女生】ルルゥ",
    img: "icon_10263_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["staff"],
	    alt   :true
    }
  },
  {
    name: "【壊奏】ブンコ",
    img: "icon_10264_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["axe"],
	    alt   :true
    }
  },
  {
    name: "【劇薬】リコ",
    img: "icon_10265_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["dagger"],
	    alt   :true
    }
  },
  {
    name: "【修泳】イオ",
    img: "icon_10266_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["hammer"],
	    alt   :true
    }
  },
  {
    name: "パープロープ",
    img: "icon_10267_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["sword"],
    }
  },
  {
    name: "ピペリ",
    img: "icon_10268_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["gun"],
    }
  },
  {
    name: "プリプリダ",
    img: "icon_10269_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["hammer"],
    }
  },
  {
    name: "ピンダ",
    img: "icon_10270_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["gun"],
    }
  },
  {
    name: "【浜球】フリス",
    img: "icon_10271_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["staff"],
	    alt   :true
    }
  },
  {
    name: "【戯夏】マギー",
    img: "icon_10272_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["fist"],
	    alt   :true
    }
  },
  {
    name: "クルクリ",
    img: "icon_10273_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["gun"],
    }
  },
  {
    name: "ティッチェ",
    img: "icon_10274_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["bow"],
    }
  },
  {
    name: "ルシターニ",
    img: "icon_10275_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["orb"],
    }
  },
  {
    name: "リュミヴェル",
    img: "icon_10276_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["sword"],
    }
  },
  {
    name: "オセヴィア",
    img: "icon_10277_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["twig"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10278_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  {
    name: "【灼嫁】イフィジャール",
    img: "icon_10279_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["axe"],
	    alt   :true
    }
  },
  {
    name: "【幽嫁】ダルシー",
    img: "icon_10280_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["bow"],
	    alt   :true
    }
  },
  {
    name: "【風嫁】ヤーセファ",
    img: "icon_10281_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["staff"],
	    alt   :true
    }
  },
  {
    name: "【憧嫁】スズ",
    img: "icon_10282_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["fan"],
	    alt   :true
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10283_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10284_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10285_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10286_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  {
    name: "【清夏】ナルケパフネ",
    img: "icon_10287_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["orb"],
	    alt   :true
    }
  },
  {
    name: "【海岸傘】ロトーナ",
    img: "icon_10288_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["dark"],
      weapon:["spear"],
	    alt   :true
    }
  },
  {
    name: "ナナエ",
    img: "icon_10289_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["fire"],
      weapon:["instrument"],
    }
  },
  {
    name: "【幽霊】アメリ",
    img: "icon_10290_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["shuriken"],
	    alt   :true
    }
  },
  {
    name: "ファロリエット",
    img: "icon_10291_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["scepter"],
    }
  },
  {
    name: "エプラ",
    img: "icon_10292_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["hammer"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10293_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10294_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10295_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  {
    name: "ハイルィ",
    img: "icon_10296_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["water"],
      weapon:["fan"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10297_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10298_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  {
    name: "ニッドラ",
    img: "icon_10299_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["earth"],
      weapon:["puppet"],
    }
  },
  {
    name: "ティッカ",
    img: "icon_10300_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["light"],
      weapon:["instrument"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10301_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  {
    name: "ラピナス",
    img: "icon_10302_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["ch"],
      attr:  ["wind"],
      weapon:["scimitar"],
    }
  },
  // {
  //   name: "name",
  //   img: "icon_10303_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10304_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10305_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10306_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10307_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10308_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },
  // {
  //   name: "name",
  //   img: "icon_10309_0_s.png",
  //   opts: {
  //     type:  ["ch"],
  //     attr:  ["attr"],
  //     weapon:["buki"],
  //   }
  // },

  // --------------------------------------- //
  {
    name: "ヴィヴィヴァーチェ",
    img: "icon_30001_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["db"],
    }
  },
  {
    name: "ニーズホッグ",
    img: "icon_30002_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["db"],
    }
  },
  {
    name: "パズズ",
    img: "icon_30003_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["db"],
    }
  },
  {
    name: "ファロルーチェ",
    img: "icon_30004_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["db"],
    }
  },
  {
    name: "ビビ神",
    img: "icon_30005_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["db"],
    }
  },
  {
    name: "ベヒモス",
    img: "icon_30006_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["db"],
    }
  },
  {
    name: "ソラス",
    img: "icon_30007_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["db"],
      collab:true
    }
  },
  {
    name: "ビッキーヌ",
    img: "icon_30008_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["db"],
    }
  },
  {
    name: "【メイド】ビビ神",
    img: "icon_30009_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["db"],
    }
  },
  {
    name: "セーラ",
    img: "icon_30010_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["db"],
    }
  },
  {
    name: "リーファー",
    img: "icon_30011_0_s.png",
    opts: {
      year:  ["2023"],
      type:  ["db"],
    }
  },
  {
    name: "パニエ",
    img: "icon_30012_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["db"],
    }
  },
  {
    name: "天逆毎姫",
    img: "icon_30013_0_s.png",
    opts: {
      year:  ["2024"],
      type:  ["db"],
    }
  },
  {
    name: "ご主人くん",
    img: "icon_10000_0_s.png",
    opts: {
      year:  ["2022"],
      type:  ["gsj"],
    }
  },
];
