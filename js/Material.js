var Version = "20220623"

httpObj = new XMLHttpRequest();
httpObj.open("get", "Material.json", true);
httpObj.onload = function(){}
httpObj.send(null);

// スライダーの作成
function SliderCreate() {
  CharacterName = "Shikanoin_Heizou";
  SliderCreate_Go();
  CharacterName = "Kuki_Shinobu";
  SliderCreate_Go();
  CharacterName = "Yelan";
  SliderCreate_Go();
  CharacterName = "Kamisato_Ayato";
  SliderCreate_Go();
  CharacterName = "Yae_Miko";
  SliderCreate_Go();
  CharacterName = "Shenhe";
  SliderCreate_Go();
  CharacterName = "Yun_Jin";
  SliderCreate_Go();
  CharacterName = "Arataki_Itto";
  SliderCreate_Go();
  CharacterName = "Gorou";
  SliderCreate_Go();
  CharacterName = "Thoma";
  SliderCreate_Go();
  CharacterName = "Sangonomiya_Kokomi";
  SliderCreate_Go();
  CharacterName = "Raiden_Shogun";
  SliderCreate_Go();
  CharacterName = "Kujou_Sara";
  SliderCreate_Go();
  CharacterName = "Yoimiya";
  SliderCreate_Go();
  CharacterName = "Sayu";
  SliderCreate_Go();
  CharacterName = "Kamisato_Ayaka";
  SliderCreate_Go();
  CharacterName = "Kaedehara_Kazuha";
  SliderCreate_Go();
  CharacterName = "Eula";
  SliderCreate_Go();
  CharacterName = "Yanfei";
  SliderCreate_Go();
  CharacterName = "Rosaria";
  SliderCreate_Go();
  CharacterName = "HuTao";
  SliderCreate_Go();
  CharacterName = "Xiao";
  SliderCreate_Go();
  CharacterName = "Ganyu";
  SliderCreate_Go();
  CharacterName = "Albedo";
  SliderCreate_Go();
  CharacterName = "Zhongli";
  SliderCreate_Go();
  CharacterName = "Xinyan";
  SliderCreate_Go();
  CharacterName = "Tartaglia";
  SliderCreate_Go();
  CharacterName = "Diona";
  SliderCreate_Go();
  CharacterName = "Klee";
  SliderCreate_Go();
  CharacterName = "Venti";
  SliderCreate_Go();
  CharacterName = "Keqing";
  SliderCreate_Go();
  CharacterName = "Mona";
  SliderCreate_Go();
  CharacterName = "Qiqi";
  SliderCreate_Go();
  CharacterName = "Diluc";
  SliderCreate_Go();
  CharacterName = "Jean";
  SliderCreate_Go();
  CharacterName = "Sucrose";
  SliderCreate_Go();
  CharacterName = "Chongyun";
  SliderCreate_Go();
  CharacterName = "Noelle";
  SliderCreate_Go();
  CharacterName = "Bennett";
  SliderCreate_Go();
  CharacterName = "Fischl";
  SliderCreate_Go();
  CharacterName = "Ningguang";
  SliderCreate_Go();
  CharacterName = "Xingqiu";
  SliderCreate_Go();
  CharacterName = "Beidou";
  SliderCreate_Go();
  CharacterName = "Xiangling";
  SliderCreate_Go();
  CharacterName = "Razor";
  SliderCreate_Go();
  CharacterName = "Barbara";
  SliderCreate_Go();
  CharacterName = "Lisa";
  SliderCreate_Go();
  CharacterName = "Kaeya";
  SliderCreate_Go();
  CharacterName = "Amber";
  SliderCreate_Go();
  CharacterName = "Aloy";
  SliderCreate_Go();
}
function SliderCreate_Go() {
  eval(`
    noUiSlider.create(${CharacterName}_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${CharacterName}_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${CharacterName}_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${CharacterName}_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${CharacterName}_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
  `);
}
SliderCreate();

// スライダーの読み込み
function LoadWait() {
  if ( !httpObj.response ) {
    console.log("読み込み中")
    setTimeout( LoadWait, 500 );
    return;
  }
  CharacterName = "Shikanoin_Heizou";
  Character_Load();
  CharacterName = "Kuki_Shinobu";
  Character_Load();
  CharacterName = "Yelan";
  Character_Load();
  CharacterName = "Kamisato_Ayato";
  Character_Load();
  CharacterName = "Yae_Miko";
  Character_Load();
  CharacterName = "Shenhe";
  Character_Load();
  CharacterName = "Yun_Jin";
  Character_Load();
  CharacterName = "Arataki_Itto";
  Character_Load();
  CharacterName = "Gorou";
  Character_Load();
  CharacterName = "Thoma";
  Character_Load();
  CharacterName = "Sangonomiya_Kokomi";
  Character_Load();
  CharacterName = "Raiden_Shogun";
  Character_Load();
  CharacterName = "Kujou_Sara";
  Character_Load();
  CharacterName = "Yoimiya";
  Character_Load();
  CharacterName = "Sayu";
  Character_Load();
  CharacterName = "Kamisato_Ayaka";
  Character_Load();
  CharacterName = "Kaedehara_Kazuha";
  Character_Load();
  CharacterName = "Eula";
  Character_Load();
  CharacterName = "Yanfei";
  Character_Load();
  CharacterName = "Rosaria";
  Character_Load();
  CharacterName = "HuTao";
  Character_Load();
  CharacterName = "Xiao";
  Character_Load();
  CharacterName = "Ganyu";
  Character_Load();
  CharacterName = "Albedo";
  Character_Load();
  CharacterName = "Zhongli";
  Character_Load();
  CharacterName = "Xinyan";
  Character_Load();
  CharacterName = "Tartaglia";
  Character_Load();
  CharacterName = "Diona";
  Character_Load();
  CharacterName = "Klee";
  Character_Load();
  CharacterName = "Venti";
  Character_Load();
  CharacterName = "Keqing";
  Character_Load();
  CharacterName = "Mona";
  Character_Load();
  CharacterName = "Qiqi";
  Character_Load();
  CharacterName = "Diluc";
  Character_Load();
  CharacterName = "Jean";
  Character_Load();
  CharacterName = "Sucrose";
  Character_Load();
  CharacterName = "Chongyun";
  Character_Load();
  CharacterName = "Noelle";
  Character_Load();
  CharacterName = "Bennett";
  Character_Load();
  CharacterName = "Fischl";
  Character_Load();
  CharacterName = "Ningguang";
  Character_Load();
  CharacterName = "Xingqiu";
  Character_Load();
  CharacterName = "Beidou";
  Character_Load();
  CharacterName = "Xiangling";
  Character_Load();
  CharacterName = "Razor";
  Character_Load();
  CharacterName = "Barbara";
  Character_Load();
  CharacterName = "Lisa";
  Character_Load();
  CharacterName = "Kaeya";
  Character_Load();
  CharacterName = "Amber";
  Character_Load();
  CharacterName = "Aloy";
  Character_Load();
}
function Character_Load() {
  eval(`
    ${CharacterName}_Ex.noUiSlider.on('update', function (values, handle) {
      var ${CharacterName}_Ex_Min_Volume = "L1toL" + ${CharacterName}_Ex.noUiSlider.get()[0];
      var ${CharacterName}_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == ${CharacterName}_Ex.noUiSlider.get()[0])[${CharacterName}_Ex_Min_Volume]);
      var ${CharacterName}_Ex_Max_Volume = "L1toL" + ${CharacterName}_Ex.noUiSlider.get()[1];
      var ${CharacterName}_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == ${CharacterName}_Ex.noUiSlider.get()[1])[${CharacterName}_Ex_Max_Volume]);
      var ${CharacterName}_Ex_Volume = ${CharacterName}_Ex_1toMax_Volume - ${CharacterName}_Ex_1toMin_Volume
      var ${CharacterName}_Ex_Book_Volume = ${CharacterName}_Ex_Volume / 1000
      var ${CharacterName}_Ex_Mora_Volume = ${CharacterName}_Ex_Volume * 0.2
      document.getElementById('${CharacterName}_Ex_Volume').innerHTML = ${CharacterName}_Ex_Volume.toLocaleString();
      document.getElementById('${CharacterName}_Ex_Book_Volume').innerHTML = ${CharacterName}_Ex_Book_Volume.toLocaleString();
      document.getElementById('${CharacterName}_Ex_Mora_Volume').innerHTML = ${CharacterName}_Ex_Mora_Volume.toLocaleString();
    });
    ${CharacterName}_Pr.noUiSlider.on('update', function (values, handle) {
      var ${CharacterName}_Pr_Min_Volume = "L1toL" + ${CharacterName}_Pr.noUiSlider.get()[0];
      var ${CharacterName}_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[0])["P1_" + [${CharacterName}_Pr_Min_Volume]]);
      var ${CharacterName}_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[0])["P2_" + [${CharacterName}_Pr_Min_Volume]]);
      var ${CharacterName}_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[0])["P3_" + [${CharacterName}_Pr_Min_Volume]]);
      var ${CharacterName}_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[0])["P4_" + [${CharacterName}_Pr_Min_Volume]]);
      var ${CharacterName}_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[0])["P5_" + [${CharacterName}_Pr_Min_Volume]]);
      var ${CharacterName}_Pr_Max_Volume = "L1toL" + ${CharacterName}_Pr.noUiSlider.get()[1];
      var ${CharacterName}_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[1])["P1_" + [${CharacterName}_Pr_Max_Volume]]);
      var ${CharacterName}_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[1])["P2_" + [${CharacterName}_Pr_Max_Volume]]);
      var ${CharacterName}_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[1])["P3_" + [${CharacterName}_Pr_Max_Volume]]);
      var ${CharacterName}_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[1])["P4_" + [${CharacterName}_Pr_Max_Volume]]);
      var ${CharacterName}_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == ${CharacterName}_Pr.noUiSlider.get()[1])["P5_" + [${CharacterName}_Pr_Max_Volume]]);
      var ${CharacterName}_Pr_P1 = ${CharacterName}_Pr_P1_1toMax_Volume - ${CharacterName}_Pr_P1_1toMin_Volume
      var ${CharacterName}_Pr_P2 = ${CharacterName}_Pr_P2_1toMax_Volume - ${CharacterName}_Pr_P2_1toMin_Volume
      var ${CharacterName}_Pr_P3 = ${CharacterName}_Pr_P3_1toMax_Volume - ${CharacterName}_Pr_P3_1toMin_Volume
      var ${CharacterName}_Pr_P4 = ${CharacterName}_Pr_P4_1toMax_Volume - ${CharacterName}_Pr_P4_1toMin_Volume
      var ${CharacterName}_Pr_P5 = ${CharacterName}_Pr_P5_1toMax_Volume - ${CharacterName}_Pr_P5_1toMin_Volume
      document.getElementById('${CharacterName}_Pr_P1_Volume').innerHTML = ${CharacterName}_Pr_P1;
      document.getElementById('${CharacterName}_Pr_P2_Volume').innerHTML = ${CharacterName}_Pr_P2;
      document.getElementById('${CharacterName}_Pr_P3_Volume').innerHTML = ${CharacterName}_Pr_P3;
      document.getElementById('${CharacterName}_Pr_P4_Volume').innerHTML = ${CharacterName}_Pr_P4;
      document.getElementById('${CharacterName}_Pr_P5_Volume').innerHTML = ${CharacterName}_Pr_P5.toLocaleString();
    });
    ${CharacterName}_T1.noUiSlider.on('update', function (values, handle) {
      var ${CharacterName}_T1_Min_Volume = "L1toL" + ${CharacterName}_T1.noUiSlider.get()[0];
      var ${CharacterName}_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[0])["T1_" + [${CharacterName}_T1_Min_Volume]]);
      var ${CharacterName}_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[0])["T2_" + [${CharacterName}_T1_Min_Volume]]);
      var ${CharacterName}_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[0])["T3_" + [${CharacterName}_T1_Min_Volume]]);
      var ${CharacterName}_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[0])["T4_" + [${CharacterName}_T1_Min_Volume]]);
      var ${CharacterName}_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[0])["T5_" + [${CharacterName}_T1_Min_Volume]]);
      var ${CharacterName}_T1_Max_Volume = "L1toL" + ${CharacterName}_T1.noUiSlider.get()[1];
      var ${CharacterName}_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[1])["T1_" + [${CharacterName}_T1_Max_Volume]]);
      var ${CharacterName}_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[1])["T2_" + [${CharacterName}_T1_Max_Volume]]);
      var ${CharacterName}_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[1])["T3_" + [${CharacterName}_T1_Max_Volume]]);
      var ${CharacterName}_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[1])["T4_" + [${CharacterName}_T1_Max_Volume]]);
      var ${CharacterName}_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T1.noUiSlider.get()[1])["T5_" + [${CharacterName}_T1_Max_Volume]]);
      var ${CharacterName}_T1_T1 = ${CharacterName}_T1_T1_1toMax_Volume - ${CharacterName}_T1_T1_1toMin_Volume
      var ${CharacterName}_T1_T2 = ${CharacterName}_T1_T2_1toMax_Volume - ${CharacterName}_T1_T2_1toMin_Volume
      var ${CharacterName}_T1_T3 = ${CharacterName}_T1_T3_1toMax_Volume - ${CharacterName}_T1_T3_1toMin_Volume
      var ${CharacterName}_T1_T4 = ${CharacterName}_T1_T4_1toMax_Volume - ${CharacterName}_T1_T4_1toMin_Volume
      var ${CharacterName}_T1_T5 = ${CharacterName}_T1_T5_1toMax_Volume - ${CharacterName}_T1_T5_1toMin_Volume
      document.getElementById('${CharacterName}_T1_T1_Volume').innerHTML = ${CharacterName}_T1_T1;
      document.getElementById('${CharacterName}_T1_T2_Volume').innerHTML = ${CharacterName}_T1_T2;
      document.getElementById('${CharacterName}_T1_T3_Volume').innerHTML = ${CharacterName}_T1_T3;
      document.getElementById('${CharacterName}_T1_T4_Volume').innerHTML = ${CharacterName}_T1_T4;
      document.getElementById('${CharacterName}_T1_T5_Volume').innerHTML = ${CharacterName}_T1_T5.toLocaleString();
    });
    ${CharacterName}_T2.noUiSlider.on('update', function (values, handle) {
      var ${CharacterName}_T2_Min_Volume = "L1toL" + ${CharacterName}_T2.noUiSlider.get()[0];
      var ${CharacterName}_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[0])["T1_" + [${CharacterName}_T2_Min_Volume]]);
      var ${CharacterName}_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[0])["T2_" + [${CharacterName}_T2_Min_Volume]]);
      var ${CharacterName}_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[0])["T3_" + [${CharacterName}_T2_Min_Volume]]);
      var ${CharacterName}_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[0])["T4_" + [${CharacterName}_T2_Min_Volume]]);
      var ${CharacterName}_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[0])["T5_" + [${CharacterName}_T2_Min_Volume]]);
      var ${CharacterName}_T2_Max_Volume = "L1toL" + ${CharacterName}_T2.noUiSlider.get()[1];
      var ${CharacterName}_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[1])["T1_" + [${CharacterName}_T2_Max_Volume]]);
      var ${CharacterName}_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[1])["T2_" + [${CharacterName}_T2_Max_Volume]]);
      var ${CharacterName}_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[1])["T3_" + [${CharacterName}_T2_Max_Volume]]);
      var ${CharacterName}_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[1])["T4_" + [${CharacterName}_T2_Max_Volume]]);
      var ${CharacterName}_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T2.noUiSlider.get()[1])["T5_" + [${CharacterName}_T2_Max_Volume]]);
      var ${CharacterName}_T2_T1 = ${CharacterName}_T2_T1_1toMax_Volume - ${CharacterName}_T2_T1_1toMin_Volume
      var ${CharacterName}_T2_T2 = ${CharacterName}_T2_T2_1toMax_Volume - ${CharacterName}_T2_T2_1toMin_Volume
      var ${CharacterName}_T2_T3 = ${CharacterName}_T2_T3_1toMax_Volume - ${CharacterName}_T2_T3_1toMin_Volume
      var ${CharacterName}_T2_T4 = ${CharacterName}_T2_T4_1toMax_Volume - ${CharacterName}_T2_T4_1toMin_Volume
      var ${CharacterName}_T2_T5 = ${CharacterName}_T2_T5_1toMax_Volume - ${CharacterName}_T2_T5_1toMin_Volume
      document.getElementById('${CharacterName}_T2_T1_Volume').innerHTML = ${CharacterName}_T2_T1;
      document.getElementById('${CharacterName}_T2_T2_Volume').innerHTML = ${CharacterName}_T2_T2;
      document.getElementById('${CharacterName}_T2_T3_Volume').innerHTML = ${CharacterName}_T2_T3;
      document.getElementById('${CharacterName}_T2_T4_Volume').innerHTML = ${CharacterName}_T2_T4;
      document.getElementById('${CharacterName}_T2_T5_Volume').innerHTML = ${CharacterName}_T2_T5.toLocaleString();
    });
    ${CharacterName}_T3.noUiSlider.on('update', function (values, handle) {
      var ${CharacterName}_T3_Min_Volume = "L1toL" + ${CharacterName}_T3.noUiSlider.get()[0];
      var ${CharacterName}_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[0])["T1_" + [${CharacterName}_T3_Min_Volume]]);
      var ${CharacterName}_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[0])["T2_" + [${CharacterName}_T3_Min_Volume]]);
      var ${CharacterName}_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[0])["T3_" + [${CharacterName}_T3_Min_Volume]]);
      var ${CharacterName}_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[0])["T4_" + [${CharacterName}_T3_Min_Volume]]);
      var ${CharacterName}_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[0])["T5_" + [${CharacterName}_T3_Min_Volume]]);
      var ${CharacterName}_T3_Max_Volume = "L1toL" + ${CharacterName}_T3.noUiSlider.get()[1];
      var ${CharacterName}_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[1])["T1_" + [${CharacterName}_T3_Max_Volume]]);
      var ${CharacterName}_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[1])["T2_" + [${CharacterName}_T3_Max_Volume]]);
      var ${CharacterName}_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[1])["T3_" + [${CharacterName}_T3_Max_Volume]]);
      var ${CharacterName}_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[1])["T4_" + [${CharacterName}_T3_Max_Volume]]);
      var ${CharacterName}_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == ${CharacterName}_T3.noUiSlider.get()[1])["T5_" + [${CharacterName}_T3_Max_Volume]]);
      var ${CharacterName}_T3_T1 = ${CharacterName}_T3_T1_1toMax_Volume - ${CharacterName}_T3_T1_1toMin_Volume
      var ${CharacterName}_T3_T2 = ${CharacterName}_T3_T2_1toMax_Volume - ${CharacterName}_T3_T2_1toMin_Volume
      var ${CharacterName}_T3_T3 = ${CharacterName}_T3_T3_1toMax_Volume - ${CharacterName}_T3_T3_1toMin_Volume
      var ${CharacterName}_T3_T4 = ${CharacterName}_T3_T4_1toMax_Volume - ${CharacterName}_T3_T4_1toMin_Volume
      var ${CharacterName}_T3_T5 = ${CharacterName}_T3_T5_1toMax_Volume - ${CharacterName}_T3_T5_1toMin_Volume
      document.getElementById('${CharacterName}_T3_T1_Volume').innerHTML = ${CharacterName}_T3_T1;
      document.getElementById('${CharacterName}_T3_T2_Volume').innerHTML = ${CharacterName}_T3_T2;
      document.getElementById('${CharacterName}_T3_T3_Volume').innerHTML = ${CharacterName}_T3_T3;
      document.getElementById('${CharacterName}_T3_T4_Volume').innerHTML = ${CharacterName}_T3_T4;
      document.getElementById('${CharacterName}_T3_T5_Volume').innerHTML = ${CharacterName}_T3_T5.toLocaleString();
    });
  `);
}
LoadWait();

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

// ページ読み込み時の処理
if (!localStorage.getItem("_Version")) {
  alert("Honey Apricot - Material Calculator ver." + Version + "\n\n『Material Calculator』へようこそ！\n")
}  else  {
  if (!(localStorage.getItem("_Version") === Version)) {
    Load();
    alert("Honey Apricot - Material Calculator\n\n更新情報（ver.20220416 to ver." + Version + "）\n・鹿野院平蔵を追加\n・久岐忍と夜蘭の並びを修正\n・久岐忍と夜蘭の画像を変更\n\n既知の問題。\n・サイトのHtmlやJavaScriptの軽量化問題\n（協力者募集中『@Sakura_Kocho』までお願いします。）");
  }  else  {
    Load();
  }
}