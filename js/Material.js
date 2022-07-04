var Version = "20220704"

httpObj = new XMLHttpRequest();
httpObj.open("get", "Material.json", true);
httpObj.onload = function(){}
httpObj.send(null);

// キャラクター項目の生成
function SetCharacterList() {
  if ( !document.querySelector('div[id="Character"]') ) {
    console.log("読み込み中1")
    setTimeout( SetCharacterList, 100 );
    return;
  }
  if ( !httpObj.response ) {
    console.log("読み込み中2")
    setTimeout( SetCharacterList, 100 );
    return;
  }
  ChaEle = document.querySelector('div[id="Character"]');

// 鹿野院平蔵
  S_Id =          "Shikanoin_Heizou";
  S_JpName =      "鹿野院平蔵";
  S_CharaImg =    "Original/Character/Character_Shikanoin_Heizou_Portrait.webp";
  S_Element1 =    "Vayuda_Turquoise";
  S_Element2 =    "Turquoise";
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
  S_Element1 =    "Vajrada_Amethyst";
  S_Element2 =    "Amethyst";
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
  S_Element1 =    "Varunada_Lazurite";
  S_Element2 =    "Lazurite";
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
  S_Element1 =    "Varunada_Lazurite";
  S_Element2 =    "Lazurite";
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
  S_Element1 =    "Vajrada_Amethyst";
  S_Element2 =    "Amethyst";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
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
  S_Element1 =    "Prithiva_Topaz";
  S_Element2 =    "Topaz";
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
  S_Element1 =    "Prithiva_Topaz";
  S_Element2 =    "Topaz";
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
  S_Element1 =    "Prithiva_Topaz";
  S_Element2 =    "Topaz";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Varunada_Lazurite";
  S_Element2 =    "Lazurite";
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
  S_Element1 =    "Vajrada_Amethyst";
  S_Element2 =    "Amethyst";
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
  S_Element1 =    "Vajrada_Amethyst";
  S_Element2 =    "Amethyst";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Vayuda_Turquoise";
  S_Element2 =    "Turquoise";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
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
  S_Element1 =    "Vayuda_Turquoise";
  S_Element2 =    "Turquoise";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Vayuda_Turquoise";
  S_Element2 =    "Turquoise";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
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
  S_Element1 =    "Prithiva_Topaz";
  S_Element2 =    "Topaz";
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
  S_Element1 =    "Prithiva_Topaz";
  S_Element2 =    "Topaz";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Varunada_Lazurite";
  S_Element2 =    "Lazurite";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Vayuda_Turquoise";
  S_Element2 =    "Turquoise";
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
  S_Element1 =    "Vajrada_Amethyst";
  S_Element2 =    "Amethyst";
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
  S_Element1 =    "Varunada_Lazurite";
  S_Element2 =    "Lazurite";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Vayuda_Turquoise";
  S_Element2 =    "Turquoise";
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
  S_Element1 =    "Vayuda_Turquoise";
  S_Element2 =    "Turquoise";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
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
  S_Element1 =    "Prithiva_Topaz";
  S_Element2 =    "Topaz";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Vajrada_Amethyst";
  S_Element2 =    "Amethyst";
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
  S_Element1 =    "Prithiva_Topaz";
  S_Element2 =    "Topaz";
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
  S_Element1 =    "Varunada_Lazurite";
  S_Element2 =    "Lazurite";
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
  S_Element1 =    "Vajrada_Amethyst";
  S_Element2 =    "Amethyst";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Vajrada_Amethyst";
  S_Element2 =    "Amethyst";
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
  S_Element1 =    "Varunada_Lazurite";
  S_Element2 =    "Lazurite";
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
  S_Element1 =    "Vajrada_Amethyst";
  S_Element2 =    "Amethyst";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
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
  S_Element1 =    "Agnidus_Agate";
  S_Element2 =    "Agate";
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
  S_Element1 =    "Shivada_Jade";
  S_Element2 =    "Jade";
  S_Boss =        "Crystalline_Bloom";
  S_Local =       "Crystal_Marrow";
  S_Common =      "Spectral_Nucleus";
  S_Talent1 =     "Freedom";
  S_Talent2 =     "Molten_Moment";
  Checkmate();


  OpenScript();
}
SetCharacterList();

function CharacterSet() {
  eval(`
    ChaEle.insertAdjacentHTML('beforeend', '\
      <table class="${S_Id}">\
        <tbody>\
          <tr>\
            <th colspan="25">${S_JpName}</th>\
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
            <td colspan="1"><img class="icon" src="../image/Small/Item/Item_${S_Element1}_Gemstone.webp"></td>\
            <td colspan="2" class="textright"><span class="${S_Id} ${S_Element2}" id="${S_Id}_Pr_P1_Volume"></span> 点</td>\
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
  CharacterSet();
  SliderCreate();
  SliderLoad();
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
// [計算] - アゲート
  var Agate_Volume = parseInt("0")
  var Agate_El = document.getElementsByClassName("Agate")
  for (var i = 0; i < Agate_El.length; i++) {
    var Agate_Volume = Agate_Volume + parseInt(Agate_El[i].textContent)
  }
  var In_Agate_Volume
  = parseInt(document.getElementById("Agate_Gemstone").value) * 27
  + parseInt(document.getElementById("Agate_Chunk").value) * 9
  + parseInt(document.getElementById("Agate_Fragment").value) * 3
  + parseInt(document.getElementById("Agate_Sliver").value) * 1
  var Ne_Agate_Volume = Agate_Volume - In_Agate_Volume
  document.getElementById('Agate_Volume').innerHTML = Agate_Volume;
  document.getElementById('In_Agate_Volume').innerHTML = In_Agate_Volume;
  document.getElementById('Ne_Agate_Volume').innerHTML = Ne_Agate_Volume;
// [計算] - ラピスラズリ
  var Lazurite_Volume = parseInt("0")
  var Lazurite_El = document.getElementsByClassName("Lazurite")
  for (var i = 0; i < Lazurite_El.length; i++) {
    var Lazurite_Volume = Lazurite_Volume + parseInt(Lazurite_El[i].textContent)
  }
  var In_Lazurite_Volume
  = parseInt(document.getElementById("Lazurite_Gemstone").value) * 27
  + parseInt(document.getElementById("Lazurite_Chunk").value) * 9
  + parseInt(document.getElementById("Lazurite_Fragment").value) * 3
  + parseInt(document.getElementById("Lazurite_Sliver").value) * 1
  var Ne_Lazurite_Volume = Lazurite_Volume - In_Lazurite_Volume
  document.getElementById('Lazurite_Volume').innerHTML = Lazurite_Volume;
  document.getElementById('In_Lazurite_Volume').innerHTML = In_Lazurite_Volume;
  document.getElementById('Ne_Lazurite_Volume').innerHTML = Ne_Lazurite_Volume;
// [計算] - アメシスト
  var Amethyst_Volume = parseInt("0")
  var Amethyst_El = document.getElementsByClassName("Amethyst")
  for (var i = 0; i < Amethyst_El.length; i++) {
    var Amethyst_Volume = Amethyst_Volume + parseInt(Amethyst_El[i].textContent)
  }
  var In_Amethyst_Volume
  = parseInt(document.getElementById("Amethyst_Gemstone").value) * 27
  + parseInt(document.getElementById("Amethyst_Chunk").value) * 9
  + parseInt(document.getElementById("Amethyst_Fragment").value) * 3
  + parseInt(document.getElementById("Amethyst_Sliver").value) * 1
  var Ne_Amethyst_Volume = Amethyst_Volume - In_Amethyst_Volume
  document.getElementById('Amethyst_Volume').innerHTML = Amethyst_Volume;
  document.getElementById('In_Amethyst_Volume').innerHTML = In_Amethyst_Volume;
  document.getElementById('Ne_Amethyst_Volume').innerHTML = Ne_Amethyst_Volume;
// [計算] - ターコイズ
  var Turquoise_Volume = parseInt("0")
  var Turquoise_El = document.getElementsByClassName("Turquoise")
  for (var i = 0; i < Turquoise_El.length; i++) {
    var Turquoise_Volume = Turquoise_Volume + parseInt(Turquoise_El[i].textContent)
  }
  var In_Turquoise_Volume
  = parseInt(document.getElementById("Turquoise_Gemstone").value) * 27
  + parseInt(document.getElementById("Turquoise_Chunk").value) * 9
  + parseInt(document.getElementById("Turquoise_Fragment").value) * 3
  + parseInt(document.getElementById("Turquoise_Sliver").value) * 1
  var Ne_Turquoise_Volume = Turquoise_Volume - In_Turquoise_Volume
  document.getElementById('Turquoise_Volume').innerHTML = Turquoise_Volume;
  document.getElementById('In_Turquoise_Volume').innerHTML = In_Turquoise_Volume;
  document.getElementById('Ne_Turquoise_Volume').innerHTML = Ne_Turquoise_Volume;
// [計算] - アイスクリスタル
  var Jade_Volume = parseInt("0")
  var Jade_El = document.getElementsByClassName("Jade")
  for (var i = 0; i < Jade_El.length; i++) {
    var Jade_Volume = Jade_Volume + parseInt(Jade_El[i].textContent)
  }
  var In_Jade_Volume
  = parseInt(document.getElementById("Jade_Gemstone").value) * 27
  + parseInt(document.getElementById("Jade_Chunk").value) * 9
  + parseInt(document.getElementById("Jade_Fragment").value) * 3
  + parseInt(document.getElementById("Jade_Sliver").value) * 1
  var Ne_Jade_Volume = Jade_Volume - In_Jade_Volume
  document.getElementById('Jade_Volume').innerHTML = Jade_Volume;
  document.getElementById('In_Jade_Volume').innerHTML = In_Jade_Volume;
  document.getElementById('Ne_Jade_Volume').innerHTML = Ne_Jade_Volume;
// [計算] - トパーズ
  var Topaz_Volume = parseInt("0")
  var Topaz_El = document.getElementsByClassName("Topaz")
  for (var i = 0; i < Topaz_El.length; i++) {
    var Topaz_Volume = Topaz_Volume + parseInt(Topaz_El[i].textContent)
  }
  var In_Topaz_Volume
  = parseInt(document.getElementById("Topaz_Gemstone").value) * 27
  + parseInt(document.getElementById("Topaz_Chunk").value) * 9
  + parseInt(document.getElementById("Topaz_Fragment").value) * 3
  + parseInt(document.getElementById("Topaz_Sliver").value) * 1
  var Ne_Topaz_Volume = Topaz_Volume - In_Topaz_Volume
  document.getElementById('Topaz_Volume').innerHTML = Topaz_Volume;
  document.getElementById('In_Topaz_Volume').innerHTML = In_Topaz_Volume;
  document.getElementById('Ne_Topaz_Volume').innerHTML = Ne_Topaz_Volume;
// [計算] - エメラルド
  var Emerald_Volume = parseInt("0")
  var Emerald_El = document.getElementsByClassName("Emerald")
  for (var i = 0; i < Emerald_El.length; i++) {
    var Emerald_Volume = Emerald_Volume + parseInt(Emerald_El[i].textContent)
  }
  var In_Emerald_Volume
  = parseInt(document.getElementById("Emerald_Gemstone").value) * 27
  + parseInt(document.getElementById("Emerald_Chunk").value) * 9
  + parseInt(document.getElementById("Emerald_Fragment").value) * 3
  + parseInt(document.getElementById("Emerald_Sliver").value) * 1
  var Ne_Emerald_Volume = Emerald_Volume - In_Emerald_Volume
  document.getElementById('Emerald_Volume').innerHTML = Emerald_Volume;
  document.getElementById('In_Emerald_Volume').innerHTML = In_Emerald_Volume;
  document.getElementById('Ne_Emerald_Volume').innerHTML = Ne_Emerald_Volume;
}
// [計算] - エリアボス素材
function Elemental_Stones_Calculator() {
// [計算] - 暴風の種
  Elemental_Stones_Name = "Hurricane_Seed";
  Elemental_Stones_Calculator_Go();
// [計算] - 雷光のプリズム
  Elemental_Stones_Name = "Lightning_Prism";
  Elemental_Stones_Calculator_Go();
// [計算] - 玄岩の塔
  Elemental_Stones_Name = "Basalt_Pillar";
  Elemental_Stones_Calculator_Go();
// [計算] - 極寒のコア
  Elemental_Stones_Name = "Hoarfrost_Core";
  Elemental_Stones_Calculator_Go();
// [計算] - 常燃の火種
  Elemental_Stones_Name = "Everflame_Seed";
  Elemental_Stones_Calculator_Go();
// [計算] - 浄水の心
  Elemental_Stones_Name = "Cleansing_Heart";
  Elemental_Stones_Calculator_Go();
// [計算] - 未熟の玉石
  Elemental_Stones_Name = "Juvenile_Jade";
  Elemental_Stones_Calculator_Go();
// [計算] - 凝結の華
  Elemental_Stones_Name = "Crystalline_Bloom";
  Elemental_Stones_Calculator_Go();
// [計算] - 魔偶の芯
  Elemental_Stones_Name = "Marionette_Core";
  Elemental_Stones_Calculator_Go();
// [計算] - 恒常からくりの芯
  Elemental_Stones_Name = "Perpetual_Heart";
  Elemental_Stones_Calculator_Go();
// [計算] - 陰燃の珠
  Elemental_Stones_Name = "Smoldering_Pearl";
  Elemental_Stones_Calculator_Go();
// [計算] - 排他の露
  Elemental_Stones_Name = "Dew_of_Repudiation";
  Elemental_Stones_Calculator_Go();
// [計算] - 雷霆の念珠
  Elemental_Stones_Name = "Storm_Beads";
  Elemental_Stones_Calculator_Go();
// [計算] - 獣域王器
  Elemental_Stones_Name = "Riftborn_Regalia";
  Elemental_Stones_Calculator_Go();
// [計算] - ドラゴエアのニセヒレ
  Elemental_Stones_Name = "Dragonheirs_False_Fin";
  Elemental_Stones_Calculator_Go();
// [計算] - 符文の歯車
  Elemental_Stones_Name = "Runic_Fang";
  Elemental_Stones_Calculator_Go();
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
// [計算] - スライム
  Common_Material_Name = "Slime_Concentrate";
  Common_Material_Name3 = "Slime_Secretions";
  Common_Material_Name9 = "Slime_Condensate";
  Common_Material_Calculator_Go();
// [計算] - 仮面
  Common_Material_Name = "Ominous_Mask";
  Common_Material_Name3 = "Stained_Mask";
  Common_Material_Name9 = "Damaged_Mask";
  Common_Material_Calculator_Go();
// [計算] - 絵巻
  Common_Material_Name = "Forbidden_Curse_Scroll";
  Common_Material_Name3 = "Sealed_Scroll";
  Common_Material_Name9 = "Divining_Scroll";
  Common_Material_Calculator_Go();
// [計算] - 矢先
  Common_Material_Name = "Weathered_Arrowhead";
  Common_Material_Name3 = "Sharp_Arrowhead";
  Common_Material_Name9 = "Firm_Arrowhead";
  Common_Material_Calculator_Go();
// [計算] - 記章
  Common_Material_Name = "Lieutenants_Insignia";
  Common_Material_Name3 = "Sergeants_Insignia";
  Common_Material_Name9 = "Recruits_Insignia";
  Common_Material_Calculator_Go();
// [計算] - マーク
  Common_Material_Name = "Golden_Raven_Insignia";
  Common_Material_Name3 = "Silver_Raven_Insignia";
  Common_Material_Name9 = "Treasure_Hoarder_Insignia";
  Common_Material_Calculator_Go();
// [計算] - 蜜
  Common_Material_Name = "Energy_Nectar";
  Common_Material_Name3 = "Shimmering_Nectar";
  Common_Material_Name9 = "Whopperflower_Nectar";
  Common_Material_Calculator_Go();
// [計算] - 鍔
  Common_Material_Name = "Famed_Handguard";
  Common_Material_Name3 = "Kageuchi_Handguard";
  Common_Material_Name9 = "Old_Handguard";
  Common_Material_Calculator_Go();
// [計算] - フライム
  Common_Material_Name = "Spectral_Nucleus";
  Common_Material_Name3 = "Spectral_Heart";
  Common_Material_Name9 = "Spectral_Husk";
  Common_Material_Calculator_Go();
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
  document.getElementById('${Common_Material_Name}_Volume').innerHTML = ${Common_Material_Name}_Volume;
  document.getElementById('As_${Common_Material_Name}_Volume').innerHTML = As_${Common_Material_Name}_Volume;
  document.getElementById('Ta_${Common_Material_Name}_Volume').innerHTML = Ta_${Common_Material_Name}_Volume;
  document.getElementById('In_${Common_Material_Name}_Volume').innerHTML = In_${Common_Material_Name}_Volume;
  document.getElementById('Ne_${Common_Material_Name}_Volume').innerHTML = Ne_${Common_Material_Name}_Volume;
  `);
}
// [計算] - 特産品
function Local_Material_Calculator() {
// [計算] - ドドリアン
  Local_Material_Name = "Calla_Lily";
  Local_Material_Calculator_Go();
// [計算] - ググプラム
  Local_Material_Name = "Wolfhook";
  Local_Material_Calculator_Go();
// [計算] - ヴァルベリー
  Local_Material_Name = "Valberry";
  Local_Material_Calculator_Go();
// [計算] - セシリアの花
  Local_Material_Name = "Cecilia";
  Local_Material_Calculator_Go();
// [計算] - 風車アスター
  Local_Material_Name = "Windwheel_Aster";
  Local_Material_Calculator_Go();
// [計算] - 慕風のマッシュルーム
  Local_Material_Name = "Philanemo_Mushroom";
  Local_Material_Calculator_Go();
// [計算] - 絶雲の唐辛子
  Local_Material_Name = "Jueyun_Chili";
  Local_Material_Calculator_Go();
// [計算] - 夜泊石
  Local_Material_Name = "Noctilucous_Jade";
  Local_Material_Calculator_Go();
// [計算] - 霓裳花
  Local_Material_Name = "Silk_Flower";
  Local_Material_Calculator_Go();
// [計算] - 琉璃百合
  Local_Material_Name = "Glaze_Lily";
  Local_Material_Calculator_Go();
// [計算] - 清心
  Local_Material_Name = "Qingxin";
  Local_Material_Calculator_Go();
// [計算] - 星螺
  Local_Material_Name = "Starconch";
  Local_Material_Calculator_Go();
// [計算] - 琉璃袋
  Local_Material_Name = "Violetgrass";
  Local_Material_Calculator_Go();
// [計算] - イグサ
  Local_Material_Name = "Small_Lamp_Grass";
  Local_Material_Calculator_Go();
// [計算] - 蒲公英の種
  Local_Material_Name = "Dandelion_Seed";
  Local_Material_Calculator_Go();
// [計算] - 石珀
  Local_Material_Name = "Cor_Lapis";
  Local_Material_Calculator_Go();
// [計算] - オニカブトムシ
  Local_Material_Name = "Onikabuto";
  Local_Material_Calculator_Go();
// [計算] - 緋櫻毬
  Local_Material_Name = "Sakura_Bloom";
  Local_Material_Calculator_Go();
// [計算] - 晶化骨髄
  Local_Material_Name = "Crystal_Marrow";
  Local_Material_Calculator_Go();
// [計算] - 血石華
  Local_Material_Name = "Dendrobium";
  Local_Material_Calculator_Go();
// [計算] - 鳴草
  Local_Material_Name = "Naku_Weed";
  Local_Material_Calculator_Go();
// [計算] - ウミレイシ
  Local_Material_Name = "Sea_Ganoderma";
  Local_Material_Calculator_Go();
// [計算] - 珊瑚真珠
  Local_Material_Name = "Sango_Pearl";
  Local_Material_Calculator_Go();
// [計算] - 天雲草の実
  Local_Material_Name = "Amakumo_Fruit";
  Local_Material_Calculator_Go();
// [計算] - ユウトウタケ
  Local_Material_Name = "Fluorescent_Fungus";
  Local_Material_Calculator_Go();
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
// [計算] - 自由
  Talent_Book_Name = "Freedom";
  Talent_Book_Calculator_Go();
// [計算] - 抗争
  Talent_Book_Name = "Ballad";
  Talent_Book_Calculator_Go();
// [計算] - 詩文
  Talent_Book_Name = "Resistance";
  Talent_Book_Calculator_Go();
// [計算] - 繁栄
  Talent_Book_Name = "Prosperity";
  Talent_Book_Calculator_Go();
// [計算] - 勤労
  Talent_Book_Name = "Diligence";
  Talent_Book_Calculator_Go();
// [計算] - 黄金
  Talent_Book_Name = "Gold";
  Talent_Book_Calculator_Go();
// [計算] - 浮世
  Talent_Book_Name = "Transience";
  Talent_Book_Calculator_Go();
// [計算] - 風雅
  Talent_Book_Name = "Elegance";
  Talent_Book_Calculator_Go();
// [計算] - 天光
  Talent_Book_Name = "Light";
  Talent_Book_Calculator_Go();
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
  document.getElementById('${Talent_Book_Name}_Volume').innerHTML = ${Talent_Book_Name}_Volume;
  document.getElementById('In_${Talent_Book_Name}_Volume').innerHTML = In_${Talent_Book_Name}_Volume;
  document.getElementById('Ne_${Talent_Book_Name}_Volume').innerHTML = Ne_${Talent_Book_Name}_Volume;
  `);
}
// [計算] - 週ボス素材
function Talent_Boss_Calculator() {
// [計算] - 東風の羽根
  Talent_Boss_Name = "Dvalins_Plume";
  Talent_Boss_Calculator_Go();
// [計算] - 東風の爪
  Talent_Boss_Name = "Dvalins_Claw";
  Talent_Boss_Calculator_Go();
// [計算] - 東風の吐息
  Talent_Boss_Name = "Dvalins_Sigh";
  Talent_Boss_Calculator_Go();
// [計算] - 北風のしっぽ
  Talent_Boss_Name = "Tail_of_Boreas";
  Talent_Boss_Calculator_Go();
// [計算] - 北風のリング
  Talent_Boss_Name = "Ring_of_Boreas";
  Talent_Boss_Calculator_Go();
// [計算] - 北風の魂箱
  Talent_Boss_Name = "Spirit_Locket_of_Boreas";
  Talent_Boss_Calculator_Go();
// [計算] - 呑天の鯨・只角
  Talent_Boss_Name = "Tusk_of_Monoceros_Caeli";
  Talent_Boss_Calculator_Go();
// [計算] - 魔王の刃・残片
  Talent_Boss_Name = "Shard_of_a_Foul_Legacy";
  Talent_Boss_Calculator_Go();
// [計算] - 武煉の魂・孤影
  Talent_Boss_Name = "Shadow_of_the_Warrior";
  Talent_Boss_Calculator_Go();
// [計算] - 龍王の冠
  Talent_Boss_Name = "Dragon_Lords_Crown";
  Talent_Boss_Calculator_Go();
// [計算] - 血玉の枝
  Talent_Boss_Name = "Bloodjade_Branch";
  Talent_Boss_Calculator_Go();
// [計算] - 鍍金の鱗
  Talent_Boss_Name = "Gilded_Scale";
  Talent_Boss_Calculator_Go();
// [計算] - 溶滅の刻
  Talent_Boss_Name = "Molten_Moment";
  Talent_Boss_Calculator_Go();
// [計算] - 獄炎の蝶
  Talent_Boss_Name = "Hellfire_Butterfly";
  Talent_Boss_Calculator_Go();
// [計算] - 灰燼の心
  Talent_Boss_Name = "Ashen_Heart";
  Talent_Boss_Calculator_Go();
// [計算] - 凶将の手眼
  Talent_Boss_Name = "Mudra_of_the_Malefic_General";
  Talent_Boss_Calculator_Go();
// [計算] - 禍神の禊涙
  Talent_Boss_Name = "Tears_of_the_Calamitous_God";
  Talent_Boss_Calculator_Go();
// [計算] - 万劫の真意
  Talent_Boss_Name = "The_Meaning_of_Aeons";
  Talent_Boss_Calculator_Go();
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
  var CharacterData5 = CharacterData4.split( ',' )
  for (var i = 0; i < CharacterData5.length; i++) {
    var CharacterData6 = CharacterData5[i].split( ':' );
    eval(`${CharacterData6[0]}.noUiSlider.set([${CharacterData6[1]}, ${CharacterData6[2]}])`);
  }
  var InventoryData1 = localStorage.getItem("Inventory");
  var InventoryData2 = InventoryData1.replace(/\{(.*)?\}/g, '$1');
  var InventoryData3 = InventoryData2.replace(/\\"/g, '');
  var InventoryData4 = InventoryData3.replace(/"/g, '');
  var InventoryData5 = InventoryData4.split( ',' )
  for (var i = 0; i < InventoryData5.length; i++) {
    var InventoryData6 = InventoryData5[i].split( ':' );
    document.getElementById(InventoryData6[0]).value = InventoryData6[1]
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
  M.toast({
    html: 'Max level of talent to 6',
    displayLength: '1000'
  })
}

// ページ読み込み時の処理
function OpenScript() {
  if (!localStorage.getItem("_Version")) {
    alert("Honey Apricot - Material Calculator ver." + Version + "\n\n『Material Calculator』へようこそ！\n")
  }  else  {
    if (!(localStorage.getItem("_Version") === Version)) {
      Load();
      alert("Honey Apricot - Material Calculator\n\n更新情報（ver.20220623 to ver." + Version + "）\n・処理の大幅な変更\n・セーブデータのエクスポート、インポート機能の実装\n・仮レベル上限のボタン実装\n\n既知の問題。\n・サイトのHtmlやJavaScriptの軽量化問題\n（協力者募集中『@Sakura_Kocho』までお願いします。）");
    }  else  {
      Load();
    }
  }
}