var Version = "20220929";

httpObj = new XMLHttpRequest();
httpObj.open("get", "Material.json", true);
httpObj.onload = function(){};
httpObj.send(null);

var CharaID;

// キャラクター項目の生成
function SetCharacterList() {
  if ( !document.querySelector('div[id="Character"]') ) {
    console.log("読み込み中1");
    setTimeout( SetCharacterList, 100 );
    return;
  }
  if ( !httpObj.response ) {
    console.log("読み込み中2");
    setTimeout( SetCharacterList, 100 );
    return;
  }
  ChaEle = document.querySelector('div[id="Character"]');
  Hiders = JSON.parse(localStorage.getItem("HideCharacter"));

// ニィロウ
  S_Id =          "nilou";
  S_JpName =      "ニィロウ";
  S_CharaImg =    "Original/Character2/nilou_070_gacha_splash.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Perpetual_Caliber";
  S_Local =       "Padisarah";
  S_Common =      "Crystalline_Cyst_Dust";
  S_Talent1 =     "Praxis";
  S_Talent2 =     "Tears_of_the_Calamitous_God";
  Checkmate();

// セノ
  S_Id =          "cyno";
  S_JpName =      "セノ";
  S_CharaImg =    "Original/Character2/cyno_071_gacha_splash.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Thunderclap_Fruitcore";
  S_Local =       "Scarab";
  S_Common =      "Forbidden_Curse_Scroll";
  S_Talent1 =     "Admonition";
  S_Talent2 =     "Mudra_of_the_Malefic_General";
  Checkmate();

// キャンディス
  S_Id =          "candace";
  S_JpName =      "キャンディス";
  S_CharaImg =    "Original/Character2/candace_072_gacha_splash.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Light_Guiding_Tetrahedron";
  S_Local =       "Redcrest";
  S_Common =      "Rich_Red_Brocade";
  S_Talent1 =     "Admonition";
  S_Talent2 =     "Tears_of_the_Calamitous_God";
  Checkmate();

// ドリー
  S_Id =          "dori";
  S_JpName =      "ドリー";
  S_CharaImg =    "Original/Character/Character_Dori_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Thunderclap_Fruitcore";
  S_Local =       "Kalpalata_Lotus";
  S_Common =      "Rich_Red_Brocade";
  S_Talent1 =     "Ingenuity";
  S_Talent2 =     "Bloodjade_Branch";
  Checkmate();

// ティナリ
  S_Id =          "tighnari";
  S_JpName =      "ティナリ";
  S_CharaImg =    "Original/Character/Character_Tighnari_Portrait.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Majestic_Hooked_Beak";
  S_Local =       "Nilotpala_Lotus";
  S_Common =      "Crystalline_Cyst_Dust";
  S_Talent1 =     "Admonition";
  S_Talent2 =     "The_Meaning_of_Aeons";
  Checkmate();

// コレイ
  S_Id =          "collei";
  S_JpName =      "コレイ";
  S_CharaImg =    "Original/Character/Character_Collei_Portrait.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Majestic_Hooked_Beak";
  S_Local =       "Rukkhashava_Mushrooms";
  S_Common =      "Weathered_Arrowhead";
  S_Talent1 =     "Praxis";
  S_Talent2 =     "Tears_of_the_Calamitous_God";
  Checkmate();

// 鹿野院平蔵
  S_Id =          "Shikanoin_Heizou";
  S_JpName =      "鹿野院平蔵";
  S_CharaImg =    "Original/Character/Character_Shikanoin_Heizou_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Runic_Fang";
  S_Local =       "Onikabuto";
  S_Common =      "Golden_Raven_Insignia";
  S_Talent1 =     "Transience";
  S_Talent2 =     "The_Meaning_of_Aeons";
  Checkmate();

// 久岐忍
  S_Id =          "Kuki_Shinobu";
  S_JpName =      "久岐忍";
  S_CharaImg =    "Original/Character/Character_Kuki_Shinobu_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Runic_Fang";
  S_Local =       "Naku_Weed";
  S_Common =      "Spectral_Nucleus";
  S_Talent1 =     "Elegance";
  S_Talent2 =     "Tears_of_the_Calamitous_God";
  Checkmate();

// 夜蘭
  S_Id =          "Yelan";
  S_JpName =      "夜蘭";
  S_CharaImg =    "Original/Character/Character_Yelan_Portrait.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Runic_Fang";
  S_Local =       "Starconch";
  S_Common =      "Lieutenants_Insignia";
  S_Talent1 =     "Prosperity";
  S_Talent2 =     "Gilded_Scale";
  Checkmate();

// 神里綾人
  S_Id =          "Kamisato_Ayato";
  S_JpName =      "神里綾人";
  S_CharaImg =    "Original/Character/Character_Kamisato_Ayato_Portrait.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Dew_of_Repudiation";
  S_Local =       "Sakura_Bloom";
  S_Common =      "Famed_Handguard";
  S_Talent1 =     "Elegance";
  S_Talent2 =     "Mudra_of_the_Malefic_General";
  Checkmate();

// 八重神子
  S_Id =          "Yae_Miko";
  S_JpName =      "八重神子";
  S_CharaImg =    "Original/Character/Character_Yae_Miko_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Dragonheirs_False_Fin";
  S_Local =       "Sea_Ganoderma";
  S_Common =      "Famed_Handguard";
  S_Talent1 =     "Light";
  S_Talent2 =     "The_Meaning_of_Aeons";
  Checkmate();

// 申鶴
  S_Id =          "Shenhe";
  S_JpName =      "申鶴";
  S_CharaImg =    "Original/Character/Character_Shenhe_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Dragonheirs_False_Fin";
  S_Local =       "Qingxin";
  S_Common =      "Energy_Nectar";
  S_Talent1 =     "Diligence";
  S_Talent2 =     "Hellfire_Butterfly";
  Checkmate();

// 雲菫
  S_Id =          "Yun_Jin";
  S_JpName =      "雲菫";
  S_CharaImg =    "Original/Character/Character_Yun_Jin_Portrait.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Riftborn_Regalia";
  S_Local =       "Glaze_Lily";
  S_Common =      "Ominous_Mask";
  S_Talent1 =     "Diligence";
  S_Talent2 =     "Ashen_Heart";
  Checkmate();

// 荒瀧一斗
  S_Id =          "Arataki_Itto";
  S_JpName =      "荒瀧一斗";
  S_CharaImg =    "Original/Character/Character_Arataki_Itto_Portrait.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Riftborn_Regalia";
  S_Local =       "Onikabuto";
  S_Common =      "Slime_Concentrate";
  S_Talent1 =     "Elegance";
  S_Talent2 =     "Ashen_Heart";
  Checkmate();

// ゴロー
  S_Id =          "Gorou";
  S_JpName =      "ゴロー";
  S_CharaImg =    "Original/Character/Character_Gorou_Portrait.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Perpetual_Heart";
  S_Local =       "Sango_Pearl";
  S_Common =      "Spectral_Nucleus";
  S_Talent1 =     "Light";
  S_Talent2 =     "Molten_Moment";
  Checkmate();

// トーマ
  S_Id =          "Thoma";
  S_JpName =      "トーマ";
  S_CharaImg =    "Original/Character/Character_Thoma_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Smoldering_Pearl";
  S_Local =       "Fluorescent_Fungus";
  S_Common =      "Golden_Raven_Insignia";
  S_Talent1 =     "Transience";
  S_Talent2 =     "Hellfire_Butterfly";
  Checkmate();

// 珊瑚宮心海
  S_Id =          "Sangonomiya_Kokomi";
  S_JpName =      "珊瑚宮心海";
  S_CharaImg =    "Original/Character/Character_Sangonomiya_Kokomi_Portrait.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Dew_of_Repudiation";
  S_Local =       "Sango_Pearl";
  S_Common =      "Spectral_Nucleus";
  S_Talent1 =     "Transience";
  S_Talent2 =     "Hellfire_Butterfly";
  Checkmate();

// 雷電将軍 / 雷電影
  S_Id =          "Raiden_Shogun";
  S_JpName =      "雷電将軍 / 雷電影";
  S_CharaImg =    "Original/Character/Character_Raiden_Shogun_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Storm_Beads";
  S_Local =       "Amakumo_Fruit";
  S_Common =      "Famed_Handguard";
  S_Talent1 =     "Light";
  S_Talent2 =     "Molten_Moment";
  Checkmate();

// 九条裟羅
  S_Id =          "Kujou_Sara";
  S_JpName =      "九条裟羅";
  S_CharaImg =    "Original/Character/Character_Kujou_Sara_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Storm_Beads";
  S_Local =       "Dendrobium";
  S_Common =      "Ominous_Mask";
  S_Talent1 =     "Elegance";
  S_Talent2 =     "Ashen_Heart";
  Checkmate();

// 長野原宵宮
  S_Id =          "Yoimiya";
  S_JpName =      "長野原宵宮";
  S_CharaImg =    "Original/Character/Character_Yoimiya_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Smoldering_Pearl";
  S_Local =       "Naku_Weed";
  S_Common =      "Forbidden_Curse_Scroll";
  S_Talent1 =     "Transience";
  S_Talent2 =     "Dragon_Lords_Crown";
  Checkmate();

// 早柚
  S_Id =          "Sayu";
  S_JpName =      "早柚";
  S_CharaImg =    "Original/Character/Character_Sayu_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Marionette_Core";
  S_Local =       "Crystal_Marrow";
  S_Common =      "Energy_Nectar";
  S_Talent1 =     "Light";
  S_Talent2 =     "Gilded_Scale";
  Checkmate();

// 神里綾華
  S_Id =          "Kamisato_Ayaka";
  S_JpName =      "神里綾華";
  S_CharaImg =    "Original/Character/Character_Kamisato_Ayaka_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Perpetual_Heart";
  S_Local =       "Sakura_Bloom";
  S_Common =      "Famed_Handguard";
  S_Talent1 =     "Elegance";
  S_Talent2 =     "Bloodjade_Branch";
  Checkmate();

// 楓原万葉
  S_Id =          "Kaedehara_Kazuha";
  S_JpName =      "楓原万葉";
  S_CharaImg =    "Original/Character/Character_Kaedehara_Kazuha_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Marionette_Core";
  S_Local =       "Sea_Ganoderma";
  S_Common =      "Golden_Raven_Insignia";
  S_Talent1 =     "Diligence";
  S_Talent2 =     "Gilded_Scale";
  Checkmate();

// エウルア・ローレンス
  S_Id =          "Eula";
  S_JpName =      "エウルア・ローレンス";
  S_CharaImg =    "Original/Character/Character_Eula_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Crystalline_Bloom";
  S_Local =       "Dandelion_Seed";
  S_Common =      "Ominous_Mask";
  S_Talent1 =     "Resistance";
  S_Talent2 =     "Dragon_Lords_Crown";
  Checkmate();

// 煙緋
  S_Id =          "Yanfei";
  S_JpName =      "煙緋";
  S_CharaImg =    "Original/Character/Character_Yanfei_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Juvenile_Jade";
  S_Local =       "Noctilucous_Jade";
  S_Common =      "Golden_Raven_Insignia";
  S_Talent1 =     "Gold";
  S_Talent2 =     "Bloodjade_Branch";
  Checkmate();

// ロサリア
  S_Id =          "Rosaria";
  S_JpName =      "ロサリア";
  S_CharaImg =    "Original/Character/Character_Rosaria_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Hoarfrost_Core";
  S_Local =       "Valberry";
  S_Common =      "Lieutenants_Insignia";
  S_Talent1 =     "Ballad";
  S_Talent2 =     "Shadow_of_the_Warrior";
  Checkmate();

// 胡桃
  S_Id =          "HuTao";
  S_JpName =      "胡桃";
  S_CharaImg =    "Original/Character/Character_Hu_Tao_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Juvenile_Jade";
  S_Local =       "Silk_Flower";
  S_Common =      "Energy_Nectar";
  S_Talent1 =     "Diligence";
  S_Talent2 =     "Shard_of_a_Foul_Legacy";
  Checkmate();

// 魈
  S_Id =          "Xiao";
  S_JpName =      "魈";
  S_CharaImg =    "Original/Character/Character_Xiao_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Juvenile_Jade";
  S_Local =       "Qingxin";
  S_Common =      "Slime_Concentrate";
  S_Talent1 =     "Prosperity";
  S_Talent2 =     "Shadow_of_the_Warrior";
  Checkmate();

// 甘雨
  S_Id =          "Ganyu";
  S_JpName =      "甘雨";
  S_CharaImg =    "Original/Character/Character_Ganyu_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Hoarfrost_Core";
  S_Local =       "Qingxin";
  S_Common =      "Energy_Nectar";
  S_Talent1 =     "Diligence";
  S_Talent2 =     "Shadow_of_the_Warrior";
  Checkmate();

// アルベド
  S_Id =          "Albedo";
  S_JpName =      "アルベド";
  S_CharaImg =    "Original/Character/Character_Albedo_Portrait.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Basalt_Pillar";
  S_Local =       "Cecilia";
  S_Common =      "Forbidden_Curse_Scroll";
  S_Talent1 =     "Ballad";
  S_Talent2 =     "Tusk_of_Monoceros_Caeli";
  Checkmate();

// 鍾離
  S_Id =          "Zhongli";
  S_JpName =      "鍾離";
  S_CharaImg =    "Original/Character/Character_Zhongli_Portrait.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Basalt_Pillar";
  S_Local =       "Cor_Lapis";
  S_Common =      "Slime_Concentrate";
  S_Talent1 =     "Gold";
  S_Talent2 =     "Tusk_of_Monoceros_Caeli";
  Checkmate();

// 辛炎
  S_Id =          "Xinyan";
  S_JpName =      "辛炎";
  S_CharaImg =    "Original/Character/Character_Xinyan_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Everflame_Seed";
  S_Local =       "Violetgrass";
  S_Common =      "Golden_Raven_Insignia";
  S_Talent1 =     "Gold";
  S_Talent2 =     "Tusk_of_Monoceros_Caeli";
  Checkmate();

// タルタリア / アヤックス
  S_Id =          "Tartaglia";
  S_JpName =      "タルタリア / アヤックス";
  S_CharaImg =    "Original/Character/Character_Tartaglia_Portrait.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Cleansing_Heart";
  S_Local =       "Starconch";
  S_Common =      "Lieutenants_Insignia";
  S_Talent1 =     "Freedom";
  S_Talent2 =     "Shard_of_a_Foul_Legacy";
  Checkmate();

// ディオナ・カッツェレイン
  S_Id =          "Diona";
  S_JpName =      "ディオナ・カッツェレイン";
  S_CharaImg =    "Original/Character/Character_Diona_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Hoarfrost_Core";
  S_Local =       "Calla_Lily";
  S_Common =      "Weathered_Arrowhead";
  S_Talent1 =     "Freedom";
  S_Talent2 =     "Shard_of_a_Foul_Legacy";
  Checkmate();

// クレー
  S_Id =          "Klee";
  S_JpName =      "クレー";
  S_CharaImg =    "Original/Character/Character_Klee_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Everflame_Seed";
  S_Local =       "Philanemo_Mushroom";
  S_Common =      "Forbidden_Curse_Scroll";
  S_Talent1 =     "Freedom";
  S_Talent2 =     "Ring_of_Boreas";
  Checkmate();

// ウェンティ
  S_Id =          "Venti";
  S_JpName =      "ウェンティ";
  S_CharaImg =    "Original/Character/Character_Venti_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Hurricane_Seed";
  S_Local =       "Cecilia";
  S_Common =      "Slime_Concentrate";
  S_Talent1 =     "Ballad";
  S_Talent2 =     "Tail_of_Boreas";
  Checkmate();

// 刻晴
  S_Id =          "Keqing";
  S_JpName =      "刻晴";
  S_CharaImg =    "Original/Outfit/Outfit_Opulent_Splendor_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Lightning_Prism";
  S_Local =       "Cor_Lapis";
  S_Common =      "Energy_Nectar";
  S_Talent1 =     "Prosperity";
  S_Talent2 =     "Ring_of_Boreas";
  Checkmate();

// アストローギスト・モナ・メギストス
  S_Id =          "Mona";
  S_JpName =      "アストローギスト・モナ・メギストス";
  S_CharaImg =    "Original/Character/Character_Mona_Portrait.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Cleansing_Heart";
  S_Local =       "Philanemo_Mushroom";
  S_Common =      "Energy_Nectar";
  S_Talent1 =     "Resistance";
  S_Talent2 =     "Ring_of_Boreas";
  Checkmate();

// 七七
  S_Id =          "Qiqi";
  S_JpName =      "七七";
  S_CharaImg =    "Original/Character/Character_Qiqi_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Hoarfrost_Core";
  S_Local =       "Violetgrass";
  S_Common =      "Forbidden_Curse_Scroll";
  S_Talent1 =     "Prosperity";
  S_Talent2 =     "Tail_of_Boreas";
  Checkmate();

// ディルック・ラグヴィンド
  S_Id =          "Diluc";
  S_JpName =      "ディルック・ラグヴィンド";
  S_CharaImg =    "Original/Character/Character_Diluc_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Everflame_Seed";
  S_Local =       "Small_Lamp_Grass";
  S_Common =      "Lieutenants_Insignia";
  S_Talent1 =     "Resistance";
  S_Talent2 =     "Dvalins_Plume";
  Checkmate();

// ジン・グンヒルド
  S_Id =          "Jean";
  S_JpName =      "ジン・グンヒルド";
  S_CharaImg =    "Original/Character/Character_Jean_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Hurricane_Seed";
  S_Local =       "Dandelion_Seed";
  S_Common =      "Ominous_Mask";
  S_Talent1 =     "Resistance";
  S_Talent2 =     "Dvalins_Plume";
  Checkmate();

// スクロース
  S_Id =          "Sucrose";
  S_JpName =      "スクロース";
  S_CharaImg =    "Original/Character/Character_Sucrose_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Hurricane_Seed";
  S_Local =       "Windwheel_Aster";
  S_Common =      "Energy_Nectar";
  S_Talent1 =     "Freedom";
  S_Talent2 =     "Spirit_Locket_of_Boreas";
  Checkmate();

// 重雲
  S_Id =          "Chongyun";
  S_JpName =      "重雲";
  S_CharaImg =    "Original/Character/Character_Chongyun_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Hoarfrost_Core";
  S_Local =       "Cor_Lapis";
  S_Common =      "Ominous_Mask";
  S_Talent1 =     "Diligence";
  S_Talent2 =     "Dvalins_Sigh";
  Checkmate();

// ノエル
  S_Id =          "Noelle";
  S_JpName =      "ノエル";
  S_CharaImg =    "Original/Character/Character_Noelle_Portrait.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Basalt_Pillar";
  S_Local =       "Valberry";
  S_Common =      "Ominous_Mask";
  S_Talent1 =     "Resistance";
  S_Talent2 =     "Dvalins_Claw";
  Checkmate();

// ベネット
  S_Id =          "Bennett";
  S_JpName =      "ベネット";
  S_CharaImg =    "Original/Character/Character_Bennett_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Everflame_Seed";
  S_Local =       "Windwheel_Aster";
  S_Common =      "Golden_Raven_Insignia";
  S_Talent1 =     "Resistance";
  S_Talent2 =     "Dvalins_Plume";
  Checkmate();
  
// フィッシュル・ヴォン・ルフシュロス・ナフィードット / エミ
  S_Id =          "Fischl";
  S_JpName =      "フィッシュル・ヴォン・ルフシュロス・ナフィードット / エミ";
  S_CharaImg =    "Original/Character/Character_Fischl_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Lightning_Prism";
  S_Local =       "Small_Lamp_Grass";
  S_Common =      "Weathered_Arrowhead";
  S_Talent1 =     "Ballad";
  S_Talent2 =     "Spirit_Locket_of_Boreas";
  Checkmate();
  
// 凝光
  S_Id =          "Ningguang";
  S_JpName =      "凝光";
  S_CharaImg =    "Original/Outfit/Outfit_Orchids_Evening_Gown_Portrait.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Basalt_Pillar";
  S_Local =       "Glaze_Lily";
  S_Common =      "Lieutenants_Insignia";
  S_Talent1 =     "Prosperity";
  S_Talent2 =     "Spirit_Locket_of_Boreas";
  Checkmate();
  
// 行秋
  S_Id =          "Xingqiu";
  S_JpName =      "行秋";
  S_CharaImg =    "Original/Character/Character_Xingqiu_Portrait.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Cleansing_Heart";
  S_Local =       "Silk_Flower";
  S_Common =      "Ominous_Mask";
  S_Talent1 =     "Gold";
  S_Talent2 =     "Tail_of_Boreas";
  Checkmate();

// 北斗
  S_Id =          "Beidou";
  S_JpName =      "北斗";
  S_CharaImg =    "Original/Character/Character_Beidou_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Lightning_Prism";
  S_Local =       "Noctilucous_Jade";
  S_Common =      "Golden_Raven_Insignia";
  S_Talent1 =     "Gold";
  S_Talent2 =     "Dvalins_Sigh";
  Checkmate();

// 卯香菱
  S_Id =          "Xiangling";
  S_JpName =      "卯香菱";
  S_CharaImg =    "Original/Character/Character_Xiangling_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Everflame_Seed";
  S_Local =       "Jueyun_Chili";
  S_Common =      "Slime_Concentrate";
  S_Talent1 =     "Diligence";
  S_Talent2 =     "Dvalins_Claw";
  Checkmate();

// レザー
  S_Id =          "Razor";
  S_JpName =      "レザー";
  S_CharaImg =    "Original/Character/Character_Razor_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Lightning_Prism";
  S_Local =       "Wolfhook";
  S_Common =      "Ominous_Mask";
  S_Talent1 =     "Resistance";
  S_Talent2 =     "Dvalins_Claw";
  Checkmate();

// バーバラ・ペッチ
  S_Id =          "Barbara";
  S_JpName =      "バーバラ・ペッチ";
  S_CharaImg =    "Original/Character/Character_Barbara_Portrait.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Cleansing_Heart";
  S_Local =       "Philanemo_Mushroom";
  S_Common =      "Forbidden_Curse_Scroll";
  S_Talent1 =     "Freedom";
  S_Talent2 =     "Ring_of_Boreas";
  Checkmate();

// リサ・ミンツ
  S_Id =          "Lisa";
  S_JpName =      "リサ・ミンツ";
  S_CharaImg =    "Original/Character/Character_Lisa_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Lightning_Prism";
  S_Local =       "Valberry";
  S_Common =      "Slime_Concentrate";
  S_Talent1 =     "Ballad";
  S_Talent2 =     "Dvalins_Claw";
  Checkmate();

// ガイア・アルベリヒ
  S_Id =          "Kaeya";
  S_JpName =      "ガイア・アルベリヒ";
  S_CharaImg =    "Original/Character/Character_Kaeya_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Hoarfrost_Core";
  S_Local =       "Calla_Lily";
  S_Common =      "Golden_Raven_Insignia";
  S_Talent1 =     "Ballad";
  S_Talent2 =     "Spirit_Locket_of_Boreas";
  Checkmate();

// アンバー
  S_Id =          "Amber";
  S_JpName =      "アンバー";
  S_CharaImg =    "Original/Character/Character_Amber_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Everflame_Seed";
  S_Local =       "Small_Lamp_Grass";
  S_Common =      "Weathered_Arrowhead";
  S_Talent1 =     "Freedom";
  S_Talent2 =     "Dvalins_Sigh";
  Checkmate();

// アーロイ
  S_Id =          "Aloy";
  S_JpName =      "アーロイ";
  S_CharaImg =    "Original/Character/Character_Aloy_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Crystalline_Bloom";
  S_Local =       "Crystal_Marrow";
  S_Common =      "Spectral_Nucleus";
  S_Talent1 =     "Freedom";
  S_Talent2 =     "Molten_Moment";
  Checkmate();


  SetInventoryList();
}
SetCharacterList();

function CharacterSet() {
  eval(`
    ChaEle.insertAdjacentHTML('beforeend', '\
      <table class="${S_Id}">\
        <tbody>\
          <tr>\
            <th onclick="HideCharacter(&quot;${S_Id}&quot;);" colspan="8">${S_JpName}</th>\
            <th id="right" class="${S_Id}" colspan="17"></th>\
          </tr>\
          <tr>\
            <td width="12%" colspan="3" rowspan="5"><img height="200px" src="../image/${S_CharaImg}"></td>\
            <td width="12%" colspan="3" class="textleft">レベル</td>\
            <td width="16%" colspan="4"><div id="${S_Id}_Ex" class="noUiSlider"></div></td>\
            <td width="4%" colspan="1"><img class="icon" src="../image/Small/Item/Item_Character_EXP.webp"></td>\
            <td width="8%" colspan="2" class="textright"><span class="${S_Id} Ex_Volume" id="${S_Id}_Ex_Volume"></span></td>\
            <td width="4%" colspan="1"><img class="icon" src="../image/Small/Item/Item_Heros_Wit.webp"></td>\
            <td width="8%" colspan="2" class="textright"><span class="${S_Id}" id="${S_Id}_Ex_Book_Volume"></span> 点</td>\
            <td width="4%" colspan="1"><img class="icon" src="../image/Small/Item/Item_Mora.webp"></td>\
            <td width="8%" colspan="2" class="textright"><span class="${S_Id}" id="${S_Id}_Ex_Mora_Volume"></span></td>\
            <td width="4%" colspan="1"></td>\
            <td width="8%" colspan="2"></td>\
          </tr>\
          <tr>\
            <td colspan="3" class="textleft">突破段階</td>\
            <td colspan="4"><div id="${S_Id}_Pr" class="noUiSlider"></div></td>\
            <td colspan="1"><img class="icon" src="../image/Small/Item/Item_${S_Element}_Gemstone.webp"></td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Element}" id="${S_Id}_Pr_P1_Volume"></span> 点</td>\
            <td colspan="1"><img class="icon" src="../image/Small/Item/Item_${S_Boss}.webp"></td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Boss}" id="${S_Id}_Pr_P2_Volume"></span> 個</td>\
            <td colspan="1"><img class="icon" src="../image/Small/Item/Item_${S_Local}.webp"></td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Local}" id="${S_Id}_Pr_P3_Volume"></span> 個</td>\
            <td colspan="1"><img class="icon" src="../image/Small/Item/Item_${S_Common}.webp"></td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Common} Ascension" id="${S_Id}_Pr_P4_Volume"></span> 点</td>\
            <td colspan="1"><img class="icon" src="../image/Small/Item/Item_Mora.webp"></td>\
            <td colspan="2" class="textright"><span class="${S_Id} Mora Ascension" id="${S_Id}_Pr_P5_Volume"></span></td>\
          </tr>\
          <tr>\
          <td colspan="1" rowspan="3" class="textleft">天賦</td>\
          <td colspan="2" class="textleft">通常攻撃</td>\
          <td colspan="4"><div id="${S_Id}_T1" class="noUiSlider"></div></td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_Philosophies_of_${S_Talent1}.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent1}" id="${S_Id}_T1_T1_Volume"></span> 点</td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_${S_Common}.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Common} Talent" id="${S_Id}_T1_T2_Volume"></span> 点</td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_${S_Talent2}.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent2}" id="${S_Id}_T1_T3_Volume"></span> 個</td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_Crown_of_Insight.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} Crown_of_Insight" id="${S_Id}_T1_T4_Volume"></span> 個</td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_Mora.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} Mora Talent" id="${S_Id}_T1_T5_Volume"></span></td>\
          </tr>\
          <tr>\
            <td colspan="2" class="textleft">元素スキル</td>\
            <td colspan="4"><div id="${S_Id}_T2" class="noUiSlider"></div></td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent1}" id="${S_Id}_T2_T1_Volume"></span> 点</td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Common} Talent" id="${S_Id}_T2_T2_Volume"></span> 点</td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent2}" id="${S_Id}_T2_T3_Volume"></span> 個</td>\
            <td colspan="2" class="textright"><span class="${S_Id} Crown_of_Insight" id="${S_Id}_T2_T4_Volume"></span> 個</td>\
            <td colspan="2" class="textright"><span class="${S_Id} Mora Talent" id="${S_Id}_T2_T5_Volume"></span></td>\
          </tr>\
          <tr>\
            <td colspan="2" class="textleft">元素爆発</td>\
            <td colspan="4"><div id="${S_Id}_T3" class="noUiSlider"></div></td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent1}" id="${S_Id}_T3_T1_Volume"></span> 点</td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Common} Talent" id="${S_Id}_T3_T2_Volume"></span> 点</td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent2}" id="${S_Id}_T3_T3_Volume"></span> 個</td>\
            <td colspan="2" class="textright"><span class="${S_Id} Crown_of_Insight" id="${S_Id}_T3_T4_Volume"></span> 個</td>\
            <td colspan="2" class="textright"><span class="${S_Id} Mora Talent" id="${S_Id}_T3_T5_Volume"></span></td>\
          </tr>\
        <tbody>\
      </table>\
    ')
  `);
}
function HideCharacterSet() {
  eval(`
    ChaEle.insertAdjacentHTML('beforeend', '\
      <table class="${S_Id}">\
        <tbody>\
          <tr>\
            <th onclick="HideCharacter(&quot;${S_Id}&quot;);" colspan="8">${S_JpName}</th>\
            <th id="right" class="${S_Id} hides" colspan="17"></th>\
          </tr>\
          <tr style="display: none;">\
          <td width="12%" colspan="3" rowspan="5"><img height="200px" src="../image/${S_CharaImg}"></td>\
          <td width="12%" colspan="3" class="textleft">レベル</td>\
          <td width="16%" colspan="4"><div id="${S_Id}_Ex" class="noUiSlider"></div></td>\
          <td width="4%" colspan="1"><img class="icon" src="../image/Small/Item/Item_Character_EXP.webp"></td>\
          <td width="8%" colspan="2" class="textright"><span class="${S_Id} Ex_Volume" id="${S_Id}_Ex_Volume"></span></td>\
          <td width="4%" colspan="1"><img class="icon" src="../image/Small/Item/Item_Heros_Wit.webp"></td>\
          <td width="8%" colspan="2" class="textright"><span class="${S_Id}" id="${S_Id}_Ex_Book_Volume"></span> 点</td>\
          <td width="4%" colspan="1"><img class="icon" src="../image/Small/Item/Item_Mora.webp"></td>\
          <td width="8%" colspan="2" class="textright"><span class="${S_Id}" id="${S_Id}_Ex_Mora_Volume"></span></td>\
          <td width="4%" colspan="1"></td>\
          <td width="8%" colspan="2"></td>\
        </tr>\
        <tr style="display: none;">\
          <td colspan="3" class="textleft">突破段階</td>\
          <td colspan="4"><div id="${S_Id}_Pr" class="noUiSlider"></div></td>\
          <td colspan="1"><img class="icon" src="../image/Small/Item/Item_${S_Element}_Gemstone.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Element}" id="${S_Id}_Pr_P1_Volume"></span> 点</td>\
          <td colspan="1"><img class="icon" src="../image/Small/Item/Item_${S_Boss}.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Boss}" id="${S_Id}_Pr_P2_Volume"></span> 個</td>\
          <td colspan="1"><img class="icon" src="../image/Small/Item/Item_${S_Local}.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Local}" id="${S_Id}_Pr_P3_Volume"></span> 個</td>\
          <td colspan="1"><img class="icon" src="../image/Small/Item/Item_${S_Common}.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Common} Ascension" id="${S_Id}_Pr_P4_Volume"></span> 点</td>\
          <td colspan="1"><img class="icon" src="../image/Small/Item/Item_Mora.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} Mora Ascension" id="${S_Id}_Pr_P5_Volume"></span></td>\
        </tr>\
        <tr style="display: none;">\
          <td colspan="1" rowspan="3" class="textleft">天賦</td>\
          <td colspan="2" class="textleft">通常攻撃</td>\
          <td colspan="4"><div id="${S_Id}_T1" class="noUiSlider"></div></td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_Philosophies_of_${S_Talent1}.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent1}" id="${S_Id}_T1_T1_Volume"></span> 点</td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_${S_Common}.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Common} Talent" id="${S_Id}_T1_T2_Volume"></span> 点</td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_${S_Talent2}.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent2}" id="${S_Id}_T1_T3_Volume"></span> 個</td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_Crown_of_Insight.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} Crown_of_Insight" id="${S_Id}_T1_T4_Volume"></span> 個</td>\
          <td colspan="1" rowspan="3"><img class="icon" src="../image/Small/Item/Item_Mora.webp"></td>\
          <td colspan="2" class="textright"><span class="${S_Id} Mora Talent" id="${S_Id}_T1_T5_Volume"></span></td>\
        </tr>\
        <tr style="display: none;">\
          <td colspan="2" class="textleft">元素スキル</td>\
          <td colspan="4"><div id="${S_Id}_T2" class="noUiSlider"></div></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent1}" id="${S_Id}_T2_T1_Volume"></span> 点</td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Common} Talent" id="${S_Id}_T2_T2_Volume"></span> 点</td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent2}" id="${S_Id}_T2_T3_Volume"></span> 個</td>\
          <td colspan="2" class="textright"><span class="${S_Id} Crown_of_Insight" id="${S_Id}_T2_T4_Volume"></span> 個</td>\
          <td colspan="2" class="textright"><span class="${S_Id} Mora Talent" id="${S_Id}_T2_T5_Volume"></span></td>\
        </tr>\
        <tr style="display: none;">\
          <td colspan="2" class="textleft">元素爆発</td>\
          <td colspan="4"><div id="${S_Id}_T3" class="noUiSlider"></div></td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent1}" id="${S_Id}_T3_T1_Volume"></span> 点</td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Common} Talent" id="${S_Id}_T3_T2_Volume"></span> 点</td>\
          <td colspan="2" class="textright"><span class="${S_Id} ${S_Talent2}" id="${S_Id}_T3_T3_Volume"></span> 個</td>\
          <td colspan="2" class="textright"><span class="${S_Id} Crown_of_Insight" id="${S_Id}_T3_T4_Volume"></span> 個</td>\
          <td colspan="2" class="textright"><span class="${S_Id} Mora Talent" id="${S_Id}_T3_T5_Volume"></span></td>\
          </tr>\
        <tbody>\
      </table>\
    ')
  `);
}
function SliderCreate() {
  eval(`
    noUiSlider.create(${S_Id}_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${S_Id}_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${S_Id}_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${S_Id}_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${S_Id}_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
  `);
}
function SliderLoad() {
  eval(`
    ${S_Id}_Ex.noUiSlider.on('update', function (values, handle) {
      var ${S_Id}_Ex_Min_Volume = "L1toL" + ${S_Id}_Ex.noUiSlider.get()[0];
      var ${S_Id}_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == ${S_Id}_Ex.noUiSlider.get()[0])[${S_Id}_Ex_Min_Volume]);
      var ${S_Id}_Ex_Max_Volume = "L1toL" + ${S_Id}_Ex.noUiSlider.get()[1];
      var ${S_Id}_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == ${S_Id}_Ex.noUiSlider.get()[1])[${S_Id}_Ex_Max_Volume]);
      var ${S_Id}_Ex_Volume = ${S_Id}_Ex_1toMax_Volume - ${S_Id}_Ex_1toMin_Volume
      var ${S_Id}_Ex_Book_Volume = ${S_Id}_Ex_Volume / 1000
      var ${S_Id}_Ex_Mora_Volume = ${S_Id}_Ex_Volume * 0.2
      document.getElementById('${S_Id}_Ex_Volume').innerHTML = ${S_Id}_Ex_Volume.toLocaleString();
      document.getElementById('${S_Id}_Ex_Book_Volume').innerHTML = ${S_Id}_Ex_Book_Volume.toLocaleString();
      document.getElementById('${S_Id}_Ex_Mora_Volume').innerHTML = ${S_Id}_Ex_Mora_Volume.toLocaleString();
    });
    ${S_Id}_Pr.noUiSlider.on('update', function (values, handle) {
      var ${S_Id}_Pr_Min_Volume = "L1toL" + ${S_Id}_Pr.noUiSlider.get()[0];
      var ${S_Id}_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[0])["P1_" + [${S_Id}_Pr_Min_Volume]]);
      var ${S_Id}_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[0])["P2_" + [${S_Id}_Pr_Min_Volume]]);
      var ${S_Id}_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[0])["P3_" + [${S_Id}_Pr_Min_Volume]]);
      var ${S_Id}_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[0])["P4_" + [${S_Id}_Pr_Min_Volume]]);
      var ${S_Id}_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[0])["P5_" + [${S_Id}_Pr_Min_Volume]]);
      var ${S_Id}_Pr_Max_Volume = "L1toL" + ${S_Id}_Pr.noUiSlider.get()[1];
      var ${S_Id}_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[1])["P1_" + [${S_Id}_Pr_Max_Volume]]);
      var ${S_Id}_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[1])["P2_" + [${S_Id}_Pr_Max_Volume]]);
      var ${S_Id}_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[1])["P3_" + [${S_Id}_Pr_Max_Volume]]);
      var ${S_Id}_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[1])["P4_" + [${S_Id}_Pr_Max_Volume]]);
      var ${S_Id}_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${S_Id}_Pr.noUiSlider.get()[1])["P5_" + [${S_Id}_Pr_Max_Volume]]);
      var ${S_Id}_Pr_P1 = ${S_Id}_Pr_P1_1toMax_Volume - ${S_Id}_Pr_P1_1toMin_Volume
      var ${S_Id}_Pr_P2 = ${S_Id}_Pr_P2_1toMax_Volume - ${S_Id}_Pr_P2_1toMin_Volume
      var ${S_Id}_Pr_P3 = ${S_Id}_Pr_P3_1toMax_Volume - ${S_Id}_Pr_P3_1toMin_Volume
      var ${S_Id}_Pr_P4 = ${S_Id}_Pr_P4_1toMax_Volume - ${S_Id}_Pr_P4_1toMin_Volume
      var ${S_Id}_Pr_P5 = ${S_Id}_Pr_P5_1toMax_Volume - ${S_Id}_Pr_P5_1toMin_Volume
      document.getElementById('${S_Id}_Pr_P1_Volume').innerHTML = ${S_Id}_Pr_P1;
      document.getElementById('${S_Id}_Pr_P2_Volume').innerHTML = ${S_Id}_Pr_P2;
      document.getElementById('${S_Id}_Pr_P3_Volume').innerHTML = ${S_Id}_Pr_P3;
      document.getElementById('${S_Id}_Pr_P4_Volume').innerHTML = ${S_Id}_Pr_P4;
      document.getElementById('${S_Id}_Pr_P5_Volume').innerHTML = ${S_Id}_Pr_P5.toLocaleString();
    });
    ${S_Id}_T1.noUiSlider.on('update', function (values, handle) {
      var ${S_Id}_T1_Min_Volume = "L1toL" + ${S_Id}_T1.noUiSlider.get()[0];
      var ${S_Id}_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[0])["T1_" + [${S_Id}_T1_Min_Volume]]);
      var ${S_Id}_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[0])["T2_" + [${S_Id}_T1_Min_Volume]]);
      var ${S_Id}_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[0])["T3_" + [${S_Id}_T1_Min_Volume]]);
      var ${S_Id}_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[0])["T4_" + [${S_Id}_T1_Min_Volume]]);
      var ${S_Id}_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[0])["T5_" + [${S_Id}_T1_Min_Volume]]);
      var ${S_Id}_T1_Max_Volume = "L1toL" + ${S_Id}_T1.noUiSlider.get()[1];
      var ${S_Id}_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[1])["T1_" + [${S_Id}_T1_Max_Volume]]);
      var ${S_Id}_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[1])["T2_" + [${S_Id}_T1_Max_Volume]]);
      var ${S_Id}_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[1])["T3_" + [${S_Id}_T1_Max_Volume]]);
      var ${S_Id}_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[1])["T4_" + [${S_Id}_T1_Max_Volume]]);
      var ${S_Id}_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T1.noUiSlider.get()[1])["T5_" + [${S_Id}_T1_Max_Volume]]);
      var ${S_Id}_T1_T1 = ${S_Id}_T1_T1_1toMax_Volume - ${S_Id}_T1_T1_1toMin_Volume
      var ${S_Id}_T1_T2 = ${S_Id}_T1_T2_1toMax_Volume - ${S_Id}_T1_T2_1toMin_Volume
      var ${S_Id}_T1_T3 = ${S_Id}_T1_T3_1toMax_Volume - ${S_Id}_T1_T3_1toMin_Volume
      var ${S_Id}_T1_T4 = ${S_Id}_T1_T4_1toMax_Volume - ${S_Id}_T1_T4_1toMin_Volume
      var ${S_Id}_T1_T5 = ${S_Id}_T1_T5_1toMax_Volume - ${S_Id}_T1_T5_1toMin_Volume
      document.getElementById('${S_Id}_T1_T1_Volume').innerHTML = ${S_Id}_T1_T1;
      document.getElementById('${S_Id}_T1_T2_Volume').innerHTML = ${S_Id}_T1_T2;
      document.getElementById('${S_Id}_T1_T3_Volume').innerHTML = ${S_Id}_T1_T3;
      document.getElementById('${S_Id}_T1_T4_Volume').innerHTML = ${S_Id}_T1_T4;
      document.getElementById('${S_Id}_T1_T5_Volume').innerHTML = ${S_Id}_T1_T5.toLocaleString();
    });
    ${S_Id}_T2.noUiSlider.on('update', function (values, handle) {
      var ${S_Id}_T2_Min_Volume = "L1toL" + ${S_Id}_T2.noUiSlider.get()[0];
      var ${S_Id}_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[0])["T1_" + [${S_Id}_T2_Min_Volume]]);
      var ${S_Id}_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[0])["T2_" + [${S_Id}_T2_Min_Volume]]);
      var ${S_Id}_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[0])["T3_" + [${S_Id}_T2_Min_Volume]]);
      var ${S_Id}_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[0])["T4_" + [${S_Id}_T2_Min_Volume]]);
      var ${S_Id}_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[0])["T5_" + [${S_Id}_T2_Min_Volume]]);
      var ${S_Id}_T2_Max_Volume = "L1toL" + ${S_Id}_T2.noUiSlider.get()[1];
      var ${S_Id}_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[1])["T1_" + [${S_Id}_T2_Max_Volume]]);
      var ${S_Id}_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[1])["T2_" + [${S_Id}_T2_Max_Volume]]);
      var ${S_Id}_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[1])["T3_" + [${S_Id}_T2_Max_Volume]]);
      var ${S_Id}_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[1])["T4_" + [${S_Id}_T2_Max_Volume]]);
      var ${S_Id}_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T2.noUiSlider.get()[1])["T5_" + [${S_Id}_T2_Max_Volume]]);
      var ${S_Id}_T2_T1 = ${S_Id}_T2_T1_1toMax_Volume - ${S_Id}_T2_T1_1toMin_Volume
      var ${S_Id}_T2_T2 = ${S_Id}_T2_T2_1toMax_Volume - ${S_Id}_T2_T2_1toMin_Volume
      var ${S_Id}_T2_T3 = ${S_Id}_T2_T3_1toMax_Volume - ${S_Id}_T2_T3_1toMin_Volume
      var ${S_Id}_T2_T4 = ${S_Id}_T2_T4_1toMax_Volume - ${S_Id}_T2_T4_1toMin_Volume
      var ${S_Id}_T2_T5 = ${S_Id}_T2_T5_1toMax_Volume - ${S_Id}_T2_T5_1toMin_Volume
      document.getElementById('${S_Id}_T2_T1_Volume').innerHTML = ${S_Id}_T2_T1;
      document.getElementById('${S_Id}_T2_T2_Volume').innerHTML = ${S_Id}_T2_T2;
      document.getElementById('${S_Id}_T2_T3_Volume').innerHTML = ${S_Id}_T2_T3;
      document.getElementById('${S_Id}_T2_T4_Volume').innerHTML = ${S_Id}_T2_T4;
      document.getElementById('${S_Id}_T2_T5_Volume').innerHTML = ${S_Id}_T2_T5.toLocaleString();
    });
    ${S_Id}_T3.noUiSlider.on('update', function (values, handle) {
      var ${S_Id}_T3_Min_Volume = "L1toL" + ${S_Id}_T3.noUiSlider.get()[0];
      var ${S_Id}_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[0])["T1_" + [${S_Id}_T3_Min_Volume]]);
      var ${S_Id}_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[0])["T2_" + [${S_Id}_T3_Min_Volume]]);
      var ${S_Id}_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[0])["T3_" + [${S_Id}_T3_Min_Volume]]);
      var ${S_Id}_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[0])["T4_" + [${S_Id}_T3_Min_Volume]]);
      var ${S_Id}_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[0])["T5_" + [${S_Id}_T3_Min_Volume]]);
      var ${S_Id}_T3_Max_Volume = "L1toL" + ${S_Id}_T3.noUiSlider.get()[1];
      var ${S_Id}_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[1])["T1_" + [${S_Id}_T3_Max_Volume]]);
      var ${S_Id}_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[1])["T2_" + [${S_Id}_T3_Max_Volume]]);
      var ${S_Id}_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[1])["T3_" + [${S_Id}_T3_Max_Volume]]);
      var ${S_Id}_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[1])["T4_" + [${S_Id}_T3_Max_Volume]]);
      var ${S_Id}_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${S_Id}_T3.noUiSlider.get()[1])["T5_" + [${S_Id}_T3_Max_Volume]]);
      var ${S_Id}_T3_T1 = ${S_Id}_T3_T1_1toMax_Volume - ${S_Id}_T3_T1_1toMin_Volume
      var ${S_Id}_T3_T2 = ${S_Id}_T3_T2_1toMax_Volume - ${S_Id}_T3_T2_1toMin_Volume
      var ${S_Id}_T3_T3 = ${S_Id}_T3_T3_1toMax_Volume - ${S_Id}_T3_T3_1toMin_Volume
      var ${S_Id}_T3_T4 = ${S_Id}_T3_T4_1toMax_Volume - ${S_Id}_T3_T4_1toMin_Volume
      var ${S_Id}_T3_T5 = ${S_Id}_T3_T5_1toMax_Volume - ${S_Id}_T3_T5_1toMin_Volume
      document.getElementById('${S_Id}_T3_T1_Volume').innerHTML = ${S_Id}_T3_T1;
      document.getElementById('${S_Id}_T3_T2_Volume').innerHTML = ${S_Id}_T3_T2;
      document.getElementById('${S_Id}_T3_T3_Volume').innerHTML = ${S_Id}_T3_T3;
      document.getElementById('${S_Id}_T3_T4_Volume').innerHTML = ${S_Id}_T3_T4;
      document.getElementById('${S_Id}_T3_T5_Volume').innerHTML = ${S_Id}_T3_T5.toLocaleString();
    });
  `);
}
function Checkmate() {
  eval(`
  try{
    if (Hiders.${S_Id} == "0") {
      CharacterSet();
    } else {
      HideCharacterSet();
    }
  } catch(e) {
    CharacterSet();
  }
  `);
  SliderCreate();
  SliderLoad();
}



// インベントリー項目の生成
function SetInventoryList() {
  CalEle = document.querySelector('tr[id="I_Inventory"]');
// Common Material
function SetInventoryCM() {
// Common Material #3
  S_ItemName_1 =    "Spectral_Nucleus";
  S_ItemName_2 =    "Spectral_Heart";
  S_ItemName_3 =    "Spectral_Husk";
  S_ItemName_4 =    "Crystalline_Cyst_Dust";
  S_ItemName_5 =    "Luminescent_Pollen";
  S_ItemName_6 =    "Fungal_Spores";
  S_ItemName_7 =    "Rich_Red_Brocade";
  S_ItemName_8 =    "Trimmed_Red_Silk";
  S_ItemName_9 =    "Faded_Red_Satin";
  InventorySet9();
// Common Material #2
  S_ItemName_1 =    "Lieutenants_Insignia";
  S_ItemName_2 =    "Sergeants_Insignia";
  S_ItemName_3 =    "Recruits_Insignia";
  S_ItemName_4 =    "Golden_Raven_Insignia";
  S_ItemName_5 =    "Silver_Raven_Insignia";
  S_ItemName_6 =    "Treasure_Hoarder_Insignia";
  S_ItemName_7 =    "Energy_Nectar";
  S_ItemName_8 =    "Shimmering_Nectar";
  S_ItemName_9 =    "Whopperflower_Nectar";
  S_ItemName_10 =   "Famed_Handguard";
  S_ItemName_11 =   "Kageuchi_Handguard";
  S_ItemName_12 =   "Old_Handguard";
  InventorySet();
// Common Material #1
  S_ItemName_1 =    "Slime_Concentrate";
  S_ItemName_2 =    "Slime_Secretions";
  S_ItemName_3 =    "Slime_Condensate";
  S_ItemName_4 =    "Ominous_Mask";
  S_ItemName_5 =    "Stained_Mask";
  S_ItemName_6 =    "Damaged_Mask";
  S_ItemName_7 =    "Forbidden_Curse_Scroll";
  S_ItemName_8 =    "Sealed_Scroll";
  S_ItemName_9 =    "Divining_Scroll";
  S_ItemName_10 =   "Weathered_Arrowhead";
  S_ItemName_11 =   "Sharp_Arrowhead";
  S_ItemName_12 =   "Firm_Arrowhead";
  InventorySet();
}
// Talent Level-Up Material 2
function SetInventoryTLUM2() {
// Talent Level-Up Material 2 #2
  S_ItemName_1 =    "Molten_Moment";
  S_ItemName_2 =    "Hellfire_Butterfly";
  S_ItemName_3 =    "Ashen_Heart";
  S_ItemName_4 =    "Mudra_of_the_Malefic_General";
  S_ItemName_5 =    "Tears_of_the_Calamitous_God";
  S_ItemName_6 =    "The_Meaning_of_Aeons";
  InventorySet6();
// Talent Level-Up Material 2 #1
  S_ItemName_1 =    "Dvalins_Plume";
  S_ItemName_2 =    "Dvalins_Claw";
  S_ItemName_3 =    "Dvalins_Sigh";
  S_ItemName_4 =    "Tail_of_Boreas";
  S_ItemName_5 =    "Ring_of_Boreas";
  S_ItemName_6 =    "Spirit_Locket_of_Boreas";
  S_ItemName_7 =    "Tusk_of_Monoceros_Caeli";
  S_ItemName_8 =    "Shard_of_a_Foul_Legacy";
  S_ItemName_9 =    "Shadow_of_the_Warrior";
  S_ItemName_10 =   "Dragon_Lords_Crown";
  S_ItemName_11 =   "Bloodjade_Branch";
  S_ItemName_12 =   "Gilded_Scale";
  InventorySet();
}
// Elemental Stones
function SetInventoryES() {
// Elemental Stones #2
  S_ItemName_1 =    "Storm_Beads";
  S_ItemName_2 =    "Riftborn_Regalia";
  S_ItemName_3 =    "Dragonheirs_False_Fin";
  S_ItemName_4 =    "Runic_Fang";
  S_ItemName_5 =    "Majestic_Hooked_Beak";
  S_ItemName_6 =    "Thunderclap_Fruitcore";
  S_ItemName_7 =    "Perpetual_Caliber";
  S_ItemName_8 =    "Light_Guiding_Tetrahedron";
  InventorySet8();
// Elemental Stones #1
  S_ItemName_1 =    "Hurricane_Seed";
  S_ItemName_2 =    "Lightning_Prism";
  S_ItemName_3 =    "Basalt_Pillar";
  S_ItemName_4 =    "Hoarfrost_Core";
  S_ItemName_5 =    "Everflame_Seed";
  S_ItemName_6 =    "Cleansing_Heart";
  S_ItemName_7 =    "Juvenile_Jade";
  S_ItemName_8 =    "Crystalline_Bloom";
  S_ItemName_9 =    "Marionette_Core";
  S_ItemName_10 =   "Perpetual_Heart";
  S_ItemName_11 =   "Smoldering_Pearl";
  S_ItemName_12 =   "Dew_of_Repudiation";
  InventorySet();
}
// Jewels
function SetInventoryJewels() {
// Jewels #3
  S_ItemName_1 =    "Prithiva_Topaz_Gemstone";
  S_ItemName_2 =    "Prithiva_Topaz_Chunk";
  S_ItemName_3 =    "Prithiva_Topaz_Fragment";
  S_ItemName_4 =    "Prithiva_Topaz_Sliver";
  InventorySet4();
// Jewels #2
  S_ItemName_1 =    "Vajrada_Amethyst_Gemstone";
  S_ItemName_2 =    "Vajrada_Amethyst_Chunk";
  S_ItemName_3 =    "Vajrada_Amethyst_Fragment";
  S_ItemName_4 =    "Vajrada_Amethyst_Sliver";
  S_ItemName_5 =    "Vayuda_Turquoise_Gemstone";
  S_ItemName_6 =    "Vayuda_Turquoise_Chunk";
  S_ItemName_7 =    "Vayuda_Turquoise_Fragment";
  S_ItemName_8 =    "Vayuda_Turquoise_Sliver";
  S_ItemName_9 =    "Shivada_Jade_Gemstone";
  S_ItemName_10 =   "Shivada_Jade_Chunk";
  S_ItemName_11 =   "Shivada_Jade_Fragment";
  S_ItemName_12 =   "Shivada_Jade_Sliver";
  InventorySet();
// Jewels #1
  S_ItemName_1 =    "Agnidus_Agate_Gemstone";
  S_ItemName_2 =    "Agnidus_Agate_Chunk";
  S_ItemName_3 =    "Agnidus_Agate_Fragment";
  S_ItemName_4 =    "Agnidus_Agate_Sliver";
  S_ItemName_5 =    "Varunada_Lazurite_Gemstone";
  S_ItemName_6 =    "Varunada_Lazurite_Chunk";
  S_ItemName_7 =    "Varunada_Lazurite_Fragment";
  S_ItemName_8 =    "Varunada_Lazurite_Sliver";
  S_ItemName_9 =    "Nagadus_Emerald_Gemstone";
  S_ItemName_10 =   "Nagadus_Emerald_Chunk";
  S_ItemName_11 =   "Nagadus_Emerald_Fragment";
  S_ItemName_12 =   "Nagadus_Emerald_Sliver";
  InventorySet();
}
// Talent Level-Up Material
function SetInventoryTLUM() {
// Talent Level-Up Material #4
  S_ItemName_1 =    "Crown_of_Insight";
  InventorySet1();
// Talent Level-Up Material #3
  S_ItemName_1 =    "Philosophies_of_Light";
  S_ItemName_2 =    "Guide_to_Light";
  S_ItemName_3 =    "Teachings_of_Light";
  S_ItemName_4 =    "Philosophies_of_Admonition";
  S_ItemName_5 =    "Guide_to_Admonition";
  S_ItemName_6 =    "Teachings_of_Admonition";
  S_ItemName_7 =    "Philosophies_of_Ingenuity";
  S_ItemName_8 =    "Guide_to_Ingenuity";
  S_ItemName_9 =    "Teachings_of_Ingenuity";
  S_ItemName_10 =   "Philosophies_of_Praxis";
  S_ItemName_11 =   "Guide_to_Praxis";
  S_ItemName_12 =   "Teachings_of_Praxis";
  InventorySet();
// Talent Level-Up Material #2
  S_ItemName_1 =    "Philosophies_of_Diligence";
  S_ItemName_2 =    "Guide_to_Diligence";
  S_ItemName_3 =    "Teachings_of_Diligence";
  S_ItemName_4 =    "Philosophies_of_Gold";
  S_ItemName_5 =    "Guide_to_Gold";
  S_ItemName_6 =    "Teachings_of_Gold";
  S_ItemName_7 =    "Philosophies_of_Transience";
  S_ItemName_8 =    "Guide_to_Transience";
  S_ItemName_9 =    "Teachings_of_Transience";
  S_ItemName_10 =   "Philosophies_of_Elegance";
  S_ItemName_11 =   "Guide_to_Elegance";
  S_ItemName_12 =   "Teachings_of_Elegance";
  InventorySet();
// Talent Level-Up Material #1
  S_ItemName_1 =    "Philosophies_of_Freedom";
  S_ItemName_2 =    "Guide_to_Freedom";
  S_ItemName_3 =    "Teachings_of_Freedom";
  S_ItemName_4 =    "Philosophies_of_Resistance";
  S_ItemName_5 =    "Guide_to_Resistance";
  S_ItemName_6 =    "Teachings_of_Resistance";
  S_ItemName_7 =    "Philosophies_of_Ballad";
  S_ItemName_8 =    "Guide_to_Ballad";
  S_ItemName_9 =    "Teachings_of_Ballad";
  S_ItemName_10 =   "Philosophies_of_Prosperity";
  S_ItemName_11 =   "Guide_to_Prosperity";
  S_ItemName_12 =   "Teachings_of_Prosperity";
  InventorySet();
}
// Local Material
function SetInventoryLM() {
// Local Material #3
  S_ItemName_1 =    "Fluorescent_Fungus";
  S_ItemName_2 =    "Rukkhashava_Mushrooms";
  S_ItemName_3 =    "Padisarah";
  S_ItemName_4 =    "Nilotpala_Lotus";
  S_ItemName_5 =    "Kalpalata_Lotus";
  S_ItemName_6 =    "Redcrest";
  S_ItemName_7 =    "Scarab";
  InventorySet7();
// Local Material #2
  S_ItemName_1 =    "Glaze_Lily";
  S_ItemName_2 =    "Qingxin";
  S_ItemName_3 =    "Starconch";
  S_ItemName_4 =    "Violetgrass";
  S_ItemName_5 =    "Onikabuto";
  S_ItemName_6 =    "Sakura_Bloom";
  S_ItemName_7 =    "Crystal_Marrow";
  S_ItemName_8 =    "Dendrobium";
  S_ItemName_9 =    "Naku_Weed";
  S_ItemName_10 =   "Sea_Ganoderma";
  S_ItemName_11 =   "Sango_Pearl";
  S_ItemName_12 =   "Amakumo_Fruit";
  InventorySet();
// Local Material #1
  S_ItemName_1 =    "Wolfhook";
  S_ItemName_2 =    "Valberry";
  S_ItemName_3 =    "Cecilia";
  S_ItemName_4 =    "Windwheel_Aster";
  S_ItemName_5 =    "Philanemo_Mushroom";
  S_ItemName_6 =    "Small_Lamp_Grass";
  S_ItemName_7 =    "Calla_Lily";
  S_ItemName_8 =    "Dandelion_Seed";
  S_ItemName_9 =    "Cor_Lapis";
  S_ItemName_10 =   "Jueyun_Chili";
  S_ItemName_11 =   "Noctilucous_Jade";
  S_ItemName_12 =   "Silk_Flower";
  InventorySet();
}

  SetInventoryLM();
  SetInventoryTLUM();
  SetInventoryJewels();
  SetInventoryES();
  SetInventoryTLUM2();
  SetInventoryCM();



  SetCalculatorList();
}
function InventorySet() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></i><input id="${S_ItemName_1}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></i><input id="${S_ItemName_2}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></i><input id="${S_ItemName_3}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></i><input id="${S_ItemName_4}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_5}.webp"></i><input id="${S_ItemName_5}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_6}.webp"></i><input id="${S_ItemName_6}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_7}.webp"></i><input id="${S_ItemName_7}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_8}.webp"></i><input id="${S_ItemName_8}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_9}.webp"></i><input id="${S_ItemName_9}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_10}.webp"></i><input id="${S_ItemName_10}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_11}.webp"></i><input id="${S_ItemName_11}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_12}.webp"></i><input id="${S_ItemName_12}" value="0" type="number" class="validate">\
          </div>\
        </td>\
      </tr>\
    ')
  `);
}
function InventorySet1() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></i><input id="${S_ItemName_1}" value="0" type="number" class="validate">\
          </div>\
        </td>\
      </tr>\
    ')
  `);
}
function InventorySet3() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></i><input id="${S_ItemName_1}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></i><input id="${S_ItemName_2}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></i><input id="${S_ItemName_3}" value="0" type="number" class="validate">\
          </div>\
        </td>\
      </tr>\
    ')
  `);
}
function InventorySet4() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></i><input id="${S_ItemName_1}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></i><input id="${S_ItemName_2}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></i><input id="${S_ItemName_3}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></i><input id="${S_ItemName_4}" value="0" type="number" class="validate">\
          </div>\
        </td>\
      </tr>\
    ')
  `);
}
function InventorySet5() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></i><input id="${S_ItemName_1}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></i><input id="${S_ItemName_2}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></i><input id="${S_ItemName_3}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></i><input id="${S_ItemName_4}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_5}.webp"></i><input id="${S_ItemName_5}" value="0" type="number" class="validate">\
          </div>\
        </td>\
      </tr>\
    ')
  `);
}
function InventorySet6() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></i><input id="${S_ItemName_1}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></i><input id="${S_ItemName_2}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></i><input id="${S_ItemName_3}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></i><input id="${S_ItemName_4}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_5}.webp"></i><input id="${S_ItemName_5}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_6}.webp"></i><input id="${S_ItemName_6}" value="0" type="number" class="validate">\
          </div>\
        </td>\
      </tr>\
    ')
  `);
}
function InventorySet7() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></i><input id="${S_ItemName_1}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></i><input id="${S_ItemName_2}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></i><input id="${S_ItemName_3}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></i><input id="${S_ItemName_4}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_5}.webp"></i><input id="${S_ItemName_5}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_6}.webp"></i><input id="${S_ItemName_6}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_7}.webp"></i><input id="${S_ItemName_7}" value="0" type="number" class="validate">\
          </div>\
        </td>\
      </tr>\
    ')
  `);
}
function InventorySet8() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></i><input id="${S_ItemName_1}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></i><input id="${S_ItemName_2}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></i><input id="${S_ItemName_3}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></i><input id="${S_ItemName_4}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_5}.webp"></i><input id="${S_ItemName_5}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_6}.webp"></i><input id="${S_ItemName_6}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_7}.webp"></i><input id="${S_ItemName_7}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_8}.webp"></i><input id="${S_ItemName_8}" value="0" type="number" class="validate">\
          </div>\
        </td>\
      </tr>\
    ')
  `);
}
function InventorySet9() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></i><input id="${S_ItemName_1}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></i><input id="${S_ItemName_2}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></i><input id="${S_ItemName_3}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></i><input id="${S_ItemName_4}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_5}.webp"></i><input id="${S_ItemName_5}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_6}.webp"></i><input id="${S_ItemName_6}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_7}.webp"></i><input id="${S_ItemName_7}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_8}.webp"></i><input id="${S_ItemName_8}" value="0" type="number" class="validate">\
          </div>\
        </td>\
        <td width="8%" colspan="1">\
          <div class="input-field"><i class="prefix">\
            <img class="miniicon" src="../image/Small/Item/Item_${S_ItemName_9}.webp"></i><input id="${S_ItemName_9}" value="0" type="number" class="validate">\
          </div>\
        </td>\
      </tr>\
    ')
  `);
}




// カリキュレーター項目の生成
function SetCalculatorList() {
// Jewels
function SetCalculatorJewel() {
  CalEle = document.querySelector('th[id="C_Jewels"]').parentElement;
  S_ItemType =   "Jewels";
// Jewels #1
  S_ItemImage1 =   "Small/Item/Item_Agnidus_Agate_Gemstone.webp";
  S_ItemName_1 =    "Agnidus_Agate";
  S_ItemUnit_1 =    " 点";
  S_ItemImage2 =   "Small/Item/Item_Varunada_Lazurite_Gemstone.webp";
  S_ItemName_2 =    "Varunada_Lazurite";
  S_ItemUnit_2 =    " 点";
  S_ItemImage3 =   "Small/Item/Item_Nagadus_Emerald_Gemstone.webp";
  S_ItemName_3 =    "Nagadus_Emerald";
  S_ItemUnit_3 =    " 点";
  S_ItemImage4 =   "Small/Item/Item_Vajrada_Amethyst_Gemstone.webp";
  S_ItemName_4 =    "Vajrada_Amethyst";
  S_ItemUnit_4 =    " 点";
  S_ItemImage5 =   "Small/Item/Item_Vayuda_Turquoise_Gemstone.webp";
  S_ItemName_5 =    "Vayuda_Turquoise";
  S_ItemUnit_5 =    " 点";
  S_ItemImage6 =   "Small/Item/Item_Shivada_Jade_Gemstone.webp";
  S_ItemName_6 =    "Shivada_Jade";
  S_ItemUnit_6 =    " 点";
  S_ItemImage7 =   "Small/Item/Item_Prithiva_Topaz_Gemstone.webp";
  S_ItemName_7 =    "Prithiva_Topaz";
  S_ItemUnit_7 =    " 点";
  CalculatorSet();
}
// Elemental Stones
function SetCalculatorES() {
  CalEle = document.querySelector('th[id="C_Elemental_Stones"]').parentElement;
  S_ItemType =   "Elemental_Stones";
// Elemental Stones #3
  S_ItemName_1 =    "Dragonheirs_False_Fin";
  S_ItemUnit_1 =    " 個"
  S_ItemName_2 =    "Runic_Fang";
  S_ItemUnit_2 =    " 個"
  S_ItemName_3 =    "Majestic_Hooked_Beak";
  S_ItemUnit_3 =    " 個"
  S_ItemName_4 =    "Thunderclap_Fruitcore";
  S_ItemUnit_4 =    " 個"
  S_ItemName_5 =    "Perpetual_Caliber";
  S_ItemUnit_5 =    " 個"
  S_ItemName_6 =    "Light_Guiding_Tetrahedron";
  S_ItemUnit_6 =    " 個"
  S_ItemName_7 =    "";
  S_ItemUnit_7 =    ""
  CalculatorSet2();
// Elemental Stones #2
  S_ItemName_1 =    "Crystalline_Bloom";
  S_ItemUnit_1 =    " 個"
  S_ItemName_2 =    "Marionette_Core";
  S_ItemUnit_2 =    " 個"
  S_ItemName_3 =    "Perpetual_Heart";
  S_ItemUnit_3 =    " 個"
  S_ItemName_4 =    "Smoldering_Pearl";
  S_ItemUnit_4 =    " 個"
  S_ItemName_5 =    "Dew_of_Repudiation";
  S_ItemUnit_5 =    " 個"
  S_ItemName_6 =    "Storm_Beads";
  S_ItemUnit_6 =    " 個"
  S_ItemName_7 =    "Riftborn_Regalia";
  S_ItemUnit_7 =    " 個"
  CalculatorSet2();
// Elemental Stones #1
  S_ItemName_1 =    "Hurricane_Seed";
  S_ItemUnit_1 =    " 個"
  S_ItemName_2 =    "Lightning_Prism";
  S_ItemUnit_2 =    " 個"
  S_ItemName_3 =    "Basalt_Pillar";
  S_ItemUnit_3 =    " 個"
  S_ItemName_4 =    "Hoarfrost_Core";
  S_ItemUnit_4 =    " 個"
  S_ItemName_5 =    "Everflame_Seed";
  S_ItemUnit_5 =    " 個"
  S_ItemName_6 =    "Cleansing_Heart";
  S_ItemUnit_6 =    " 個"
  S_ItemName_7 =    "Juvenile_Jade";
  S_ItemUnit_7 =    " 個"
  CalculatorSet2();
}
// Common Material
function SetCalculatorCM() {
  CalEle = document.querySelector('th[id="C_Common_Material"]').parentElement;
  S_ItemType =   "Common_Material";
// Common Material #2
  S_ItemName_1 =    "Famed_Handguard";
  S_ItemIDs__1 =    "Old_Handguard Kageuchi_Handguard Famed_Handguard";
  S_ItemUnit_1 =    " 点";
  S_ItemName_2 =    "Spectral_Nucleus";
  S_ItemIDs__2 =    "Spectral_Husk Spectral_Heart Spectral_Nucleus";
  S_ItemUnit_2 =    " 点";
  S_ItemName_3 =    "Crystalline_Cyst_Dust";
  S_ItemIDs__3 =    "Fungal_Spores Luminescent_Pollen Crystalline_Cyst_Dust";
  S_ItemUnit_3 =    " 点";
  S_ItemName_4 =    "Rich_Red_Brocade";
  S_ItemIDs__4 =    "Faded_Red_Satin Trimmed_Red_Silk Rich_Red_Brocade";
  S_ItemUnit_4 =    " 点";
  S_ItemName_5 =    "";
  S_ItemIDs__5 =    "";
  S_ItemUnit_5 =    "";
  S_ItemName_6 =    "";
  S_ItemIDs__6 =    "";
  S_ItemUnit_6 =    "";
  S_ItemName_7 =    "";
  S_ItemIDs__7 =    "";
  S_ItemUnit_7 =    "";
  CalculatorSet4();
// Common Material #1
  S_ItemName_1 =    "Slime_Concentrate";
  S_ItemIDs__1 =    "Slime_Condensate Slime_Secretions Slime_Concentrate";
  S_ItemUnit_1 =    " 点";
  S_ItemName_2 =    "Ominous_Mask";
  S_ItemIDs__2 =    "Damaged_Mask Stained_Mask Ominous_Mask";
  S_ItemUnit_2 =    " 点";
  S_ItemName_3 =    "Forbidden_Curse_Scroll";
  S_ItemIDs__3 =    "Divining_Scroll Sealed_Scroll Forbidden_Curse_Scroll";
  S_ItemUnit_3 =    " 点";
  S_ItemName_4 =    "Weathered_Arrowhead";
  S_ItemIDs__4 =    "Firm_Arrowhead Sharp_Arrowhead Weathered_Arrowhead";
  S_ItemUnit_4 =    " 点";
  S_ItemName_5 =    "Lieutenants_Insignia";
  S_ItemIDs__5 =    "Recruits_Insignia Sergeants_Insignia Lieutenants_Insignia";
  S_ItemUnit_5 =    " 点";
  S_ItemName_6 =    "Golden_Raven_Insignia";
  S_ItemIDs__6 =    "Treasure_Hoarder_Insignia Silver_Raven_Insignia Golden_Raven_Insignia";
  S_ItemUnit_6 =    " 点";
  S_ItemName_7 =    "Energy_Nectar";
  S_ItemIDs__7 =    "Whopperflower_Nectar Shimmering_Nectar Energy_Nectar";
  S_ItemUnit_7 =    " 点";
  CalculatorSet4();
}
// Local Material
function SetCalculatorLM() {
  CalEle = document.querySelector('th[id="C_Local_Material"]').parentElement;
  S_ItemType =   "Local_Material";
// Local Material #5
  S_ItemName_1 =    "Kalpalata_Lotus";
  S_ItemUnit_1 =    " 個";
  S_ItemName_2 =    "Redcrest";
  S_ItemUnit_2 =    " 個";
  S_ItemName_3 =    "Scarab";
  S_ItemUnit_3 =    " 個";
  S_ItemName_4 =    "";
  S_ItemUnit_4 =    "";
  S_ItemName_5 =    "";
  S_ItemUnit_5 =    "";
  S_ItemName_6 =    "";
  S_ItemUnit_6 =    "";
  S_ItemName_7 =    "";
  S_ItemUnit_7 =    " ";
  CalculatorSet2();
// Local Material #4
  S_ItemName_1 =    "Sea_Ganoderma";
  S_ItemUnit_1 =    " 個";
  S_ItemName_2 =    "Sango_Pearl";
  S_ItemUnit_2 =    " 個";
  S_ItemName_3 =    "Amakumo_Fruit";
  S_ItemUnit_3 =    " 個";
  S_ItemName_4 =    "Fluorescent_Fungus";
  S_ItemUnit_4 =    " 個";
  S_ItemName_5 =    "Rukkhashava_Mushrooms";
  S_ItemUnit_5 =    " 個";
  S_ItemName_6 =    "Padisarah";
  S_ItemUnit_6 =    " 個";
  S_ItemName_7 =    "Nilotpala_Lotus";
  S_ItemUnit_7 =    " 個";
  CalculatorSet2();
// Local Material #3
  S_ItemName_1 =    "Starconch";
  S_ItemUnit_1 =    " 個";
  S_ItemName_2 =    "Violetgrass";
  S_ItemUnit_2 =    " 個";
  S_ItemName_3 =    "Onikabuto";
  S_ItemUnit_3 =    " 個";
  S_ItemName_4 =    "Sakura_Bloom";
  S_ItemUnit_4 =    " 個";
  S_ItemName_5 =    "Crystal_Marrow";
  S_ItemUnit_5 =    " 個";
  S_ItemName_6 =    "Dendrobium";
  S_ItemUnit_6 =    " 個";
  S_ItemName_7 =    "Naku_Weed";
  S_ItemUnit_7 =    " 個";
  CalculatorSet2();
// Local Material #2
  S_ItemName_1 =    "Dandelion_Seed";
  S_ItemUnit_1 =    " 個";
  S_ItemName_2 =    "Cor_Lapis";
  S_ItemUnit_2 =    " 個";
  S_ItemName_3 =    "Jueyun_Chili";
  S_ItemUnit_3 =    " 個";
  S_ItemName_4 =    "Noctilucous_Jade";
  S_ItemUnit_4 =    " 個";
  S_ItemName_5 =    "Silk_Flower";
  S_ItemUnit_5 =    " 個";
  S_ItemName_6 =    "Glaze_Lily";
  S_ItemUnit_6 =    " 個";
  S_ItemName_7 =    "Qingxin";
  S_ItemUnit_7 =    " 個";
  CalculatorSet2();
// Local Material #1
  S_ItemName_1 =    "Wolfhook";
  S_ItemUnit_1 =    " 個";
  S_ItemName_2 =    "Valberry";
  S_ItemUnit_2 =    " 個";
  S_ItemName_3 =    "Cecilia";
  S_ItemUnit_3 =    " 個";
  S_ItemName_4 =    "Windwheel_Aster";
  S_ItemUnit_4 =    " 個";
  S_ItemName_5 =    "Philanemo_Mushroom";
  S_ItemUnit_5 =    " 個";
  S_ItemName_6 =    "Small_Lamp_Grass";
  S_ItemUnit_6 =    " 個";
  S_ItemName_7 =    "Calla_Lily";
  S_ItemUnit_7 =    " 個";
  CalculatorSet2();
}
// Talent Level-Up Material
function SetCalculatorTLUM() {
  CalEle = document.querySelector('th[id="C_Talent_Level_Up_Material"]').parentElement;
  S_ItemType =   "Talent_Level_Up_Material";
// Talent Level-Up Material #2
  S_ItemName_1 =    "Elegance";
  S_ItemUnit_1 =    " 点";
  S_ItemName_2 =    "Light";
  S_ItemUnit_2 =    " 点";
  S_ItemName_3 =    "Admonition";
  S_ItemUnit_3 =    " 点";
  S_ItemName_4 =    "Ingenuity";
  S_ItemUnit_4 =    " 点";
  S_ItemName_5 =    "Praxis";
  S_ItemUnit_5 =    " 点";
  S_ItemName_6 =    "";
  S_ItemUnit_6 =    "";
  S_ItemName_7 =    "";
  S_ItemUnit_7 =    "";
  CalculatorSet3();
// Talent Level-Up Material #1
  S_ItemName_1 =    "Freedom";
  S_ItemUnit_1 =    " 点";
  S_ItemName_2 =    "Resistance";
  S_ItemUnit_2 =    " 点";
  S_ItemName_3 =    "Ballad";
  S_ItemUnit_3 =    " 点";
  S_ItemName_4 =    "Prosperity";
  S_ItemUnit_4 =    " 点";
  S_ItemName_5 =    "Diligence";
  S_ItemUnit_5 =    " 点";
  S_ItemName_6 =    "Gold";
  S_ItemUnit_6 =    " 点";
  S_ItemName_7 =    "Transience";
  S_ItemUnit_7 =    " 点";
  CalculatorSet3();
}
// Talent Level-Up Material 2
function SetCalculatorTLUM2() {
  CalEle = document.querySelector('th[id="C_Talent_Level_Up_Material"]').parentElement;
  S_ItemType =   "Talent_Level_Up_Material_2";
// Talent Level-Up Material2 #3
  S_ItemName_1 =    "Ashen_Heart";
  S_ItemUnit_1 =    " 個";
  S_ItemName_2 =    "Mudra_of_the_Malefic_General";
  S_ItemUnit_2 =    " 個";
  S_ItemName_3 =    "Tears_of_the_Calamitous_God";
  S_ItemUnit_3 =    " 個";
  S_ItemName_4 =    "The_Meaning_of_Aeons";
  S_ItemUnit_4 =    " 個";
  S_ItemName_5 =    "";
  S_ItemUnit_5 =    "";
  S_ItemName_6 =    "";
  S_ItemUnit_6 =    "";
  S_ItemName_7 =    "";
  S_ItemUnit_7 =    "";
  CalculatorSet2();
// Talent Level-Up Material2 #2
  S_ItemName_1 =    "Shard_of_a_Foul_Legacy";
  S_ItemUnit_1 =    " 個";
  S_ItemName_2 =    "Shadow_of_the_Warrior";
  S_ItemUnit_2 =    " 個";
  S_ItemName_3 =    "Dragon_Lords_Crown";
  S_ItemUnit_3 =    " 個";
  S_ItemName_4 =    "Bloodjade_Branch";
  S_ItemUnit_4 =    " 個";
  S_ItemName_5 =    "Gilded_Scale";
  S_ItemUnit_5 =    " 個";
  S_ItemName_6 =    "Molten_Moment";
  S_ItemUnit_6 =    " 個";
  S_ItemName_7 =    "Hellfire_Butterfly";
  S_ItemUnit_7 =    " 個";
  CalculatorSet2();
// Talent Level-Up Material2 #1
  S_ItemName_1 =    "Dvalins_Plume";
  S_ItemUnit_1 =    " 個";
  S_ItemName_2 =    "Dvalins_Claw";
  S_ItemUnit_2 =    " 個";
  S_ItemName_3 =    "Dvalins_Sigh";
  S_ItemUnit_3 =    " 個";
  S_ItemName_4 =    "Tail_of_Boreas";
  S_ItemUnit_4 =    " 個";
  S_ItemName_5 =    "Ring_of_Boreas";
  S_ItemUnit_5 =    " 個";
  S_ItemName_6 =    "Spirit_Locket_of_Boreas";
  S_ItemUnit_6 =    " 個";
  S_ItemName_7 =    "Tusk_of_Monoceros_Caeli";
  S_ItemUnit_7 =    " 個";
  CalculatorSet2();
}
  SetCalculatorJewel();
  SetCalculatorES();
  SetCalculatorCM();
  SetCalculatorLM();
  SetCalculatorTLUM2();
  SetCalculatorTLUM();


  SetPatchNoteList();
}
// Jewels
function CalculatorSet() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">合計必要数</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/${S_ItemImage1}"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/${S_ItemImage2}"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/${S_ItemImage3}"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/${S_ItemImage4}"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/${S_ItemImage5}"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/${S_ItemImage6}"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/${S_ItemImage7}"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">所持数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">残り必要数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
    ')
  `);
}
// Elemental Stones , Local Material , Talent Level-Up Material2
function CalculatorSet2() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">合計必要数</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_5}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_6}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_7}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">所持数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">残り必要数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
    ')
  `);
}
// Talent Level-Up Material
function CalculatorSet3() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">合計必要数</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_Philosophies_of_${S_ItemName_1}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="TLUM_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_Philosophies_of_${S_ItemName_2}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="TLUM_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_Philosophies_of_${S_ItemName_3}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="TLUM_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_Philosophies_of_${S_ItemName_4}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="TLUM_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_Philosophies_of_${S_ItemName_5}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="TLUM_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_Philosophies_of_${S_ItemName_6}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="TLUM_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_Philosophies_of_${S_ItemName_7}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="TLUM_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">所持数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_TLUM_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_TLUM_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_TLUM_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_TLUM_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_TLUM_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_TLUM_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_TLUM_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">残り必要数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_TLUM_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_TLUM_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_TLUM_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_TLUM_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_TLUM_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_TLUM_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_TLUM_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
    ')
  `);
}
// Common Material
function CalculatorSet4() {
  eval(`
    CalEle.insertAdjacentHTML('afterend', '\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">合計必要数</td>\
        <td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_5}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_6}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_7}.webp"></td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">突破必要数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">天賦必要数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">所持数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
      <tr>\
        <td width="8.6%" colspan="2" class="textleft">残り必要数</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>\
        <td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>\
      </tr>\
    ')
  `);
}



// パッチノート項目の生成
function SetPatchNoteList() {
  CalEle = document.querySelector('div[id="Other"]');
  CalEle.insertAdjacentHTML('beforeend', '\
<b>2022/09/29</b><BR>\
更新。<BR>\
・ニィロウ、セノ、キャンディスの実装に対応<BR>\
・赤念の実、聖金虫の実装に対応<BR>\
・永続コア、導光四面体の実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題（協力者募集中『@Sakura_Kocho』までお願いします。）<BR>\
<BR><BR>\
<b>2022/08/31</b><BR>\
更新。<BR>\
・キャラクター非表示機能の追加<BR>\
・パティサラ、カルパラタ蓮の実装に対応<BR>\
・草元素の宝石の位置を修正<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2022/08/25</b><BR>\
更新。<BR>\
・前回に引き続き処理方法の大幅変更<BR>\
・それに伴って読み込み時間が長くなってしまった為、ロード画面を追加<BR>\
・ティナリ、コレイ、ドリーの実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・一部特産品の画像が表示されない（ゲームで実装され次第修正します。）<BR>\
・処理方法の変更に伴い、一部セーブデータが正常に読み込めていない可能性があります。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR>\
必要なご対応。<BR>\
・データ確認後、セーブを行って下さい。<BR>\
<BR><BR>\
<b>2022/07/04</b><BR>\
更新。<BR>\
・Htmlの容量削減に伴い処理の大幅変更<BR>\
・セーブデータのエクスポート、インポート機能の実装<BR>\
・キャラクターや天賦のレベル上限を仮設定するボタンの仮実装<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2022/06/23</b><BR>\
更新。<BR>\
・鹿野院平蔵を追加<BR>\
・久岐忍と夜蘭の並びを修正<BR>\
・久岐忍と夜蘭の画像を変更<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2022/04/16</b><BR>\
更新。<BR>\
・夜蘭を追加<BR>\
・久岐忍を追加<BR>\
・符文の歯車の計算を追加<BR>\
・JavaScriptの容量軽減<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2022/04/08</b><BR>\
更新。<BR>\
・特産品の場所の変更<BR>\
・一部キャラクターの立ち絵画像を変更<BR>\
・JavaScriptの容量軽減<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2022/02/17</b><BR>\
更新。<BR>\
・計算ページの表示のずれの修正<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2022/02/17</b><BR>\
更新。<BR>\
・神里綾人の実装<BR>\
・八重神子の実装<BR>\
・凶将の手眼の計算を実装<BR>\
・禍神の禊涙の計算を実装<BR>\
・万劫の真意の計算を実装<BR>\
・一部キャラクターの立ち絵画像を変更<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2022/01/10</b><BR>\
更新。<BR>\
・雲菫の実装<BR>\
・申鶴の実装<BR>\
・一部キャラクター名の修正・変更<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2021/12/08</b><BR>\
更新。<BR>\
・セーブ形式の変更<BR>\
・JavaScriptの軽量化（セーブ、ロード、及び非同期処理に伴う待機方法の改善）<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2021/11/30</b><BR>\
更新。<BR>\
・セーブ方式の変更（CookieからlocalStrageへ）<BR>\
<BR>\
既知の問題。<BR>\
・セーブ方式変更に伴うロードエラー<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR>\
必要なご対応。<BR>\
・画面右上のOld Loadボタンを押した後にSaveボタンを押して下さい。（一度だけで大丈夫です。）<BR>\
<BR><BR>\
<b>2021/11/28</b><BR>\
更新。<BR>\
・ゴローの実装<BR>\
・荒瀧一斗の実装<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2021/11/03</b><BR>\
更新。<BR>\
・トーマの実装<BR>\
<BR>\
既知の問題。<BR>\
・新規セーブ項目の実装時のロードエラー問題<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR>\
必要なご対応。<BR>\
・画面右上のFixボタンを押した後にロードして下さい。<BR>\
<BR><BR>\
<b>2021/10/23</b><BR>\
更新。<BR>\
・王冠の計算を実装<BR>\
・ユウトウタケの計算を実装<BR>\
・モラの計算を改善<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2021/10/15</b><BR>\
更新。<BR>\
・突破、天賦に必要なモラの計算を追加<BR>\
・画像の軽量化<BR>\
・処理の軽量化<BR>\
<BR>\
既知の問題。<BR>\
・王冠の計算実装先送り<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2021/10/14</b><BR>\
更新。<BR>\
・アーロイを追加（アンバーの下）<BR>\
<BR>\
不具合の修正。<BR>\
・データ更新時にロードエラーが発生する可能性を修正<BR>\
・イグサの計算が出来ていない問題の修正<BR>\
・抗争と詩文の場所が逆になっていた問題の修正<BR>\
・胡桃と魈の場所が逆になっていた問題の修正<BR>\
・香菱の元素爆発の天賦本計算が間違っていた問題の修正<BR>\
・凝光の元素爆発の天賦本計算が間違っていた問題の修正<BR>\
<BR>\
必要なご対応。<BR>\
・抗争、詩文の所持数の入力に差異が生じている可能性があるので確認をお願いします。<BR>\
<BR>\
既知の問題。<BR>\
・王冠の計算、突破、天賦時のモラの計算の実装先送り<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2021/10/13</b><BR>\
サイトの公開。<BR>\
・春の道に踏み出す。<BR>\
<BR>\
既知の問題。<BR>\
・王冠の計算、突破時や天賦系のモラの計算が面倒なので後送りになってる。<BR>\
・サイトのソースとか見れば分かるけど雑なので、誰か助けて下さい。<BR>\
  ');

  

  OpenScript();
}



// [計算] - レベル関連 / モラ関連
function Exp_Calculator() {
  var Ex_Volume = parseInt("0")
  var Ex_Volume_El = document.getElementsByClassName("Ex_Volume")
  for (var i = 0; i < Ex_Volume_El.length; i++) {
    var Ex_NoC_Volume = Ex_Volume_El[i].textContent.replace(/,/g, '');
    var Ex_Volume = Ex_Volume + parseInt(Ex_NoC_Volume)
  }
  var Ex_Volume_Book = (Ex_Volume / 1000)
  var Ex_Volume_Mora = (Ex_Volume * 0.2)
  var In_Character_EXP_Material
  = parseInt(document.getElementById("Heros_Wit").value) * 20000
  + parseInt(document.getElementById("Adventurers_Experience").value) * 5000
  + parseInt(document.getElementById("Wanderers_Advice").value) * 1000
  var Ne_Character_EXP_Material = ((Ex_Volume - In_Character_EXP_Material) / 1000)
  var In_Character_EXP_Material = (In_Character_EXP_Material / 1000)
  document.getElementById('Ex_Volume').innerHTML = Ex_Volume.toLocaleString();
  document.getElementById('Ex_Volume_Book').innerHTML = Ex_Volume_Book.toLocaleString();
  document.getElementById('Ex_Volume_Mora').innerHTML = Ex_Volume_Mora.toLocaleString();
  document.getElementById('In_Character_EXP_Material').innerHTML = In_Character_EXP_Material.toLocaleString();
  document.getElementById('Ne_Character_EXP_Material').innerHTML = Ne_Character_EXP_Material.toLocaleString();
  var As_Mora_Volume= parseInt("0")
  var As_Mora_El = document.getElementsByClassName("Mora Ascension")
  for (var i = 0; i < As_Mora_El.length; i++) {
    var As_Mora_NoC_Volume = As_Mora_El[i].textContent.replace(/,/g, '');
    var As_Mora_Volume = As_Mora_Volume + parseInt(As_Mora_NoC_Volume)
  }
  var Ta_Mora_Volume= parseInt("0")
  var Ta_Mora_El = document.getElementsByClassName("Mora Talent")
  for (var i = 0; i < Ta_Mora_El.length; i++) {
    var Ta_Mora_NoC_Volume = Ta_Mora_El[i].textContent.replace(/,/g, '');
    var Ta_Mora_Volume = Ta_Mora_Volume + parseInt(Ta_Mora_NoC_Volume)
  }
  var All_Mora_Volume = Ex_Volume_Mora + As_Mora_Volume + Ta_Mora_Volume
  var In_Mora_Volume = parseInt(document.getElementById("Mora").value)
  var Ne_Mora_Volume = All_Mora_Volume - In_Mora_Volume
  document.getElementById('As_Mora_Volume').innerHTML = As_Mora_Volume.toLocaleString();
  document.getElementById('Ta_Mora_Volume').innerHTML = Ta_Mora_Volume.toLocaleString();
  document.getElementById('All_Mora_Volume').innerHTML = All_Mora_Volume.toLocaleString();
  document.getElementById('In_Mora_Volume').innerHTML = In_Mora_Volume.toLocaleString();
  document.getElementById('Ne_Mora_Volume').innerHTML = Ne_Mora_Volume.toLocaleString();
}
// [計算] - 王冠
function Crown_Calculator() {
  var Crown_of_Insight_Volume = parseInt("0")
  var Crown_of_Insight_El = document.getElementsByClassName("Crown_of_Insight")
  for (var i = 0; i < Crown_of_Insight_El.length; i++) {
    var Crown_of_Insight_Volume = Crown_of_Insight_Volume + parseInt(Crown_of_Insight_El[i].textContent)
  }
  var In_Crown_of_Insight_Volume = parseInt(document.getElementById("Crown_of_Insight").value)
  var Ne_Crown_of_Insight_Volume = Crown_of_Insight_Volume - In_Crown_of_Insight_Volume
  document.getElementById('Crown_of_Insight_Volume').innerHTML = Crown_of_Insight_Volume;
  document.getElementById('In_Crown_of_Insight_Volume').innerHTML = In_Crown_of_Insight_Volume;
  document.getElementById('Ne_Crown_of_Insight_Volume').innerHTML = Ne_Crown_of_Insight_Volume;
}
// [計算] - 宝石
function Jewels_Calculator() {
  var Get_JewelsList = document.querySelectorAll('span[class="Calculator Jewels"]');
  for (var i = 0; i < Get_JewelsList.length; i++) {
    Jewels_Name = Get_JewelsList[i].id.slice(0, -7);
    if (!!Jewels_Name) {
      Jewels_Calculator_Go();
    }
  }
}
function Jewels_Calculator_Go() {
  eval(`
  var ${Jewels_Name}_Volume = parseInt("0")
  var ${Jewels_Name}_El = document.getElementsByClassName("${Jewels_Name}")
  for (var i = 0; i < ${Jewels_Name}_El.length; i++) {
    var ${Jewels_Name}_Volume = ${Jewels_Name}_Volume + parseInt(${Jewels_Name}_El[i].textContent)
  }
  var In_${Jewels_Name}_Volume
  = parseInt(document.getElementById("${Jewels_Name}_Gemstone").value) * 27
  + parseInt(document.getElementById("${Jewels_Name}_Chunk").value) * 9
  + parseInt(document.getElementById("${Jewels_Name}_Fragment").value) * 3
  + parseInt(document.getElementById("${Jewels_Name}_Sliver").value) * 1
  var Ne_${Jewels_Name}_Volume = ${Jewels_Name}_Volume - In_${Jewels_Name}_Volume
  document.getElementById('${Jewels_Name}_Volume').innerHTML = ${Jewels_Name}_Volume;
  document.getElementById('In_${Jewels_Name}_Volume').innerHTML = In_${Jewels_Name}_Volume;
  document.getElementById('Ne_${Jewels_Name}_Volume').innerHTML = Ne_${Jewels_Name}_Volume;
  `);
}
// [計算] - エリアボス素材
function Elemental_Stones_Calculator() {
  var Get_ESList = document.querySelectorAll('span[class="Calculator Elemental_Stones"]');
  for (var i = 0; i < Get_ESList.length; i++) {
    Elemental_Stones_Name = Get_ESList[i].id.slice(0, -7);
    if (!!Elemental_Stones_Name) {
      Elemental_Stones_Calculator_Go();
    }
  }
}
function Elemental_Stones_Calculator_Go() {
  eval(`
  var ${Elemental_Stones_Name}_Volume = parseInt("0")
  var ${Elemental_Stones_Name}_El = document.getElementsByClassName("${Elemental_Stones_Name}")
  for (var i = 0; i < ${Elemental_Stones_Name}_El.length; i++) {
    var ${Elemental_Stones_Name}_Volume = ${Elemental_Stones_Name}_Volume + parseInt(${Elemental_Stones_Name}_El[i].textContent)
  }
  var In_${Elemental_Stones_Name}_Volume = parseInt(document.getElementById("${Elemental_Stones_Name}").value)
  var Ne_${Elemental_Stones_Name}_Volume = ${Elemental_Stones_Name}_Volume - In_${Elemental_Stones_Name}_Volume
  document.getElementById('${Elemental_Stones_Name}_Volume').innerHTML = ${Elemental_Stones_Name}_Volume;
  document.getElementById('In_${Elemental_Stones_Name}_Volume').innerHTML = In_${Elemental_Stones_Name}_Volume;
  document.getElementById('Ne_${Elemental_Stones_Name}_Volume').innerHTML = Ne_${Elemental_Stones_Name}_Volume;
  `);
}
// [計算] - モブ敵素材
function Common_Material_Calculator() {
  var Get_CMList = document.querySelectorAll('span[class="Calculator Common_Material"]');
  for (var i = 0; i < Get_CMList.length; i++) {
    Common_Material_Names = Get_CMList[i].id.slice(0, -7);
    if (!!Common_Material_Names) {
      Common_Material_Name = Common_Material_Names.split(" ")[2];
      Common_Material_Name3 = Common_Material_Names.split(" ")[1];
      Common_Material_Name9 = Common_Material_Names.split(" ")[0];
      Common_Material_Calculator_Go();
    }
  }
}
function Common_Material_Calculator_Go() {
  eval(`
  var As_${Common_Material_Name}_Volume = parseInt("0")
  var As_${Common_Material_Name}_El = document.getElementsByClassName("${Common_Material_Name} Ascension")
  for (var i = 0; i < As_${Common_Material_Name}_El.length; i++) {
    var As_${Common_Material_Name}_Volume = As_${Common_Material_Name}_Volume + parseInt(As_${Common_Material_Name}_El[i].textContent)
  }
  var Ta_${Common_Material_Name}_Volume = parseInt("0")
  var Ta_${Common_Material_Name}_El = document.getElementsByClassName("${Common_Material_Name} Talent")
  for (var i = 0; i < Ta_${Common_Material_Name}_El.length; i++) {
    var Ta_${Common_Material_Name}_Volume = Ta_${Common_Material_Name}_Volume + parseInt(Ta_${Common_Material_Name}_El[i].textContent)
  }
  var In_${Common_Material_Name}_Volume
  = parseInt(document.getElementById("${Common_Material_Name}").value) * 9
  + parseInt(document.getElementById("${Common_Material_Name3}").value) * 3
  + parseInt(document.getElementById("${Common_Material_Name9}").value) * 1
  var ${Common_Material_Name}_Volume = As_${Common_Material_Name}_Volume + Ta_${Common_Material_Name}_Volume
  var Ne_${Common_Material_Name}_Volume = ${Common_Material_Name}_Volume - In_${Common_Material_Name}_Volume
  document.querySelector('span[id*="${Common_Material_Name}_Volume"]').innerHTML = ${Common_Material_Name}_Volume;
  document.getElementById('As_${Common_Material_Name}_Volume').innerHTML = As_${Common_Material_Name}_Volume;
  document.getElementById('Ta_${Common_Material_Name}_Volume').innerHTML = Ta_${Common_Material_Name}_Volume;
  document.getElementById('In_${Common_Material_Name}_Volume').innerHTML = In_${Common_Material_Name}_Volume;
  document.getElementById('Ne_${Common_Material_Name}_Volume').innerHTML = Ne_${Common_Material_Name}_Volume;
  `);
}
// [計算] - 特産品
function Local_Material_Calculator() {
  var Get_LMList = document.querySelectorAll('span[class="Calculator Local_Material"]');
  for (var i = 0; i < Get_LMList.length; i++) {
    Local_Material_Name = Get_LMList[i].id.slice(0, -7);
    if (!!Local_Material_Name) {
      Local_Material_Calculator_Go();
    }
  }
}
function Local_Material_Calculator_Go() {
  eval(`
  var ${Local_Material_Name}_Volume = parseInt("0")
  var ${Local_Material_Name}_El = document.getElementsByClassName("${Local_Material_Name}")
  for (var i = 0; i < ${Local_Material_Name}_El.length; i++) {
    var ${Local_Material_Name}_Volume = ${Local_Material_Name}_Volume + parseInt(${Local_Material_Name}_El[i].textContent)
  }
  var In_${Local_Material_Name}_Volume = parseInt(document.getElementById("${Local_Material_Name}").value)
  var Ne_${Local_Material_Name}_Volume = ${Local_Material_Name}_Volume - In_${Local_Material_Name}_Volume
  document.getElementById('${Local_Material_Name}_Volume').innerHTML = ${Local_Material_Name}_Volume;
  document.getElementById('In_${Local_Material_Name}_Volume').innerHTML = In_${Local_Material_Name}_Volume;
  document.getElementById('Ne_${Local_Material_Name}_Volume').innerHTML = Ne_${Local_Material_Name}_Volume;
  `);
}
// [計算] - 天賦本
function Talent_Book_Calculator() {
  var Get_TLUMList = document.querySelectorAll('span[class="Calculator Talent_Level_Up_Material"]');
  for (var i = 0; i < Get_TLUMList.length; i++) {
    Talent_Book_Name = Get_TLUMList[i].id.slice(5, -7);
    if (!!Talent_Book_Name) {
      Talent_Book_Calculator_Go();
    }
  }
}
function Talent_Book_Calculator_Go() {
  eval(`
  var ${Talent_Book_Name}_Volume = parseInt("0")
  var ${Talent_Book_Name}_El = document.getElementsByClassName("${Talent_Book_Name}")
  for (var i = 0; i < ${Talent_Book_Name}_El.length; i++) {
    var ${Talent_Book_Name}_Volume = ${Talent_Book_Name}_Volume + parseInt(${Talent_Book_Name}_El[i].textContent)
  }
  var In_${Talent_Book_Name}_Volume
  = parseInt(document.getElementById("Philosophies_of_${Talent_Book_Name}").value) * 9
  + parseInt(document.getElementById("Guide_to_${Talent_Book_Name}").value) * 3
  + parseInt(document.getElementById("Teachings_of_${Talent_Book_Name}").value) * 1
  var Ne_${Talent_Book_Name}_Volume = ${Talent_Book_Name}_Volume - In_${Talent_Book_Name}_Volume
  document.getElementById('TLUM_${Talent_Book_Name}_Volume').innerHTML = ${Talent_Book_Name}_Volume;
  document.getElementById('In_TLUM_${Talent_Book_Name}_Volume').innerHTML = In_${Talent_Book_Name}_Volume;
  document.getElementById('Ne_TLUM_${Talent_Book_Name}_Volume').innerHTML = Ne_${Talent_Book_Name}_Volume;
  `);
}
// [計算] - 週ボス素材
function Talent_Boss_Calculator() {
  var Get_TLUMList2 = document.querySelectorAll('span[class="Calculator Talent_Level_Up_Material_2"]');
  for (var i = 0; i < Get_TLUMList2.length; i++) {
    Talent_Boss_Name = Get_TLUMList2[i].id.slice(0, -7);
    if (!!Talent_Boss_Name) {
      Talent_Boss_Calculator_Go();
    }
  }
}
function Talent_Boss_Calculator_Go() {
  eval(`
  var ${Talent_Boss_Name}_Volume = parseInt("0")
  var ${Talent_Boss_Name}_El = document.getElementsByClassName("${Talent_Boss_Name}")
  for (var i = 0; i < ${Talent_Boss_Name}_El.length; i++) {
    var ${Talent_Boss_Name}_Volume = ${Talent_Boss_Name}_Volume + parseInt(${Talent_Boss_Name}_El[i].textContent)
  }
  var In_${Talent_Boss_Name}_Volume = parseInt(document.getElementById("${Talent_Boss_Name}").value)
  var Ne_${Talent_Boss_Name}_Volume = ${Talent_Boss_Name}_Volume - In_${Talent_Boss_Name}_Volume
  document.getElementById('${Talent_Boss_Name}_Volume').innerHTML = ${Talent_Boss_Name}_Volume;
  document.getElementById('In_${Talent_Boss_Name}_Volume').innerHTML = In_${Talent_Boss_Name}_Volume;
  document.getElementById('Ne_${Talent_Boss_Name}_Volume').innerHTML = Ne_${Talent_Boss_Name}_Volume;
  `);
}
// [計算]
function Calculator() {
  Exp_Calculator();
  Crown_Calculator();
  Jewels_Calculator();
  Elemental_Stones_Calculator();
  Common_Material_Calculator();
  Local_Material_Calculator();
  Talent_Book_Calculator();
  Talent_Boss_Calculator();
}
document.getElementsByClassName("Calculator")[0].addEventListener("click",() => {
  Calculator();
}, false);

// キャラクターの非表示処理
function HideCharacter(CharaID) {
  eval(`
  if (!document.querySelector('th[class*="${CharaID}"]').classList.contains("hides")) {
    document.querySelector('th[class="${CharaID}"]').classList.add("hides");
    document.querySelector('th[class*="${CharaID}"]').innerText = \
    "レベル：" + ${CharaID}_Ex.noUiSlider.get()[0] + "/" + ${CharaID}_Ex.noUiSlider.get()[1] + "　\
    突破段階：" + ${CharaID}_Pr.noUiSlider.get()[0] + "/" + ${CharaID}_Pr.noUiSlider.get()[1] + "　\
    通常攻撃：" + ${CharaID}_T1.noUiSlider.get()[0] + "/" + ${CharaID}_T1.noUiSlider.get()[1] + "　\
    元素スキル：" + ${CharaID}_T2.noUiSlider.get()[0] + "/" + ${CharaID}_T2.noUiSlider.get()[1] + "　\
    元素爆発：" + ${CharaID}_T3.noUiSlider.get()[0] + "/" +${CharaID}_T3.noUiSlider.get()[1] + "";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[3].style.display = "none";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[5].style.display = "none";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[7].style.display = "none";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[9].style.display = "none";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[11].style.display = "none";
  } else {
    document.querySelector('th[class="${CharaID} hides"]').classList.remove("hides");
    document.querySelector('th[class="${CharaID}"]').innerText = "";
    document.querySelector('table[class="${CharaID}"]').childNodes[1].childNodes[3].style.display = "";
    document.querySelector('table[class="${CharaID}"]').childNodes[1].childNodes[5].style.display = "";
    document.querySelector('table[class="${CharaID}"]').childNodes[1].childNodes[7].style.display = "";
    document.querySelector('table[class="${CharaID}"]').childNodes[1].childNodes[9].style.display = "";
    document.querySelector('table[class="${CharaID}"]').childNodes[1].childNodes[11].style.display = "";
  }
  `);
}
// キャラクターの非表示処理2
function HideCharacterLoad(CharaID) {
  eval(`
    document.querySelector('th[class*="${CharaID}"]').innerText = \
    "レベル：" + ${CharaID}_Ex.noUiSlider.get()[0] + "/" + ${CharaID}_Ex.noUiSlider.get()[1] + "　\
    突破段階：" + ${CharaID}_Pr.noUiSlider.get()[0] + "/" + ${CharaID}_Pr.noUiSlider.get()[1] + "　\
    通常攻撃：" + ${CharaID}_T1.noUiSlider.get()[0] + "/" + ${CharaID}_T1.noUiSlider.get()[1] + "　\
    元素スキル：" + ${CharaID}_T2.noUiSlider.get()[0] + "/" + ${CharaID}_T2.noUiSlider.get()[1] + "　\
    元素爆発：" + ${CharaID}_T3.noUiSlider.get()[0] + "/" +${CharaID}_T3.noUiSlider.get()[1] + "";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[3].style.display = "none";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[5].style.display = "none";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[7].style.display = "none";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[9].style.display = "none";
    document.querySelector('table[class*="${CharaID}"]').childNodes[1].childNodes[11].style.display = "none";
  `);
}

// セーブ系
function Save() {
  localStorage.setItem("_Version", Version);
  var CharacterSave = [...document.getElementsByClassName("noUiSlider")].map(CharacterList=>{
    var [Min,Max] = CharacterList.noUiSlider.get();
    Character[`${CharacterList.id}`] = `${Min}` + ":" + `${Max}`;
    return localStorage.setItem("Character", JSON.stringify(Character));
  });
  var InventorySave = [...document.getElementsByClassName("validate")].map(InventoryList=>{
    var Value = document.getElementById(`${InventoryList.id}`).value;
    if (!`${Value}`) {var Value = "0"}
    Inventory[`${InventoryList.id}`] = `${Value}`;
    return localStorage.setItem("Inventory", JSON.stringify(Inventory));
  });
  var HideInfoSave = [...document.querySelectorAll('th[colspan="17"]')].map(Text=>{
    if (`${Text.classList.contains("hides")}` != "true") {
      var Value = "0";
    } else {
      var Value = "1";
    }
    return `${Text.className.split(" ")[0]}` + ":" + `${Value}`;
  });
  var HideInfoSave = JSON.stringify(HideInfoSave).replace(/\[/g, '{');
  var HideInfoSave = HideInfoSave.replace(/\]/g, '}');
  var HideInfoSave = HideInfoSave.replace(/:/g, '": "');
  localStorage.setItem("HideCharacter", HideInfoSave);
}
document.getElementById('Save').onclick = function changeContent() {
  Save();
  M.toast({
    html: 'Saved',
    displayLength: '1000'
  })
}

// ロード系
function Load() {
  var CharacterData1 = localStorage.getItem("Character");
  var CharacterData2 = CharacterData1.replace(/\{(.*)?\}/g, '$1');
  var CharacterData3 = CharacterData2.replace(/\\"/g, '');
  var CharacterData4 = CharacterData3.replace(/"/g, '');
  var CharacterData5 = CharacterData4.split( ',' );
  for (var i = 0; i < CharacterData5.length; i++) {
    var CharacterData6 = CharacterData5[i].split( ':' );
    eval(`${CharacterData6[0]}.noUiSlider.set([${CharacterData6[1]}, ${CharacterData6[2]}])`);
  }
  var InventoryData1 = localStorage.getItem("Inventory");
  var InventoryData2 = InventoryData1.replace(/\{(.*)?\}/g, '$1');
  var InventoryData3 = InventoryData2.replace(/\\"/g, '');
  var InventoryData4 = InventoryData3.replace(/"/g, '');
  var InventoryData5 = InventoryData4.split( ',' );
  for (var i = 0; i < InventoryData5.length; i++) {
    var InventoryData6 = InventoryData5[i].split( ':' );
    try{document.getElementById(InventoryData6[0]).value = InventoryData6[1]}catch(e){};
  }
  var HideCharacterData = document.querySelectorAll('th[class*="hides"]');
  for (var i = 0; i < HideCharacterData.length; i++) {
    HideCharacterLoad(HideCharacterData[i].className.split(" ")[0]);
  }
}
document.getElementById('Load').onclick = function changeContent() {
  if (!localStorage.getItem("Character")) {
  alert("Honey Apricot - Material Calculator\n\nセーブデータが存在しません。")
  }  else  {
    Load();
    Calculator();
    M.toast({
      html: 'Loaded',
      displayLength: '1000'
    })
  }
}

// エクスポート
function Export() {
  var json = "EICharacter" + localStorage.getItem("Character") + "EIInventory" + localStorage.getItem("Inventory");
  var blob = new Blob([json], { type: 'application/json' });
  var ExportEl = document.createElement('a');
  document.body.appendChild(ExportEl);
  ExportEl.href = window.URL.createObjectURL(blob);
  ExportEl.download = 'Honey Apricot_genshinvideo.github.io.json';
  ExportEl.click();
  document.body.removeChild(ExportEl);
  M.toast({
    html: 'Exported',
    displayLength: '1000'
  })
}

// インポート
function Import() {
  var ImportEl = document.createElement('input');
  document.body.appendChild(ImportEl);
  ImportEl.type = "file";
  ImportEl.accept = ".json";
  ImportEl.click();
  ImportEl.addEventListener("change", e => {
    var result = e.target.files[0];
    var reader = new FileReader();
    reader.readAsText(result);
    reader.addEventListener("load", () => {
      var ImportCharacter = reader.result.replace(/.*EICharacter(.*)EIInventory.*/g, '$1');
      var ImportInventory = reader.result.replace(/.*EIInventory(.*).*/g, '$1');
      localStorage.setItem("Character", ImportCharacter);
      localStorage.setItem("Inventory", ImportInventory);
      Load();
      Calculator();
      M.toast({
        html: 'Imported',
        displayLength: '1000'
      })
    });
  });
  document.body.removeChild(ImportEl);
}

function CML80() {
  var C_Ex ="_Ex";
  var CharacterSave = [...document.getElementsByClassName("noUiSlider")].map(CharacterList=>{
    var [Min,Max] = CharacterList.noUiSlider.get();
    var C_Id  = `${CharacterList.id}`;
    if((C_Id.lastIndexOf(C_Ex)+C_Ex.length===C_Id.length)&&(C_Ex.length<=C_Id.length)){
      if (`${Min}` !== "90") {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, "80"])`);
      }
    }
  });
  Calculator();
  M.toast({
    html: 'Max level of character to 80',
    displayLength: '1000'
  })
}

function TML9() {
  var C_T1 ="_T1";
  var C_T2 ="_T2";
  var C_T3 ="_T3";
  var CharacterSave = [...document.getElementsByClassName("noUiSlider")].map(CharacterList=>{
    var [Min,Max] = CharacterList.noUiSlider.get();
    var C_Id  = `${CharacterList.id}`;
    if((C_Id.lastIndexOf(C_T1)+C_T1.length===C_Id.length)&&(C_T1.length<=C_Id.length)){
      if (`${Min}` <= "9") {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, "9"])`);
      }
    }
    if((C_Id.lastIndexOf(C_T2)+C_T2.length===C_Id.length)&&(C_T2.length<=C_Id.length)){
      if (`${Min}` <= "9") {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, "9"])`);
      }
    }
    if((C_Id.lastIndexOf(C_T3)+C_T3.length===C_Id.length)&&(C_T3.length<=C_Id.length)){
      if (`${Min}` <= "9") {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, "9"])`);
      }
    }
  });
  Calculator();
  M.toast({
    html: 'Max level of talent to 9',
    displayLength: '1000'
  })
}

function TML6() {
  var C_T1 ="_T1";
  var C_T2 ="_T2";
  var C_T3 ="_T3";
  var CharacterSave = [...document.getElementsByClassName("noUiSlider")].map(CharacterList=>{
    var [Min,Max] = CharacterList.noUiSlider.get();
    var C_Id  = `${CharacterList.id}`;
    if((C_Id.lastIndexOf(C_T1)+C_T1.length===C_Id.length)&&(C_T1.length<=C_Id.length)){
      if (`${Min}` <= "6") {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, "6"])`);
      }
    }
    if((C_Id.lastIndexOf(C_T2)+C_T2.length===C_Id.length)&&(C_T2.length<=C_Id.length)){
      if (`${Min}` <= "6") {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, "6"])`);
      }
    }
    if((C_Id.lastIndexOf(C_T3)+C_T3.length===C_Id.length)&&(C_T3.length<=C_Id.length)){
      if (`${Min}` <= "6") {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, "6"])`);
      }
    }
  });
  Calculator();
  M.toast({
    html: 'Max level of talent to 6',
    displayLength: '1000'
  })
}

// ページ読み込み時の処理
function OpenScript() {
  function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }
  addGlobalStyle('html, body {overflow: visible;}');
  document.querySelector('div[id="load"]').remove();
  if (!localStorage.getItem("_Version")) {
    alert("Honey Apricot - Material Calculator ver." + Version + "\n\n『Material Calculator』へようこそ！\n")
  }  else  {
    if (!(localStorage.getItem("_Version") === Version)) {
      Load();
      alert("Honey Apricot - Material Calculator\n\n更新情報（ver.20220831 to ver." + Version + "）\n・ニィロウ、セノ、キャンディスの実装に対応\n・赤念の実、聖金虫の実装に対応\n・永続コア、導光四面体の実装に対応\n\n既知の問題。\n・サイトのHtmlやJavaScriptの軽量化問題\n（協力者募集中『@Sakura_Kocho』までお願いします。）");
    }  else  {
      Load();
    }
  }
}