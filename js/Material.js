var Version = "20220408"

httpObj = new XMLHttpRequest();
httpObj.open("get", "Material.json", true);
httpObj.onload = function(){}
httpObj.send(null);

// スライダーの作成（キャラクターを追加していく）
function SliderCreate() {
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
SliderCreate();

// スライダーの読み込み（キャラクターを追加していく）
function LoadWait() {
  if ( !httpObj.response ) {
    console.log("読み込み中")
    setTimeout( LoadWait, 500 );
    return;
  }
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
LoadWait();

// スライダーの作成
function SliderCreate_Go() {
  eval(`
    noUiSlider.create(${CharacterName}_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${CharacterName}_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${CharacterName}_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${CharacterName}_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
    noUiSlider.create(${CharacterName}_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
  `);
}

// スライダーの数値なんかの読み込み
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
  var Hurricane_Seed_Volume = parseInt("0")
  var Hurricane_Seed_El = document.getElementsByClassName("Hurricane_Seed")
  for (var i = 0; i < Hurricane_Seed_El.length; i++) {
    var Hurricane_Seed_Volume = Hurricane_Seed_Volume + parseInt(Hurricane_Seed_El[i].textContent)
  }
  var In_Hurricane_Seed_Volume = parseInt(document.getElementById("Hurricane_Seed").value)
  var Ne_Hurricane_Seed_Volume = Hurricane_Seed_Volume - In_Hurricane_Seed_Volume
  document.getElementById('Hurricane_Seed_Volume').innerHTML = Hurricane_Seed_Volume;
  document.getElementById('In_Hurricane_Seed_Volume').innerHTML = In_Hurricane_Seed_Volume;
  document.getElementById('Ne_Hurricane_Seed_Volume').innerHTML = Ne_Hurricane_Seed_Volume;
// [計算] - 雷光のプリズム
  var Lightning_Prism_Volume = parseInt("0")
  var Lightning_Prism_El = document.getElementsByClassName("Lightning_Prism")
  for (var i = 0; i < Lightning_Prism_El.length; i++) {
    var Lightning_Prism_Volume = Lightning_Prism_Volume + parseInt(Lightning_Prism_El[i].textContent)
  }
  var In_Lightning_Prism_Volume = parseInt(document.getElementById("Lightning_Prism").value)
  var Ne_Lightning_Prism_Volume = Lightning_Prism_Volume - In_Lightning_Prism_Volume
  document.getElementById('Lightning_Prism_Volume').innerHTML = Lightning_Prism_Volume;
  document.getElementById('In_Lightning_Prism_Volume').innerHTML = In_Lightning_Prism_Volume;
  document.getElementById('Ne_Lightning_Prism_Volume').innerHTML = Ne_Lightning_Prism_Volume;
// [計算] - 玄岩の塔
  var Basalt_Pillar_Volume = parseInt("0")
  var Basalt_Pillar_El = document.getElementsByClassName("Basalt_Pillar")
  for (var i = 0; i < Basalt_Pillar_El.length; i++) {
    var Basalt_Pillar_Volume = Basalt_Pillar_Volume + parseInt(Basalt_Pillar_El[i].textContent)
  }
  var In_Basalt_Pillar_Volume = parseInt(document.getElementById("Basalt_Pillar").value)
  var Ne_Basalt_Pillar_Volume = Basalt_Pillar_Volume - In_Basalt_Pillar_Volume
  document.getElementById('Basalt_Pillar_Volume').innerHTML = Basalt_Pillar_Volume;
  document.getElementById('In_Basalt_Pillar_Volume').innerHTML = In_Basalt_Pillar_Volume;
  document.getElementById('Ne_Basalt_Pillar_Volume').innerHTML = Ne_Basalt_Pillar_Volume;
// [計算] - 極寒のコア
  var Hoarfrost_Core_Volume = parseInt("0")
  var Hoarfrost_Core_El = document.getElementsByClassName("Hoarfrost_Core")
  for (var i = 0; i < Hoarfrost_Core_El.length; i++) {
    var Hoarfrost_Core_Volume = Hoarfrost_Core_Volume + parseInt(Hoarfrost_Core_El[i].textContent)
  }
  var In_Hoarfrost_Core_Volume = parseInt(document.getElementById("Hoarfrost_Core").value)
  var Ne_Hoarfrost_Core_Volume = Hoarfrost_Core_Volume - In_Hoarfrost_Core_Volume
  document.getElementById('Hoarfrost_Core_Volume').innerHTML = Hoarfrost_Core_Volume;
  document.getElementById('In_Hoarfrost_Core_Volume').innerHTML = In_Hoarfrost_Core_Volume;
  document.getElementById('Ne_Hoarfrost_Core_Volume').innerHTML = Ne_Hoarfrost_Core_Volume;
// [計算] - 常燃の火種
  var Everflame_Seed_Volume = parseInt("0")
  var Everflame_Seed_El = document.getElementsByClassName("Everflame_Seed")
  for (var i = 0; i < Everflame_Seed_El.length; i++) {
    var Everflame_Seed_Volume = Everflame_Seed_Volume + parseInt(Everflame_Seed_El[i].textContent)
  }
  var In_Everflame_Seed_Volume = parseInt(document.getElementById("Everflame_Seed").value)
  var Ne_Everflame_Seed_Volume = Everflame_Seed_Volume - In_Everflame_Seed_Volume
  document.getElementById('Everflame_Seed_Volume').innerHTML = Everflame_Seed_Volume;
  document.getElementById('In_Everflame_Seed_Volume').innerHTML = In_Everflame_Seed_Volume;
  document.getElementById('Ne_Everflame_Seed_Volume').innerHTML = Ne_Everflame_Seed_Volume;
// [計算] - 浄水の心
  var Cleansing_Heart_Volume = parseInt("0")
  var Cleansing_Heart_El = document.getElementsByClassName("Cleansing_Heart")
  for (var i = 0; i < Cleansing_Heart_El.length; i++) {
    var Cleansing_Heart_Volume = Cleansing_Heart_Volume + parseInt(Cleansing_Heart_El[i].textContent)
  }
  var In_Cleansing_Heart_Volume = parseInt(document.getElementById("Cleansing_Heart").value)
  var Ne_Cleansing_Heart_Volume = Cleansing_Heart_Volume - In_Cleansing_Heart_Volume
  document.getElementById('Cleansing_Heart_Volume').innerHTML = Cleansing_Heart_Volume;
  document.getElementById('In_Cleansing_Heart_Volume').innerHTML = In_Cleansing_Heart_Volume;
  document.getElementById('Ne_Cleansing_Heart_Volume').innerHTML = Ne_Cleansing_Heart_Volume;
// [計算] - 未熟の玉石
  var Juvenile_Jade_Volume = parseInt("0")
  var Juvenile_Jade_El = document.getElementsByClassName("Juvenile_Jade")
  for (var i = 0; i < Juvenile_Jade_El.length; i++) {
    var Juvenile_Jade_Volume = Juvenile_Jade_Volume + parseInt(Juvenile_Jade_El[i].textContent)
  }
  var In_Juvenile_Jade_Volume = parseInt(document.getElementById("Juvenile_Jade").value)
  var Ne_Juvenile_Jade_Volume = Juvenile_Jade_Volume - In_Juvenile_Jade_Volume
  document.getElementById('Juvenile_Jade_Volume').innerHTML = Juvenile_Jade_Volume;
  document.getElementById('In_Juvenile_Jade_Volume').innerHTML = In_Juvenile_Jade_Volume;
  document.getElementById('Ne_Juvenile_Jade_Volume').innerHTML = Ne_Juvenile_Jade_Volume;
// [計算] - 凝結の華
  var Crystalline_Bloom_Volume = parseInt("0")
  var Crystalline_Bloom_El = document.getElementsByClassName("Crystalline_Bloom")
  for (var i = 0; i < Crystalline_Bloom_El.length; i++) {
    var Crystalline_Bloom_Volume = Crystalline_Bloom_Volume + parseInt(Crystalline_Bloom_El[i].textContent)
  }
  var In_Crystalline_Bloom_Volume = parseInt(document.getElementById("Crystalline_Bloom").value)
  var Ne_Crystalline_Bloom_Volume = Crystalline_Bloom_Volume - In_Crystalline_Bloom_Volume
  document.getElementById('Crystalline_Bloom_Volume').innerHTML = Crystalline_Bloom_Volume;
  document.getElementById('In_Crystalline_Bloom_Volume').innerHTML = In_Crystalline_Bloom_Volume;
  document.getElementById('Ne_Crystalline_Bloom_Volume').innerHTML = Ne_Crystalline_Bloom_Volume;
// [計算] - 魔偶の芯
  var Marionette_Core_Volume = parseInt("0")
  var Marionette_Core_El = document.getElementsByClassName("Marionette_Core")
  for (var i = 0; i < Marionette_Core_El.length; i++) {
    var Marionette_Core_Volume = Marionette_Core_Volume + parseInt(Marionette_Core_El[i].textContent)
  }
  var In_Marionette_Core_Volume = parseInt(document.getElementById("Marionette_Core").value)
  var Ne_Marionette_Core_Volume = Marionette_Core_Volume - In_Marionette_Core_Volume
  document.getElementById('Marionette_Core_Volume').innerHTML = Marionette_Core_Volume;
  document.getElementById('In_Marionette_Core_Volume').innerHTML = In_Marionette_Core_Volume;
  document.getElementById('Ne_Marionette_Core_Volume').innerHTML = Ne_Marionette_Core_Volume;
// [計算] - 恒常からくりの芯
  var Perpetual_Heart_Volume = parseInt("0")
  var Perpetual_Heart_El = document.getElementsByClassName("Perpetual_Heart")
  for (var i = 0; i < Perpetual_Heart_El.length; i++) {
    var Perpetual_Heart_Volume = Perpetual_Heart_Volume + parseInt(Perpetual_Heart_El[i].textContent)
  }
  var In_Perpetual_Heart_Volume = parseInt(document.getElementById("Perpetual_Heart").value)
  var Ne_Perpetual_Heart_Volume = Perpetual_Heart_Volume - In_Perpetual_Heart_Volume
  document.getElementById('Perpetual_Heart_Volume').innerHTML = Perpetual_Heart_Volume;
  document.getElementById('In_Perpetual_Heart_Volume').innerHTML = In_Perpetual_Heart_Volume;
  document.getElementById('Ne_Perpetual_Heart_Volume').innerHTML = Ne_Perpetual_Heart_Volume;
// [計算] - 陰燃の珠
  var Smoldering_Pearl_Volume = parseInt("0")
  var Smoldering_Pearl_El = document.getElementsByClassName("Smoldering_Pearl")
  for (var i = 0; i < Smoldering_Pearl_El.length; i++) {
    var Smoldering_Pearl_Volume = Smoldering_Pearl_Volume + parseInt(Smoldering_Pearl_El[i].textContent)
  }
  var In_Smoldering_Pearl_Volume = parseInt(document.getElementById("Smoldering_Pearl").value)
  var Ne_Smoldering_Pearl_Volume = Smoldering_Pearl_Volume - In_Smoldering_Pearl_Volume
  document.getElementById('Smoldering_Pearl_Volume').innerHTML = Smoldering_Pearl_Volume;
  document.getElementById('In_Smoldering_Pearl_Volume').innerHTML = In_Smoldering_Pearl_Volume;
  document.getElementById('Ne_Smoldering_Pearl_Volume').innerHTML = Ne_Smoldering_Pearl_Volume;
// [計算] - 排他の露
  var Dew_of_Repudiation_Volume = parseInt("0")
  var Dew_of_Repudiation_El = document.getElementsByClassName("Dew_of_Repudiation")
  for (var i = 0; i < Dew_of_Repudiation_El.length; i++) {
    var Dew_of_Repudiation_Volume = Dew_of_Repudiation_Volume + parseInt(Dew_of_Repudiation_El[i].textContent)
  }
  var In_Dew_of_Repudiation_Volume = parseInt(document.getElementById("Dew_of_Repudiation").value)
  var Ne_Dew_of_Repudiation_Volume = Dew_of_Repudiation_Volume - In_Dew_of_Repudiation_Volume
  document.getElementById('Dew_of_Repudiation_Volume').innerHTML = Dew_of_Repudiation_Volume;
  document.getElementById('In_Dew_of_Repudiation_Volume').innerHTML = In_Dew_of_Repudiation_Volume;
  document.getElementById('Ne_Dew_of_Repudiation_Volume').innerHTML = Ne_Dew_of_Repudiation_Volume;
// [計算] - 雷霆の念珠
  var Storm_Beads_Volume = parseInt("0")
  var Storm_Beads_El = document.getElementsByClassName("Storm_Beads")
  for (var i = 0; i < Storm_Beads_El.length; i++) {
    var Storm_Beads_Volume = Storm_Beads_Volume + parseInt(Storm_Beads_El[i].textContent)
  }
  var In_Storm_Beads_Volume = parseInt(document.getElementById("Storm_Beads").value)
  var Ne_Storm_Beads_Volume = Storm_Beads_Volume - In_Storm_Beads_Volume
  document.getElementById('Storm_Beads_Volume').innerHTML = Storm_Beads_Volume;
  document.getElementById('In_Storm_Beads_Volume').innerHTML = In_Storm_Beads_Volume;
  document.getElementById('Ne_Storm_Beads_Volume').innerHTML = Ne_Storm_Beads_Volume;
// [計算] - 獣域王器
  var Riftborn_Regalia_Volume = parseInt("0")
  var Riftborn_Regalia_El = document.getElementsByClassName("Riftborn_Regalia")
  for (var i = 0; i < Riftborn_Regalia_El.length; i++) {
    var Riftborn_Regalia_Volume = Riftborn_Regalia_Volume + parseInt(Riftborn_Regalia_El[i].textContent)
  }
  var In_Riftborn_Regalia_Volume = parseInt(document.getElementById("Riftborn_Regalia").value)
  var Ne_Riftborn_Regalia_Volume = Riftborn_Regalia_Volume - In_Riftborn_Regalia_Volume
  document.getElementById('Riftborn_Regalia_Volume').innerHTML = Riftborn_Regalia_Volume;
  document.getElementById('In_Riftborn_Regalia_Volume').innerHTML = In_Riftborn_Regalia_Volume;
  document.getElementById('Ne_Riftborn_Regalia_Volume').innerHTML = Ne_Riftborn_Regalia_Volume;
// [計算] - ドラゴエアのニセヒレ
  var Dragonheirs_False_Fin_Volume = parseInt("0")
  var Dragonheirs_False_Fin_El = document.getElementsByClassName("Dragonheirs_False_Fin")
  for (var i = 0; i < Dragonheirs_False_Fin_El.length; i++) {
    var Dragonheirs_False_Fin_Volume = Dragonheirs_False_Fin_Volume + parseInt(Dragonheirs_False_Fin_El[i].textContent)
  }
  var In_Dragonheirs_False_Fin_Volume = parseInt(document.getElementById("Dragonheirs_False_Fin").value)
  var Ne_Dragonheirs_False_Fin_Volume = Dragonheirs_False_Fin_Volume - In_Dragonheirs_False_Fin_Volume
  document.getElementById('Dragonheirs_False_Fin_Volume').innerHTML = Dragonheirs_False_Fin_Volume;
  document.getElementById('In_Dragonheirs_False_Fin_Volume').innerHTML = In_Dragonheirs_False_Fin_Volume;
  document.getElementById('Ne_Dragonheirs_False_Fin_Volume').innerHTML = Ne_Dragonheirs_False_Fin_Volume;
}
// [計算] - モブ敵素材
function Common_Material_Calculator() {
// [計算] - スライム
  var As_Slime_Concentrate_Volume = parseInt("0")
  var As_Slime_Concentrate_El = document.getElementsByClassName("Slime_Concentrate Ascension")
  for (var i = 0; i < As_Slime_Concentrate_El.length; i++) {
    var As_Slime_Concentrate_Volume = As_Slime_Concentrate_Volume + parseInt(As_Slime_Concentrate_El[i].textContent)
  }
  var Ta_Slime_Concentrate_Volume = parseInt("0")
  var Ta_Slime_Concentrate_El = document.getElementsByClassName("Slime_Concentrate Talent")
  for (var i = 0; i < Ta_Slime_Concentrate_El.length; i++) {
    var Ta_Slime_Concentrate_Volume = Ta_Slime_Concentrate_Volume + parseInt(Ta_Slime_Concentrate_El[i].textContent)
  }
  var In_Slime_Concentrate_Volume
  = parseInt(document.getElementById("Slime_Concentrate").value) * 9
  + parseInt(document.getElementById("Slime_Secretions").value) * 3
  + parseInt(document.getElementById("Slime_Condensate").value) * 1
  var Slime_Concentrate_Volume = As_Slime_Concentrate_Volume + Ta_Slime_Concentrate_Volume
  var Ne_Slime_Concentrate_Volume = Slime_Concentrate_Volume - In_Slime_Concentrate_Volume
  document.getElementById('Slime_Concentrate_Volume').innerHTML = Slime_Concentrate_Volume;
  document.getElementById('As_Slime_Concentrate_Volume').innerHTML = As_Slime_Concentrate_Volume;
  document.getElementById('Ta_Slime_Concentrate_Volume').innerHTML = Ta_Slime_Concentrate_Volume;
  document.getElementById('In_Slime_Concentrate_Volume').innerHTML = In_Slime_Concentrate_Volume;
  document.getElementById('Ne_Slime_Concentrate_Volume').innerHTML = Ne_Slime_Concentrate_Volume;
// [計算] - 仮面
  var As_Ominous_Mask_Volume = parseInt("0")
  var As_Ominous_Mask_El = document.getElementsByClassName("Ominous_Mask Ascension")
  for (var i = 0; i < As_Ominous_Mask_El.length; i++) {
    var As_Ominous_Mask_Volume = As_Ominous_Mask_Volume + parseInt(As_Ominous_Mask_El[i].textContent)
  }
  var Ta_Ominous_Mask_Volume = parseInt("0")
  var Ta_Ominous_Mask_El = document.getElementsByClassName("Ominous_Mask Talent")
  for (var i = 0; i < Ta_Ominous_Mask_El.length; i++) {
    var Ta_Ominous_Mask_Volume = Ta_Ominous_Mask_Volume + parseInt(Ta_Ominous_Mask_El[i].textContent)
  }
  var In_Ominous_Mask_Volume
  = parseInt(document.getElementById("Ominous_Mask").value) * 9
  + parseInt(document.getElementById("Stained_Mask").value) * 3
  + parseInt(document.getElementById("Damaged_Mask").value) * 1
  var Ominous_Mask_Volume = As_Ominous_Mask_Volume + Ta_Ominous_Mask_Volume
  var Ne_Ominous_Mask_Volume = Ominous_Mask_Volume - In_Ominous_Mask_Volume
  document.getElementById('Ominous_Mask_Volume').innerHTML = Ominous_Mask_Volume;
  document.getElementById('As_Ominous_Mask_Volume').innerHTML = As_Ominous_Mask_Volume;
  document.getElementById('Ta_Ominous_Mask_Volume').innerHTML = Ta_Ominous_Mask_Volume;
  document.getElementById('In_Ominous_Mask_Volume').innerHTML = In_Ominous_Mask_Volume;
  document.getElementById('Ne_Ominous_Mask_Volume').innerHTML = Ne_Ominous_Mask_Volume;
// [計算] - 絵巻
  var As_Forbidden_Curse_Scroll_Volume = parseInt("0")
  var As_Forbidden_Curse_Scroll_El = document.getElementsByClassName("Forbidden_Curse_Scroll Ascension")
  for (var i = 0; i < As_Forbidden_Curse_Scroll_El.length; i++) {
    var As_Forbidden_Curse_Scroll_Volume = As_Forbidden_Curse_Scroll_Volume + parseInt(As_Forbidden_Curse_Scroll_El[i].textContent)
  }
  var Ta_Forbidden_Curse_Scroll_Volume = parseInt("0")
  var Ta_Forbidden_Curse_Scroll_El = document.getElementsByClassName("Forbidden_Curse_Scroll Talent")
  for (var i = 0; i < Ta_Forbidden_Curse_Scroll_El.length; i++) {
    var Ta_Forbidden_Curse_Scroll_Volume = Ta_Forbidden_Curse_Scroll_Volume + parseInt(Ta_Forbidden_Curse_Scroll_El[i].textContent)
  }
  var In_Forbidden_Curse_Scroll_Volume
  = parseInt(document.getElementById("Forbidden_Curse_Scroll").value) * 9
  + parseInt(document.getElementById("Sealed_Scroll").value) * 3
  + parseInt(document.getElementById("Divining_Scroll").value) * 1
  var Forbidden_Curse_Scroll_Volume = As_Forbidden_Curse_Scroll_Volume + Ta_Forbidden_Curse_Scroll_Volume
  var Ne_Forbidden_Curse_Scroll_Volume = Forbidden_Curse_Scroll_Volume - In_Forbidden_Curse_Scroll_Volume
  document.getElementById('Forbidden_Curse_Scroll_Volume').innerHTML = Forbidden_Curse_Scroll_Volume;
  document.getElementById('As_Forbidden_Curse_Scroll_Volume').innerHTML = As_Forbidden_Curse_Scroll_Volume;
  document.getElementById('Ta_Forbidden_Curse_Scroll_Volume').innerHTML = Ta_Forbidden_Curse_Scroll_Volume;
  document.getElementById('In_Forbidden_Curse_Scroll_Volume').innerHTML = In_Forbidden_Curse_Scroll_Volume;
  document.getElementById('Ne_Forbidden_Curse_Scroll_Volume').innerHTML = Ne_Forbidden_Curse_Scroll_Volume;
// [計算] - 矢先
  var As_Weathered_Arrowhead_Volume = parseInt("0")
  var As_Weathered_Arrowhead_El = document.getElementsByClassName("Weathered_Arrowhead Ascension")
  for (var i = 0; i < As_Weathered_Arrowhead_El.length; i++) {
    var As_Weathered_Arrowhead_Volume = As_Weathered_Arrowhead_Volume + parseInt(As_Weathered_Arrowhead_El[i].textContent)
  }
  var Ta_Weathered_Arrowhead_Volume = parseInt("0")
  var Ta_Weathered_Arrowhead_El = document.getElementsByClassName("Weathered_Arrowhead Talent")
  for (var i = 0; i < Ta_Weathered_Arrowhead_El.length; i++) {
    var Ta_Weathered_Arrowhead_Volume = Ta_Weathered_Arrowhead_Volume + parseInt(Ta_Weathered_Arrowhead_El[i].textContent)
  }
  var In_Weathered_Arrowhead_Volume
  = parseInt(document.getElementById("Weathered_Arrowhead").value) * 9
  + parseInt(document.getElementById("Sharp_Arrowhead").value) * 3
  + parseInt(document.getElementById("Firm_Arrowhead").value) * 1
  var Weathered_Arrowhead_Volume = As_Weathered_Arrowhead_Volume + Ta_Weathered_Arrowhead_Volume
  var Ne_Weathered_Arrowhead_Volume = Weathered_Arrowhead_Volume - In_Weathered_Arrowhead_Volume
  document.getElementById('Weathered_Arrowhead_Volume').innerHTML = Weathered_Arrowhead_Volume;
  document.getElementById('As_Weathered_Arrowhead_Volume').innerHTML = As_Weathered_Arrowhead_Volume;
  document.getElementById('Ta_Weathered_Arrowhead_Volume').innerHTML = Ta_Weathered_Arrowhead_Volume;
  document.getElementById('In_Weathered_Arrowhead_Volume').innerHTML = In_Weathered_Arrowhead_Volume;
  document.getElementById('Ne_Weathered_Arrowhead_Volume').innerHTML = Ne_Weathered_Arrowhead_Volume;
// [計算] - 記章
  var As_Lieutenants_Insignia_Volume = parseInt("0")
  var As_Lieutenants_Insignia_El = document.getElementsByClassName("Lieutenants_Insignia Ascension")
  for (var i = 0; i < As_Lieutenants_Insignia_El.length; i++) {
    var As_Lieutenants_Insignia_Volume = As_Lieutenants_Insignia_Volume + parseInt(As_Lieutenants_Insignia_El[i].textContent)
  }
  var Ta_Lieutenants_Insignia_Volume = parseInt("0")
  var Ta_Lieutenants_Insignia_El = document.getElementsByClassName("Lieutenants_Insignia Talent")
  for (var i = 0; i < Ta_Lieutenants_Insignia_El.length; i++) {
    var Ta_Lieutenants_Insignia_Volume = Ta_Lieutenants_Insignia_Volume + parseInt(Ta_Lieutenants_Insignia_El[i].textContent)
  }
  var In_Lieutenants_Insignia_Volume
  = parseInt(document.getElementById("Lieutenants_Insignia").value) * 9
  + parseInt(document.getElementById("Sergeants_Insignia").value) * 3
  + parseInt(document.getElementById("Recruits_Insignia").value) * 1
  var Lieutenants_Insignia_Volume = As_Lieutenants_Insignia_Volume + Ta_Lieutenants_Insignia_Volume
  var Ne_Lieutenants_Insignia_Volume = Lieutenants_Insignia_Volume - In_Lieutenants_Insignia_Volume
  document.getElementById('Lieutenants_Insignia_Volume').innerHTML = Lieutenants_Insignia_Volume;
  document.getElementById('As_Lieutenants_Insignia_Volume').innerHTML = As_Lieutenants_Insignia_Volume;
  document.getElementById('Ta_Lieutenants_Insignia_Volume').innerHTML = Ta_Lieutenants_Insignia_Volume;
  document.getElementById('In_Lieutenants_Insignia_Volume').innerHTML = In_Lieutenants_Insignia_Volume;
  document.getElementById('Ne_Lieutenants_Insignia_Volume').innerHTML = Ne_Lieutenants_Insignia_Volume;
// [計算] - マーク
  var As_Golden_Raven_Insignia_Volume = parseInt("0")
  var As_Golden_Raven_Insignia_El = document.getElementsByClassName("Golden_Raven_Insignia Ascension")
  for (var i = 0; i < As_Golden_Raven_Insignia_El.length; i++) {
    var As_Golden_Raven_Insignia_Volume = As_Golden_Raven_Insignia_Volume + parseInt(As_Golden_Raven_Insignia_El[i].textContent)
  }
  var Ta_Golden_Raven_Insignia_Volume = parseInt("0")
  var Ta_Golden_Raven_Insignia_El = document.getElementsByClassName("Golden_Raven_Insignia Talent")
  for (var i = 0; i < Ta_Golden_Raven_Insignia_El.length; i++) {
    var Ta_Golden_Raven_Insignia_Volume = Ta_Golden_Raven_Insignia_Volume + parseInt(Ta_Golden_Raven_Insignia_El[i].textContent)
  }
  var In_Golden_Raven_Insignia_Volume
  = parseInt(document.getElementById("Golden_Raven_Insignia").value) * 9
  + parseInt(document.getElementById("Silver_Raven_Insignia").value) * 3
  + parseInt(document.getElementById("Treasure_Hoarder_Insignia").value) * 1
  var Golden_Raven_Insignia_Volume = As_Golden_Raven_Insignia_Volume + Ta_Golden_Raven_Insignia_Volume
  var Ne_Golden_Raven_Insignia_Volume = Golden_Raven_Insignia_Volume - In_Golden_Raven_Insignia_Volume
  document.getElementById('Golden_Raven_Insignia_Volume').innerHTML = Golden_Raven_Insignia_Volume;
  document.getElementById('As_Golden_Raven_Insignia_Volume').innerHTML = As_Golden_Raven_Insignia_Volume;
  document.getElementById('Ta_Golden_Raven_Insignia_Volume').innerHTML = Ta_Golden_Raven_Insignia_Volume;
  document.getElementById('In_Golden_Raven_Insignia_Volume').innerHTML = In_Golden_Raven_Insignia_Volume;
  document.getElementById('Ne_Golden_Raven_Insignia_Volume').innerHTML = Ne_Golden_Raven_Insignia_Volume;
// [計算] - 蜜
  var As_Energy_Nectar_Volume = parseInt("0")
  var As_Energy_Nectar_El = document.getElementsByClassName("Energy_Nectar Ascension")
  for (var i = 0; i < As_Energy_Nectar_El.length; i++) {
    var As_Energy_Nectar_Volume = As_Energy_Nectar_Volume + parseInt(As_Energy_Nectar_El[i].textContent)
  }
  var Ta_Energy_Nectar_Volume = parseInt("0")
  var Ta_Energy_Nectar_El = document.getElementsByClassName("Energy_Nectar Talent")
  for (var i = 0; i < Ta_Energy_Nectar_El.length; i++) {
    var Ta_Energy_Nectar_Volume = Ta_Energy_Nectar_Volume + parseInt(Ta_Energy_Nectar_El[i].textContent)
  }
  var In_Energy_Nectar_Volume
  = parseInt(document.getElementById("Energy_Nectar").value) * 9
  + parseInt(document.getElementById("Shimmering_Nectar").value) * 3
  + parseInt(document.getElementById("Whopperflower_Nectar").value) * 1
  var Energy_Nectar_Volume = As_Energy_Nectar_Volume + Ta_Energy_Nectar_Volume
  var Ne_Energy_Nectar_Volume = Energy_Nectar_Volume - In_Energy_Nectar_Volume
  document.getElementById('Energy_Nectar_Volume').innerHTML = Energy_Nectar_Volume;
  document.getElementById('As_Energy_Nectar_Volume').innerHTML = As_Energy_Nectar_Volume;
  document.getElementById('Ta_Energy_Nectar_Volume').innerHTML = Ta_Energy_Nectar_Volume;
  document.getElementById('In_Energy_Nectar_Volume').innerHTML = In_Energy_Nectar_Volume;
  document.getElementById('Ne_Energy_Nectar_Volume').innerHTML = Ne_Energy_Nectar_Volume;
// [計算] - 鍔
  var As_Famed_Handguard_Volume = parseInt("0")
  var As_Famed_Handguard_El = document.getElementsByClassName("Famed_Handguard Ascension")
  for (var i = 0; i < As_Famed_Handguard_El.length; i++) {
    var As_Famed_Handguard_Volume = As_Famed_Handguard_Volume + parseInt(As_Famed_Handguard_El[i].textContent)
  }
  var Ta_Famed_Handguard_Volume = parseInt("0")
  var Ta_Famed_Handguard_El = document.getElementsByClassName("Famed_Handguard Talent")
  for (var i = 0; i < Ta_Famed_Handguard_El.length; i++) {
    var Ta_Famed_Handguard_Volume = Ta_Famed_Handguard_Volume + parseInt(Ta_Famed_Handguard_El[i].textContent)
  }
  var In_Famed_Handguard_Volume
  = parseInt(document.getElementById("Famed_Handguard").value) * 9
  + parseInt(document.getElementById("Kageuchi_Handguard").value) * 3
  + parseInt(document.getElementById("Old_Handguard").value) * 1
  var Famed_Handguard_Volume = As_Famed_Handguard_Volume + Ta_Famed_Handguard_Volume
  var Ne_Famed_Handguard_Volume = Famed_Handguard_Volume - In_Famed_Handguard_Volume
  document.getElementById('Famed_Handguard_Volume').innerHTML = Famed_Handguard_Volume;
  document.getElementById('As_Famed_Handguard_Volume').innerHTML = As_Famed_Handguard_Volume;
  document.getElementById('Ta_Famed_Handguard_Volume').innerHTML = Ta_Famed_Handguard_Volume;
  document.getElementById('In_Famed_Handguard_Volume').innerHTML = In_Famed_Handguard_Volume;
  document.getElementById('Ne_Famed_Handguard_Volume').innerHTML = Ne_Famed_Handguard_Volume;
// [計算] - フライム
  var As_Spectral_Nucleus_Volume = parseInt("0")
  var As_Spectral_Nucleus_El = document.getElementsByClassName("Spectral_Nucleus Ascension")
  for (var i = 0; i < As_Spectral_Nucleus_El.length; i++) {
    var As_Spectral_Nucleus_Volume = As_Spectral_Nucleus_Volume + parseInt(As_Spectral_Nucleus_El[i].textContent)
  }
  var Ta_Spectral_Nucleus_Volume = parseInt("0")
  var Ta_Spectral_Nucleus_El = document.getElementsByClassName("Spectral_Nucleus Talent")
  for (var i = 0; i < Ta_Spectral_Nucleus_El.length; i++) {
    var Ta_Spectral_Nucleus_Volume = Ta_Spectral_Nucleus_Volume + parseInt(Ta_Spectral_Nucleus_El[i].textContent)
  }
  var In_Spectral_Nucleus_Volume
  = parseInt(document.getElementById("Spectral_Nucleus").value) * 9
  + parseInt(document.getElementById("Spectral_Heart").value) * 3
  + parseInt(document.getElementById("Spectral_Husk").value) * 1
  var Spectral_Nucleus_Volume = As_Spectral_Nucleus_Volume + Ta_Spectral_Nucleus_Volume
  var Ne_Spectral_Nucleus_Volume = Spectral_Nucleus_Volume - In_Spectral_Nucleus_Volume
  document.getElementById('Spectral_Nucleus_Volume').innerHTML = Spectral_Nucleus_Volume;
  document.getElementById('As_Spectral_Nucleus_Volume').innerHTML = As_Spectral_Nucleus_Volume;
  document.getElementById('Ta_Spectral_Nucleus_Volume').innerHTML = Ta_Spectral_Nucleus_Volume;
  document.getElementById('In_Spectral_Nucleus_Volume').innerHTML = In_Spectral_Nucleus_Volume;
  document.getElementById('Ne_Spectral_Nucleus_Volume').innerHTML = Ne_Spectral_Nucleus_Volume;
}
// [計算] - 特産品
function Local_Material_Calculator() {
// [計算] - ドドリアン
  var Calla_Lily_Volume = parseInt("0")
  var Calla_Lily_El = document.getElementsByClassName("Calla_Lily")
  for (var i = 0; i < Calla_Lily_El.length; i++) {
    var Calla_Lily_Volume = Calla_Lily_Volume + parseInt(Calla_Lily_El[i].textContent)
  }
  var In_Calla_Lily_Volume = parseInt(document.getElementById("Calla_Lily").value)
  var Ne_Calla_Lily_Volume = Calla_Lily_Volume - In_Calla_Lily_Volume
  document.getElementById('Calla_Lily_Volume').innerHTML = Calla_Lily_Volume;
  document.getElementById('In_Calla_Lily_Volume').innerHTML = In_Calla_Lily_Volume;
  document.getElementById('Ne_Calla_Lily_Volume').innerHTML = Ne_Calla_Lily_Volume;
// [計算] - ググプラム
  var Wolfhook_Volume = parseInt("0")
  var Wolfhook_El = document.getElementsByClassName("Wolfhook")
  for (var i = 0; i < Wolfhook_El.length; i++) {
    var Wolfhook_Volume = Wolfhook_Volume + parseInt(Wolfhook_El[i].textContent)
  }
  var In_Wolfhook_Volume = parseInt(document.getElementById("Wolfhook").value)
  var Ne_Wolfhook_Volume = Wolfhook_Volume - In_Wolfhook_Volume
  document.getElementById('Wolfhook_Volume').innerHTML = Wolfhook_Volume;
  document.getElementById('In_Wolfhook_Volume').innerHTML = In_Wolfhook_Volume;
  document.getElementById('Ne_Wolfhook_Volume').innerHTML = Ne_Wolfhook_Volume;
// [計算] - ヴァルベリー
  var Valberry_Volume = parseInt("0")
  var Valberry_El = document.getElementsByClassName("Valberry")
  for (var i = 0; i < Valberry_El.length; i++) {
    var Valberry_Volume = Valberry_Volume + parseInt(Valberry_El[i].textContent)
  }
  var In_Valberry_Volume = parseInt(document.getElementById("Valberry").value)
  var Ne_Valberry_Volume = Valberry_Volume - In_Valberry_Volume
  document.getElementById('Valberry_Volume').innerHTML = Valberry_Volume;
  document.getElementById('In_Valberry_Volume').innerHTML = In_Valberry_Volume;
  document.getElementById('Ne_Valberry_Volume').innerHTML = Ne_Valberry_Volume;
// [計算] - セシリアの花
  var Cecilia_Volume = parseInt("0")
  var Cecilia_El = document.getElementsByClassName("Cecilia")
  for (var i = 0; i < Cecilia_El.length; i++) {
    var Cecilia_Volume = Cecilia_Volume + parseInt(Cecilia_El[i].textContent)
  }
  var In_Cecilia_Volume = parseInt(document.getElementById("Cecilia").value)
  var Ne_Cecilia_Volume = Cecilia_Volume - In_Cecilia_Volume
  document.getElementById('Cecilia_Volume').innerHTML = Cecilia_Volume;
  document.getElementById('In_Cecilia_Volume').innerHTML = In_Cecilia_Volume;
  document.getElementById('Ne_Cecilia_Volume').innerHTML = Ne_Cecilia_Volume;
// [計算] - 風車アスター
  var Windwheel_Aster_Volume = parseInt("0")
  var Windwheel_Aster_El = document.getElementsByClassName("Windwheel_Aster")
  for (var i = 0; i < Windwheel_Aster_El.length; i++) {
    var Windwheel_Aster_Volume = Windwheel_Aster_Volume + parseInt(Windwheel_Aster_El[i].textContent)
  }
  var In_Windwheel_Aster_Volume = parseInt(document.getElementById("Windwheel_Aster").value)
  var Ne_Windwheel_Aster_Volume = Windwheel_Aster_Volume - In_Windwheel_Aster_Volume
  document.getElementById('Windwheel_Aster_Volume').innerHTML = Windwheel_Aster_Volume;
  document.getElementById('In_Windwheel_Aster_Volume').innerHTML = In_Windwheel_Aster_Volume;
  document.getElementById('Ne_Windwheel_Aster_Volume').innerHTML = Ne_Windwheel_Aster_Volume;
// [計算] - 慕風のマッシュルーム
  var Philanemo_Mushroom_Volume = parseInt("0")
  var Philanemo_Mushroom_El = document.getElementsByClassName("Philanemo_Mushroom")
  for (var i = 0; i < Philanemo_Mushroom_El.length; i++) {
    var Philanemo_Mushroom_Volume = Philanemo_Mushroom_Volume + parseInt(Philanemo_Mushroom_El[i].textContent)
  }
  var In_Philanemo_Mushroom_Volume = parseInt(document.getElementById("Philanemo_Mushroom").value)
  var Ne_Philanemo_Mushroom_Volume = Philanemo_Mushroom_Volume - In_Philanemo_Mushroom_Volume
  document.getElementById('Philanemo_Mushroom_Volume').innerHTML = Philanemo_Mushroom_Volume;
  document.getElementById('In_Philanemo_Mushroom_Volume').innerHTML = In_Philanemo_Mushroom_Volume;
  document.getElementById('Ne_Philanemo_Mushroom_Volume').innerHTML = Ne_Philanemo_Mushroom_Volume;
// [計算] - 絶雲の唐辛子
  var Jueyun_Chili_Volume = parseInt("0")
  var Jueyun_Chili_El = document.getElementsByClassName("Jueyun_Chili")
  for (var i = 0; i < Jueyun_Chili_El.length; i++) {
    var Jueyun_Chili_Volume = Jueyun_Chili_Volume + parseInt(Jueyun_Chili_El[i].textContent)
  }
  var In_Jueyun_Chili_Volume = parseInt(document.getElementById("Jueyun_Chili").value)
  var Ne_Jueyun_Chili_Volume = Jueyun_Chili_Volume - In_Jueyun_Chili_Volume
  document.getElementById('Jueyun_Chili_Volume').innerHTML = Jueyun_Chili_Volume;
  document.getElementById('In_Jueyun_Chili_Volume').innerHTML = In_Jueyun_Chili_Volume;
  document.getElementById('Ne_Jueyun_Chili_Volume').innerHTML = Ne_Jueyun_Chili_Volume;
// [計算] - 夜泊石
  var Noctilucous_Jade_Volume = parseInt("0")
  var Noctilucous_Jade_El = document.getElementsByClassName("Noctilucous_Jade")
  for (var i = 0; i < Noctilucous_Jade_El.length; i++) {
    var Noctilucous_Jade_Volume = Noctilucous_Jade_Volume + parseInt(Noctilucous_Jade_El[i].textContent)
  }
  var In_Noctilucous_Jade_Volume = parseInt(document.getElementById("Noctilucous_Jade").value)
  var Ne_Noctilucous_Jade_Volume = Noctilucous_Jade_Volume - In_Noctilucous_Jade_Volume
  document.getElementById('Noctilucous_Jade_Volume').innerHTML = Noctilucous_Jade_Volume;
  document.getElementById('In_Noctilucous_Jade_Volume').innerHTML = In_Noctilucous_Jade_Volume;
  document.getElementById('Ne_Noctilucous_Jade_Volume').innerHTML = Ne_Noctilucous_Jade_Volume;
// [計算] - 霓裳花
  var Silk_Flower_Volume = parseInt("0")
  var Silk_Flower_El = document.getElementsByClassName("Silk_Flower")
  for (var i = 0; i < Silk_Flower_El.length; i++) {
    var Silk_Flower_Volume = Silk_Flower_Volume + parseInt(Silk_Flower_El[i].textContent)
  }
  var In_Silk_Flower_Volume = parseInt(document.getElementById("Silk_Flower").value)
  var Ne_Silk_Flower_Volume = Silk_Flower_Volume - In_Silk_Flower_Volume
  document.getElementById('Silk_Flower_Volume').innerHTML = Silk_Flower_Volume;
  document.getElementById('In_Silk_Flower_Volume').innerHTML = In_Silk_Flower_Volume;
  document.getElementById('Ne_Silk_Flower_Volume').innerHTML = Ne_Silk_Flower_Volume;
// [計算] - 琉璃百合
  var Glaze_Lily_Volume = parseInt("0")
  var Glaze_Lily_El = document.getElementsByClassName("Glaze_Lily")
  for (var i = 0; i < Glaze_Lily_El.length; i++) {
    var Glaze_Lily_Volume = Glaze_Lily_Volume + parseInt(Glaze_Lily_El[i].textContent)
  }
  var In_Glaze_Lily_Volume = parseInt(document.getElementById("Glaze_Lily").value)
  var Ne_Glaze_Lily_Volume = Glaze_Lily_Volume - In_Glaze_Lily_Volume
  document.getElementById('Glaze_Lily_Volume').innerHTML = Glaze_Lily_Volume;
  document.getElementById('In_Glaze_Lily_Volume').innerHTML = In_Glaze_Lily_Volume;
  document.getElementById('Ne_Glaze_Lily_Volume').innerHTML = Ne_Glaze_Lily_Volume;
// [計算] - 清心
  var Qingxin_Volume = parseInt("0")
  var Qingxin_El = document.getElementsByClassName("Qingxin")
  for (var i = 0; i < Qingxin_El.length; i++) {
    var Qingxin_Volume = Qingxin_Volume + parseInt(Qingxin_El[i].textContent)
  }
  var In_Qingxin_Volume = parseInt(document.getElementById("Qingxin").value)
  var Ne_Qingxin_Volume = Qingxin_Volume - In_Qingxin_Volume
  document.getElementById('Qingxin_Volume').innerHTML = Qingxin_Volume;
  document.getElementById('In_Qingxin_Volume').innerHTML = In_Qingxin_Volume;
  document.getElementById('Ne_Qingxin_Volume').innerHTML = Ne_Qingxin_Volume;
// [計算] - 星螺
  var Starconch_Volume = parseInt("0")
  var Starconch_El = document.getElementsByClassName("Starconch")
  for (var i = 0; i < Starconch_El.length; i++) {
    var Starconch_Volume = Starconch_Volume + parseInt(Starconch_El[i].textContent)
  }
  var In_Starconch_Volume = parseInt(document.getElementById("Starconch").value)
  var Ne_Starconch_Volume = Starconch_Volume - In_Starconch_Volume
  document.getElementById('Starconch_Volume').innerHTML = Starconch_Volume;
  document.getElementById('In_Starconch_Volume').innerHTML = In_Starconch_Volume;
  document.getElementById('Ne_Starconch_Volume').innerHTML = Ne_Starconch_Volume;
// [計算] - 琉璃袋
  var Violetgrass_Volume = parseInt("0")
  var Violetgrass_El = document.getElementsByClassName("Violetgrass")
  for (var i = 0; i < Violetgrass_El.length; i++) {
    var Violetgrass_Volume = Violetgrass_Volume + parseInt(Violetgrass_El[i].textContent)
  }
  var In_Violetgrass_Volume = parseInt(document.getElementById("Violetgrass").value)
  var Ne_Violetgrass_Volume = Violetgrass_Volume - In_Violetgrass_Volume
  document.getElementById('Violetgrass_Volume').innerHTML = Violetgrass_Volume;
  document.getElementById('In_Violetgrass_Volume').innerHTML = In_Violetgrass_Volume;
  document.getElementById('Ne_Violetgrass_Volume').innerHTML = Ne_Violetgrass_Volume;
// [計算] - イグサ
  var Small_Lamp_Grass_Volume = parseInt("0")
  var Small_Lamp_Grass_El = document.getElementsByClassName("Small_Lamp_Grass")
  for (var i = 0; i < Small_Lamp_Grass_El.length; i++) {
    var Small_Lamp_Grass_Volume = Small_Lamp_Grass_Volume + parseInt(Small_Lamp_Grass_El[i].textContent)
  }
  var In_Small_Lamp_Grass_Volume = parseInt(document.getElementById("Small_Lamp_Grass").value)
  var Ne_Small_Lamp_Grass_Volume = Small_Lamp_Grass_Volume - In_Small_Lamp_Grass_Volume
  document.getElementById('Small_Lamp_Grass_Volume').innerHTML = Small_Lamp_Grass_Volume;
  document.getElementById('In_Small_Lamp_Grass_Volume').innerHTML = In_Small_Lamp_Grass_Volume;
  document.getElementById('Ne_Small_Lamp_Grass_Volume').innerHTML = Ne_Small_Lamp_Grass_Volume;
// [計算] - 蒲公英の種
  var Dandelion_Seed_Volume = parseInt("0")
  var Dandelion_Seed_El = document.getElementsByClassName("Dandelion_Seed")
  for (var i = 0; i < Dandelion_Seed_El.length; i++) {
    var Dandelion_Seed_Volume = Dandelion_Seed_Volume + parseInt(Dandelion_Seed_El[i].textContent)
  }
  var In_Dandelion_Seed_Volume = parseInt(document.getElementById("Dandelion_Seed").value)
  var Ne_Dandelion_Seed_Volume = Dandelion_Seed_Volume - In_Dandelion_Seed_Volume
  document.getElementById('Dandelion_Seed_Volume').innerHTML = Dandelion_Seed_Volume;
  document.getElementById('In_Dandelion_Seed_Volume').innerHTML = In_Dandelion_Seed_Volume;
  document.getElementById('Ne_Dandelion_Seed_Volume').innerHTML = Ne_Dandelion_Seed_Volume;
// [計算] - 石珀
  var Cor_Lapis_Volume = parseInt("0")
  var Cor_Lapis_El = document.getElementsByClassName("Cor_Lapis")
  for (var i = 0; i < Cor_Lapis_El.length; i++) {
    var Cor_Lapis_Volume = Cor_Lapis_Volume + parseInt(Cor_Lapis_El[i].textContent)
  }
  var In_Cor_Lapis_Volume = parseInt(document.getElementById("Cor_Lapis").value)
  var Ne_Cor_Lapis_Volume = Cor_Lapis_Volume - In_Cor_Lapis_Volume
  document.getElementById('Cor_Lapis_Volume').innerHTML = Cor_Lapis_Volume;
  document.getElementById('In_Cor_Lapis_Volume').innerHTML = In_Cor_Lapis_Volume;
  document.getElementById('Ne_Cor_Lapis_Volume').innerHTML = Ne_Cor_Lapis_Volume;
// [計算] - オニカブトムシ
  var Onikabuto_Volume = parseInt("0")
  var Onikabuto_El = document.getElementsByClassName("Onikabuto")
  for (var i = 0; i < Onikabuto_El.length; i++) {
    var Onikabuto_Volume = Onikabuto_Volume + parseInt(Onikabuto_El[i].textContent)
  }
  var In_Onikabuto_Volume = parseInt(document.getElementById("Onikabuto").value)
  var Ne_Onikabuto_Volume = Onikabuto_Volume - In_Onikabuto_Volume
  document.getElementById('Onikabuto_Volume').innerHTML = Onikabuto_Volume;
  document.getElementById('In_Onikabuto_Volume').innerHTML = In_Onikabuto_Volume;
  document.getElementById('Ne_Onikabuto_Volume').innerHTML = Ne_Onikabuto_Volume;
// [計算] - 緋櫻毬
  var Sakura_Bloom_Volume = parseInt("0")
  var Sakura_Bloom_El = document.getElementsByClassName("Sakura_Bloom")
  for (var i = 0; i < Sakura_Bloom_El.length; i++) {
    var Sakura_Bloom_Volume = Sakura_Bloom_Volume + parseInt(Sakura_Bloom_El[i].textContent)
  }
  var In_Sakura_Bloom_Volume = parseInt(document.getElementById("Sakura_Bloom").value)
  var Ne_Sakura_Bloom_Volume = Sakura_Bloom_Volume - In_Sakura_Bloom_Volume
  document.getElementById('Sakura_Bloom_Volume').innerHTML = Sakura_Bloom_Volume;
  document.getElementById('In_Sakura_Bloom_Volume').innerHTML = In_Sakura_Bloom_Volume;
  document.getElementById('Ne_Sakura_Bloom_Volume').innerHTML = Ne_Sakura_Bloom_Volume;
// [計算] - 晶化骨髄
  var Crystal_Marrow_Volume = parseInt("0")
  var Crystal_Marrow_El = document.getElementsByClassName("Crystal_Marrow")
  for (var i = 0; i < Crystal_Marrow_El.length; i++) {
    var Crystal_Marrow_Volume = Crystal_Marrow_Volume + parseInt(Crystal_Marrow_El[i].textContent)
  }
  var In_Crystal_Marrow_Volume = parseInt(document.getElementById("Crystal_Marrow").value)
  var Ne_Crystal_Marrow_Volume = Crystal_Marrow_Volume - In_Crystal_Marrow_Volume
  document.getElementById('Crystal_Marrow_Volume').innerHTML = Crystal_Marrow_Volume;
  document.getElementById('In_Crystal_Marrow_Volume').innerHTML = In_Crystal_Marrow_Volume;
  document.getElementById('Ne_Crystal_Marrow_Volume').innerHTML = Ne_Crystal_Marrow_Volume;
// [計算] - 血石華
  var Dendrobium_Volume = parseInt("0")
  var Dendrobium_El = document.getElementsByClassName("Dendrobium")
  for (var i = 0; i < Dendrobium_El.length; i++) {
    var Dendrobium_Volume = Dendrobium_Volume + parseInt(Dendrobium_El[i].textContent)
  }
  var In_Dendrobium_Volume = parseInt(document.getElementById("Dendrobium").value)
  var Ne_Dendrobium_Volume = Dendrobium_Volume - In_Dendrobium_Volume
  document.getElementById('Dendrobium_Volume').innerHTML = Dendrobium_Volume;
  document.getElementById('In_Dendrobium_Volume').innerHTML = In_Dendrobium_Volume;
  document.getElementById('Ne_Dendrobium_Volume').innerHTML = Ne_Dendrobium_Volume;
// [計算] - 鳴草
  var Naku_Weed_Volume = parseInt("0")
  var Naku_Weed_El = document.getElementsByClassName("Naku_Weed")
  for (var i = 0; i < Naku_Weed_El.length; i++) {
    var Naku_Weed_Volume = Naku_Weed_Volume + parseInt(Naku_Weed_El[i].textContent)
  }
  var In_Naku_Weed_Volume = parseInt(document.getElementById("Naku_Weed").value)
  var Ne_Naku_Weed_Volume = Naku_Weed_Volume - In_Naku_Weed_Volume
  document.getElementById('Naku_Weed_Volume').innerHTML = Naku_Weed_Volume;
  document.getElementById('In_Naku_Weed_Volume').innerHTML = In_Naku_Weed_Volume;
  document.getElementById('Ne_Naku_Weed_Volume').innerHTML = Ne_Naku_Weed_Volume;
// [計算] - ウミレイシ
  var Sea_Ganoderma_Volume = parseInt("0")
  var Sea_Ganoderma_El = document.getElementsByClassName("Sea_Ganoderma")
  for (var i = 0; i < Sea_Ganoderma_El.length; i++) {
    var Sea_Ganoderma_Volume = Sea_Ganoderma_Volume + parseInt(Sea_Ganoderma_El[i].textContent)
  }
  var In_Sea_Ganoderma_Volume = parseInt(document.getElementById("Sea_Ganoderma").value)
  var Ne_Sea_Ganoderma_Volume = Sea_Ganoderma_Volume - In_Sea_Ganoderma_Volume
  document.getElementById('Sea_Ganoderma_Volume').innerHTML = Sea_Ganoderma_Volume;
  document.getElementById('In_Sea_Ganoderma_Volume').innerHTML = In_Sea_Ganoderma_Volume;
  document.getElementById('Ne_Sea_Ganoderma_Volume').innerHTML = Ne_Sea_Ganoderma_Volume;
// [計算] - 珊瑚真珠
  var Sango_Pearl_Volume = parseInt("0")
  var Sango_Pearl_El = document.getElementsByClassName("Sango_Pearl")
  for (var i = 0; i < Sango_Pearl_El.length; i++) {
    var Sango_Pearl_Volume = Sango_Pearl_Volume + parseInt(Sango_Pearl_El[i].textContent)
  }
  var In_Sango_Pearl_Volume = parseInt(document.getElementById("Sango_Pearl").value)
  var Ne_Sango_Pearl_Volume = Sango_Pearl_Volume - In_Sango_Pearl_Volume
  document.getElementById('Sango_Pearl_Volume').innerHTML = Sango_Pearl_Volume;
  document.getElementById('In_Sango_Pearl_Volume').innerHTML = In_Sango_Pearl_Volume;
  document.getElementById('Ne_Sango_Pearl_Volume').innerHTML = Ne_Sango_Pearl_Volume;
// [計算] - 天雲草の実
  var Amakumo_Fruit_Volume = parseInt("0")
  var Amakumo_Fruit_El = document.getElementsByClassName("Amakumo_Fruit")
  for (var i = 0; i < Amakumo_Fruit_El.length; i++) {
    var Amakumo_Fruit_Volume = Amakumo_Fruit_Volume + parseInt(Amakumo_Fruit_El[i].textContent)
  }
  var In_Amakumo_Fruit_Volume = parseInt(document.getElementById("Amakumo_Fruit").value)
  var Ne_Amakumo_Fruit_Volume = Amakumo_Fruit_Volume - In_Amakumo_Fruit_Volume
  document.getElementById('Amakumo_Fruit_Volume').innerHTML = Amakumo_Fruit_Volume;
  document.getElementById('In_Amakumo_Fruit_Volume').innerHTML = In_Amakumo_Fruit_Volume;
  document.getElementById('Ne_Amakumo_Fruit_Volume').innerHTML = Ne_Amakumo_Fruit_Volume;
// [計算] - ユウトウタケ
  var Fluorescent_Fungus_Volume = parseInt("0")
  var Fluorescent_Fungus_El = document.getElementsByClassName("Fluorescent_Fungus")
  for (var i = 0; i < Fluorescent_Fungus_El.length; i++) {
    var Fluorescent_Fungus_Volume = Fluorescent_Fungus_Volume + parseInt(Fluorescent_Fungus_El[i].textContent)
  }
  var In_Fluorescent_Fungus_Volume = parseInt(document.getElementById("Fluorescent_Fungus").value)
  var Ne_Fluorescent_Fungus_Volume = Fluorescent_Fungus_Volume - In_Fluorescent_Fungus_Volume
  document.getElementById('Fluorescent_Fungus_Volume').innerHTML = Fluorescent_Fungus_Volume;
  document.getElementById('In_Fluorescent_Fungus_Volume').innerHTML = In_Fluorescent_Fungus_Volume;
  document.getElementById('Ne_Fluorescent_Fungus_Volume').innerHTML = Ne_Fluorescent_Fungus_Volume;
}
// [計算] - 天賦本
function Talent_Book_Calculator() {
// [計算] - 自由
  var Freedom_Volume = parseInt("0")
  var Freedom_El = document.getElementsByClassName("Freedom")
  for (var i = 0; i < Freedom_El.length; i++) {
    var Freedom_Volume = Freedom_Volume + parseInt(Freedom_El[i].textContent)
  }
  var In_Freedom_Volume
  = parseInt(document.getElementById("Philosophies_of_Freedom").value) * 9
  + parseInt(document.getElementById("Guide_to_Freedom").value) * 3
  + parseInt(document.getElementById("Teachings_of_Freedom").value) * 1
  var Ne_Freedom_Volume = Freedom_Volume - In_Freedom_Volume
  document.getElementById('Freedom_Volume').innerHTML = Freedom_Volume;
  document.getElementById('In_Freedom_Volume').innerHTML = In_Freedom_Volume;
  document.getElementById('Ne_Freedom_Volume').innerHTML = Ne_Freedom_Volume;
// [計算] - 抗争
  var Ballad_Volume = parseInt("0")
  var Ballad_El = document.getElementsByClassName("Ballad")
  for (var i = 0; i < Ballad_El.length; i++) {
    var Ballad_Volume = Ballad_Volume + parseInt(Ballad_El[i].textContent)
  }
  var In_Ballad_Volume
  = parseInt(document.getElementById("Philosophies_of_Ballad").value) * 9
  + parseInt(document.getElementById("Guide_to_Ballad").value) * 3
  + parseInt(document.getElementById("Teachings_of_Ballad").value) * 1
  var Ne_Ballad_Volume = Ballad_Volume - In_Ballad_Volume
  document.getElementById('Ballad_Volume').innerHTML = Ballad_Volume;
  document.getElementById('In_Ballad_Volume').innerHTML = In_Ballad_Volume;
  document.getElementById('Ne_Ballad_Volume').innerHTML = Ne_Ballad_Volume;
// [計算] - 詩文
  var Resistance_Volume = parseInt("0")
  var Resistance_El = document.getElementsByClassName("Resistance")
  for (var i = 0; i < Resistance_El.length; i++) {
    var Resistance_Volume = Resistance_Volume + parseInt(Resistance_El[i].textContent)
  }
  var In_Resistance_Volume
  = parseInt(document.getElementById("Philosophies_of_Resistance").value) * 9
  + parseInt(document.getElementById("Guide_to_Resistance").value) * 3
  + parseInt(document.getElementById("Teachings_of_Resistance").value) * 1
  var Ne_Resistance_Volume = Resistance_Volume - In_Resistance_Volume
  document.getElementById('Resistance_Volume').innerHTML = Resistance_Volume;
  document.getElementById('In_Resistance_Volume').innerHTML = In_Resistance_Volume;
  document.getElementById('Ne_Resistance_Volume').innerHTML = Ne_Resistance_Volume;
// [計算] - 繁栄
  var Prosperity_Volume = parseInt("0")
  var Prosperity_El = document.getElementsByClassName("Prosperity")
  for (var i = 0; i < Prosperity_El.length; i++) {
    var Prosperity_Volume = Prosperity_Volume + parseInt(Prosperity_El[i].textContent)
  }
  var In_Prosperity_Volume
  = parseInt(document.getElementById("Philosophies_of_Prosperity").value) * 9
  + parseInt(document.getElementById("Guide_to_Prosperity").value) * 3
  + parseInt(document.getElementById("Teachings_of_Prosperity").value) * 1
  var Ne_Prosperity_Volume = Prosperity_Volume - In_Prosperity_Volume
  document.getElementById('Prosperity_Volume').innerHTML = Prosperity_Volume;
  document.getElementById('In_Prosperity_Volume').innerHTML = In_Prosperity_Volume;
  document.getElementById('Ne_Prosperity_Volume').innerHTML = Ne_Prosperity_Volume;
// [計算] - 勤労
  var Diligence_Volume = parseInt("0")
  var Diligence_El = document.getElementsByClassName("Diligence")
  for (var i = 0; i < Diligence_El.length; i++) {
    var Diligence_Volume = Diligence_Volume + parseInt(Diligence_El[i].textContent)
  }
  var In_Diligence_Volume
  = parseInt(document.getElementById("Philosophies_of_Diligence").value) * 9
  + parseInt(document.getElementById("Guide_to_Diligence").value) * 3
  + parseInt(document.getElementById("Teachings_of_Diligence").value) * 1
  var Ne_Diligence_Volume = Diligence_Volume - In_Diligence_Volume
  document.getElementById('Diligence_Volume').innerHTML = Diligence_Volume;
  document.getElementById('In_Diligence_Volume').innerHTML = In_Diligence_Volume;
  document.getElementById('Ne_Diligence_Volume').innerHTML = Ne_Diligence_Volume;
// [計算] - 黄金
  var Gold_Volume = parseInt("0")
  var Gold_El = document.getElementsByClassName("Gold")
  for (var i = 0; i < Gold_El.length; i++) {
    var Gold_Volume = Gold_Volume + parseInt(Gold_El[i].textContent)
  }
  var In_Gold_Volume
  = parseInt(document.getElementById("Philosophies_of_Gold").value) * 9
  + parseInt(document.getElementById("Guide_to_Gold").value) * 3
  + parseInt(document.getElementById("Teachings_of_Gold").value) * 1
  var Ne_Gold_Volume = Gold_Volume - In_Gold_Volume
  document.getElementById('Gold_Volume').innerHTML = Gold_Volume;
  document.getElementById('In_Gold_Volume').innerHTML = In_Gold_Volume;
  document.getElementById('Ne_Gold_Volume').innerHTML = Ne_Gold_Volume;
// [計算] - 浮世
  var Transience_Volume = parseInt("0")
  var Transience_El = document.getElementsByClassName("Transience")
  for (var i = 0; i < Transience_El.length; i++) {
    var Transience_Volume = Transience_Volume + parseInt(Transience_El[i].textContent)
  }
  var In_Transience_Volume
  = parseInt(document.getElementById("Philosophies_of_Transience").value) * 9
  + parseInt(document.getElementById("Guide_to_Transience").value) * 3
  + parseInt(document.getElementById("Teachings_of_Transience").value) * 1
  var Ne_Transience_Volume = Transience_Volume - In_Transience_Volume
  document.getElementById('Transience_Volume').innerHTML = Transience_Volume;
  document.getElementById('In_Transience_Volume').innerHTML = In_Transience_Volume;
  document.getElementById('Ne_Transience_Volume').innerHTML = Ne_Transience_Volume;
// [計算] - 風雅
  var Elegance_Volume = parseInt("0")
  var Elegance_El = document.getElementsByClassName("Elegance")
  for (var i = 0; i < Elegance_El.length; i++) {
    var Elegance_Volume = Elegance_Volume + parseInt(Elegance_El[i].textContent)
  }
  var In_Elegance_Volume
  = parseInt(document.getElementById("Philosophies_of_Elegance").value) * 9
  + parseInt(document.getElementById("Guide_to_Elegance").value) * 3
  + parseInt(document.getElementById("Teachings_of_Elegance").value) * 1
  var Ne_Elegance_Volume = Elegance_Volume - In_Elegance_Volume
  document.getElementById('Elegance_Volume').innerHTML = Elegance_Volume;
  document.getElementById('In_Elegance_Volume').innerHTML = In_Elegance_Volume;
  document.getElementById('Ne_Elegance_Volume').innerHTML = Ne_Elegance_Volume;
// [計算] - 天光
  var Light_Volume = parseInt("0")
  var Light_El = document.getElementsByClassName("Light")
  for (var i = 0; i < Light_El.length; i++) {
    var Light_Volume = Light_Volume + parseInt(Light_El[i].textContent)
  }
  var In_Light_Volume
  = parseInt(document.getElementById("Philosophies_of_Light").value) * 9
  + parseInt(document.getElementById("Guide_to_Light").value) * 3
  + parseInt(document.getElementById("Teachings_of_Light").value) * 1
  var Ne_Light_Volume = Light_Volume - In_Light_Volume
  document.getElementById('Light_Volume').innerHTML = Light_Volume;
  document.getElementById('In_Light_Volume').innerHTML = In_Light_Volume;
  document.getElementById('Ne_Light_Volume').innerHTML = Ne_Light_Volume;
}
// [計算] - 週ボス素材
function Talent_Boss_Calculator() {
// [計算] - 東風の羽根
  var Dvalins_Plume_Volume = parseInt("0")
  var Dvalins_Plume_El = document.getElementsByClassName("Dvalins_Plume")
  for (var i = 0; i < Dvalins_Plume_El.length; i++) {
    var Dvalins_Plume_Volume = Dvalins_Plume_Volume + parseInt(Dvalins_Plume_El[i].textContent)
  }
  var In_Dvalins_Plume_Volume = parseInt(document.getElementById("Dvalins_Plume").value)
  var Ne_Dvalins_Plume_Volume = Dvalins_Plume_Volume - In_Dvalins_Plume_Volume
  document.getElementById('Dvalins_Plume_Volume').innerHTML = Dvalins_Plume_Volume;
  document.getElementById('In_Dvalins_Plume_Volume').innerHTML = In_Dvalins_Plume_Volume;
  document.getElementById('Ne_Dvalins_Plume_Volume').innerHTML = Ne_Dvalins_Plume_Volume;
// [計算] - 東風の爪
  var Dvalins_Claw_Volume = parseInt("0")
  var Dvalins_Claw_El = document.getElementsByClassName("Dvalins_Claw")
  for (var i = 0; i < Dvalins_Claw_El.length; i++) {
    var Dvalins_Claw_Volume = Dvalins_Claw_Volume + parseInt(Dvalins_Claw_El[i].textContent)
  }
  var In_Dvalins_Claw_Volume = parseInt(document.getElementById("Dvalins_Claw").value)
  var Ne_Dvalins_Claw_Volume = Dvalins_Claw_Volume - In_Dvalins_Claw_Volume
  document.getElementById('Dvalins_Claw_Volume').innerHTML = Dvalins_Claw_Volume;
  document.getElementById('In_Dvalins_Claw_Volume').innerHTML = In_Dvalins_Claw_Volume;
  document.getElementById('Ne_Dvalins_Claw_Volume').innerHTML = Ne_Dvalins_Claw_Volume;
// [計算] - 東風の吐息
  var Dvalins_Sigh_Volume = parseInt("0")
  var Dvalins_Sigh_El = document.getElementsByClassName("Dvalins_Sigh")
  for (var i = 0; i < Dvalins_Sigh_El.length; i++) {
    var Dvalins_Sigh_Volume = Dvalins_Sigh_Volume + parseInt(Dvalins_Sigh_El[i].textContent)
  }
  var In_Dvalins_Sigh_Volume = parseInt(document.getElementById("Dvalins_Sigh").value)
  var Ne_Dvalins_Sigh_Volume = Dvalins_Sigh_Volume - In_Dvalins_Sigh_Volume
  document.getElementById('Dvalins_Sigh_Volume').innerHTML = Dvalins_Sigh_Volume;
  document.getElementById('In_Dvalins_Sigh_Volume').innerHTML = In_Dvalins_Sigh_Volume;
  document.getElementById('Ne_Dvalins_Sigh_Volume').innerHTML = Ne_Dvalins_Sigh_Volume;
// [計算] - 北風のしっぽ
  var Tail_of_Boreas_Volume = parseInt("0")
  var Tail_of_Boreas_El = document.getElementsByClassName("Tail_of_Boreas")
  for (var i = 0; i < Tail_of_Boreas_El.length; i++) {
    var Tail_of_Boreas_Volume = Tail_of_Boreas_Volume + parseInt(Tail_of_Boreas_El[i].textContent)
  }
  var In_Tail_of_Boreas_Volume = parseInt(document.getElementById("Tail_of_Boreas").value)
  var Ne_Tail_of_Boreas_Volume = Tail_of_Boreas_Volume - In_Tail_of_Boreas_Volume
  document.getElementById('Tail_of_Boreas_Volume').innerHTML = Tail_of_Boreas_Volume;
  document.getElementById('In_Tail_of_Boreas_Volume').innerHTML = In_Tail_of_Boreas_Volume;
  document.getElementById('Ne_Tail_of_Boreas_Volume').innerHTML = Ne_Tail_of_Boreas_Volume;
// [計算] - 北風のリング
  var Ring_of_Boreas_Volume = parseInt("0")
  var Ring_of_Boreas_El = document.getElementsByClassName("Ring_of_Boreas")
  for (var i = 0; i < Ring_of_Boreas_El.length; i++) {
    var Ring_of_Boreas_Volume = Ring_of_Boreas_Volume + parseInt(Ring_of_Boreas_El[i].textContent)
  }
  var In_Ring_of_Boreas_Volume = parseInt(document.getElementById("Ring_of_Boreas").value)
  var Ne_Ring_of_Boreas_Volume = Ring_of_Boreas_Volume - In_Ring_of_Boreas_Volume
  document.getElementById('Ring_of_Boreas_Volume').innerHTML = Ring_of_Boreas_Volume;
  document.getElementById('In_Ring_of_Boreas_Volume').innerHTML = In_Ring_of_Boreas_Volume;
  document.getElementById('Ne_Ring_of_Boreas_Volume').innerHTML = Ne_Ring_of_Boreas_Volume;
// [計算] - 北風の魂箱
  var Spirit_Locket_of_Boreas_Volume = parseInt("0")
  var Spirit_Locket_of_Boreas_El = document.getElementsByClassName("Spirit_Locket_of_Boreas")
  for (var i = 0; i < Spirit_Locket_of_Boreas_El.length; i++) {
    var Spirit_Locket_of_Boreas_Volume = Spirit_Locket_of_Boreas_Volume + parseInt(Spirit_Locket_of_Boreas_El[i].textContent)
  }
  var In_Spirit_Locket_of_Boreas_Volume = parseInt(document.getElementById("Spirit_Locket_of_Boreas").value)
  var Ne_Spirit_Locket_of_Boreas_Volume = Spirit_Locket_of_Boreas_Volume - In_Spirit_Locket_of_Boreas_Volume
  document.getElementById('Spirit_Locket_of_Boreas_Volume').innerHTML = Spirit_Locket_of_Boreas_Volume;
  document.getElementById('In_Spirit_Locket_of_Boreas_Volume').innerHTML = In_Spirit_Locket_of_Boreas_Volume;
  document.getElementById('Ne_Spirit_Locket_of_Boreas_Volume').innerHTML = Ne_Spirit_Locket_of_Boreas_Volume;
// [計算] - 呑天の鯨・只角
  var Tusk_of_Monoceros_Caeli_Volume = parseInt("0")
  var Tusk_of_Monoceros_Caeli_El = document.getElementsByClassName("Tusk_of_Monoceros_Caeli")
  for (var i = 0; i < Tusk_of_Monoceros_Caeli_El.length; i++) {
    var Tusk_of_Monoceros_Caeli_Volume = Tusk_of_Monoceros_Caeli_Volume + parseInt(Tusk_of_Monoceros_Caeli_El[i].textContent)
  }
  var In_Tusk_of_Monoceros_Caeli_Volume = parseInt(document.getElementById("Tusk_of_Monoceros_Caeli").value)
  var Ne_Tusk_of_Monoceros_Caeli_Volume = Tusk_of_Monoceros_Caeli_Volume - In_Tusk_of_Monoceros_Caeli_Volume
  document.getElementById('Tusk_of_Monoceros_Caeli_Volume').innerHTML = Tusk_of_Monoceros_Caeli_Volume;
  document.getElementById('In_Tusk_of_Monoceros_Caeli_Volume').innerHTML = In_Tusk_of_Monoceros_Caeli_Volume;
  document.getElementById('Ne_Tusk_of_Monoceros_Caeli_Volume').innerHTML = Ne_Tusk_of_Monoceros_Caeli_Volume;
// [計算] - 魔王の刃・残片
  var Shard_of_a_Foul_Legacy_Volume = parseInt("0")
  var Shard_of_a_Foul_Legacy_El = document.getElementsByClassName("Shard_of_a_Foul_Legacy")
  for (var i = 0; i < Shard_of_a_Foul_Legacy_El.length; i++) {
    var Shard_of_a_Foul_Legacy_Volume = Shard_of_a_Foul_Legacy_Volume + parseInt(Shard_of_a_Foul_Legacy_El[i].textContent)
  }
  var In_Shard_of_a_Foul_Legacy_Volume = parseInt(document.getElementById("Shard_of_a_Foul_Legacy").value)
  var Ne_Shard_of_a_Foul_Legacy_Volume = Shard_of_a_Foul_Legacy_Volume - In_Shard_of_a_Foul_Legacy_Volume
  document.getElementById('Shard_of_a_Foul_Legacy_Volume').innerHTML = Shard_of_a_Foul_Legacy_Volume;
  document.getElementById('In_Shard_of_a_Foul_Legacy_Volume').innerHTML = In_Shard_of_a_Foul_Legacy_Volume;
  document.getElementById('Ne_Shard_of_a_Foul_Legacy_Volume').innerHTML = Ne_Shard_of_a_Foul_Legacy_Volume;
// [計算] - 武煉の魂・孤影
  var Shadow_of_the_Warrior_Volume = parseInt("0")
  var Shadow_of_the_Warrior_El = document.getElementsByClassName("Shadow_of_the_Warrior")
  for (var i = 0; i < Shadow_of_the_Warrior_El.length; i++) {
    var Shadow_of_the_Warrior_Volume = Shadow_of_the_Warrior_Volume + parseInt(Shadow_of_the_Warrior_El[i].textContent)
  }
  var In_Shadow_of_the_Warrior_Volume = parseInt(document.getElementById("Shadow_of_the_Warrior").value)
  var Ne_Shadow_of_the_Warrior_Volume = Shadow_of_the_Warrior_Volume - In_Shadow_of_the_Warrior_Volume
  document.getElementById('Shadow_of_the_Warrior_Volume').innerHTML = Shadow_of_the_Warrior_Volume;
  document.getElementById('In_Shadow_of_the_Warrior_Volume').innerHTML = In_Shadow_of_the_Warrior_Volume;
  document.getElementById('Ne_Shadow_of_the_Warrior_Volume').innerHTML = Ne_Shadow_of_the_Warrior_Volume;
// [計算] - 龍王の冠
  var Dragon_Lords_Crown_Volume = parseInt("0")
  var Dragon_Lords_Crown_El = document.getElementsByClassName("Dragon_Lords_Crown")
  for (var i = 0; i < Dragon_Lords_Crown_El.length; i++) {
    var Dragon_Lords_Crown_Volume = Dragon_Lords_Crown_Volume + parseInt(Dragon_Lords_Crown_El[i].textContent)
  }
  var In_Dragon_Lords_Crown_Volume = parseInt(document.getElementById("Dragon_Lords_Crown").value)
  var Ne_Dragon_Lords_Crown_Volume = Dragon_Lords_Crown_Volume - In_Dragon_Lords_Crown_Volume
  document.getElementById('Dragon_Lords_Crown_Volume').innerHTML = Dragon_Lords_Crown_Volume;
  document.getElementById('In_Dragon_Lords_Crown_Volume').innerHTML = In_Dragon_Lords_Crown_Volume;
  document.getElementById('Ne_Dragon_Lords_Crown_Volume').innerHTML = Ne_Dragon_Lords_Crown_Volume;
// [計算] - 血玉の枝
  var Bloodjade_Branch_Volume = parseInt("0")
  var Bloodjade_Branch_El = document.getElementsByClassName("Bloodjade_Branch")
  for (var i = 0; i < Bloodjade_Branch_El.length; i++) {
    var Bloodjade_Branch_Volume = Bloodjade_Branch_Volume + parseInt(Bloodjade_Branch_El[i].textContent)
  }
  var In_Bloodjade_Branch_Volume = parseInt(document.getElementById("Bloodjade_Branch").value)
  var Ne_Bloodjade_Branch_Volume = Bloodjade_Branch_Volume - In_Bloodjade_Branch_Volume
  document.getElementById('Bloodjade_Branch_Volume').innerHTML = Bloodjade_Branch_Volume;
  document.getElementById('In_Bloodjade_Branch_Volume').innerHTML = In_Bloodjade_Branch_Volume;
  document.getElementById('Ne_Bloodjade_Branch_Volume').innerHTML = Ne_Bloodjade_Branch_Volume;
// [計算] - 鍍金の鱗
  var Gilded_Scale_Volume = parseInt("0")
  var Gilded_Scale_El = document.getElementsByClassName("Gilded_Scale")
  for (var i = 0; i < Gilded_Scale_El.length; i++) {
    var Gilded_Scale_Volume = Gilded_Scale_Volume + parseInt(Gilded_Scale_El[i].textContent)
  }
  var In_Gilded_Scale_Volume = parseInt(document.getElementById("Gilded_Scale").value)
  var Ne_Gilded_Scale_Volume = Gilded_Scale_Volume - In_Gilded_Scale_Volume
  document.getElementById('Gilded_Scale_Volume').innerHTML = Gilded_Scale_Volume;
  document.getElementById('In_Gilded_Scale_Volume').innerHTML = In_Gilded_Scale_Volume;
  document.getElementById('Ne_Gilded_Scale_Volume').innerHTML = Ne_Gilded_Scale_Volume;
// [計算] - 溶滅の刻
  var Molten_Moment_Volume = parseInt("0")
  var Molten_Moment_El = document.getElementsByClassName("Molten_Moment")
  for (var i = 0; i < Molten_Moment_El.length; i++) {
    var Molten_Moment_Volume = Molten_Moment_Volume + parseInt(Molten_Moment_El[i].textContent)
  }
  var In_Molten_Moment_Volume = parseInt(document.getElementById("Molten_Moment").value)
  var Ne_Molten_Moment_Volume = Molten_Moment_Volume - In_Molten_Moment_Volume
  document.getElementById('Molten_Moment_Volume').innerHTML = Molten_Moment_Volume;
  document.getElementById('In_Molten_Moment_Volume').innerHTML = In_Molten_Moment_Volume;
  document.getElementById('Ne_Molten_Moment_Volume').innerHTML = Ne_Molten_Moment_Volume;
// [計算] - 獄炎の蝶
  var Hellfire_Butterfly_Volume = parseInt("0")
  var Hellfire_Butterfly_El = document.getElementsByClassName("Hellfire_Butterfly")
  for (var i = 0; i < Hellfire_Butterfly_El.length; i++) {
    var Hellfire_Butterfly_Volume = Hellfire_Butterfly_Volume + parseInt(Hellfire_Butterfly_El[i].textContent)
  }
  var In_Hellfire_Butterfly_Volume = parseInt(document.getElementById("Hellfire_Butterfly").value)
  var Ne_Hellfire_Butterfly_Volume = Hellfire_Butterfly_Volume - In_Hellfire_Butterfly_Volume
  document.getElementById('Hellfire_Butterfly_Volume').innerHTML = Hellfire_Butterfly_Volume;
  document.getElementById('In_Hellfire_Butterfly_Volume').innerHTML = In_Hellfire_Butterfly_Volume;
  document.getElementById('Ne_Hellfire_Butterfly_Volume').innerHTML = Ne_Hellfire_Butterfly_Volume;
// [計算] - 灰燼の心
  var Ashen_Heart_Volume = parseInt("0")
  var Ashen_Heart_El = document.getElementsByClassName("Ashen_Heart")
  for (var i = 0; i < Ashen_Heart_El.length; i++) {
    var Ashen_Heart_Volume = Ashen_Heart_Volume + parseInt(Ashen_Heart_El[i].textContent)
  }
  var In_Ashen_Heart_Volume = parseInt(document.getElementById("Ashen_Heart").value)
  var Ne_Ashen_Heart_Volume = Ashen_Heart_Volume - In_Ashen_Heart_Volume
  document.getElementById('Ashen_Heart_Volume').innerHTML = Ashen_Heart_Volume;
  document.getElementById('In_Ashen_Heart_Volume').innerHTML = In_Ashen_Heart_Volume;
  document.getElementById('Ne_Ashen_Heart_Volume').innerHTML = Ne_Ashen_Heart_Volume;
// [計算] - 凶将の手眼
  var Mudra_of_the_Malefic_General_Volume = parseInt("0")
  var Mudra_of_the_Malefic_General_El = document.getElementsByClassName("Mudra_of_the_Malefic_General")
  for (var i = 0; i < Mudra_of_the_Malefic_General_El.length; i++) {
    var Mudra_of_the_Malefic_General_Volume = Mudra_of_the_Malefic_General_Volume + parseInt(Mudra_of_the_Malefic_General_El[i].textContent)
  }
  var In_Mudra_of_the_Malefic_General_Volume = parseInt(document.getElementById("Mudra_of_the_Malefic_General").value)
  var Ne_Mudra_of_the_Malefic_General_Volume = Mudra_of_the_Malefic_General_Volume - In_Mudra_of_the_Malefic_General_Volume
  document.getElementById('Mudra_of_the_Malefic_General_Volume').innerHTML = Mudra_of_the_Malefic_General_Volume;
  document.getElementById('In_Mudra_of_the_Malefic_General_Volume').innerHTML = In_Mudra_of_the_Malefic_General_Volume;
  document.getElementById('Ne_Mudra_of_the_Malefic_General_Volume').innerHTML = Ne_Mudra_of_the_Malefic_General_Volume;
// [計算] - 禍神の禊涙
  var Tears_of_the_Calamitous_God_Volume = parseInt("0")
  var Tears_of_the_Calamitous_God_El = document.getElementsByClassName("Tears_of_the_Calamitous_God")
  for (var i = 0; i < Tears_of_the_Calamitous_God_El.length; i++) {
    var Tears_of_the_Calamitous_God_Volume = Tears_of_the_Calamitous_God_Volume + parseInt(Tears_of_the_Calamitous_God_El[i].textContent)
  }
  var In_Tears_of_the_Calamitous_God_Volume = parseInt(document.getElementById("Tears_of_the_Calamitous_God").value)
  var Ne_Tears_of_the_Calamitous_God_Volume = Tears_of_the_Calamitous_God_Volume - In_Tears_of_the_Calamitous_God_Volume
  document.getElementById('Tears_of_the_Calamitous_God_Volume').innerHTML = Tears_of_the_Calamitous_God_Volume;
  document.getElementById('In_Tears_of_the_Calamitous_God_Volume').innerHTML = In_Tears_of_the_Calamitous_God_Volume;
  document.getElementById('Ne_Tears_of_the_Calamitous_God_Volume').innerHTML = Ne_Tears_of_the_Calamitous_God_Volume;
// [計算] - 万劫の真意
  var The_Meaning_of_Aeons_Volume = parseInt("0")
  var The_Meaning_of_Aeons_El = document.getElementsByClassName("The_Meaning_of_Aeons")
  for (var i = 0; i < The_Meaning_of_Aeons_El.length; i++) {
    var The_Meaning_of_Aeons_Volume = The_Meaning_of_Aeons_Volume + parseInt(The_Meaning_of_Aeons_El[i].textContent)
  }
  var In_The_Meaning_of_Aeons_Volume = parseInt(document.getElementById("The_Meaning_of_Aeons").value)
  var Ne_The_Meaning_of_Aeons_Volume = The_Meaning_of_Aeons_Volume - In_The_Meaning_of_Aeons_Volume
  document.getElementById('The_Meaning_of_Aeons_Volume').innerHTML = The_Meaning_of_Aeons_Volume;
  document.getElementById('In_The_Meaning_of_Aeons_Volume').innerHTML = In_The_Meaning_of_Aeons_Volume;
  document.getElementById('Ne_The_Meaning_of_Aeons_Volume').innerHTML = Ne_The_Meaning_of_Aeons_Volume;
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
    alert("Honey Apricot - Material Calculator\n\n更新情報（ver.20220217 to ver." + Version + "）\n・特産品の場所の変更\n・一部キャラクターの立ち絵画像を変更\n・JavaScriptの容量軽減\n\n既知の問題。\n・サイトのHtmlやJavaScriptの軽量化問題\n（協力者募集中『@Sakura_Kocho』までお願いします。）")

  }  else  {
    Load();
  }
}