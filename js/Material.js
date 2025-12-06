var Version = "20250903";

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

  S_VideoBGB = "";

// コロンビーナ
  S_Id =          "Columbina";
  S_JpName =      "コロンビーナ・ハイポセレニア";
  S_CharaImg =    "Original/Character2/columbina_125_gacha_splash.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Radiant_Antler";
  S_Local =       "Winter_Icelea";
  S_Common =      "Slime_Concentrate";
  S_Talent1 =     "Moonlight";
  S_Talent2 =     "";
  Checkmate();

// 茲白
  S_Id =          "Zibai";
  S_JpName =      "茲白";
  S_CharaImg =    "Original/Character2/zibai_126_gacha_splash.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Remnant_of_the_Dreadwing";
  S_Local =       "Glaze_Lily";
  S_Common =      "Frost_Etched_Warrant";
  S_Talent1 =     "Gold";
  S_Talent2 =     "Ascended_Sample_Queen";
  Checkmate();

// イルーガ
  S_Id =          "Illuga";
  S_JpName =      "イルーガ";
  S_CharaImg =    "Original/Character2/illuga_127_gacha_splash.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Cyclic_Military_Kuuvahki_Core";
  S_Local =       "Pine_Amber";
  S_Common =      "Precision_Drive_Shaft";
  S_Talent1 =     "Elysium";
  S_Talent2 =     "Eroded_Horn";
  Checkmate();

// ドゥリン
  S_Id =          "Durin";
  S_JpName =      "ドゥリン";
  S_CharaImg =    "Original/Character2/durin_123_gacha_splash.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Cyclic_Military_Kuuvahki_Core";
  S_Local =       "Frostlamp_Flower";
  S_Common =      "Frost_Etched_Warrant";
  S_Talent1 =     "Ballad";
  S_Talent2 =     "Eroded_Sunfire";
  Checkmate();

// ヤフォダ
  S_Id =          "Jahoda";
  S_JpName =      "ヤフォダ";
  S_CharaImg =    "Original/Character2/jahoda_124_gacha_splash.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Lightbearing_Scale_Feather";
  S_Local =       "Portable_Bearing";
  S_Common =      "Precision_Drive_Shaft";
  S_Talent1 =     "Vagrancy";
  S_Talent2 =     "Ascended_Sample_Knight";
  Checkmate();

// ネフェル
  S_Id =          "Nefer";
  S_JpName =      "ネフェル";
  S_CharaImg =    "Original/Character2/nefer_122_gacha_splash.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Radiant_Antler";
  S_Local =       "Moonfall_Silver";
  S_Common =      "Frost_Etched_Warrant";
  S_Talent1 =     "Elysium";
  S_Talent2 =     "Ascended_Sample_Rook";
  Checkmate();

// フリンズ
  S_Id =          "Flins";
  S_JpName =      "キリル・チュードミロヴィッチ・フリンズ";
  S_CharaImg =    "Original/Character2/flins_120_gacha_splash.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Precision_Kuuvahki_Stamping_Die";
  S_Local =       "Frostlamp_Flower";
  S_Common =      "Precision_Drive_Shaft";
  S_Talent1 =     "Vagrancy";
  S_Talent2 =     "Ascended_Sample_Queen";
  Checkmate();

// ラウマ
  S_Id =          "Lauma";
  S_JpName =      "ラウマ";
  S_CharaImg =    "Original/Character2/lauma_119_gacha_splash.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Lightbearing_Scale_Feather";
  S_Local =       "Moonfall_Silver";
  S_Common =      "Frost_Etched_Warrant";
  S_Talent1 =     "Moonlight";
  S_Talent2 =     "Eroded_Scale_Feather";
  Checkmate();

// アイノ
  S_Id =          "Aino";
  S_JpName =      "アイノ";
  S_CharaImg =    "Original/Character2/aino_121_gacha_splash.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Precision_Kuuvahki_Stamping_Die";
  S_Local =       "Portable_Bearing";
  S_Common =      "Precision_Drive_Shaft";
  S_Talent1 =     "Elysium";
  S_Talent2 =     "Silken_Feather";
  Checkmate();

// イネファ
  S_Id =          "Ineffa";
  S_JpName =      "イネファ";
  S_CharaImg =    "Original/Character2/ineffa_116_gacha_splash.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Secret_Source_Airflow_Accumulator";
  S_Local =       "Glowing_Hornshroom";
  S_Common =      "Saurian_Crowned_Warriors_Golden_Whistle";
  S_Talent1 =     "Conflict";
  S_Talent2 =     "Eroded_Sunfire";
  Checkmate();

// スカーク
  S_Id =          "Skirk";
  S_JpName =      "スカーク";
  S_CharaImg =    "Original/Character2/skirknew_114_gacha_splash.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Ensnaring_Gaze";
  S_Local =       "Skysplit_Gembloom";
  S_Common =      "Artificed_Dynamic_Gear";
  S_Talent1 =     "Contention";
  S_Talent2 =     "Ascended_Sample_Knight";
  Checkmate();

// ダリア
  S_Id =          "Dahlia";
  S_JpName =      "ダリア";
  S_CharaImg =    "Original/Character2/dahlia_115_gacha_splash.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Secret_Source_Airflow_Accumulator";
  S_Local =       "Calla_Lily";
  S_Common =      "Weathered_Arrowhead";
  S_Talent1 =     "Ballad";
  S_Talent2 =     "Eroded_Scale_Feather";
  Checkmate();

// エスコフィエ
  S_Id =          "Escoffier";
  S_JpName =      "エスコフィエ";
  S_CharaImg =    "Original/Character2/escoffier_112_gacha_splash.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Secret_Source_Airflow_Accumulator";
  S_Local =       "Beryl_Conch";
  S_Common =      "Artificed_Dynamic_Gear";
  S_Talent1 =     "Justice";
  S_Talent2 =     "Eroded_Horn";
  Checkmate();

// イファ
  S_Id =          "Ifa";
  S_JpName =      "イファ";
  S_CharaImg =    "Original/Character2/ifa_113_gacha_splash.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Sparkless_Statue_Core";
  S_Local =       "Saurian_Claw_Succulent";
  S_Common =      "Tyrants_Fang";
  S_Talent1 =     "Conflict";
  S_Talent2 =     "Ascended_Sample_Rook";
  Checkmate();

// ヴァレサ
  S_Id =          "Varesa";
  S_JpName =      "ヴァレサ";
  S_CharaImg =    "Original/Character2/varesa_111_gacha_splash.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Sparkless_Statue_Core";
  S_Local =       "Skysplit_Gembloom";
  S_Common =      "Tyrants_Fang";
  S_Talent1 =     "Conflict";
  S_Talent2 =     "Eroded_Scale_Feather";
  S_VideoBG =     "HHNrxjMHy7A,NlOrRulSg1M";
  Checkmate();

// イアンサ
  S_Id =          "Iansan";
  S_JpName =      "イアンサ";
  S_CharaImg =    "Original/Character2/iansan_110_gacha_splash.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Ensnaring_Gaze";
  S_Local =       "Dracolite";
  S_Common =      "Saurian_Crowned_Warriors_Golden_Whistle";
  S_Talent1 =     "Contention";
  S_Talent2 =     "Denial_and_Judgment";
  Checkmate();

// 夢見月瑞希
  S_Id =          "Mizuki";
  S_JpName =      "夢見月瑞希";
  S_CharaImg =    "Original/Character2/mizuki_109_gacha_splash.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Talisman_of_the_Enigmatic_Land";
  S_Local =       "Sea_Ganoderma";
  S_Common =      "Famed_Handguard";
  S_Talent1 =     "Transience";
  S_Talent2 =     "Fading_Candle";
  Checkmate();

// 藍硯
  S_Id =          "Lanyan";
  S_JpName =      "藍硯";
  S_CharaImg =    "Original/Character2/lanyan_108_gacha_splash.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Gold-Inscribed_Secret_Source_Core";
  S_Local =       "Clearwater_Jade";
  S_Common =      "Energy_Nectar";
  S_Talent1 =     "Diligence";
  S_Talent2 =     "Eroded_Sunfire";
  Checkmate();

// シトラリ
  S_Id =          "Citlali";
  S_JpName =      "シトラリ";
  S_CharaImg =    "Original/Character2/citlali_107_gacha_splash.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Talisman_of_the_Enigmatic_Land";
  S_Local =       "Quenepa_Berry";
  S_Common =      "Tyrants_Fang";
  S_Talent1 =     "Kindling";
  S_Talent2 =     "Denial_and_Judgment";
  S_VideoBG =     "LmmfXWOvSU0,Yz9q5yKhpOM,W-MBm5kS_A4";
  Checkmate();

// マーヴィカ
  S_Id =          "Mavuika";
  S_JpName =      "マーヴィカ";
  S_CharaImg =    "Original/Character2/mavuika_106_gacha_splash.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Gold-Inscribed_Secret_Source_Core";
  S_Local =       "Withering_Purpurbloom";
  S_Common =      "Saurian_Crowned_Warriors_Golden_Whistle";
  S_Talent1 =     "Contention";
  S_Talent2 =     "Eroded_Horn";
  Checkmate();

// チャスカ
  S_Id =          "Chasca";
  S_JpName =      "チャスカ";
  S_CharaImg =    "Original/Character2/chasca_104_gacha_splash.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Ensnaring_Gaze";
  S_Local =       "Withering_Purpurbloom";
  S_Common =      "Tyrants_Fang";
  S_Talent1 =     "Conflict";
  S_Talent2 =     "Silken_Feather";
  Checkmate();

// オロルン
  S_Id =          "Olorun";
  S_JpName =      "オロルン";
  S_CharaImg =    "Original/Character2/olorun_105_gacha_splash.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Mark_of_the_Binding_Blessing";
  S_Local =       "Glowing_Hornshroom";
  S_Common =      "Tyrants_Fang";
  S_Talent1 =     "Kindling";
  S_Talent2 =     "Lightless_Silk_String";
  Checkmate();

// シロネン
  S_Id =          "Xilonen";
  S_JpName =      "シロネン";
  S_CharaImg =    "Original/Character2/xilonen_103_gacha_splash.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Gold-Inscribed_Secret_Source_Core";
  S_Local =       "Brilliant_Chrysanthemum";
  S_Common =      "Saurian_Crowned_Warriors_Golden_Whistle";
  S_Talent1 =     "Kindling";
  S_Talent2 =     "Mirror_of_Mushin";
  Checkmate();

// キィニチ
  S_Id =          "Kinich";
  S_JpName =      "キィニチ";
  S_CharaImg =    "Original/Character2/kinich_101_gacha_splash.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Overripe_Flamegranate";
  S_Local =       "Saurian_Claw_Succulent";
  S_Common =      "Tyrants_Fang";
  S_Talent1 =     "Kindling";
  S_Talent2 =     "Denial_and_Judgment";
  Checkmate();

// カチーナ
  S_Id =          "Kachina";
  S_JpName =      "カチーナ";
  S_CharaImg =    "Original/Character2/kachina_100_gacha_splash.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Overripe_Flamegranate";
  S_Local =       "Quenepa_Berry";
  S_Common =      "Saurian_Crowned_Warriors_Golden_Whistle";
  S_Talent1 =     "Conflict";
  S_Talent2 =     "Fading_Candle";
  Checkmate();

// ムアラニ
  S_Id =          "Mualani";
  S_JpName =      "ムアラニ";
  S_CharaImg =    "Original/Character2/mualani_102_gacha_splash.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Mark_of_the_Binding_Blessing";
  S_Local =       "Sprayfeather_Gill";
  S_Common =      "Saurian_Crowned_Warriors_Golden_Whistle";
  S_Talent1 =     "Contention";
  S_Talent2 =     "Lightless_Mass";
  S_VideoBG =     "RbTnCgeyiVY,lQoyQdLEIvk,1ygzwUwHL8w";
  Checkmate();

// エミリエ
  S_Id =          "Emilie";
  S_JpName =      "エミリエ";
  S_CharaImg =    "Original/Character2/emilie_099_gacha_splash.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Fragment_of_a_Golden_Melody";
  S_Local =       "Lakelight_Lily";
  S_Common =      "Artificed_Dynamic_Gear";
  S_Talent1 =     "Order";
  S_Talent2 =     "Silken_Feather";
  Checkmate();

// シグウィン
  S_Id =          "Sigewinne";
  S_JpName =      "シグウィン";
  S_CharaImg =    "Original/Character2/sigewinne_095_gacha_splash.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Water_That_Failed_To_Transcend";
  S_Local =       "Romaritime_Flower";
  S_Common =      "Xenochromatic_Crystal";
  S_Talent1 =     "Equity";
  S_Talent2 =     "Lightless_Eye_of_the_Maelstrom";
  Checkmate();

// セトス
  S_Id =          "Sethos";
  S_JpName =      "セトス";
  S_CharaImg =    "Original/Character2/sethos_097_gacha_splash.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Cloudseam_Scale";
  S_Local =       "Trishiraite";
  S_Common =      "Rich_Red_Brocade";
  S_Talent1 =     "Praxis";
  S_Talent2 =     "Dakas_Bell";
  Checkmate();

// クロリンデ
  S_Id =          "Clorinde";
  S_JpName =      "クロリンデ";
  S_CharaImg =    "Original/Character2/clorinde_098_gacha_splash.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Fontemer_Unihorn";
  S_Local =       "Lumitoile";
  S_Common =      "Xenochromatic_Crystal";
  S_Talent1 =     "Justice";
  S_Talent2 =     "Everamber";
  Checkmate();

// アルレッキーノ
  S_Id =          "Arlecchino";
  S_JpName =      "アルレッキーノ / ペルヴェーレ";
  S_CharaImg =    "Original/Character2/arlecchino_096_gacha_splash.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Fragment_of_a_Golden_Melody";
  S_Local =       "Rainbow_Rose";
  S_Common =      "Lieutenants_Insignia";
  S_Talent1 =     "Order";
  S_Talent2 =     "Fading_Candle";
  Checkmate();

// 千織
  S_Id =          "Chiori";
  S_JpName =      "千織";
  S_CharaImg =    "Original/Character2/chiori_094_gacha_splash.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Artificed_Spare_Clockwork_Component_-_Coppelia";
  S_Local =       "Dendrobium";
  S_Common =      "Spectral_Nucleus";
  S_Talent1 =     "Light";
  S_Talent2 =     "Lightless_Silk_String";
  Checkmate();

// 閑雲
  S_Id =          "Xianyun";
  S_JpName =      "閑雲 / 留雲借風真君";
  S_CharaImg =    "Original/Character2/liuyun_093_gacha_splash.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Cloudseam_Scale";
  S_Local =       "Clearwater_Jade";
  S_Common =      "Forbidden_Curse_Scroll";
  S_Talent1 =     "Gold";
  S_Talent2 =     "Lightless_Eye_of_the_Maelstrom";
  Checkmate();

// 嘉明
  S_Id =          "Gaming";
  S_JpName =      "叶嘉明";
  S_CharaImg =    "Original/Character2/gaming_092_gacha_splash.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Emperors_Resolution";
  S_Local =       "Starconch";
  S_Common =      "Slime_Concentrate";
  S_Talent1 =     "Prosperity";
  S_Talent2 =     "Lightless_Mass";
  Checkmate();

// ナヴィア
  S_Id =          "Navia";
  S_JpName =      "ナヴィア・カスパール";
  S_CharaImg =    "Original/Character2/navia_091_gacha_splash.webp";
  S_Element =     "Prithiva_Topaz";
  S_Boss =        "Artificed_Spare_Clockwork_Component_-_Coppelius";
  S_Local =       "Spring_of_the_First_Dewdrop";
  S_Common =      "Xenochromatic_Crystal";
  S_Talent1 =     "Equity";
  S_Talent2 =     "Lightless_Silk_String";
  Checkmate();

// シュヴルーズ
  S_Id =          "Chevreuse";
  S_JpName =      "シュヴルーズ";
  S_CharaImg =    "Original/Character2/chevreuse_090_gacha_splash.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Fontemer_Unihorn";
  S_Local =       "Lumidouce_Bell";
  S_Common =      "Artificed_Dynamic_Gear";
  S_Talent1 =     "Order";
  S_Talent2 =     "Lightless_Eye_of_the_Maelstrom";
  Checkmate();

// フリーナ・ドゥ・フォンテーヌ
  S_Id =          "Furina";
  S_JpName =      "フリーナ・ドゥ・フォンテーヌ";
  S_CharaImg =    "Original/Character2/furina_089_gacha_splash.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Water_That_Failed_To_Transcend";
  S_Local =       "Lakelight_Lily";
  S_Common =      "Energy_Nectar";
  S_Talent1 =     "Justice";
  S_Talent2 =     "Lightless_Mass";
  Checkmate();

// シャルロット
  S_Id =          "Charlotte";
  S_JpName =      "シャルロット";
  S_CharaImg =    "Original/Character2/charlotte_088_gacha_splash.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Tourbillon_Device";
  S_Local =       "Beryl_Conch";
  S_Common =      "Artificed_Dynamic_Gear";
  S_Talent1 =     "Justice";
  S_Talent2 =     "Lightless_Silk_String";
  Checkmate();

// リオセスリ
  S_Id =          "Neuvillette";
  S_JpName =      "リオセスリ";
  S_CharaImg =    "Original/Character2/wriothesley_086_gacha_splash.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Tourbillon_Device";
  S_Local =       "Subdetection_Unit";
  S_Common =      "Artificed_Dynamic_Gear";
  S_Talent1 =     "Order";
  S_Talent2 =     "Primordial_Greenbloom";
  Checkmate();

// ヌヴィレット
  S_Id =          "Wriothesley";
  S_JpName =      "ヌヴィレット";
  S_CharaImg =    "Original/Character2/neuvillette_087_gacha_splash.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Fontemer_Unihorn";
  S_Local =       "Lumitoile";
  S_Common =      "Xenochromatic_Crystal";
  S_Talent1 =     "Equity";
  S_Talent2 =     "Everamber";
  Checkmate();

// フレミネ
  S_Id =          "Freminet";
  S_JpName =      "フレミネ";
  S_CharaImg =    "Original/Character2/freminet_085_gacha_splash.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Artificed_Spare_Clockwork_Component_-_Coppelius";
  S_Local =       "Romaritime_Flower";
  S_Common =      "Xenochromatic_Crystal";
  S_Talent1 =     "Justice";
  S_Talent2 =     "Worldspan_Fern";
  Checkmate();

// リネット
  S_Id =          "Linette";
  S_JpName =      "リネット";
  S_CharaImg =    "Original/Character/Lynette_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Artificed_Spare_Clockwork_Component_-_Coppelia";
  S_Local =       "Lumidouce_Bell";
  S_Common =      "Artificed_Dynamic_Gear";
  S_Talent1 =     "Order";
  S_Talent2 =     "Everamber";
  Checkmate();

// リネ
  S_Id =          "Liney";
  S_JpName =      "リネ";
  S_CharaImg =    "Original/Character/Lyney_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Emperors_Resolution";
  S_Local =       "Rainbow_Rose";
  S_Common =      "Lieutenants_Insignia";
  S_Talent1 =     "Equity";
  S_Talent2 =     "Primordial_Greenbloom";
  Checkmate();

// 綺良々
  S_Id =          "Kirara";
  S_JpName =      "綺良々";
  S_CharaImg =    "Original/Character/Kirara_Portrait.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Evergloom_Ring";
  S_Local =       "Amakumo_Fruit";
  S_Common =      "Spectral_Nucleus";
  S_Talent1 =     "Transience";
  S_Talent2 =     "Everamber";
  Checkmate();

// カーヴェ
  S_Id =          "Kaveh";
  S_JpName =      "カーヴェ";
  S_CharaImg =    "Original/Character/Kaveh_Portrait.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Quelled_Creeper";
  S_Local =       "Mourning_Flower";
  S_Common =      "Crystalline_Cyst_Dust";
  S_Talent1 =     "Ingenuity";
  S_Talent2 =     "Primordial_Greenbloom";
  Checkmate();

// 白朮
  S_Id =          "Baizhu";
  S_JpName =      "白朮";
  S_CharaImg =    "Original/Character/Baizhu_Portrait.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Evergloom_Ring";
  S_Local =       "Violetgrass";
  S_Common =      "Crystalline_Cyst_Dust";
  S_Talent1 =     "Gold";
  S_Talent2 =     "Worldspan_Fern";
  Checkmate();

// ミカ
  S_Id =          "Mika";
  S_JpName =      "ミカ・シュミット";
  S_CharaImg =    "Original/Character/Mika_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Pseudo-Stamens";
  S_Local =       "Wolfhook";
  S_Common =      "Golden_Raven_Insignia";
  S_Talent1 =     "Ballad";
  S_Talent2 =     "Mirror_of_Mushin";
  Checkmate();

// ディシア
  S_Id =          "Dehya";
  S_JpName =      "ディシア";
  S_CharaImg =    "Original/Character/Dehya_Portrait.webp";
  S_Element =     "Agnidus_Agate";
  S_Boss =        "Light_Guiding_Tetrahedron";
  S_Local =       "Sand_Grease_Pupa";
  S_Common =      "Rich_Red_Brocade";
  S_Talent1 =     "Praxis";
  S_Talent2 =     "Puppet_Strings";
  Checkmate();

// アルハイゼン
  S_Id =          "Alhaitham";
  S_JpName =      "アルハイゼン";
  S_CharaImg =    "Original/Character/Alhaitham_Portrait.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Pseudo-Stamens";
  S_Local =       "Sand_Grease_Pupa";
  S_Common =      "Rich_Red_Brocade";
  S_Talent1 =     "Ingenuity";
  S_Talent2 =     "Mirror_of_Mushin";
  Checkmate();

// ヨォーヨ
  S_Id =          "Yaoyao";
  S_JpName =      "ヨォーヨ";
  S_CharaImg =    "Original/Character/Yaoyao_Portrait.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Quelled_Creeper";
  S_Local =       "Jueyun_Chili";
  S_Common =      "Slime_Concentrate";
  S_Talent1 =     "Diligence";
  S_Talent2 =     "Dakas_Bell";
  Checkmate();

// ファルザン
  S_Id =          "Faruzan";
  S_JpName =      "ファルザン";
  S_CharaImg =    "Original/Character/Faruzan_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Light_Guiding_Tetrahedron";
  S_Local =       "Redcrest";
  S_Common =      "Rich_Red_Brocade";
  S_Talent1 =     "Admonition";
  S_Talent2 =     "Puppet_Strings";
  Checkmate();

// 放浪者
  S_Id =          "Wanderer";
  S_JpName =      "放浪者";
  S_CharaImg =    "Original/Character/Wanderer_Portrait.webp";
  S_Element =     "Vayuda_Turquoise";
  S_Boss =        "Perpetual_Caliber";
  S_Local =       "Rukkhashava_Mushrooms";
  S_Common =      "Famed_Handguard";
  S_Talent1 =     "Praxis";
  S_Talent2 =     "Dakas_Bell";
  Checkmate();

// レイラ
  S_Id =          "Layla";
  S_JpName =      "レイラ";
  S_CharaImg =    "Original/Character/Layla_Portrait.webp";
  S_Element =     "Shivada_Jade";
  S_Boss =        "Perpetual_Caliber";
  S_Local =       "Nilotpala_Lotus";
  S_Common =      "Forbidden_Curse_Scroll";
  S_Talent1 =     "Ingenuity";
  S_Talent2 =     "Mirror_of_Mushin";
  Checkmate();

// ナヒーダ
  S_Id =          "Nahida";
  S_JpName =      "ナヒーダ";
  S_CharaImg =    "Original/Character/Character_Nahida_Portrait.webp";
  S_Element =     "Nagadus_Emerald";
  S_Boss =        "Quelled_Creeper";
  S_Local =       "Kalpalata_Lotus";
  S_Common =      "Crystalline_Cyst_Dust";
  S_Talent1 =     "Ingenuity";
  S_Talent2 =     "Puppet_Strings";
  Checkmate();

// ニィロウ
  S_Id =          "Nilou";
  S_JpName =      "ニィロウ";
  S_CharaImg =    "Original/Character/Character_Nilou_Portrait.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Perpetual_Caliber";
  S_Local =       "Padisarah";
  S_Common =      "Crystalline_Cyst_Dust";
  S_Talent1 =     "Praxis";
  S_Talent2 =     "Tears_of_the_Calamitous_God";
  Checkmate();

// セノ
  S_Id =          "Cyno";
  S_JpName =      "セノ";
  S_CharaImg =    "Original/Character/Character_Cyno_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Thunderclap_Fruitcore";
  S_Local =       "Scarab";
  S_Common =      "Forbidden_Curse_Scroll";
  S_Talent1 =     "Admonition";
  S_Talent2 =     "Mudra_of_the_Malefic_General";
  Checkmate();

// キャンディス
  S_Id =          "Candace";
  S_JpName =      "キャンディス";
  S_CharaImg =    "Original/Character/Character_Candace_Portrait.webp";
  S_Element =     "Varunada_Lazurite";
  S_Boss =        "Light_Guiding_Tetrahedron";
  S_Local =       "Redcrest";
  S_Common =      "Rich_Red_Brocade";
  S_Talent1 =     "Admonition";
  S_Talent2 =     "Tears_of_the_Calamitous_God";
  Checkmate();

// ドリー・サングマハベイ
  S_Id =          "Dori";
  S_JpName =      "ドリー・サングマハベイ";
  S_CharaImg =    "Original/Character/Character_Dori_Portrait.webp";
  S_Element =     "Vajrada_Amethyst";
  S_Boss =        "Thunderclap_Fruitcore";
  S_Local =       "Kalpalata_Lotus";
  S_Common =      "Rich_Red_Brocade";
  S_Talent1 =     "Ingenuity";
  S_Talent2 =     "Bloodjade_Branch";
  Checkmate();

// ティナリ
  S_Id =          "Tighnari";
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
  S_Id =          "Collei";
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
            <td width="12%" colspan="3" rowspan="5"><img height="200px" src="../image/${S_CharaImg}" class="bgv ${S_VideoBG}" loading="lazy"></td>\
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
  try {
    if (S_VideoBG != S_VideoBGB) {
      S_VideoBGB = S_VideoBG;
    } else {
      S_VideoBG = "";
    }
  } catch(e) {
    S_VideoBG = "";
  }
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
ItemNames = [
  "Slime_Concentrate",
  "Slime_Secretions",
  "Slime_Condensate",
  "Ominous_Mask",
  "Stained_Mask",
  "Damaged_Mask",
  "Forbidden_Curse_Scroll",
  "Sealed_Scroll",
  "Divining_Scroll",
  "Weathered_Arrowhead",
  "Sharp_Arrowhead",
  "Firm_Arrowhead",
  "Lieutenants_Insignia",
  "Sergeants_Insignia",
  "Recruits_Insignia",
  "Golden_Raven_Insignia",
  "Silver_Raven_Insignia",
  "Treasure_Hoarder_Insignia",
  "Energy_Nectar",
  "Shimmering_Nectar",
  "Whopperflower_Nectar",
  "Famed_Handguard",
  "Kageuchi_Handguard",
  "Old_Handguard",
  "Spectral_Nucleus",
  "Spectral_Heart",
  "Spectral_Husk",
  "Crystalline_Cyst_Dust",
  "Luminescent_Pollen",
  "Fungal_Spores",
  "Rich_Red_Brocade",
  "Trimmed_Red_Silk",
  "Faded_Red_Satin",
  "Xenochromatic_Crystal",
  "Transoceanic_Chunk",
  "Transoceanic_Pearl",
  "Artificed_Dynamic_Gear",
  "Mechanical_Spur_Gear",
  "Meshing_Gear",
  "Tyrants_Fang",
  "Seasoned_Fang",
  "Juvenile_Fang",
  "Saurian_Crowned_Warriors_Golden_Whistle",
  "Warriors_Metal_Whistle",
  "Sentrys_Wooden_Whistle",
  "Broken_Drive_Shaft",
  "Reinforced_Drive_Shaft",
  "Precision_Drive_Shaft",
  "Tattered_Warrant",
  "Immaculate_Warrant",
  "Frost_Etched_Warrant"
];
InventorySet(ItemNames);
// 週ボス素材
ItemNames = [
  "Dvalins_Plume",
  "Dvalins_Claw",
  "Dvalins_Sigh",
  "Tail_of_Boreas",
  "Ring_of_Boreas",
  "Spirit_Locket_of_Boreas",
  "Tusk_of_Monoceros_Caeli",
  "Shard_of_a_Foul_Legacy",
  "Shadow_of_the_Warrior",
  "Dragon_Lords_Crown",
  "Bloodjade_Branch",
  "Gilded_Scale",
  "Molten_Moment",
  "Hellfire_Butterfly",
  "Ashen_Heart",
  "Mudra_of_the_Malefic_General",
  "Tears_of_the_Calamitous_God",
  "The_Meaning_of_Aeons",
  "Puppet_Strings",
  "Mirror_of_Mushin",
  "Dakas_Bell",
  "Worldspan_Fern",
  "Primordial_Greenbloom",
  "Everamber",
  "Lightless_Silk_String",
  "Lightless_Eye_of_the_Maelstrom",
  "Lightless_Mass",
  "Fading_Candle",
  "Silken_Feather",
  "Denial_and_Judgment",
  "Eroded_Horn",
  "Eroded_Sunfire",
  "Eroded_Scale_Feather",
  "Ascended_Sample_Knight",
  "Ascended_Sample_Rook",
  "Ascended_Sample_Queen"
];
InventorySet(ItemNames);
// エリアボス素材
ItemNames = [
  "Hurricane_Seed",
  "Lightning_Prism",
  "Basalt_Pillar",
  "Hoarfrost_Core",
  "Everflame_Seed",
  "Cleansing_Heart",
  "Juvenile_Jade",
  "Crystalline_Bloom",
  "Marionette_Core",
  "Perpetual_Heart",
  "Smoldering_Pearl",
  "Dew_of_Repudiation",
  "Storm_Beads",
  "Riftborn_Regalia",
  "Dragonheirs_False_Fin",
  "Runic_Fang",
  "Majestic_Hooked_Beak",
  "Thunderclap_Fruitcore",
  "Perpetual_Caliber",
  "Light_Guiding_Tetrahedron",
  "Quelled_Creeper",
  "Pseudo-Stamens",
  "Evergloom_Ring",
  "Artificed_Spare_Clockwork_Component_-_Coppelia",
  "Artificed_Spare_Clockwork_Component_-_Coppelius",
  "Emperors_Resolution",
  "Tourbillon_Device",
  "Fontemer_Unihorn",
  "Water_That_Failed_To_Transcend",
  "Cloudseam_Scale",
  "Fragment_of_a_Golden_Melody",
  "Mark_of_the_Binding_Blessing",
  "Overripe_Flamegranate",
  "Gold-Inscribed_Secret_Source_Core",
  "Ensnaring_Gaze",
  "Talisman_of_the_Enigmatic_Land",
  "Sparkless_Statue_Core",
  "Secret_Source_Airflow_Accumulator",
  "Precision_Kuuvahki_Stamping_Die",
  "Lightbearing_Scale_Feather",
  "Radiant_Antler",
  "Cyclic_Military_Kuuvahki_Core",
  "Remnant_of_the_Dreadwing"
];
InventorySet(ItemNames);
// Jewels
ItemNames = [
  "Agnidus_Agate_Gemstone",
  "Agnidus_Agate_Chunk",
  "Agnidus_Agate_Fragment",
  "Agnidus_Agate_Sliver",
  "Varunada_Lazurite_Gemstone",
  "Varunada_Lazurite_Chunk",
  "Varunada_Lazurite_Fragment",
  "Varunada_Lazurite_Sliver",
  "Nagadus_Emerald_Gemstone",
  "Nagadus_Emerald_Chunk",
  "Nagadus_Emerald_Fragment",
  "Nagadus_Emerald_Sliver",
  "Vajrada_Amethyst_Gemstone",
  "Vajrada_Amethyst_Chunk",
  "Vajrada_Amethyst_Fragment",
  "Vajrada_Amethyst_Sliver",
  "Vayuda_Turquoise_Gemstone",
  "Vayuda_Turquoise_Chunk",
  "Vayuda_Turquoise_Fragment",
  "Vayuda_Turquoise_Sliver",
  "Shivada_Jade_Gemstone",
  "Shivada_Jade_Chunk",
  "Shivada_Jade_Fragment",
  "Shivada_Jade_Sliver",
  "Prithiva_Topaz_Gemstone",
  "Prithiva_Topaz_Chunk",
  "Prithiva_Topaz_Fragment",
  "Prithiva_Topaz_Sliver"
];
InventorySet(ItemNames);
// 天賦本
ItemNames = [
  "Philosophies_of_Freedom",
  "Guide_to_Freedom",
  "Teachings_of_Freedom",
  "Philosophies_of_Resistance",
  "Guide_to_Resistance",
  "Teachings_of_Resistance",
  "Philosophies_of_Ballad",
  "Guide_to_Ballad",
  "Teachings_of_Ballad",
  "Philosophies_of_Prosperity",
  "Guide_to_Prosperity",
  "Teachings_of_Prosperity",
  "Philosophies_of_Diligence",
  "Guide_to_Diligence",
  "Teachings_of_Diligence",
  "Philosophies_of_Gold",
  "Guide_to_Gold",
  "Teachings_of_Gold",
  "Philosophies_of_Transience",
  "Guide_to_Transience",
  "Teachings_of_Transience",
  "Philosophies_of_Elegance",
  "Guide_to_Elegance",
  "Teachings_of_Elegance",
  "Philosophies_of_Light",
  "Guide_to_Light",
  "Teachings_of_Light",
  "Philosophies_of_Admonition",
  "Guide_to_Admonition",
  "Teachings_of_Admonition",
  "Philosophies_of_Ingenuity",
  "Guide_to_Ingenuity",
  "Teachings_of_Ingenuity",
  "Philosophies_of_Praxis",
  "Guide_to_Praxis",
  "Teachings_of_Praxis",
  "Philosophies_of_Equity",
  "Guide_to_Equity",
  "Teachings_of_Equity",
  "Philosophies_of_Justice",
  "Guide_to_Justice",
  "Teachings_of_Justice",
  "Philosophies_of_Order",
  "Guide_to_Order",
  "Teachings_of_Order",
  "Philosophies_of_Contention",
  "Guide_to_Contention",
  "Teachings_of_Contention",
  "Philosophies_of_Kindling",
  "Guide_to_Kindling",
  "Teachings_of_Kindling",
  "Philosophies_of_Conflict",
  "Guide_to_Conflict",
  "Teachings_of_Conflict",
  "Teachings_of_Moonlight",
  "Guide_to_Moonlight",
  "Philosophies_of_Moonlight",
  "Teachings_of_Elysium",
  "Guide_to_Elysium",
  "Philosophies_of_Elysium",
  "Teachings_of_Vagrancy",
  "Guide_to_Vagrancy",
  "Philosophies_of_Vagrancy",
  "Crown_of_Insight"
];
InventorySet(ItemNames);
// 特産品
ItemNames = [
    "Wolfhook",
    "Valberry",
    "Cecilia",
    "Windwheel_Aster",
    "Philanemo_Mushroom",
    "Small_Lamp_Grass",
    "Calla_Lily",
    "Dandelion_Seed",
    "Jueyun_Chili",
    "Noctilucous_Jade",
    "Silk_Flower",
    "Glaze_Lily",
    "Qingxin",
    "Starconch",
    "Violetgrass",
    "Cor_Lapis",
    "Clearwater_Jade",
    "Onikabuto",
    "Sakura_Bloom",
    "Crystal_Marrow",
    "Dendrobium",
    "Naku_Weed",
    "Sea_Ganoderma",
    "Sango_Pearl",
    "Amakumo_Fruit",
    "Fluorescent_Fungus",
    "Rukkhashava_Mushrooms",
    "Padisarah",
    "Nilotpala_Lotus",
    "Kalpalata_Lotus",
    "Redcrest",
    "Sand_Grease_Pupa",
    "Mourning_Flower",
    "Trishiraite",
    "Scarab",
    "Beryl_Conch",
    "Romaritime_Flower",
    "Lumidouce_Bell",
    "Rainbow_Rose",
    "Lumitoile",
    "Lakelight_Lily",
    "Subdetection_Unit",
    "Spring_of_the_First_Dewdrop",
    "Sprayfeather_Gill",
    "Brilliant_Chrysanthemum",
    "Quenepa_Berry",
    "Saurian_Claw_Succulent",
    "Glowing_Hornshroom",
    "Withering_Purpurbloom",
    "Skysplit_Gembloom",
    "Dracolite",
    "Portable_Bearing",
    "Frostlamp_Flower",
    "Moonfall_Silver",
    "Winter_Icelea",
    "Pine_Amber"
];
InventorySet(ItemNames);
  SetCalculatorList();
}


function CreateInventoryInput(itemName) {
  return `
    <td width="8%" colspan="1">
      <div class="input-field"><i class="prefix">
        <img class="miniicon" src="../image/Small/Item/Item_${itemName}.webp"></i><input id="${itemName}" value="0" type="number" class="validate">
      </div>
   </td>`;
}


function InventorySet(itemNames) {
  let html = '';
  const maxColumns = 12;
  const totalItems = itemNames.length;

  for (let i = 0; i < totalItems; i++) {
    const itemName = itemNames[i];
    html += CreateInventoryInput(itemName);
    
    if ((i + 1) % maxColumns === 0 || i === totalItems - 1) {
      const inventoryRow = `<tr>${html}</tr>`;
      document.querySelector('table[class="Inventory"]').insertAdjacentHTML('beforeend', inventoryRow);
      html = '';
      if (i === totalItems - 1) break;
    }
  }
}


// カリキュレーター項目の生成
function SetCalculatorList() {
// 宝石
function SetCalculatorJewel() {
  CalEle = document.querySelector('th[id="C_Jewels"]').parentElement;
  S_ItemType =   "Jewels";
  S_Check_1 = "";
  S_Check_2 = "_Gemstone";
  S_Check_3 = "";
  const allItems = [
    { name: "Prithiva_Topaz", unit: " 点" },
    { name: "Shivada_Jade", unit: " 点" },
    { name: "Vayuda_Turquoise", unit: " 点" },
    { name: "Vajrada_Amethyst", unit: " 点" },
    { name: "Nagadus_Emerald", unit: " 点" },
    { name: "Varunada_Lazurite", unit: " 点" },
    { name: "Agnidus_Agate", unit: " 点" }
  ];

  let html = "";
  for (let i = allItems.length - 1; i >= 0; i -= 7) {
    S_ItemName_1 = allItems[i]?.name || "";
    S_ItemUnit_1 = allItems[i]?.unit || "";
    S_ItemName_2 = allItems[i - 1]?.name || "";
    S_ItemUnit_2 = allItems[i - 1]?.unit || "";
    S_ItemName_3 = allItems[i - 2]?.name || "";
    S_ItemUnit_3 = allItems[i - 2]?.unit || "";
    S_ItemName_4 = allItems[i - 3]?.name || "";
    S_ItemUnit_4 = allItems[i - 3]?.unit || "";
    S_ItemName_5 = allItems[i - 4]?.name || "";
    S_ItemUnit_5 = allItems[i - 4]?.unit || "";
    S_ItemName_6 = allItems[i - 5]?.name || "";
    S_ItemUnit_6 = allItems[i - 5]?.unit || "";
    S_ItemName_7 = allItems[i - 6]?.name || "";
    S_ItemUnit_7 = allItems[i - 6]?.unit || "";
    html += CalculatorSet();
  }
  CalEle.insertAdjacentHTML("afterend", html);
}
// ボス素材
function SetCalculatorES() {
  CalEle = document.querySelector('th[id="C_Elemental_Stones"]').parentElement;
  S_ItemType = "Elemental_Stones";
  S_Check_1 = "";
  S_Check_2 = "";
  S_Check_3 = "";
  const allItems = [
    { name: "Remnant_of_the_Dreadwing", unit: " 個" },
    { name: "Cyclic_Military_Kuuvahki_Core", unit: " 個" },
    { name: "Radiant_Antler", unit: " 個" },
    { name: "Lightbearing_Scale_Feather", unit: " 個" },
    { name: "Precision_Kuuvahki_Stamping_Die", unit: " 個" },
    { name: "Secret_Source_Airflow_Accumulator", unit: " 個" },
    { name: "Sparkless_Statue_Core", unit: " 個" },
    { name: "Talisman_of_the_Enigmatic_Land", unit: " 個" },
    { name: "Ensnaring_Gaze", unit: " 個" },
    { name: "Gold-Inscribed_Secret_Source_Core", unit: " 個" },
    { name: "Overripe_Flamegranate", unit: " 個" },
    { name: "Mark_of_the_Binding_Blessing", unit: " 個" },
    { name: "Fragment_of_a_Golden_Melody", unit: " 個" },
    { name: "Cloudseam_Scale", unit: " 個" },
    { name: "Water_That_Failed_To_Transcend", unit: " 個" },
    { name: "Fontemer_Unihorn", unit: " 個" },
    { name: "Tourbillon_Device", unit: " 個" },
    { name: "Emperors_Resolution", unit: " 個" },
    { name: "Artificed_Spare_Clockwork_Component_-_Coppelius", unit: " 個" },
    { name: "Artificed_Spare_Clockwork_Component_-_Coppelia", unit: " 個" },
    { name: "Evergloom_Ring", unit: " 個" },
    { name: "Pseudo-Stamens", unit: " 個" },
    { name: "Quelled_Creeper", unit: " 個" },
    { name: "Light_Guiding_Tetrahedron", unit: " 個" },
    { name: "Perpetual_Caliber", unit: " 個" },
    { name: "Thunderclap_Fruitcore", unit: " 個" },
    { name: "Majestic_Hooked_Beak", unit: " 個" },
    { name: "Runic_Fang", unit: " 個" },
    { name: "Dragonheirs_False_Fin", unit: " 個" },
    { name: "Riftborn_Regalia", unit: " 個" },
    { name: "Storm_Beads", unit: " 個" },
    { name: "Dew_of_Repudiation", unit: " 個" },
    { name: "Smoldering_Pearl", unit: " 個" },
    { name: "Perpetual_Heart", unit: " 個" },
    { name: "Marionette_Core", unit: " 個" },
    { name: "Crystalline_Bloom", unit: " 個" },
    { name: "Juvenile_Jade", unit: " 個" },
    { name: "Cleansing_Heart", unit: " 個" },
    { name: "Everflame_Seed", unit: " 個" },
    { name: "Hoarfrost_Core", unit: " 個" },
    { name: "Basalt_Pillar", unit: " 個" },
    { name: "Lightning_Prism", unit: " 個" },
    { name: "Hurricane_Seed", unit: " 個" }
  ];

  let html = "";
  for (let i = allItems.length - 1; i >= 0; i -= 7) {
    S_ItemName_1 = allItems[i]?.name || "";
    S_ItemUnit_1 = allItems[i]?.unit || "";
    S_ItemName_2 = allItems[i - 1]?.name || "";
    S_ItemUnit_2 = allItems[i - 1]?.unit || "";
    S_ItemName_3 = allItems[i - 2]?.name || "";
    S_ItemUnit_3 = allItems[i - 2]?.unit || "";
    S_ItemName_4 = allItems[i - 3]?.name || "";
    S_ItemUnit_4 = allItems[i - 3]?.unit || "";
    S_ItemName_5 = allItems[i - 4]?.name || "";
    S_ItemUnit_5 = allItems[i - 4]?.unit || "";
    S_ItemName_6 = allItems[i - 5]?.name || "";
    S_ItemUnit_6 = allItems[i - 5]?.unit || "";
    S_ItemName_7 = allItems[i - 6]?.name || "";
    S_ItemUnit_7 = allItems[i - 6]?.unit || "";
    html += CalculatorSet();
  }
  CalEle.insertAdjacentHTML("afterend", html);
}
// モブ敵素材
function SetCalculatorCM() {
  CalEle = document.querySelector('th[id="C_Common_Material"]').parentElement;
  S_ItemType = "Common_Material";
  const allItems = [
    { name: "Frost_Etched_Warrant", ids: "Tattered_Warrant Immaculate_Warrant Frost_Etched_Warrant", unit: " 点" },
    { name: "Precision_Drive_Shaft", ids: "Broken_Drive_Shaft Reinforced_Drive_Shaft Precision_Drive_Shaft", unit: " 点" },
    { name: "Saurian_Crowned_Warriors_Golden_Whistle", ids: "Sentrys_Wooden_Whistle Warriors_Metal_Whistle Saurian_Crowned_Warriors_Golden_Whistle", unit: " 点" },
    { name: "Tyrants_Fang", ids: "Juvenile_Fang Seasoned_Fang Tyrants_Fang", unit: " 点" },
    { name: "Artificed_Dynamic_Gear", ids: "Meshing_Gear Mechanical_Spur_Gear Artificed_Dynamic_Gear", unit: " 点" },
    { name: "Xenochromatic_Crystal", ids: "Transoceanic_Pearl Transoceanic_Chunk Xenochromatic_Crystal", unit: " 点" },
    { name: "Rich_Red_Brocade", ids: "Faded_Red_Satin Trimmed_Red_Silk Rich_Red_Brocade", unit: " 点" },
    { name: "Crystalline_Cyst_Dust", ids: "Fungal_Spores Luminescent_Pollen Crystalline_Cyst_Dust", unit: " 点" },
    { name: "Spectral_Nucleus", ids: "Spectral_Husk Spectral_Heart Spectral_Nucleus", unit: " 点" },
    { name: "Famed_Handguard", ids: "Old_Handguard Kageuchi_Handguard Famed_Handguard", unit: " 点" },
    { name: "Energy_Nectar", ids: "Whopperflower_Nectar Shimmering_Nectar Energy_Nectar", unit: " 点" },
    { name: "Golden_Raven_Insignia", ids: "Treasure_Hoarder_Insignia Silver_Raven_Insignia Golden_Raven_Insignia", unit: " 点" },
    { name: "Lieutenants_Insignia", ids: "Recruits_Insignia Sergeants_Insignia Lieutenants_Insignia", unit: " 点" },
    { name: "Weathered_Arrowhead", ids: "Firm_Arrowhead Sharp_Arrowhead Weathered_Arrowhead", unit: " 点" },
    { name: "Forbidden_Curse_Scroll", ids: "Divining_Scroll Sealed_Scroll Forbidden_Curse_Scroll", unit: " 点" },
    { name: "Ominous_Mask", ids: "Damaged_Mask Stained_Mask Ominous_Mask", unit: " 点" },
    { name: "Slime_Concentrate", ids: "Slime_Condensate Slime_Secretions Slime_Concentrate", unit: " 点" }
  ];

  let html = "";
  for (let i = allItems.length - 1; i >= 0; i -= 7) {
    S_ItemName_1 = allItems[i]?.name || "";
    S_ItemIDs__1 = allItems[i]?.ids || "";
    S_ItemUnit_1 = allItems[i]?.unit || "";
    S_ItemName_2 = allItems[i - 1]?.name || "";
    S_ItemIDs__2 = allItems[i - 1]?.ids || "";
    S_ItemUnit_2 = allItems[i - 1]?.unit || "";
    S_ItemName_3 = allItems[i - 2]?.name || "";
    S_ItemIDs__3 = allItems[i - 2]?.ids || "";
    S_ItemUnit_3 = allItems[i - 2]?.unit || "";
    S_ItemName_4 = allItems[i - 3]?.name || "";
    S_ItemIDs__4 = allItems[i - 3]?.ids || "";
    S_ItemUnit_4 = allItems[i - 3]?.unit || "";
    S_ItemName_5 = allItems[i - 4]?.name || "";
    S_ItemIDs__5 = allItems[i - 4]?.ids || "";
    S_ItemUnit_5 = allItems[i - 4]?.unit || "";
    S_ItemName_6 = allItems[i - 5]?.name || "";
    S_ItemIDs__6 = allItems[i - 5]?.ids || "";
    S_ItemUnit_6 = allItems[i - 5]?.unit || "";
    S_ItemName_7 = allItems[i - 6]?.name || "";
    S_ItemIDs__7 = allItems[i - 6]?.ids || "";
    S_ItemUnit_7 = allItems[i - 6]?.unit || "";
    html += CalculatorSet2();
  }
  CalEle.insertAdjacentHTML("afterend", html);
}
// 特産品
function SetCalculatorLM() {
  CalEle = document.querySelector('th[id="C_Local_Material"]').parentElement;
  S_ItemType = "Local_Material";
  S_Check_1 = "";
  S_Check_2 = "";
  S_Check_3 = "";
  const allItems = [
    { name: "Pine_Amber", unit: " 個" },
    { name: "Winter_Icelea", unit: " 個" },
    { name: "Moonfall_Silver", unit: " 個" },
    { name: "Frostlamp_Flower", unit: " 個" },
    { name: "Portable_Bearing", unit: " 個" },
    { name: "Dracolite", unit: " 個" },
    { name: "Skysplit_Gembloom", unit: " 個" },
    { name: "Withering_Purpurbloom", unit: " 個" },
    { name: "Glowing_Hornshroom", unit: " 個" },
    { name: "Saurian_Claw_Succulent", unit: " 個" },
    { name: "Quenepa_Berry", unit: " 個" },
    { name: "Brilliant_Chrysanthemum", unit: " 個" },
    { name: "Sprayfeather_Gill", unit: " 個" },
    { name: "Spring_of_the_First_Dewdrop", unit: " 個" },
    { name: "Subdetection_Unit", unit: " 個" },
    { name: "Lakelight_Lily", unit: " 個" },
    { name: "Lumitoile", unit: " 個" },
    { name: "Rainbow_Rose", unit: " 個" },
    { name: "Lumidouce_Bell", unit: " 個" },
    { name: "Romaritime_Flower", unit: " 個" },
    { name: "Beryl_Conch", unit: " 個" },
    { name: "Scarab", unit: " 個" },
    { name: "Trishiraite", unit: " 個" },
    { name: "Mourning_Flower", unit: " 個" },
    { name: "Sand_Grease_Pupa", unit: " 個" },
    { name: "Redcrest", unit: " 個" },
    { name: "Kalpalata_Lotus", unit: " 個" },
    { name: "Nilotpala_Lotus", unit: " 個" },
    { name: "Padisarah", unit: " 個" },
    { name: "Rukkhashava_Mushrooms", unit: " 個" },
    { name: "Fluorescent_Fungus", unit: " 個" },
    { name: "Amakumo_Fruit", unit: " 個" },
    { name: "Sango_Pearl", unit: " 個" },
    { name: "Sea_Ganoderma", unit: " 個" },
    { name: "Naku_Weed", unit: " 個" },
    { name: "Dendrobium", unit: " 個" },
    { name: "Crystal_Marrow", unit: " 個" },
    { name: "Sakura_Bloom", unit: " 個" },
    { name: "Onikabuto", unit: " 個" },
    { name: "Violetgrass", unit: " 個" },
    { name: "Starconch", unit: " 個" },
    { name: "Qingxin", unit: " 個" },
    { name: "Glaze_Lily", unit: " 個" },
    { name: "Silk_Flower", unit: " 個" },
    { name: "Noctilucous_Jade", unit: " 個" },
    { name: "Jueyun_Chili", unit: " 個" },
    { name: "Clearwater_Jade", unit: " 個" },
    { name: "Cor_Lapis", unit: " 個" },
    { name: "Dandelion_Seed", unit: " 個" },
    { name: "Calla_Lily", unit: " 個" },
    { name: "Small_Lamp_Grass", unit: " 個" },
    { name: "Philanemo_Mushroom", unit: " 個" },
    { name: "Windwheel_Aster", unit: " 個" },
    { name: "Cecilia", unit: " 個" },
    { name: "Valberry", unit: " 個" },
    { name: "Wolfhook", unit: " 個" }
  ];

  let html = "";
  for (let i = allItems.length - 1; i >= 0; i -= 7) {
    S_ItemName_1 = allItems[i]?.name || "";
    S_ItemUnit_1 = allItems[i]?.unit || "";
    S_ItemName_2 = allItems[i - 1]?.name || "";
    S_ItemUnit_2 = allItems[i - 1]?.unit || "";
    S_ItemName_3 = allItems[i - 2]?.name || "";
    S_ItemUnit_3 = allItems[i - 2]?.unit || "";
    S_ItemName_4 = allItems[i - 3]?.name || "";
    S_ItemUnit_4 = allItems[i - 3]?.unit || "";
    S_ItemName_5 = allItems[i - 4]?.name || "";
    S_ItemUnit_5 = allItems[i - 4]?.unit || "";
    S_ItemName_6 = allItems[i - 5]?.name || "";
    S_ItemUnit_6 = allItems[i - 5]?.unit || "";
    S_ItemName_7 = allItems[i - 6]?.name || "";
    S_ItemUnit_7 = allItems[i - 6]?.unit || "";
    html += CalculatorSet();
  }
  CalEle.insertAdjacentHTML("afterend", html);
}
// 天賦本
function SetCalculatorTLUM() {
  CalEle = document.querySelector('th[id="C_Talent_Level_Up_Material"]').parentElement;
  S_ItemType = "Talent_Level_Up_Material";
  S_Check_1 = "Philosophies_of_";
  S_Check_2 = "";
  S_Check_3 = "TLUM_";
  const allItems = [
    { name: "Vagrancy", unit: " 点" },
    { name: "Elysium", unit: " 点" },
    { name: "Moonlight", unit: " 点" },
    { name: "Conflict", unit: " 点" },
    { name: "Kindling", unit: " 点" },
    { name: "Contention", unit: " 点" },
    { name: "Order", unit: " 点" },
    { name: "Justice", unit: " 点" },
    { name: "Equity", unit: " 点" },
    { name: "Praxis", unit: " 点" },
    { name: "Ingenuity", unit: " 点" },
    { name: "Admonition", unit: " 点" },
    { name: "Light", unit: " 点" },
    { name: "Elegance", unit: " 点" },
    { name: "Transience", unit: " 点" },
    { name: "Gold", unit: " 点" },
    { name: "Diligence", unit: " 点" },
    { name: "Prosperity", unit: " 点" },
    { name: "Ballad", unit: " 点" },
    { name: "Resistance", unit: " 点" },
    { name: "Freedom", unit: " 点" }
  ];

  let html = "";
  for (let i = allItems.length - 1; i >= 0; i -= 7) {
    S_ItemName_1 = allItems[i]?.name || "";
    S_ItemUnit_1 = allItems[i]?.unit || "";
    S_ItemName_2 = allItems[i - 1]?.name || "";
    S_ItemUnit_2 = allItems[i - 1]?.unit || "";
    S_ItemName_3 = allItems[i - 2]?.name || "";
    S_ItemUnit_3 = allItems[i - 2]?.unit || "";
    S_ItemName_4 = allItems[i - 3]?.name || "";
    S_ItemUnit_4 = allItems[i - 3]?.unit || "";
    S_ItemName_5 = allItems[i - 4]?.name || "";
    S_ItemUnit_5 = allItems[i - 4]?.unit || "";
    S_ItemName_6 = allItems[i - 5]?.name || "";
    S_ItemUnit_6 = allItems[i - 5]?.unit || "";
    S_ItemName_7 = allItems[i - 6]?.name || "";
    S_ItemUnit_7 = allItems[i - 6]?.unit || "";
    html += CalculatorSet();
  }
  CalEle.insertAdjacentHTML("afterend", html);
}
// 週ボス素材
function SetCalculatorTLUM2() {
  CalEle = document.querySelector('th[id="C_Talent_Level_Up_Material"]').parentElement;
  S_ItemType = "Talent_Level_Up_Material_2";
  S_Check_1 = "";
  S_Check_2 = "";
  S_Check_3 = "";
  const allItems = [
    { name: "Ascended_Sample_Queen", unit: " 個" },
    { name: "Ascended_Sample_Rook", unit: " 個" },
    { name: "Ascended_Sample_Knight", unit: " 個" },
    { name: "Eroded_Scale_Feather", unit: " 個" },
    { name: "Eroded_Sunfire", unit: " 個" },
    { name: "Eroded_Horn", unit: " 個" },
    { name: "Denial_and_Judgment", unit: " 個" },
    { name: "Silken_Feather", unit: " 個" },
    { name: "Fading_Candle", unit: " 個" },
    { name: "Lightless_Mass", unit: " 個" },
    { name: "Lightless_Eye_of_the_Maelstrom", unit: " 個" },
    { name: "Lightless_Silk_String", unit: " 個" },
    { name: "Everamber", unit: " 個" },
    { name: "Primordial_Greenbloom", unit: " 個" },
    { name: "Worldspan_Fern", unit: " 個" },
    { name: "Dakas_Bell", unit: " 個" },
    { name: "Mirror_of_Mushin", unit: " 個" },
    { name: "Puppet_Strings", unit: " 個" },
    { name: "The_Meaning_of_Aeons", unit: " 個" },
    { name: "Tears_of_the_Calamitous_God", unit: " 個" },
    { name: "Mudra_of_the_Malefic_General", unit: " 個" },
    { name: "Ashen_Heart", unit: " 個" },
    { name: "Hellfire_Butterfly", unit: " 個" },
    { name: "Molten_Moment", unit: " 個" },
    { name: "Gilded_Scale", unit: " 個" },
    { name: "Bloodjade_Branch", unit: " 個" },
    { name: "Dragon_Lords_Crown", unit: " 個" },
    { name: "Shadow_of_the_Warrior", unit: " 個" },
    { name: "Shard_of_a_Foul_Legacy", unit: " 個" },
    { name: "Tusk_of_Monoceros_Caeli", unit: " 個" },
    { name: "Spirit_Locket_of_Boreas", unit: " 個" },
    { name: "Ring_of_Boreas", unit: " 個" },
    { name: "Tail_of_Boreas", unit: " 個" },
    { name: "Dvalins_Sigh", unit: " 個" },
    { name: "Dvalins_Claw", unit: " 個" },
    { name: "Dvalins_Plume", unit: " 個" }
  ];

  let html = "";
  for (let i = allItems.length - 1; i >= 0; i -= 7) {
    S_ItemName_1 = allItems[i]?.name || "";
    S_ItemUnit_1 = allItems[i]?.unit || "";
    S_ItemName_2 = allItems[i - 1]?.name || "";
    S_ItemUnit_2 = allItems[i - 1]?.unit || "";
    S_ItemName_3 = allItems[i - 2]?.name || "";
    S_ItemUnit_3 = allItems[i - 2]?.unit || "";
    S_ItemName_4 = allItems[i - 3]?.name || "";
    S_ItemUnit_4 = allItems[i - 3]?.unit || "";
    S_ItemName_5 = allItems[i - 4]?.name || "";
    S_ItemUnit_5 = allItems[i - 4]?.unit || "";
    S_ItemName_6 = allItems[i - 5]?.name || "";
    S_ItemUnit_6 = allItems[i - 5]?.unit || "";
    S_ItemName_7 = allItems[i - 6]?.name || "";
    S_ItemUnit_7 = allItems[i - 6]?.unit || "";
    html += CalculatorSet();
  }
  CalEle.insertAdjacentHTML("afterend", html);
}
  SetCalculatorJewel();
  SetCalculatorES();
  SetCalculatorCM();
  SetCalculatorLM();
  SetCalculatorTLUM2();
  SetCalculatorTLUM();

  SetPatchNoteList();
}


// 宝石、ボス素材、特産品、天賦本、週ボス
function CalculatorSet() {
  return `
    <tr>
      <td width="8.6%" colspan="2" class="textleft">合計必要数</td>
      ${S_ItemName_1 ? `<td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_Check_1}${S_ItemName_1}${S_Check_2}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_Check_3}${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>` : ""}
      ${S_ItemName_2 ? `<td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_Check_1}${S_ItemName_2}${S_Check_2}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_Check_3}${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>` : ""}
      ${S_ItemName_3 ? `<td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_Check_1}${S_ItemName_3}${S_Check_2}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_Check_3}${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>` : ""}
      ${S_ItemName_4 ? `<td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_Check_1}${S_ItemName_4}${S_Check_2}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_Check_3}${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>` : ""}
      ${S_ItemName_5 ? `<td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_Check_1}${S_ItemName_5}${S_Check_2}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_Check_3}${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>` : ""}
      ${S_ItemName_6 ? `<td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_Check_1}${S_ItemName_6}${S_Check_2}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_Check_3}${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>` : ""}
      ${S_ItemName_7 ? `<td width="4.3%" colspan="1" rowspan="3"><img class="icon" alt="" src="../image/Small/Item/Item_${S_Check_1}${S_ItemName_7}${S_Check_2}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_Check_3}${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>` : ""}
    </tr>
    <tr>
      <td width="8.6%" colspan="2" class="textleft">所持数</td>
      ${S_ItemName_1 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_Check_3}${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>` : ""}
      ${S_ItemName_2 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_Check_3}${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>` : ""}
      ${S_ItemName_3 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_Check_3}${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>` : ""}
      ${S_ItemName_4 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_Check_3}${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>` : ""}
      ${S_ItemName_5 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_Check_3}${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>` : ""}
      ${S_ItemName_6 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_Check_3}${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>` : ""}
      ${S_ItemName_7 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_Check_3}${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>` : ""}
    </tr>
    <tr>
      <td width="8.6%" colspan="2" class="textleft">残り必要数</td>
      ${S_ItemName_1 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_Check_3}${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>` : ""}
      ${S_ItemName_2 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_Check_3}${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>` : ""}
      ${S_ItemName_3 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_Check_3}${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>` : ""}
      ${S_ItemName_4 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_Check_3}${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>` : ""}
      ${S_ItemName_5 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_Check_3}${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>` : ""}
      ${S_ItemName_6 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_Check_3}${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>` : ""}
      ${S_ItemName_7 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_Check_3}${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>` : ""}
    </tr>
  `;
}
// Common Material
function CalculatorSet2() {
  return `
    <tr>
      <td width="8.6%" colspan="2" class="textleft">合計必要数</td>
      ${S_ItemName_1 ? `<td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_1}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__1}_Volume"></span>${S_ItemUnit_1}</td>` : ""}
      ${S_ItemName_2 ? `<td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_2}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__2}_Volume"></span>${S_ItemUnit_2}</td>` : ""}
      ${S_ItemName_3 ? `<td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_3}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__3}_Volume"></span>${S_ItemUnit_3}</td>` : ""}
      ${S_ItemName_4 ? `<td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_4}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__4}_Volume"></span>${S_ItemUnit_4}</td>` : ""}
      ${S_ItemName_5 ? `<td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_5}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__5}_Volume"></span>${S_ItemUnit_5}</td>` : ""}
      ${S_ItemName_6 ? `<td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_6}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__6}_Volume"></span>${S_ItemUnit_6}</td>` : ""}
      ${S_ItemName_7 ? `<td width="4.3%" colspan="1" rowspan="5"><img class="icon" alt="" src="../image/Small/Item/Item_${S_ItemName_7}.webp"></td><td width="8.6%" colspan="2" class="textright"><span class="Calculator ${S_ItemType}" id="${S_ItemIDs__7}_Volume"></span>${S_ItemUnit_7}</td>` : ""}
    </tr>
    <tr>
      <td width="8.6%" colspan="2" class="textleft">突破必要数</td>
      ${S_ItemName_1 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>` : ""}
      ${S_ItemName_2 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>` : ""}
      ${S_ItemName_3 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>` : ""}
      ${S_ItemName_4 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>` : ""}
      ${S_ItemName_5 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>` : ""}
      ${S_ItemName_6 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>` : ""}
      ${S_ItemName_7 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="As_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>` : ""}
    </tr>
    <tr>
      <td width="8.6%" colspan="2" class="textleft">天賦必要数</td>
      ${S_ItemName_1 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>` : ""}
      ${S_ItemName_2 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>` : ""}
      ${S_ItemName_3 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>` : ""}
      ${S_ItemName_4 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>` : ""}
      ${S_ItemName_5 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>` : ""}
      ${S_ItemName_6 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>` : ""}
      ${S_ItemName_7 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ta_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>` : ""}
    </tr>
    <tr>
      <td width="8.6%" colspan="2" class="textleft">所持数</td>
      ${S_ItemName_1 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>` : ""}
      ${S_ItemName_2 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>` : ""}
      ${S_ItemName_3 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>` : ""}
      ${S_ItemName_4 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>` : ""}
      ${S_ItemName_5 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>` : ""}
      ${S_ItemName_6 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>` : ""}
      ${S_ItemName_7 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="In_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>` : ""}
    </tr>
    <tr>
      <td width="8.6%" colspan="2" class="textleft">残り必要数</td>
      ${S_ItemName_1 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_1}_Volume"></span>${S_ItemUnit_1}</td>` : ""}
      ${S_ItemName_2 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_2}_Volume"></span>${S_ItemUnit_2}</td>` : ""}
      ${S_ItemName_3 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_3}_Volume"></span>${S_ItemUnit_3}</td>` : ""}
      ${S_ItemName_4 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_4}_Volume"></span>${S_ItemUnit_4}</td>` : ""}
      ${S_ItemName_5 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_5}_Volume"></span>${S_ItemUnit_5}</td>` : ""}
      ${S_ItemName_6 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_6}_Volume"></span>${S_ItemUnit_6}</td>` : ""}
      ${S_ItemName_7 ? `<td width="8.6%" colspan="2" class="textright"><span class="Calculator" id="Ne_${S_ItemName_7}_Volume"></span>${S_ItemUnit_7}</td>` : ""}
    </tr>
  `;
}

// パッチノート項目の生成
function SetPatchNoteList() {
  CalEle = document.querySelector('div[id="Other"]');
  CalEle.insertAdjacentHTML('beforeend', '\
<b>2025/12/06</b><BR>\
更新。<BR>\
・ネフェル・ヤフォダ・ドゥリン・イルーガ・茲白・コロンビーナの実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題（協力者募集中『@Sakura_Kocho』までお願いします。）<BR>\
<BR><BR>\
<b>2025/09/03</b><BR>\
更新。<BR>\
・イネファ、アイノ、ラウマ、フリンズの実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2025/05/22</b><BR>\
更新。<BR>\
・イファ、エスコフィエ、ダリア、スカークの実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2025/03/31</b><BR>\
更新。<BR>\
・ヴァレサ、イアンサの実装に対応<BR>\
・背景動画機能をテスト実装（シトラリ、ムアラニ、ヴァレサの画像をクリックで起動）<BR>\
・JavaScriptの軽量化<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2025/01/15</b><BR>\
更新。<BR>\
・マーヴィカ、シトラリ、藍硯、夢見月瑞希の実装に対応<BR>\
・背景動画機能をテスト実装<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2024/11/20</b><BR>\
更新。<BR>\
・チャスカ、オロルンの実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2024/07/07</b><BR>\
更新。<BR>\
・ナタの実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2024/07/07</b><BR>\
更新。<BR>\
・エミリエの実装に対応<BR>\
・新規育成素材の実装に対応<BR>\
・シグウィン、セトス、クロリンデの育成素材を修正<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2023/11/10</b><BR>\
更新。<BR>\
・アルレッキーノ、クロリンデ、セトス、シグウィンの実装に対応<BR>\
・新規育成素材の実装に対応<BR>\
・リネとフレミネの育成素材を修正<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2023/11/10</b><BR>\
更新。<BR>\
・閑雲、嘉明、千織の実装に対応<BR>\
・新規特産品、育成素材の実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2023/11/10</b><BR>\
更新。<BR>\
・フリーナ、シャルロット、ナヴィア、シュヴァルーズの実装に対応<BR>\
・新規特産品、天賦素材の実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2023/10/16</b><BR>\
更新。<BR>\
・ヌヴィレット、リオセスリの実装に対応<BR>\
・新規特産品、天賦素材、強化素材の実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題）<BR>\
<BR><BR>\
<b>2023/08/17</b><BR>\
更新。<BR>\
・リネ、リネット、フレミネの実装に対応<BR>\
・新規特産品、天賦素材、強化素材の実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2023/04/13</b><BR>\
更新。<BR>\
・綺良々の実装に対応<BR>\
・新規特産品、天賦素材、強化素材の実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2023/03/19</b><BR>\
更新。<BR>\
・ディシア、ミカ、白朮、カーヴェの実装に対応<BR>\
・砂脂蛹の配置を修正<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2023/01/18</b><BR>\
更新。<BR>\
・アルハイゼン、ヨォーヨの実装に対応<BR>\
・蒼礫蕊羽の実装に対応<BR>\
・砂脂蛹の実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2022/11/02</b><BR>\
更新。<BR>\
・ナヒーダ、レイラの実装に対応<BR>\
・傀儡の糸、無心の淵鏡、空行の虚鈴の実装に対応<BR>\
・滅諍の蔓の実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
<BR><BR>\
<b>2022/09/29</b><BR>\
更新。<BR>\
・ニィロウ、セノ、キャンディスの実装に対応<BR>\
・赤念の実、聖金虫の実装に対応<BR>\
・永続コア、導光四面体の実装に対応<BR>\
<BR>\
既知の問題。<BR>\
・サイトのHtmlやJavaScriptの軽量化問題<BR>\
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
    Elemental_Stones_Name_ = Elemental_Stones_Name.replace(/-/g, '_');
    if (!!Elemental_Stones_Name) {
      Elemental_Stones_Calculator_Go();
    }
  }
}
function Elemental_Stones_Calculator_Go() {
  eval(`
  var ${Elemental_Stones_Name_}_Volume = parseInt("0")
  var ${Elemental_Stones_Name_}_El = document.getElementsByClassName("${Elemental_Stones_Name}")
  for (var i = 0; i < ${Elemental_Stones_Name_}_El.length; i++) {
    var ${Elemental_Stones_Name_}_Volume = ${Elemental_Stones_Name_}_Volume + parseInt(${Elemental_Stones_Name_}_El[i].textContent)
  }
  var In_${Elemental_Stones_Name_}_Volume = parseInt(document.getElementById("${Elemental_Stones_Name}").value)
  var Ne_${Elemental_Stones_Name_}_Volume = ${Elemental_Stones_Name_}_Volume - In_${Elemental_Stones_Name_}_Volume
  document.getElementById('${Elemental_Stones_Name}_Volume').innerHTML = ${Elemental_Stones_Name_}_Volume;
  document.getElementById('In_${Elemental_Stones_Name}_Volume').innerHTML = In_${Elemental_Stones_Name_}_Volume;
  document.getElementById('Ne_${Elemental_Stones_Name}_Volume').innerHTML = Ne_${Elemental_Stones_Name_}_Volume;
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
      } else {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, ${Min}])`);
      }
    }
    if((C_Id.lastIndexOf(C_T2)+C_T2.length===C_Id.length)&&(C_T2.length<=C_Id.length)){
      if (`${Min}` <= "6") {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, "6"])`);
      } else {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, ${Min}])`);
      }
    }
    if((C_Id.lastIndexOf(C_T3)+C_T3.length===C_Id.length)&&(C_T3.length<=C_Id.length)){
      if (`${Min}` <= "6") {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, "6"])`);
      } else {
        eval(`${C_Id}.noUiSlider.set([${`${Min}`}, ${Min}])`);
      }
    }
  });
  Calculator();
  M.toast({
    html: 'Max level of talent to 6',
    displayLength: '1000'
  })
}

function BgVC() {
  const bgvImages = document.querySelectorAll('img.bgv');
  bgvImages.forEach(bgvImage => {
    bgvImage.addEventListener("click", () => {
      const videoId = bgvImage.classList[1];
      if (videoId) {
        const existingVideo = document.querySelector('video[class="NfBV"]');
        if (existingVideo) {
          existingVideo.remove();
          document.querySelector(".BackGroundMovie").innerHTML = `<iframe id="background-video" src="https://www.youtube.com/embed/?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&fs=0&start=4&playlist=${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        } else {
          const videoElement = document.getElementById("background-video");
          videoElement.src = `https://www.youtube.com/embed/?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&fs=0&start=4&playlist=${videoId}`;
        }
      }
    });
  });
  if (bgvImages.length === 0) {
    console.log("動画読み込みの失敗");
  }
}

// ページ読み込み時の処理
function OpenScript() {
  BgVC();
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
      alert("Honey Apricot - Material Calculator\n\n更新情報（ver.20250903 to ver." + Version + "）\n・ネフェル・ヤフォダ・ドゥリン・イルーガ・茲白・コロンビーナの実装に対応\n\n既知の問題。\n・サイトのHtmlやJavaScriptの軽量化問題");
    }  else  {
      Load();
    }
  }
}