const Sleep = () => {
  Sangonomiya_KokomiLoad();
  Raiden_ShogunLoad();
  Kujou_SaraLoad();
  YoimiyaLoad();
  SayuLoad();
  Kamisato_AyakaLoad();
  Kaedehara_KazuhaLoad();
  EulaLoad();
  YanfeiLoad();
  RosariaLoad();
  HuTaoLoad();
  XiaoLoad();
  GanyuLoad();
  AlbedoLoad();
  ZhongliLoad();
  XinyanLoad();
  TartagliaLoad();
  DionaLoad();
  KleeLoad();
  VentiLoad();
  KeqingLoad();
  MonaLoad();
  QiqiLoad();
  DilucLoad();
  JeanLoad();
  SucroseLoad();
  ChongyunLoad();
  NoelleLoad();
  BennettLoad();
  FischlLoad();
  NingguangLoad();
  XingqiuLoad();
  BeidouLoad();
  XianglingLoad();
  RazorLoad();
  BarbaraLoad();
  LisaLoad();
  KaeyaLoad();
  AmberLoad();
  AloyLoad();
} 


httpObj = new XMLHttpRequest();
httpObj.open("get", "Material.json", true);
httpObj.onload = function(){}
httpObj.send(null);


// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Sangonomiya_Kokomi  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Sangonomiya_Kokomi_Ex = document.getElementById('Sangonomiya_Kokomi_Ex');
noUiSlider.create(Sangonomiya_Kokomi_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sangonomiya_Kokomi_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sangonomiya_Kokomi_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sangonomiya_Kokomi_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sangonomiya_Kokomi_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function Sangonomiya_KokomiLoad() {
  Sangonomiya_Kokomi_Ex.noUiSlider.on('update', function (values, handle) {
    var Sangonomiya_Kokomi_Ex_Min_Volume = "L1toL" + Sangonomiya_Kokomi_Ex.noUiSlider.get()[0];
    var Sangonomiya_Kokomi_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Sangonomiya_Kokomi_Ex.noUiSlider.get()[0])[Sangonomiya_Kokomi_Ex_Min_Volume]);
    var Sangonomiya_Kokomi_Ex_Max_Volume = "L1toL" + Sangonomiya_Kokomi_Ex.noUiSlider.get()[1];
    var Sangonomiya_Kokomi_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Sangonomiya_Kokomi_Ex.noUiSlider.get()[1])[Sangonomiya_Kokomi_Ex_Max_Volume]);
    var Sangonomiya_Kokomi_Ex_Volume = Sangonomiya_Kokomi_Ex_1toMax_Volume - Sangonomiya_Kokomi_Ex_1toMin_Volume
    var Sangonomiya_Kokomi_Ex_Book_Volume = Sangonomiya_Kokomi_Ex_Volume / 1000
    var Sangonomiya_Kokomi_Ex_Mora_Volume = Sangonomiya_Kokomi_Ex_Volume * 0.2
    document.getElementById('Sangonomiya_Kokomi_Ex_Volume').innerHTML = Sangonomiya_Kokomi_Ex_Volume.toLocaleString();
    document.getElementById('Sangonomiya_Kokomi_Ex_Book_Volume').innerHTML = Sangonomiya_Kokomi_Ex_Book_Volume.toLocaleString();
    document.getElementById('Sangonomiya_Kokomi_Ex_Mora_Volume').innerHTML = Sangonomiya_Kokomi_Ex_Mora_Volume.toLocaleString();
  });
  Sangonomiya_Kokomi_Pr.noUiSlider.on('update', function (values, handle) {
    var Sangonomiya_Kokomi_Pr_Min_Volume = "L1toL" + Sangonomiya_Kokomi_Pr.noUiSlider.get()[0];
    var Sangonomiya_Kokomi_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[0])["P1_" + [Sangonomiya_Kokomi_Pr_Min_Volume]]);
    var Sangonomiya_Kokomi_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[0])["P2_" + [Sangonomiya_Kokomi_Pr_Min_Volume]]);
    var Sangonomiya_Kokomi_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[0])["P3_" + [Sangonomiya_Kokomi_Pr_Min_Volume]]);
    var Sangonomiya_Kokomi_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[0])["P4_" + [Sangonomiya_Kokomi_Pr_Min_Volume]]);
    var Sangonomiya_Kokomi_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[0])["P5_" + [Sangonomiya_Kokomi_Pr_Min_Volume]]);
    var Sangonomiya_Kokomi_Pr_Max_Volume = "L1toL" + Sangonomiya_Kokomi_Pr.noUiSlider.get()[1];
    var Sangonomiya_Kokomi_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[1])["P1_" + [Sangonomiya_Kokomi_Pr_Max_Volume]]);
    var Sangonomiya_Kokomi_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[1])["P2_" + [Sangonomiya_Kokomi_Pr_Max_Volume]]);
    var Sangonomiya_Kokomi_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[1])["P3_" + [Sangonomiya_Kokomi_Pr_Max_Volume]]);
    var Sangonomiya_Kokomi_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[1])["P4_" + [Sangonomiya_Kokomi_Pr_Max_Volume]]);
    var Sangonomiya_Kokomi_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_Pr.noUiSlider.get()[1])["P5_" + [Sangonomiya_Kokomi_Pr_Max_Volume]]);
    var Sangonomiya_Kokomi_Pr_P1 = Sangonomiya_Kokomi_Pr_P1_1toMax_Volume - Sangonomiya_Kokomi_Pr_P1_1toMin_Volume
    var Sangonomiya_Kokomi_Pr_P2 = Sangonomiya_Kokomi_Pr_P2_1toMax_Volume - Sangonomiya_Kokomi_Pr_P2_1toMin_Volume
    var Sangonomiya_Kokomi_Pr_P3 = Sangonomiya_Kokomi_Pr_P3_1toMax_Volume - Sangonomiya_Kokomi_Pr_P3_1toMin_Volume
    var Sangonomiya_Kokomi_Pr_P4 = Sangonomiya_Kokomi_Pr_P4_1toMax_Volume - Sangonomiya_Kokomi_Pr_P4_1toMin_Volume
    var Sangonomiya_Kokomi_Pr_P5 = Sangonomiya_Kokomi_Pr_P5_1toMax_Volume - Sangonomiya_Kokomi_Pr_P5_1toMin_Volume
    document.getElementById('Sangonomiya_Kokomi_Pr_P1_Volume').innerHTML = Sangonomiya_Kokomi_Pr_P1;
    document.getElementById('Sangonomiya_Kokomi_Pr_P2_Volume').innerHTML = Sangonomiya_Kokomi_Pr_P2;
    document.getElementById('Sangonomiya_Kokomi_Pr_P3_Volume').innerHTML = Sangonomiya_Kokomi_Pr_P3;
    document.getElementById('Sangonomiya_Kokomi_Pr_P4_Volume').innerHTML = Sangonomiya_Kokomi_Pr_P4;
    document.getElementById('Sangonomiya_Kokomi_Pr_P5_Volume').innerHTML = Sangonomiya_Kokomi_Pr_P5.toLocaleString();
  });
  Sangonomiya_Kokomi_T1.noUiSlider.on('update', function (values, handle) {
    var Sangonomiya_Kokomi_T1_Min_Volume = "L1toL" + Sangonomiya_Kokomi_T1.noUiSlider.get()[0];
    var Sangonomiya_Kokomi_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[0])["T1_" + [Sangonomiya_Kokomi_T1_Min_Volume]]);
    var Sangonomiya_Kokomi_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[0])["T2_" + [Sangonomiya_Kokomi_T1_Min_Volume]]);
    var Sangonomiya_Kokomi_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[0])["T3_" + [Sangonomiya_Kokomi_T1_Min_Volume]]);
    var Sangonomiya_Kokomi_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[0])["T4_" + [Sangonomiya_Kokomi_T1_Min_Volume]]);
    var Sangonomiya_Kokomi_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[0])["T5_" + [Sangonomiya_Kokomi_T1_Min_Volume]]);
    var Sangonomiya_Kokomi_T1_Max_Volume = "L1toL" + Sangonomiya_Kokomi_T1.noUiSlider.get()[1];
    var Sangonomiya_Kokomi_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[1])["T1_" + [Sangonomiya_Kokomi_T1_Max_Volume]]);
    var Sangonomiya_Kokomi_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[1])["T2_" + [Sangonomiya_Kokomi_T1_Max_Volume]]);
    var Sangonomiya_Kokomi_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[1])["T3_" + [Sangonomiya_Kokomi_T1_Max_Volume]]);
    var Sangonomiya_Kokomi_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[1])["T4_" + [Sangonomiya_Kokomi_T1_Max_Volume]]);
    var Sangonomiya_Kokomi_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T1.noUiSlider.get()[1])["T5_" + [Sangonomiya_Kokomi_T1_Max_Volume]]);
    var Sangonomiya_Kokomi_T1_T1 = Sangonomiya_Kokomi_T1_T1_1toMax_Volume - Sangonomiya_Kokomi_T1_T1_1toMin_Volume
    var Sangonomiya_Kokomi_T1_T2 = Sangonomiya_Kokomi_T1_T2_1toMax_Volume - Sangonomiya_Kokomi_T1_T2_1toMin_Volume
    var Sangonomiya_Kokomi_T1_T3 = Sangonomiya_Kokomi_T1_T3_1toMax_Volume - Sangonomiya_Kokomi_T1_T3_1toMin_Volume
    var Sangonomiya_Kokomi_T1_T4 = Sangonomiya_Kokomi_T1_T4_1toMax_Volume - Sangonomiya_Kokomi_T1_T4_1toMin_Volume
    var Sangonomiya_Kokomi_T1_T5 = Sangonomiya_Kokomi_T1_T5_1toMax_Volume - Sangonomiya_Kokomi_T1_T5_1toMin_Volume
    document.getElementById('Sangonomiya_Kokomi_T1_T1_Volume').innerHTML = Sangonomiya_Kokomi_T1_T1;
    document.getElementById('Sangonomiya_Kokomi_T1_T2_Volume').innerHTML = Sangonomiya_Kokomi_T1_T2;
    document.getElementById('Sangonomiya_Kokomi_T1_T3_Volume').innerHTML = Sangonomiya_Kokomi_T1_T3;
    document.getElementById('Sangonomiya_Kokomi_T1_T4_Volume').innerHTML = Sangonomiya_Kokomi_T1_T4;
    document.getElementById('Sangonomiya_Kokomi_T1_T5_Volume').innerHTML = Sangonomiya_Kokomi_T1_T5.toLocaleString();
  });
  Sangonomiya_Kokomi_T2.noUiSlider.on('update', function (values, handle) {
    var Sangonomiya_Kokomi_T2_Min_Volume = "L1toL" + Sangonomiya_Kokomi_T2.noUiSlider.get()[0];
    var Sangonomiya_Kokomi_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[0])["T1_" + [Sangonomiya_Kokomi_T2_Min_Volume]]);
    var Sangonomiya_Kokomi_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[0])["T2_" + [Sangonomiya_Kokomi_T2_Min_Volume]]);
    var Sangonomiya_Kokomi_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[0])["T3_" + [Sangonomiya_Kokomi_T2_Min_Volume]]);
    var Sangonomiya_Kokomi_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[0])["T4_" + [Sangonomiya_Kokomi_T2_Min_Volume]]);
    var Sangonomiya_Kokomi_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[0])["T5_" + [Sangonomiya_Kokomi_T2_Min_Volume]]);
    var Sangonomiya_Kokomi_T2_Max_Volume = "L1toL" + Sangonomiya_Kokomi_T2.noUiSlider.get()[1];
    var Sangonomiya_Kokomi_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[1])["T1_" + [Sangonomiya_Kokomi_T2_Max_Volume]]);
    var Sangonomiya_Kokomi_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[1])["T2_" + [Sangonomiya_Kokomi_T2_Max_Volume]]);
    var Sangonomiya_Kokomi_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[1])["T3_" + [Sangonomiya_Kokomi_T2_Max_Volume]]);
    var Sangonomiya_Kokomi_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[1])["T4_" + [Sangonomiya_Kokomi_T2_Max_Volume]]);
    var Sangonomiya_Kokomi_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T2.noUiSlider.get()[1])["T5_" + [Sangonomiya_Kokomi_T2_Max_Volume]]);
    var Sangonomiya_Kokomi_T2_T1 = Sangonomiya_Kokomi_T2_T1_1toMax_Volume - Sangonomiya_Kokomi_T2_T1_1toMin_Volume
    var Sangonomiya_Kokomi_T2_T2 = Sangonomiya_Kokomi_T2_T2_1toMax_Volume - Sangonomiya_Kokomi_T2_T2_1toMin_Volume
    var Sangonomiya_Kokomi_T2_T3 = Sangonomiya_Kokomi_T2_T3_1toMax_Volume - Sangonomiya_Kokomi_T2_T3_1toMin_Volume
    var Sangonomiya_Kokomi_T2_T4 = Sangonomiya_Kokomi_T2_T4_1toMax_Volume - Sangonomiya_Kokomi_T2_T4_1toMin_Volume
    var Sangonomiya_Kokomi_T2_T5 = Sangonomiya_Kokomi_T2_T5_1toMax_Volume - Sangonomiya_Kokomi_T2_T5_1toMin_Volume
    document.getElementById('Sangonomiya_Kokomi_T2_T1_Volume').innerHTML = Sangonomiya_Kokomi_T2_T1;
    document.getElementById('Sangonomiya_Kokomi_T2_T2_Volume').innerHTML = Sangonomiya_Kokomi_T2_T2;
    document.getElementById('Sangonomiya_Kokomi_T2_T3_Volume').innerHTML = Sangonomiya_Kokomi_T2_T3;
    document.getElementById('Sangonomiya_Kokomi_T2_T4_Volume').innerHTML = Sangonomiya_Kokomi_T2_T4;
    document.getElementById('Sangonomiya_Kokomi_T2_T5_Volume').innerHTML = Sangonomiya_Kokomi_T2_T5.toLocaleString();
  });
  Sangonomiya_Kokomi_T3.noUiSlider.on('update', function (values, handle) {
    var Sangonomiya_Kokomi_T3_Min_Volume = "L1toL" + Sangonomiya_Kokomi_T3.noUiSlider.get()[0];
    var Sangonomiya_Kokomi_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[0])["T1_" + [Sangonomiya_Kokomi_T3_Min_Volume]]);
    var Sangonomiya_Kokomi_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[0])["T2_" + [Sangonomiya_Kokomi_T3_Min_Volume]]);
    var Sangonomiya_Kokomi_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[0])["T3_" + [Sangonomiya_Kokomi_T3_Min_Volume]]);
    var Sangonomiya_Kokomi_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[0])["T4_" + [Sangonomiya_Kokomi_T3_Min_Volume]]);
    var Sangonomiya_Kokomi_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[0])["T5_" + [Sangonomiya_Kokomi_T3_Min_Volume]]);
    var Sangonomiya_Kokomi_T3_Max_Volume = "L1toL" + Sangonomiya_Kokomi_T3.noUiSlider.get()[1];
    var Sangonomiya_Kokomi_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[1])["T1_" + [Sangonomiya_Kokomi_T3_Max_Volume]]);
    var Sangonomiya_Kokomi_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[1])["T2_" + [Sangonomiya_Kokomi_T3_Max_Volume]]);
    var Sangonomiya_Kokomi_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[1])["T3_" + [Sangonomiya_Kokomi_T3_Max_Volume]]);
    var Sangonomiya_Kokomi_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[1])["T4_" + [Sangonomiya_Kokomi_T3_Max_Volume]]);
    var Sangonomiya_Kokomi_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sangonomiya_Kokomi_T3.noUiSlider.get()[1])["T5_" + [Sangonomiya_Kokomi_T3_Max_Volume]]);
    var Sangonomiya_Kokomi_T3_T1 = Sangonomiya_Kokomi_T3_T1_1toMax_Volume - Sangonomiya_Kokomi_T3_T1_1toMin_Volume
    var Sangonomiya_Kokomi_T3_T2 = Sangonomiya_Kokomi_T3_T2_1toMax_Volume - Sangonomiya_Kokomi_T3_T2_1toMin_Volume
    var Sangonomiya_Kokomi_T3_T3 = Sangonomiya_Kokomi_T3_T3_1toMax_Volume - Sangonomiya_Kokomi_T3_T3_1toMin_Volume
    var Sangonomiya_Kokomi_T3_T4 = Sangonomiya_Kokomi_T3_T4_1toMax_Volume - Sangonomiya_Kokomi_T3_T4_1toMin_Volume
    var Sangonomiya_Kokomi_T3_T5 = Sangonomiya_Kokomi_T3_T5_1toMax_Volume - Sangonomiya_Kokomi_T3_T5_1toMin_Volume
    document.getElementById('Sangonomiya_Kokomi_T3_T1_Volume').innerHTML = Sangonomiya_Kokomi_T3_T1;
    document.getElementById('Sangonomiya_Kokomi_T3_T2_Volume').innerHTML = Sangonomiya_Kokomi_T3_T2;
    document.getElementById('Sangonomiya_Kokomi_T3_T3_Volume').innerHTML = Sangonomiya_Kokomi_T3_T3;
    document.getElementById('Sangonomiya_Kokomi_T3_T4_Volume').innerHTML = Sangonomiya_Kokomi_T3_T4;
    document.getElementById('Sangonomiya_Kokomi_T3_T5_Volume').innerHTML = Sangonomiya_Kokomi_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Sangonomiya_Kokomi  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Raiden_Shogun  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Raiden_Shogun_Ex = document.getElementById('Raiden_Shogun_Ex');
noUiSlider.create(Raiden_Shogun_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Raiden_Shogun_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Raiden_Shogun_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Raiden_Shogun_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Raiden_Shogun_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function Raiden_ShogunLoad() {
  Raiden_Shogun_Ex.noUiSlider.on('update', function (values, handle) {
    var Raiden_Shogun_Ex_Min_Volume = "L1toL" + Raiden_Shogun_Ex.noUiSlider.get()[0];
    var Raiden_Shogun_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Raiden_Shogun_Ex.noUiSlider.get()[0])[Raiden_Shogun_Ex_Min_Volume]);
    var Raiden_Shogun_Ex_Max_Volume = "L1toL" + Raiden_Shogun_Ex.noUiSlider.get()[1];
    var Raiden_Shogun_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Raiden_Shogun_Ex.noUiSlider.get()[1])[Raiden_Shogun_Ex_Max_Volume]);
    var Raiden_Shogun_Ex_Volume = Raiden_Shogun_Ex_1toMax_Volume - Raiden_Shogun_Ex_1toMin_Volume
    var Raiden_Shogun_Ex_Book_Volume = Raiden_Shogun_Ex_Volume / 1000
    var Raiden_Shogun_Ex_Mora_Volume = Raiden_Shogun_Ex_Volume * 0.2
    document.getElementById('Raiden_Shogun_Ex_Volume').innerHTML = Raiden_Shogun_Ex_Volume.toLocaleString();
    document.getElementById('Raiden_Shogun_Ex_Book_Volume').innerHTML = Raiden_Shogun_Ex_Book_Volume.toLocaleString();
    document.getElementById('Raiden_Shogun_Ex_Mora_Volume').innerHTML = Raiden_Shogun_Ex_Mora_Volume.toLocaleString();
  });
  Raiden_Shogun_Pr.noUiSlider.on('update', function (values, handle) {
    var Raiden_Shogun_Pr_Min_Volume = "L1toL" + Raiden_Shogun_Pr.noUiSlider.get()[0];
    var Raiden_Shogun_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[0])["P1_" + [Raiden_Shogun_Pr_Min_Volume]]);
    var Raiden_Shogun_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[0])["P2_" + [Raiden_Shogun_Pr_Min_Volume]]);
    var Raiden_Shogun_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[0])["P3_" + [Raiden_Shogun_Pr_Min_Volume]]);
    var Raiden_Shogun_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[0])["P4_" + [Raiden_Shogun_Pr_Min_Volume]]);
    var Raiden_Shogun_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[0])["P5_" + [Raiden_Shogun_Pr_Min_Volume]]);
    var Raiden_Shogun_Pr_Max_Volume = "L1toL" + Raiden_Shogun_Pr.noUiSlider.get()[1];
    var Raiden_Shogun_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[1])["P1_" + [Raiden_Shogun_Pr_Max_Volume]]);
    var Raiden_Shogun_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[1])["P2_" + [Raiden_Shogun_Pr_Max_Volume]]);
    var Raiden_Shogun_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[1])["P3_" + [Raiden_Shogun_Pr_Max_Volume]]);
    var Raiden_Shogun_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[1])["P4_" + [Raiden_Shogun_Pr_Max_Volume]]);
    var Raiden_Shogun_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Raiden_Shogun_Pr.noUiSlider.get()[1])["P5_" + [Raiden_Shogun_Pr_Max_Volume]]);
    var Raiden_Shogun_Pr_P1 = Raiden_Shogun_Pr_P1_1toMax_Volume - Raiden_Shogun_Pr_P1_1toMin_Volume
    var Raiden_Shogun_Pr_P2 = Raiden_Shogun_Pr_P2_1toMax_Volume - Raiden_Shogun_Pr_P2_1toMin_Volume
    var Raiden_Shogun_Pr_P3 = Raiden_Shogun_Pr_P3_1toMax_Volume - Raiden_Shogun_Pr_P3_1toMin_Volume
    var Raiden_Shogun_Pr_P4 = Raiden_Shogun_Pr_P4_1toMax_Volume - Raiden_Shogun_Pr_P4_1toMin_Volume
    var Raiden_Shogun_Pr_P5 = Raiden_Shogun_Pr_P5_1toMax_Volume - Raiden_Shogun_Pr_P5_1toMin_Volume
    document.getElementById('Raiden_Shogun_Pr_P1_Volume').innerHTML = Raiden_Shogun_Pr_P1;
    document.getElementById('Raiden_Shogun_Pr_P2_Volume').innerHTML = Raiden_Shogun_Pr_P2;
    document.getElementById('Raiden_Shogun_Pr_P3_Volume').innerHTML = Raiden_Shogun_Pr_P3;
    document.getElementById('Raiden_Shogun_Pr_P4_Volume').innerHTML = Raiden_Shogun_Pr_P4;
    document.getElementById('Raiden_Shogun_Pr_P5_Volume').innerHTML = Raiden_Shogun_Pr_P5.toLocaleString();
  });
  Raiden_Shogun_T1.noUiSlider.on('update', function (values, handle) {
    var Raiden_Shogun_T1_Min_Volume = "L1toL" + Raiden_Shogun_T1.noUiSlider.get()[0];
    var Raiden_Shogun_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[0])["T1_" + [Raiden_Shogun_T1_Min_Volume]]);
    var Raiden_Shogun_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[0])["T2_" + [Raiden_Shogun_T1_Min_Volume]]);
    var Raiden_Shogun_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[0])["T3_" + [Raiden_Shogun_T1_Min_Volume]]);
    var Raiden_Shogun_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[0])["T4_" + [Raiden_Shogun_T1_Min_Volume]]);
    var Raiden_Shogun_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[0])["T5_" + [Raiden_Shogun_T1_Min_Volume]]);
    var Raiden_Shogun_T1_Max_Volume = "L1toL" + Raiden_Shogun_T1.noUiSlider.get()[1];
    var Raiden_Shogun_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[1])["T1_" + [Raiden_Shogun_T1_Max_Volume]]);
    var Raiden_Shogun_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[1])["T2_" + [Raiden_Shogun_T1_Max_Volume]]);
    var Raiden_Shogun_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[1])["T3_" + [Raiden_Shogun_T1_Max_Volume]]);
    var Raiden_Shogun_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[1])["T4_" + [Raiden_Shogun_T1_Max_Volume]]);
    var Raiden_Shogun_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T1.noUiSlider.get()[1])["T5_" + [Raiden_Shogun_T1_Max_Volume]]);
    var Raiden_Shogun_T1_T1 = Raiden_Shogun_T1_T1_1toMax_Volume - Raiden_Shogun_T1_T1_1toMin_Volume
    var Raiden_Shogun_T1_T2 = Raiden_Shogun_T1_T2_1toMax_Volume - Raiden_Shogun_T1_T2_1toMin_Volume
    var Raiden_Shogun_T1_T3 = Raiden_Shogun_T1_T3_1toMax_Volume - Raiden_Shogun_T1_T3_1toMin_Volume
    var Raiden_Shogun_T1_T4 = Raiden_Shogun_T1_T4_1toMax_Volume - Raiden_Shogun_T1_T4_1toMin_Volume
    var Raiden_Shogun_T1_T5 = Raiden_Shogun_T1_T5_1toMax_Volume - Raiden_Shogun_T1_T5_1toMin_Volume
    document.getElementById('Raiden_Shogun_T1_T1_Volume').innerHTML = Raiden_Shogun_T1_T1;
    document.getElementById('Raiden_Shogun_T1_T2_Volume').innerHTML = Raiden_Shogun_T1_T2;
    document.getElementById('Raiden_Shogun_T1_T3_Volume').innerHTML = Raiden_Shogun_T1_T3;
    document.getElementById('Raiden_Shogun_T1_T4_Volume').innerHTML = Raiden_Shogun_T1_T4;
    document.getElementById('Raiden_Shogun_T1_T5_Volume').innerHTML = Raiden_Shogun_T1_T5.toLocaleString();
  });
  Raiden_Shogun_T2.noUiSlider.on('update', function (values, handle) {
    var Raiden_Shogun_T2_Min_Volume = "L1toL" + Raiden_Shogun_T2.noUiSlider.get()[0];
    var Raiden_Shogun_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[0])["T1_" + [Raiden_Shogun_T2_Min_Volume]]);
    var Raiden_Shogun_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[0])["T2_" + [Raiden_Shogun_T2_Min_Volume]]);
    var Raiden_Shogun_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[0])["T3_" + [Raiden_Shogun_T2_Min_Volume]]);
    var Raiden_Shogun_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[0])["T4_" + [Raiden_Shogun_T2_Min_Volume]]);
    var Raiden_Shogun_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[0])["T5_" + [Raiden_Shogun_T2_Min_Volume]]);
    var Raiden_Shogun_T2_Max_Volume = "L1toL" + Raiden_Shogun_T2.noUiSlider.get()[1];
    var Raiden_Shogun_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[1])["T1_" + [Raiden_Shogun_T2_Max_Volume]]);
    var Raiden_Shogun_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[1])["T2_" + [Raiden_Shogun_T2_Max_Volume]]);
    var Raiden_Shogun_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[1])["T3_" + [Raiden_Shogun_T2_Max_Volume]]);
    var Raiden_Shogun_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[1])["T4_" + [Raiden_Shogun_T2_Max_Volume]]);
    var Raiden_Shogun_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T2.noUiSlider.get()[1])["T5_" + [Raiden_Shogun_T2_Max_Volume]]);
    var Raiden_Shogun_T2_T1 = Raiden_Shogun_T2_T1_1toMax_Volume - Raiden_Shogun_T2_T1_1toMin_Volume
    var Raiden_Shogun_T2_T2 = Raiden_Shogun_T2_T2_1toMax_Volume - Raiden_Shogun_T2_T2_1toMin_Volume
    var Raiden_Shogun_T2_T3 = Raiden_Shogun_T2_T3_1toMax_Volume - Raiden_Shogun_T2_T3_1toMin_Volume
    var Raiden_Shogun_T2_T4 = Raiden_Shogun_T2_T4_1toMax_Volume - Raiden_Shogun_T2_T4_1toMin_Volume
    var Raiden_Shogun_T2_T5 = Raiden_Shogun_T2_T5_1toMax_Volume - Raiden_Shogun_T2_T5_1toMin_Volume
    document.getElementById('Raiden_Shogun_T2_T1_Volume').innerHTML = Raiden_Shogun_T2_T1;
    document.getElementById('Raiden_Shogun_T2_T2_Volume').innerHTML = Raiden_Shogun_T2_T2;
    document.getElementById('Raiden_Shogun_T2_T3_Volume').innerHTML = Raiden_Shogun_T2_T3;
    document.getElementById('Raiden_Shogun_T2_T4_Volume').innerHTML = Raiden_Shogun_T2_T4;
    document.getElementById('Raiden_Shogun_T2_T5_Volume').innerHTML = Raiden_Shogun_T2_T5.toLocaleString();
  });
  Raiden_Shogun_T3.noUiSlider.on('update', function (values, handle) {
    var Raiden_Shogun_T3_Min_Volume = "L1toL" + Raiden_Shogun_T3.noUiSlider.get()[0];
    var Raiden_Shogun_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[0])["T1_" + [Raiden_Shogun_T3_Min_Volume]]);
    var Raiden_Shogun_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[0])["T2_" + [Raiden_Shogun_T3_Min_Volume]]);
    var Raiden_Shogun_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[0])["T3_" + [Raiden_Shogun_T3_Min_Volume]]);
    var Raiden_Shogun_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[0])["T4_" + [Raiden_Shogun_T3_Min_Volume]]);
    var Raiden_Shogun_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[0])["T5_" + [Raiden_Shogun_T3_Min_Volume]]);
    var Raiden_Shogun_T3_Max_Volume = "L1toL" + Raiden_Shogun_T3.noUiSlider.get()[1];
    var Raiden_Shogun_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[1])["T1_" + [Raiden_Shogun_T3_Max_Volume]]);
    var Raiden_Shogun_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[1])["T2_" + [Raiden_Shogun_T3_Max_Volume]]);
    var Raiden_Shogun_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[1])["T3_" + [Raiden_Shogun_T3_Max_Volume]]);
    var Raiden_Shogun_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[1])["T4_" + [Raiden_Shogun_T3_Max_Volume]]);
    var Raiden_Shogun_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Raiden_Shogun_T3.noUiSlider.get()[1])["T5_" + [Raiden_Shogun_T3_Max_Volume]]);
    var Raiden_Shogun_T3_T1 = Raiden_Shogun_T3_T1_1toMax_Volume - Raiden_Shogun_T3_T1_1toMin_Volume
    var Raiden_Shogun_T3_T2 = Raiden_Shogun_T3_T2_1toMax_Volume - Raiden_Shogun_T3_T2_1toMin_Volume
    var Raiden_Shogun_T3_T3 = Raiden_Shogun_T3_T3_1toMax_Volume - Raiden_Shogun_T3_T3_1toMin_Volume
    var Raiden_Shogun_T3_T4 = Raiden_Shogun_T3_T4_1toMax_Volume - Raiden_Shogun_T3_T4_1toMin_Volume
    var Raiden_Shogun_T3_T5 = Raiden_Shogun_T3_T5_1toMax_Volume - Raiden_Shogun_T3_T5_1toMin_Volume
    document.getElementById('Raiden_Shogun_T3_T1_Volume').innerHTML = Raiden_Shogun_T3_T1;
    document.getElementById('Raiden_Shogun_T3_T2_Volume').innerHTML = Raiden_Shogun_T3_T2;
    document.getElementById('Raiden_Shogun_T3_T3_Volume').innerHTML = Raiden_Shogun_T3_T3;
    document.getElementById('Raiden_Shogun_T3_T4_Volume').innerHTML = Raiden_Shogun_T3_T4;
    document.getElementById('Raiden_Shogun_T3_T5_Volume').innerHTML = Raiden_Shogun_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Raiden_Shogun  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Kujou_Sara  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Kujou_Sara_Ex = document.getElementById('Kujou_Sara_Ex');
noUiSlider.create(Kujou_Sara_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kujou_Sara_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kujou_Sara_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kujou_Sara_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kujou_Sara_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function Kujou_SaraLoad() {
  Kujou_Sara_Ex.noUiSlider.on('update', function (values, handle) {
    var Kujou_Sara_Ex_Min_Volume = "L1toL" + Kujou_Sara_Ex.noUiSlider.get()[0];
    var Kujou_Sara_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Kujou_Sara_Ex.noUiSlider.get()[0])[Kujou_Sara_Ex_Min_Volume]);
    var Kujou_Sara_Ex_Max_Volume = "L1toL" + Kujou_Sara_Ex.noUiSlider.get()[1];
    var Kujou_Sara_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Kujou_Sara_Ex.noUiSlider.get()[1])[Kujou_Sara_Ex_Max_Volume]);
    var Kujou_Sara_Ex_Volume = Kujou_Sara_Ex_1toMax_Volume - Kujou_Sara_Ex_1toMin_Volume
    var Kujou_Sara_Ex_Book_Volume = Kujou_Sara_Ex_Volume / 1000
    var Kujou_Sara_Ex_Mora_Volume = Kujou_Sara_Ex_Volume * 0.2
    document.getElementById('Kujou_Sara_Ex_Volume').innerHTML = Kujou_Sara_Ex_Volume.toLocaleString();
    document.getElementById('Kujou_Sara_Ex_Book_Volume').innerHTML = Kujou_Sara_Ex_Book_Volume.toLocaleString();
    document.getElementById('Kujou_Sara_Ex_Mora_Volume').innerHTML = Kujou_Sara_Ex_Mora_Volume.toLocaleString();
  });
  Kujou_Sara_Pr.noUiSlider.on('update', function (values, handle) {
    var Kujou_Sara_Pr_Min_Volume = "L1toL" + Kujou_Sara_Pr.noUiSlider.get()[0];
    var Kujou_Sara_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[0])["P1_" + [Kujou_Sara_Pr_Min_Volume]]);
    var Kujou_Sara_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[0])["P2_" + [Kujou_Sara_Pr_Min_Volume]]);
    var Kujou_Sara_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[0])["P3_" + [Kujou_Sara_Pr_Min_Volume]]);
    var Kujou_Sara_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[0])["P4_" + [Kujou_Sara_Pr_Min_Volume]]);
    var Kujou_Sara_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[0])["P5_" + [Kujou_Sara_Pr_Min_Volume]]);
    var Kujou_Sara_Pr_Max_Volume = "L1toL" + Kujou_Sara_Pr.noUiSlider.get()[1];
    var Kujou_Sara_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[1])["P1_" + [Kujou_Sara_Pr_Max_Volume]]);
    var Kujou_Sara_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[1])["P2_" + [Kujou_Sara_Pr_Max_Volume]]);
    var Kujou_Sara_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[1])["P3_" + [Kujou_Sara_Pr_Max_Volume]]);
    var Kujou_Sara_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[1])["P4_" + [Kujou_Sara_Pr_Max_Volume]]);
    var Kujou_Sara_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kujou_Sara_Pr.noUiSlider.get()[1])["P5_" + [Kujou_Sara_Pr_Max_Volume]]);
    var Kujou_Sara_Pr_P1 = Kujou_Sara_Pr_P1_1toMax_Volume - Kujou_Sara_Pr_P1_1toMin_Volume
    var Kujou_Sara_Pr_P2 = Kujou_Sara_Pr_P2_1toMax_Volume - Kujou_Sara_Pr_P2_1toMin_Volume
    var Kujou_Sara_Pr_P3 = Kujou_Sara_Pr_P3_1toMax_Volume - Kujou_Sara_Pr_P3_1toMin_Volume
    var Kujou_Sara_Pr_P4 = Kujou_Sara_Pr_P4_1toMax_Volume - Kujou_Sara_Pr_P4_1toMin_Volume
    var Kujou_Sara_Pr_P5 = Kujou_Sara_Pr_P5_1toMax_Volume - Kujou_Sara_Pr_P5_1toMin_Volume
    document.getElementById('Kujou_Sara_Pr_P1_Volume').innerHTML = Kujou_Sara_Pr_P1;
    document.getElementById('Kujou_Sara_Pr_P2_Volume').innerHTML = Kujou_Sara_Pr_P2;
    document.getElementById('Kujou_Sara_Pr_P3_Volume').innerHTML = Kujou_Sara_Pr_P3;
    document.getElementById('Kujou_Sara_Pr_P4_Volume').innerHTML = Kujou_Sara_Pr_P4;
    document.getElementById('Kujou_Sara_Pr_P5_Volume').innerHTML = Kujou_Sara_Pr_P5.toLocaleString();
  });
  Kujou_Sara_T1.noUiSlider.on('update', function (values, handle) {
    var Kujou_Sara_T1_Min_Volume = "L1toL" + Kujou_Sara_T1.noUiSlider.get()[0];
    var Kujou_Sara_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[0])["T1_" + [Kujou_Sara_T1_Min_Volume]]);
    var Kujou_Sara_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[0])["T2_" + [Kujou_Sara_T1_Min_Volume]]);
    var Kujou_Sara_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[0])["T3_" + [Kujou_Sara_T1_Min_Volume]]);
    var Kujou_Sara_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[0])["T4_" + [Kujou_Sara_T1_Min_Volume]]);
    var Kujou_Sara_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[0])["T5_" + [Kujou_Sara_T1_Min_Volume]]);
    var Kujou_Sara_T1_Max_Volume = "L1toL" + Kujou_Sara_T1.noUiSlider.get()[1];
    var Kujou_Sara_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[1])["T1_" + [Kujou_Sara_T1_Max_Volume]]);
    var Kujou_Sara_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[1])["T2_" + [Kujou_Sara_T1_Max_Volume]]);
    var Kujou_Sara_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[1])["T3_" + [Kujou_Sara_T1_Max_Volume]]);
    var Kujou_Sara_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[1])["T4_" + [Kujou_Sara_T1_Max_Volume]]);
    var Kujou_Sara_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T1.noUiSlider.get()[1])["T5_" + [Kujou_Sara_T1_Max_Volume]]);
    var Kujou_Sara_T1_T1 = Kujou_Sara_T1_T1_1toMax_Volume - Kujou_Sara_T1_T1_1toMin_Volume
    var Kujou_Sara_T1_T2 = Kujou_Sara_T1_T2_1toMax_Volume - Kujou_Sara_T1_T2_1toMin_Volume
    var Kujou_Sara_T1_T3 = Kujou_Sara_T1_T3_1toMax_Volume - Kujou_Sara_T1_T3_1toMin_Volume
    var Kujou_Sara_T1_T4 = Kujou_Sara_T1_T4_1toMax_Volume - Kujou_Sara_T1_T4_1toMin_Volume
    var Kujou_Sara_T1_T5 = Kujou_Sara_T1_T5_1toMax_Volume - Kujou_Sara_T1_T5_1toMin_Volume
    document.getElementById('Kujou_Sara_T1_T1_Volume').innerHTML = Kujou_Sara_T1_T1;
    document.getElementById('Kujou_Sara_T1_T2_Volume').innerHTML = Kujou_Sara_T1_T2;
    document.getElementById('Kujou_Sara_T1_T3_Volume').innerHTML = Kujou_Sara_T1_T3;
    document.getElementById('Kujou_Sara_T1_T4_Volume').innerHTML = Kujou_Sara_T1_T4;
    document.getElementById('Kujou_Sara_T1_T5_Volume').innerHTML = Kujou_Sara_T1_T5.toLocaleString();
  });
  Kujou_Sara_T2.noUiSlider.on('update', function (values, handle) {
    var Kujou_Sara_T2_Min_Volume = "L1toL" + Kujou_Sara_T2.noUiSlider.get()[0];
    var Kujou_Sara_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[0])["T1_" + [Kujou_Sara_T2_Min_Volume]]);
    var Kujou_Sara_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[0])["T2_" + [Kujou_Sara_T2_Min_Volume]]);
    var Kujou_Sara_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[0])["T3_" + [Kujou_Sara_T2_Min_Volume]]);
    var Kujou_Sara_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[0])["T4_" + [Kujou_Sara_T2_Min_Volume]]);
    var Kujou_Sara_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[0])["T5_" + [Kujou_Sara_T2_Min_Volume]]);
    var Kujou_Sara_T2_Max_Volume = "L1toL" + Kujou_Sara_T2.noUiSlider.get()[1];
    var Kujou_Sara_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[1])["T1_" + [Kujou_Sara_T2_Max_Volume]]);
    var Kujou_Sara_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[1])["T2_" + [Kujou_Sara_T2_Max_Volume]]);
    var Kujou_Sara_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[1])["T3_" + [Kujou_Sara_T2_Max_Volume]]);
    var Kujou_Sara_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[1])["T4_" + [Kujou_Sara_T2_Max_Volume]]);
    var Kujou_Sara_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T2.noUiSlider.get()[1])["T5_" + [Kujou_Sara_T2_Max_Volume]]);
    var Kujou_Sara_T2_T1 = Kujou_Sara_T2_T1_1toMax_Volume - Kujou_Sara_T2_T1_1toMin_Volume
    var Kujou_Sara_T2_T2 = Kujou_Sara_T2_T2_1toMax_Volume - Kujou_Sara_T2_T2_1toMin_Volume
    var Kujou_Sara_T2_T3 = Kujou_Sara_T2_T3_1toMax_Volume - Kujou_Sara_T2_T3_1toMin_Volume
    var Kujou_Sara_T2_T4 = Kujou_Sara_T2_T4_1toMax_Volume - Kujou_Sara_T2_T4_1toMin_Volume
    var Kujou_Sara_T2_T5 = Kujou_Sara_T2_T5_1toMax_Volume - Kujou_Sara_T2_T5_1toMin_Volume
    document.getElementById('Kujou_Sara_T2_T1_Volume').innerHTML = Kujou_Sara_T2_T1;
    document.getElementById('Kujou_Sara_T2_T2_Volume').innerHTML = Kujou_Sara_T2_T2;
    document.getElementById('Kujou_Sara_T2_T3_Volume').innerHTML = Kujou_Sara_T2_T3;
    document.getElementById('Kujou_Sara_T2_T4_Volume').innerHTML = Kujou_Sara_T2_T4;
    document.getElementById('Kujou_Sara_T2_T5_Volume').innerHTML = Kujou_Sara_T2_T5.toLocaleString();
  });
  Kujou_Sara_T3.noUiSlider.on('update', function (values, handle) {
    var Kujou_Sara_T3_Min_Volume = "L1toL" + Kujou_Sara_T3.noUiSlider.get()[0];
    var Kujou_Sara_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[0])["T1_" + [Kujou_Sara_T3_Min_Volume]]);
    var Kujou_Sara_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[0])["T2_" + [Kujou_Sara_T3_Min_Volume]]);
    var Kujou_Sara_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[0])["T3_" + [Kujou_Sara_T3_Min_Volume]]);
    var Kujou_Sara_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[0])["T4_" + [Kujou_Sara_T3_Min_Volume]]);
    var Kujou_Sara_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[0])["T5_" + [Kujou_Sara_T3_Min_Volume]]);
    var Kujou_Sara_T3_Max_Volume = "L1toL" + Kujou_Sara_T3.noUiSlider.get()[1];
    var Kujou_Sara_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[1])["T1_" + [Kujou_Sara_T3_Max_Volume]]);
    var Kujou_Sara_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[1])["T2_" + [Kujou_Sara_T3_Max_Volume]]);
    var Kujou_Sara_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[1])["T3_" + [Kujou_Sara_T3_Max_Volume]]);
    var Kujou_Sara_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[1])["T4_" + [Kujou_Sara_T3_Max_Volume]]);
    var Kujou_Sara_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kujou_Sara_T3.noUiSlider.get()[1])["T5_" + [Kujou_Sara_T3_Max_Volume]]);
    var Kujou_Sara_T3_T1 = Kujou_Sara_T3_T1_1toMax_Volume - Kujou_Sara_T3_T1_1toMin_Volume
    var Kujou_Sara_T3_T2 = Kujou_Sara_T3_T2_1toMax_Volume - Kujou_Sara_T3_T2_1toMin_Volume
    var Kujou_Sara_T3_T3 = Kujou_Sara_T3_T3_1toMax_Volume - Kujou_Sara_T3_T3_1toMin_Volume
    var Kujou_Sara_T3_T4 = Kujou_Sara_T3_T4_1toMax_Volume - Kujou_Sara_T3_T4_1toMin_Volume
    var Kujou_Sara_T3_T5 = Kujou_Sara_T3_T5_1toMax_Volume - Kujou_Sara_T3_T5_1toMin_Volume
    document.getElementById('Kujou_Sara_T3_T1_Volume').innerHTML = Kujou_Sara_T3_T1;
    document.getElementById('Kujou_Sara_T3_T2_Volume').innerHTML = Kujou_Sara_T3_T2;
    document.getElementById('Kujou_Sara_T3_T3_Volume').innerHTML = Kujou_Sara_T3_T3;
    document.getElementById('Kujou_Sara_T3_T4_Volume').innerHTML = Kujou_Sara_T3_T4;
    document.getElementById('Kujou_Sara_T3_T5_Volume').innerHTML = Kujou_Sara_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Kujou_Sara  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Yoimiya  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Yoimiya_Ex = document.getElementById('Yoimiya_Ex');
noUiSlider.create(Yoimiya_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Yoimiya_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Yoimiya_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Yoimiya_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Yoimiya_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function YoimiyaLoad() {
  Yoimiya_Ex.noUiSlider.on('update', function (values, handle) {
    var Yoimiya_Ex_Min_Volume = "L1toL" + Yoimiya_Ex.noUiSlider.get()[0];
    var Yoimiya_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Yoimiya_Ex.noUiSlider.get()[0])[Yoimiya_Ex_Min_Volume]);
    var Yoimiya_Ex_Max_Volume = "L1toL" + Yoimiya_Ex.noUiSlider.get()[1];
    var Yoimiya_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Yoimiya_Ex.noUiSlider.get()[1])[Yoimiya_Ex_Max_Volume]);
    var Yoimiya_Ex_Volume = Yoimiya_Ex_1toMax_Volume - Yoimiya_Ex_1toMin_Volume
    var Yoimiya_Ex_Book_Volume = Yoimiya_Ex_Volume / 1000
    var Yoimiya_Ex_Mora_Volume = Yoimiya_Ex_Volume * 0.2
    document.getElementById('Yoimiya_Ex_Volume').innerHTML = Yoimiya_Ex_Volume.toLocaleString();
    document.getElementById('Yoimiya_Ex_Book_Volume').innerHTML = Yoimiya_Ex_Book_Volume.toLocaleString();
    document.getElementById('Yoimiya_Ex_Mora_Volume').innerHTML = Yoimiya_Ex_Mora_Volume.toLocaleString();
  });
  Yoimiya_Pr.noUiSlider.on('update', function (values, handle) {
    var Yoimiya_Pr_Min_Volume = "L1toL" + Yoimiya_Pr.noUiSlider.get()[0];
    var Yoimiya_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[0])["P1_" + [Yoimiya_Pr_Min_Volume]]);
    var Yoimiya_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[0])["P2_" + [Yoimiya_Pr_Min_Volume]]);
    var Yoimiya_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[0])["P3_" + [Yoimiya_Pr_Min_Volume]]);
    var Yoimiya_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[0])["P4_" + [Yoimiya_Pr_Min_Volume]]);
    var Yoimiya_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[0])["P5_" + [Yoimiya_Pr_Min_Volume]]);
    var Yoimiya_Pr_Max_Volume = "L1toL" + Yoimiya_Pr.noUiSlider.get()[1];
    var Yoimiya_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[1])["P1_" + [Yoimiya_Pr_Max_Volume]]);
    var Yoimiya_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[1])["P2_" + [Yoimiya_Pr_Max_Volume]]);
    var Yoimiya_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[1])["P3_" + [Yoimiya_Pr_Max_Volume]]);
    var Yoimiya_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[1])["P4_" + [Yoimiya_Pr_Max_Volume]]);
    var Yoimiya_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yoimiya_Pr.noUiSlider.get()[1])["P5_" + [Yoimiya_Pr_Max_Volume]]);
    var Yoimiya_Pr_P1 = Yoimiya_Pr_P1_1toMax_Volume - Yoimiya_Pr_P1_1toMin_Volume
    var Yoimiya_Pr_P2 = Yoimiya_Pr_P2_1toMax_Volume - Yoimiya_Pr_P2_1toMin_Volume
    var Yoimiya_Pr_P3 = Yoimiya_Pr_P3_1toMax_Volume - Yoimiya_Pr_P3_1toMin_Volume
    var Yoimiya_Pr_P4 = Yoimiya_Pr_P4_1toMax_Volume - Yoimiya_Pr_P4_1toMin_Volume
    var Yoimiya_Pr_P5 = Yoimiya_Pr_P5_1toMax_Volume - Yoimiya_Pr_P5_1toMin_Volume
    document.getElementById('Yoimiya_Pr_P1_Volume').innerHTML = Yoimiya_Pr_P1;
    document.getElementById('Yoimiya_Pr_P2_Volume').innerHTML = Yoimiya_Pr_P2;
    document.getElementById('Yoimiya_Pr_P3_Volume').innerHTML = Yoimiya_Pr_P3;
    document.getElementById('Yoimiya_Pr_P4_Volume').innerHTML = Yoimiya_Pr_P4;
    document.getElementById('Yoimiya_Pr_P5_Volume').innerHTML = Yoimiya_Pr_P5.toLocaleString();
  });
  Yoimiya_T1.noUiSlider.on('update', function (values, handle) {
    var Yoimiya_T1_Min_Volume = "L1toL" + Yoimiya_T1.noUiSlider.get()[0];
    var Yoimiya_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[0])["T1_" + [Yoimiya_T1_Min_Volume]]);
    var Yoimiya_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[0])["T2_" + [Yoimiya_T1_Min_Volume]]);
    var Yoimiya_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[0])["T3_" + [Yoimiya_T1_Min_Volume]]);
    var Yoimiya_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[0])["T4_" + [Yoimiya_T1_Min_Volume]]);
    var Yoimiya_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[0])["T5_" + [Yoimiya_T1_Min_Volume]]);
    var Yoimiya_T1_Max_Volume = "L1toL" + Yoimiya_T1.noUiSlider.get()[1];
    var Yoimiya_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[1])["T1_" + [Yoimiya_T1_Max_Volume]]);
    var Yoimiya_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[1])["T2_" + [Yoimiya_T1_Max_Volume]]);
    var Yoimiya_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[1])["T3_" + [Yoimiya_T1_Max_Volume]]);
    var Yoimiya_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[1])["T4_" + [Yoimiya_T1_Max_Volume]]);
    var Yoimiya_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T1.noUiSlider.get()[1])["T5_" + [Yoimiya_T1_Max_Volume]]);
    var Yoimiya_T1_T1 = Yoimiya_T1_T1_1toMax_Volume - Yoimiya_T1_T1_1toMin_Volume
    var Yoimiya_T1_T2 = Yoimiya_T1_T2_1toMax_Volume - Yoimiya_T1_T2_1toMin_Volume
    var Yoimiya_T1_T3 = Yoimiya_T1_T3_1toMax_Volume - Yoimiya_T1_T3_1toMin_Volume
    var Yoimiya_T1_T4 = Yoimiya_T1_T4_1toMax_Volume - Yoimiya_T1_T4_1toMin_Volume
    var Yoimiya_T1_T5 = Yoimiya_T1_T5_1toMax_Volume - Yoimiya_T1_T5_1toMin_Volume
    document.getElementById('Yoimiya_T1_T1_Volume').innerHTML = Yoimiya_T1_T1;
    document.getElementById('Yoimiya_T1_T2_Volume').innerHTML = Yoimiya_T1_T2;
    document.getElementById('Yoimiya_T1_T3_Volume').innerHTML = Yoimiya_T1_T3;
    document.getElementById('Yoimiya_T1_T4_Volume').innerHTML = Yoimiya_T1_T4;
    document.getElementById('Yoimiya_T1_T5_Volume').innerHTML = Yoimiya_T1_T5.toLocaleString();
  });
  Yoimiya_T2.noUiSlider.on('update', function (values, handle) {
    var Yoimiya_T2_Min_Volume = "L1toL" + Yoimiya_T2.noUiSlider.get()[0];
    var Yoimiya_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[0])["T1_" + [Yoimiya_T2_Min_Volume]]);
    var Yoimiya_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[0])["T2_" + [Yoimiya_T2_Min_Volume]]);
    var Yoimiya_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[0])["T3_" + [Yoimiya_T2_Min_Volume]]);
    var Yoimiya_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[0])["T4_" + [Yoimiya_T2_Min_Volume]]);
    var Yoimiya_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[0])["T5_" + [Yoimiya_T2_Min_Volume]]);
    var Yoimiya_T2_Max_Volume = "L1toL" + Yoimiya_T2.noUiSlider.get()[1];
    var Yoimiya_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[1])["T1_" + [Yoimiya_T2_Max_Volume]]);
    var Yoimiya_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[1])["T2_" + [Yoimiya_T2_Max_Volume]]);
    var Yoimiya_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[1])["T3_" + [Yoimiya_T2_Max_Volume]]);
    var Yoimiya_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[1])["T4_" + [Yoimiya_T2_Max_Volume]]);
    var Yoimiya_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T2.noUiSlider.get()[1])["T5_" + [Yoimiya_T2_Max_Volume]]);
    var Yoimiya_T2_T1 = Yoimiya_T2_T1_1toMax_Volume - Yoimiya_T2_T1_1toMin_Volume
    var Yoimiya_T2_T2 = Yoimiya_T2_T2_1toMax_Volume - Yoimiya_T2_T2_1toMin_Volume
    var Yoimiya_T2_T3 = Yoimiya_T2_T3_1toMax_Volume - Yoimiya_T2_T3_1toMin_Volume
    var Yoimiya_T2_T4 = Yoimiya_T2_T4_1toMax_Volume - Yoimiya_T2_T4_1toMin_Volume
    var Yoimiya_T2_T5 = Yoimiya_T2_T5_1toMax_Volume - Yoimiya_T2_T5_1toMin_Volume
    document.getElementById('Yoimiya_T2_T1_Volume').innerHTML = Yoimiya_T2_T1;
    document.getElementById('Yoimiya_T2_T2_Volume').innerHTML = Yoimiya_T2_T2;
    document.getElementById('Yoimiya_T2_T3_Volume').innerHTML = Yoimiya_T2_T3;
    document.getElementById('Yoimiya_T2_T4_Volume').innerHTML = Yoimiya_T2_T4;
    document.getElementById('Yoimiya_T2_T5_Volume').innerHTML = Yoimiya_T2_T5.toLocaleString();
  });
  Yoimiya_T3.noUiSlider.on('update', function (values, handle) {
    var Yoimiya_T3_Min_Volume = "L1toL" + Yoimiya_T3.noUiSlider.get()[0];
    var Yoimiya_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[0])["T1_" + [Yoimiya_T3_Min_Volume]]);
    var Yoimiya_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[0])["T2_" + [Yoimiya_T3_Min_Volume]]);
    var Yoimiya_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[0])["T3_" + [Yoimiya_T3_Min_Volume]]);
    var Yoimiya_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[0])["T4_" + [Yoimiya_T3_Min_Volume]]);
    var Yoimiya_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[0])["T5_" + [Yoimiya_T3_Min_Volume]]);
    var Yoimiya_T3_Max_Volume = "L1toL" + Yoimiya_T3.noUiSlider.get()[1];
    var Yoimiya_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[1])["T1_" + [Yoimiya_T3_Max_Volume]]);
    var Yoimiya_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[1])["T2_" + [Yoimiya_T3_Max_Volume]]);
    var Yoimiya_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[1])["T3_" + [Yoimiya_T3_Max_Volume]]);
    var Yoimiya_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[1])["T4_" + [Yoimiya_T3_Max_Volume]]);
    var Yoimiya_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yoimiya_T3.noUiSlider.get()[1])["T5_" + [Yoimiya_T3_Max_Volume]]);
    var Yoimiya_T3_T1 = Yoimiya_T3_T1_1toMax_Volume - Yoimiya_T3_T1_1toMin_Volume
    var Yoimiya_T3_T2 = Yoimiya_T3_T2_1toMax_Volume - Yoimiya_T3_T2_1toMin_Volume
    var Yoimiya_T3_T3 = Yoimiya_T3_T3_1toMax_Volume - Yoimiya_T3_T3_1toMin_Volume
    var Yoimiya_T3_T4 = Yoimiya_T3_T4_1toMax_Volume - Yoimiya_T3_T4_1toMin_Volume
    var Yoimiya_T3_T5 = Yoimiya_T3_T5_1toMax_Volume - Yoimiya_T3_T5_1toMin_Volume
    document.getElementById('Yoimiya_T3_T1_Volume').innerHTML = Yoimiya_T3_T1;
    document.getElementById('Yoimiya_T3_T2_Volume').innerHTML = Yoimiya_T3_T2;
    document.getElementById('Yoimiya_T3_T3_Volume').innerHTML = Yoimiya_T3_T3;
    document.getElementById('Yoimiya_T3_T4_Volume').innerHTML = Yoimiya_T3_T4;
    document.getElementById('Yoimiya_T3_T5_Volume').innerHTML = Yoimiya_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Yoimiya  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Sayu  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Sayu_Ex = document.getElementById('Sayu_Ex');
noUiSlider.create(Sayu_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sayu_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sayu_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sayu_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sayu_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function SayuLoad() {
  Sayu_Ex.noUiSlider.on('update', function (values, handle) {
    var Sayu_Ex_Min_Volume = "L1toL" + Sayu_Ex.noUiSlider.get()[0];
    var Sayu_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Sayu_Ex.noUiSlider.get()[0])[Sayu_Ex_Min_Volume]);
    var Sayu_Ex_Max_Volume = "L1toL" + Sayu_Ex.noUiSlider.get()[1];
    var Sayu_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Sayu_Ex.noUiSlider.get()[1])[Sayu_Ex_Max_Volume]);
    var Sayu_Ex_Volume = Sayu_Ex_1toMax_Volume - Sayu_Ex_1toMin_Volume
    var Sayu_Ex_Book_Volume = Sayu_Ex_Volume / 1000
    var Sayu_Ex_Mora_Volume = Sayu_Ex_Volume * 0.2
    document.getElementById('Sayu_Ex_Volume').innerHTML = Sayu_Ex_Volume.toLocaleString();
    document.getElementById('Sayu_Ex_Book_Volume').innerHTML = Sayu_Ex_Book_Volume.toLocaleString();
    document.getElementById('Sayu_Ex_Mora_Volume').innerHTML = Sayu_Ex_Mora_Volume.toLocaleString();
  });
  Sayu_Pr.noUiSlider.on('update', function (values, handle) {
    var Sayu_Pr_Min_Volume = "L1toL" + Sayu_Pr.noUiSlider.get()[0];
    var Sayu_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[0])["P1_" + [Sayu_Pr_Min_Volume]]);
    var Sayu_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[0])["P2_" + [Sayu_Pr_Min_Volume]]);
    var Sayu_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[0])["P3_" + [Sayu_Pr_Min_Volume]]);
    var Sayu_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[0])["P4_" + [Sayu_Pr_Min_Volume]]);
    var Sayu_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[0])["P5_" + [Sayu_Pr_Min_Volume]]);
    var Sayu_Pr_Max_Volume = "L1toL" + Sayu_Pr.noUiSlider.get()[1];
    var Sayu_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[1])["P1_" + [Sayu_Pr_Max_Volume]]);
    var Sayu_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[1])["P2_" + [Sayu_Pr_Max_Volume]]);
    var Sayu_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[1])["P3_" + [Sayu_Pr_Max_Volume]]);
    var Sayu_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[1])["P4_" + [Sayu_Pr_Max_Volume]]);
    var Sayu_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sayu_Pr.noUiSlider.get()[1])["P5_" + [Sayu_Pr_Max_Volume]]);
    var Sayu_Pr_P1 = Sayu_Pr_P1_1toMax_Volume - Sayu_Pr_P1_1toMin_Volume
    var Sayu_Pr_P2 = Sayu_Pr_P2_1toMax_Volume - Sayu_Pr_P2_1toMin_Volume
    var Sayu_Pr_P3 = Sayu_Pr_P3_1toMax_Volume - Sayu_Pr_P3_1toMin_Volume
    var Sayu_Pr_P4 = Sayu_Pr_P4_1toMax_Volume - Sayu_Pr_P4_1toMin_Volume
    var Sayu_Pr_P5 = Sayu_Pr_P5_1toMax_Volume - Sayu_Pr_P5_1toMin_Volume
    document.getElementById('Sayu_Pr_P1_Volume').innerHTML = Sayu_Pr_P1;
    document.getElementById('Sayu_Pr_P2_Volume').innerHTML = Sayu_Pr_P2;
    document.getElementById('Sayu_Pr_P3_Volume').innerHTML = Sayu_Pr_P3;
    document.getElementById('Sayu_Pr_P4_Volume').innerHTML = Sayu_Pr_P4;
    document.getElementById('Sayu_Pr_P5_Volume').innerHTML = Sayu_Pr_P5.toLocaleString();
  });
  Sayu_T1.noUiSlider.on('update', function (values, handle) {
    var Sayu_T1_Min_Volume = "L1toL" + Sayu_T1.noUiSlider.get()[0];
    var Sayu_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[0])["T1_" + [Sayu_T1_Min_Volume]]);
    var Sayu_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[0])["T2_" + [Sayu_T1_Min_Volume]]);
    var Sayu_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[0])["T3_" + [Sayu_T1_Min_Volume]]);
    var Sayu_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[0])["T4_" + [Sayu_T1_Min_Volume]]);
    var Sayu_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[0])["T5_" + [Sayu_T1_Min_Volume]]);
    var Sayu_T1_Max_Volume = "L1toL" + Sayu_T1.noUiSlider.get()[1];
    var Sayu_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[1])["T1_" + [Sayu_T1_Max_Volume]]);
    var Sayu_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[1])["T2_" + [Sayu_T1_Max_Volume]]);
    var Sayu_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[1])["T3_" + [Sayu_T1_Max_Volume]]);
    var Sayu_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[1])["T4_" + [Sayu_T1_Max_Volume]]);
    var Sayu_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T1.noUiSlider.get()[1])["T5_" + [Sayu_T1_Max_Volume]]);
    var Sayu_T1_T1 = Sayu_T1_T1_1toMax_Volume - Sayu_T1_T1_1toMin_Volume
    var Sayu_T1_T2 = Sayu_T1_T2_1toMax_Volume - Sayu_T1_T2_1toMin_Volume
    var Sayu_T1_T3 = Sayu_T1_T3_1toMax_Volume - Sayu_T1_T3_1toMin_Volume
    var Sayu_T1_T4 = Sayu_T1_T4_1toMax_Volume - Sayu_T1_T4_1toMin_Volume
    var Sayu_T1_T5 = Sayu_T1_T5_1toMax_Volume - Sayu_T1_T5_1toMin_Volume
    document.getElementById('Sayu_T1_T1_Volume').innerHTML = Sayu_T1_T1;
    document.getElementById('Sayu_T1_T2_Volume').innerHTML = Sayu_T1_T2;
    document.getElementById('Sayu_T1_T3_Volume').innerHTML = Sayu_T1_T3;
    document.getElementById('Sayu_T1_T4_Volume').innerHTML = Sayu_T1_T4;
    document.getElementById('Sayu_T1_T5_Volume').innerHTML = Sayu_T1_T5.toLocaleString();
  });
  Sayu_T2.noUiSlider.on('update', function (values, handle) {
    var Sayu_T2_Min_Volume = "L1toL" + Sayu_T2.noUiSlider.get()[0];
    var Sayu_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[0])["T1_" + [Sayu_T2_Min_Volume]]);
    var Sayu_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[0])["T2_" + [Sayu_T2_Min_Volume]]);
    var Sayu_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[0])["T3_" + [Sayu_T2_Min_Volume]]);
    var Sayu_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[0])["T4_" + [Sayu_T2_Min_Volume]]);
    var Sayu_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[0])["T5_" + [Sayu_T2_Min_Volume]]);
    var Sayu_T2_Max_Volume = "L1toL" + Sayu_T2.noUiSlider.get()[1];
    var Sayu_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[1])["T1_" + [Sayu_T2_Max_Volume]]);
    var Sayu_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[1])["T2_" + [Sayu_T2_Max_Volume]]);
    var Sayu_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[1])["T3_" + [Sayu_T2_Max_Volume]]);
    var Sayu_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[1])["T4_" + [Sayu_T2_Max_Volume]]);
    var Sayu_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T2.noUiSlider.get()[1])["T5_" + [Sayu_T2_Max_Volume]]);
    var Sayu_T2_T1 = Sayu_T2_T1_1toMax_Volume - Sayu_T2_T1_1toMin_Volume
    var Sayu_T2_T2 = Sayu_T2_T2_1toMax_Volume - Sayu_T2_T2_1toMin_Volume
    var Sayu_T2_T3 = Sayu_T2_T3_1toMax_Volume - Sayu_T2_T3_1toMin_Volume
    var Sayu_T2_T4 = Sayu_T2_T4_1toMax_Volume - Sayu_T2_T4_1toMin_Volume
    var Sayu_T2_T5 = Sayu_T2_T5_1toMax_Volume - Sayu_T2_T5_1toMin_Volume
    document.getElementById('Sayu_T2_T1_Volume').innerHTML = Sayu_T2_T1;
    document.getElementById('Sayu_T2_T2_Volume').innerHTML = Sayu_T2_T2;
    document.getElementById('Sayu_T2_T3_Volume').innerHTML = Sayu_T2_T3;
    document.getElementById('Sayu_T2_T4_Volume').innerHTML = Sayu_T2_T4;
    document.getElementById('Sayu_T2_T5_Volume').innerHTML = Sayu_T2_T5.toLocaleString();
  });
  Sayu_T3.noUiSlider.on('update', function (values, handle) {
    var Sayu_T3_Min_Volume = "L1toL" + Sayu_T3.noUiSlider.get()[0];
    var Sayu_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[0])["T1_" + [Sayu_T3_Min_Volume]]);
    var Sayu_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[0])["T2_" + [Sayu_T3_Min_Volume]]);
    var Sayu_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[0])["T3_" + [Sayu_T3_Min_Volume]]);
    var Sayu_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[0])["T4_" + [Sayu_T3_Min_Volume]]);
    var Sayu_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[0])["T5_" + [Sayu_T3_Min_Volume]]);
    var Sayu_T3_Max_Volume = "L1toL" + Sayu_T3.noUiSlider.get()[1];
    var Sayu_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[1])["T1_" + [Sayu_T3_Max_Volume]]);
    var Sayu_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[1])["T2_" + [Sayu_T3_Max_Volume]]);
    var Sayu_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[1])["T3_" + [Sayu_T3_Max_Volume]]);
    var Sayu_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[1])["T4_" + [Sayu_T3_Max_Volume]]);
    var Sayu_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sayu_T3.noUiSlider.get()[1])["T5_" + [Sayu_T3_Max_Volume]]);
    var Sayu_T3_T1 = Sayu_T3_T1_1toMax_Volume - Sayu_T3_T1_1toMin_Volume
    var Sayu_T3_T2 = Sayu_T3_T2_1toMax_Volume - Sayu_T3_T2_1toMin_Volume
    var Sayu_T3_T3 = Sayu_T3_T3_1toMax_Volume - Sayu_T3_T3_1toMin_Volume
    var Sayu_T3_T4 = Sayu_T3_T4_1toMax_Volume - Sayu_T3_T4_1toMin_Volume
    var Sayu_T3_T5 = Sayu_T3_T5_1toMax_Volume - Sayu_T3_T5_1toMin_Volume
    document.getElementById('Sayu_T3_T1_Volume').innerHTML = Sayu_T3_T1;
    document.getElementById('Sayu_T3_T2_Volume').innerHTML = Sayu_T3_T2;
    document.getElementById('Sayu_T3_T3_Volume').innerHTML = Sayu_T3_T3;
    document.getElementById('Sayu_T3_T4_Volume').innerHTML = Sayu_T3_T4;
    document.getElementById('Sayu_T3_T5_Volume').innerHTML = Sayu_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Sayu  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Kamisato_Ayaka  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Kamisato_Ayaka_Ex = document.getElementById('Kamisato_Ayaka_Ex');
noUiSlider.create(Kamisato_Ayaka_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kamisato_Ayaka_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kamisato_Ayaka_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kamisato_Ayaka_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kamisato_Ayaka_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function Kamisato_AyakaLoad() {
  Kamisato_Ayaka_Ex.noUiSlider.on('update', function (values, handle) {
    var Kamisato_Ayaka_Ex_Min_Volume = "L1toL" + Kamisato_Ayaka_Ex.noUiSlider.get()[0];
    var Kamisato_Ayaka_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Kamisato_Ayaka_Ex.noUiSlider.get()[0])[Kamisato_Ayaka_Ex_Min_Volume]);
    var Kamisato_Ayaka_Ex_Max_Volume = "L1toL" + Kamisato_Ayaka_Ex.noUiSlider.get()[1];
    var Kamisato_Ayaka_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Kamisato_Ayaka_Ex.noUiSlider.get()[1])[Kamisato_Ayaka_Ex_Max_Volume]);
    var Kamisato_Ayaka_Ex_Volume = Kamisato_Ayaka_Ex_1toMax_Volume - Kamisato_Ayaka_Ex_1toMin_Volume
    var Kamisato_Ayaka_Ex_Book_Volume = Kamisato_Ayaka_Ex_Volume / 1000
    var Kamisato_Ayaka_Ex_Mora_Volume = Kamisato_Ayaka_Ex_Volume * 0.2
    document.getElementById('Kamisato_Ayaka_Ex_Volume').innerHTML = Kamisato_Ayaka_Ex_Volume.toLocaleString();
    document.getElementById('Kamisato_Ayaka_Ex_Book_Volume').innerHTML = Kamisato_Ayaka_Ex_Book_Volume.toLocaleString();
    document.getElementById('Kamisato_Ayaka_Ex_Mora_Volume').innerHTML = Kamisato_Ayaka_Ex_Mora_Volume.toLocaleString();
  });
  Kamisato_Ayaka_Pr.noUiSlider.on('update', function (values, handle) {
    var Kamisato_Ayaka_Pr_Min_Volume = "L1toL" + Kamisato_Ayaka_Pr.noUiSlider.get()[0];
    var Kamisato_Ayaka_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[0])["P1_" + [Kamisato_Ayaka_Pr_Min_Volume]]);
    var Kamisato_Ayaka_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[0])["P2_" + [Kamisato_Ayaka_Pr_Min_Volume]]);
    var Kamisato_Ayaka_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[0])["P3_" + [Kamisato_Ayaka_Pr_Min_Volume]]);
    var Kamisato_Ayaka_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[0])["P4_" + [Kamisato_Ayaka_Pr_Min_Volume]]);
    var Kamisato_Ayaka_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[0])["P5_" + [Kamisato_Ayaka_Pr_Min_Volume]]);
    var Kamisato_Ayaka_Pr_Max_Volume = "L1toL" + Kamisato_Ayaka_Pr.noUiSlider.get()[1];
    var Kamisato_Ayaka_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[1])["P1_" + [Kamisato_Ayaka_Pr_Max_Volume]]);
    var Kamisato_Ayaka_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[1])["P2_" + [Kamisato_Ayaka_Pr_Max_Volume]]);
    var Kamisato_Ayaka_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[1])["P3_" + [Kamisato_Ayaka_Pr_Max_Volume]]);
    var Kamisato_Ayaka_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[1])["P4_" + [Kamisato_Ayaka_Pr_Max_Volume]]);
    var Kamisato_Ayaka_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kamisato_Ayaka_Pr.noUiSlider.get()[1])["P5_" + [Kamisato_Ayaka_Pr_Max_Volume]]);
    var Kamisato_Ayaka_Pr_P1 = Kamisato_Ayaka_Pr_P1_1toMax_Volume - Kamisato_Ayaka_Pr_P1_1toMin_Volume
    var Kamisato_Ayaka_Pr_P2 = Kamisato_Ayaka_Pr_P2_1toMax_Volume - Kamisato_Ayaka_Pr_P2_1toMin_Volume
    var Kamisato_Ayaka_Pr_P3 = Kamisato_Ayaka_Pr_P3_1toMax_Volume - Kamisato_Ayaka_Pr_P3_1toMin_Volume
    var Kamisato_Ayaka_Pr_P4 = Kamisato_Ayaka_Pr_P4_1toMax_Volume - Kamisato_Ayaka_Pr_P4_1toMin_Volume
    var Kamisato_Ayaka_Pr_P5 = Kamisato_Ayaka_Pr_P5_1toMax_Volume - Kamisato_Ayaka_Pr_P5_1toMin_Volume
    document.getElementById('Kamisato_Ayaka_Pr_P1_Volume').innerHTML = Kamisato_Ayaka_Pr_P1;
    document.getElementById('Kamisato_Ayaka_Pr_P2_Volume').innerHTML = Kamisato_Ayaka_Pr_P2;
    document.getElementById('Kamisato_Ayaka_Pr_P3_Volume').innerHTML = Kamisato_Ayaka_Pr_P3;
    document.getElementById('Kamisato_Ayaka_Pr_P4_Volume').innerHTML = Kamisato_Ayaka_Pr_P4;
    document.getElementById('Kamisato_Ayaka_Pr_P5_Volume').innerHTML = Kamisato_Ayaka_Pr_P5.toLocaleString();
  });
  Kamisato_Ayaka_T1.noUiSlider.on('update', function (values, handle) {
    var Kamisato_Ayaka_T1_Min_Volume = "L1toL" + Kamisato_Ayaka_T1.noUiSlider.get()[0];
    var Kamisato_Ayaka_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[0])["T1_" + [Kamisato_Ayaka_T1_Min_Volume]]);
    var Kamisato_Ayaka_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[0])["T2_" + [Kamisato_Ayaka_T1_Min_Volume]]);
    var Kamisato_Ayaka_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[0])["T3_" + [Kamisato_Ayaka_T1_Min_Volume]]);
    var Kamisato_Ayaka_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[0])["T4_" + [Kamisato_Ayaka_T1_Min_Volume]]);
    var Kamisato_Ayaka_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[0])["T5_" + [Kamisato_Ayaka_T1_Min_Volume]]);
    var Kamisato_Ayaka_T1_Max_Volume = "L1toL" + Kamisato_Ayaka_T1.noUiSlider.get()[1];
    var Kamisato_Ayaka_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[1])["T1_" + [Kamisato_Ayaka_T1_Max_Volume]]);
    var Kamisato_Ayaka_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[1])["T2_" + [Kamisato_Ayaka_T1_Max_Volume]]);
    var Kamisato_Ayaka_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[1])["T3_" + [Kamisato_Ayaka_T1_Max_Volume]]);
    var Kamisato_Ayaka_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[1])["T4_" + [Kamisato_Ayaka_T1_Max_Volume]]);
    var Kamisato_Ayaka_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T1.noUiSlider.get()[1])["T5_" + [Kamisato_Ayaka_T1_Max_Volume]]);
    var Kamisato_Ayaka_T1_T1 = Kamisato_Ayaka_T1_T1_1toMax_Volume - Kamisato_Ayaka_T1_T1_1toMin_Volume
    var Kamisato_Ayaka_T1_T2 = Kamisato_Ayaka_T1_T2_1toMax_Volume - Kamisato_Ayaka_T1_T2_1toMin_Volume
    var Kamisato_Ayaka_T1_T3 = Kamisato_Ayaka_T1_T3_1toMax_Volume - Kamisato_Ayaka_T1_T3_1toMin_Volume
    var Kamisato_Ayaka_T1_T4 = Kamisato_Ayaka_T1_T4_1toMax_Volume - Kamisato_Ayaka_T1_T4_1toMin_Volume
    var Kamisato_Ayaka_T1_T5 = Kamisato_Ayaka_T1_T5_1toMax_Volume - Kamisato_Ayaka_T1_T5_1toMin_Volume
    document.getElementById('Kamisato_Ayaka_T1_T1_Volume').innerHTML = Kamisato_Ayaka_T1_T1;
    document.getElementById('Kamisato_Ayaka_T1_T2_Volume').innerHTML = Kamisato_Ayaka_T1_T2;
    document.getElementById('Kamisato_Ayaka_T1_T3_Volume').innerHTML = Kamisato_Ayaka_T1_T3;
    document.getElementById('Kamisato_Ayaka_T1_T4_Volume').innerHTML = Kamisato_Ayaka_T1_T4;
    document.getElementById('Kamisato_Ayaka_T1_T5_Volume').innerHTML = Kamisato_Ayaka_T1_T5.toLocaleString();
  });
  Kamisato_Ayaka_T2.noUiSlider.on('update', function (values, handle) {
    var Kamisato_Ayaka_T2_Min_Volume = "L1toL" + Kamisato_Ayaka_T2.noUiSlider.get()[0];
    var Kamisato_Ayaka_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[0])["T1_" + [Kamisato_Ayaka_T2_Min_Volume]]);
    var Kamisato_Ayaka_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[0])["T2_" + [Kamisato_Ayaka_T2_Min_Volume]]);
    var Kamisato_Ayaka_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[0])["T3_" + [Kamisato_Ayaka_T2_Min_Volume]]);
    var Kamisato_Ayaka_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[0])["T4_" + [Kamisato_Ayaka_T2_Min_Volume]]);
    var Kamisato_Ayaka_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[0])["T5_" + [Kamisato_Ayaka_T2_Min_Volume]]);
    var Kamisato_Ayaka_T2_Max_Volume = "L1toL" + Kamisato_Ayaka_T2.noUiSlider.get()[1];
    var Kamisato_Ayaka_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[1])["T1_" + [Kamisato_Ayaka_T2_Max_Volume]]);
    var Kamisato_Ayaka_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[1])["T2_" + [Kamisato_Ayaka_T2_Max_Volume]]);
    var Kamisato_Ayaka_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[1])["T3_" + [Kamisato_Ayaka_T2_Max_Volume]]);
    var Kamisato_Ayaka_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[1])["T4_" + [Kamisato_Ayaka_T2_Max_Volume]]);
    var Kamisato_Ayaka_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T2.noUiSlider.get()[1])["T5_" + [Kamisato_Ayaka_T2_Max_Volume]]);
    var Kamisato_Ayaka_T2_T1 = Kamisato_Ayaka_T2_T1_1toMax_Volume - Kamisato_Ayaka_T2_T1_1toMin_Volume
    var Kamisato_Ayaka_T2_T2 = Kamisato_Ayaka_T2_T2_1toMax_Volume - Kamisato_Ayaka_T2_T2_1toMin_Volume
    var Kamisato_Ayaka_T2_T3 = Kamisato_Ayaka_T2_T3_1toMax_Volume - Kamisato_Ayaka_T2_T3_1toMin_Volume
    var Kamisato_Ayaka_T2_T4 = Kamisato_Ayaka_T2_T4_1toMax_Volume - Kamisato_Ayaka_T2_T4_1toMin_Volume
    var Kamisato_Ayaka_T2_T5 = Kamisato_Ayaka_T2_T5_1toMax_Volume - Kamisato_Ayaka_T2_T5_1toMin_Volume
    document.getElementById('Kamisato_Ayaka_T2_T1_Volume').innerHTML = Kamisato_Ayaka_T2_T1;
    document.getElementById('Kamisato_Ayaka_T2_T2_Volume').innerHTML = Kamisato_Ayaka_T2_T2;
    document.getElementById('Kamisato_Ayaka_T2_T3_Volume').innerHTML = Kamisato_Ayaka_T2_T3;
    document.getElementById('Kamisato_Ayaka_T2_T4_Volume').innerHTML = Kamisato_Ayaka_T2_T4;
    document.getElementById('Kamisato_Ayaka_T2_T5_Volume').innerHTML = Kamisato_Ayaka_T2_T5.toLocaleString();
  });
  Kamisato_Ayaka_T3.noUiSlider.on('update', function (values, handle) {
    var Kamisato_Ayaka_T3_Min_Volume = "L1toL" + Kamisato_Ayaka_T3.noUiSlider.get()[0];
    var Kamisato_Ayaka_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[0])["T1_" + [Kamisato_Ayaka_T3_Min_Volume]]);
    var Kamisato_Ayaka_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[0])["T2_" + [Kamisato_Ayaka_T3_Min_Volume]]);
    var Kamisato_Ayaka_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[0])["T3_" + [Kamisato_Ayaka_T3_Min_Volume]]);
    var Kamisato_Ayaka_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[0])["T4_" + [Kamisato_Ayaka_T3_Min_Volume]]);
    var Kamisato_Ayaka_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[0])["T5_" + [Kamisato_Ayaka_T3_Min_Volume]]);
    var Kamisato_Ayaka_T3_Max_Volume = "L1toL" + Kamisato_Ayaka_T3.noUiSlider.get()[1];
    var Kamisato_Ayaka_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[1])["T1_" + [Kamisato_Ayaka_T3_Max_Volume]]);
    var Kamisato_Ayaka_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[1])["T2_" + [Kamisato_Ayaka_T3_Max_Volume]]);
    var Kamisato_Ayaka_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[1])["T3_" + [Kamisato_Ayaka_T3_Max_Volume]]);
    var Kamisato_Ayaka_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[1])["T4_" + [Kamisato_Ayaka_T3_Max_Volume]]);
    var Kamisato_Ayaka_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kamisato_Ayaka_T3.noUiSlider.get()[1])["T5_" + [Kamisato_Ayaka_T3_Max_Volume]]);
    var Kamisato_Ayaka_T3_T1 = Kamisato_Ayaka_T3_T1_1toMax_Volume - Kamisato_Ayaka_T3_T1_1toMin_Volume
    var Kamisato_Ayaka_T3_T2 = Kamisato_Ayaka_T3_T2_1toMax_Volume - Kamisato_Ayaka_T3_T2_1toMin_Volume
    var Kamisato_Ayaka_T3_T3 = Kamisato_Ayaka_T3_T3_1toMax_Volume - Kamisato_Ayaka_T3_T3_1toMin_Volume
    var Kamisato_Ayaka_T3_T4 = Kamisato_Ayaka_T3_T4_1toMax_Volume - Kamisato_Ayaka_T3_T4_1toMin_Volume
    var Kamisato_Ayaka_T3_T5 = Kamisato_Ayaka_T3_T5_1toMax_Volume - Kamisato_Ayaka_T3_T5_1toMin_Volume
    document.getElementById('Kamisato_Ayaka_T3_T1_Volume').innerHTML = Kamisato_Ayaka_T3_T1;
    document.getElementById('Kamisato_Ayaka_T3_T2_Volume').innerHTML = Kamisato_Ayaka_T3_T2;
    document.getElementById('Kamisato_Ayaka_T3_T3_Volume').innerHTML = Kamisato_Ayaka_T3_T3;
    document.getElementById('Kamisato_Ayaka_T3_T4_Volume').innerHTML = Kamisato_Ayaka_T3_T4;
    document.getElementById('Kamisato_Ayaka_T3_T5_Volume').innerHTML = Kamisato_Ayaka_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Kamisato_Ayaka  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Kaedehara_Kazuha  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Kaedehara_Kazuha_Ex = document.getElementById('Kaedehara_Kazuha_Ex');
noUiSlider.create(Kaedehara_Kazuha_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kaedehara_Kazuha_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kaedehara_Kazuha_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kaedehara_Kazuha_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kaedehara_Kazuha_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function Kaedehara_KazuhaLoad() {
  Kaedehara_Kazuha_Ex.noUiSlider.on('update', function (values, handle) {
    var Kaedehara_Kazuha_Ex_Min_Volume = "L1toL" + Kaedehara_Kazuha_Ex.noUiSlider.get()[0];
    var Kaedehara_Kazuha_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Kaedehara_Kazuha_Ex.noUiSlider.get()[0])[Kaedehara_Kazuha_Ex_Min_Volume]);
    var Kaedehara_Kazuha_Ex_Max_Volume = "L1toL" + Kaedehara_Kazuha_Ex.noUiSlider.get()[1];
    var Kaedehara_Kazuha_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Kaedehara_Kazuha_Ex.noUiSlider.get()[1])[Kaedehara_Kazuha_Ex_Max_Volume]);
    var Kaedehara_Kazuha_Ex_Volume = Kaedehara_Kazuha_Ex_1toMax_Volume - Kaedehara_Kazuha_Ex_1toMin_Volume
    var Kaedehara_Kazuha_Ex_Book_Volume = Kaedehara_Kazuha_Ex_Volume / 1000
    var Kaedehara_Kazuha_Ex_Mora_Volume = Kaedehara_Kazuha_Ex_Volume * 0.2
    document.getElementById('Kaedehara_Kazuha_Ex_Volume').innerHTML = Kaedehara_Kazuha_Ex_Volume.toLocaleString();
    document.getElementById('Kaedehara_Kazuha_Ex_Book_Volume').innerHTML = Kaedehara_Kazuha_Ex_Book_Volume.toLocaleString();
    document.getElementById('Kaedehara_Kazuha_Ex_Mora_Volume').innerHTML = Kaedehara_Kazuha_Ex_Mora_Volume.toLocaleString();
  });
  Kaedehara_Kazuha_Pr.noUiSlider.on('update', function (values, handle) {
    var Kaedehara_Kazuha_Pr_Min_Volume = "L1toL" + Kaedehara_Kazuha_Pr.noUiSlider.get()[0];
    var Kaedehara_Kazuha_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[0])["P1_" + [Kaedehara_Kazuha_Pr_Min_Volume]]);
    var Kaedehara_Kazuha_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[0])["P2_" + [Kaedehara_Kazuha_Pr_Min_Volume]]);
    var Kaedehara_Kazuha_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[0])["P3_" + [Kaedehara_Kazuha_Pr_Min_Volume]]);
    var Kaedehara_Kazuha_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[0])["P4_" + [Kaedehara_Kazuha_Pr_Min_Volume]]);
    var Kaedehara_Kazuha_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[0])["P5_" + [Kaedehara_Kazuha_Pr_Min_Volume]]);
    var Kaedehara_Kazuha_Pr_Max_Volume = "L1toL" + Kaedehara_Kazuha_Pr.noUiSlider.get()[1];
    var Kaedehara_Kazuha_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[1])["P1_" + [Kaedehara_Kazuha_Pr_Max_Volume]]);
    var Kaedehara_Kazuha_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[1])["P2_" + [Kaedehara_Kazuha_Pr_Max_Volume]]);
    var Kaedehara_Kazuha_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[1])["P3_" + [Kaedehara_Kazuha_Pr_Max_Volume]]);
    var Kaedehara_Kazuha_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[1])["P4_" + [Kaedehara_Kazuha_Pr_Max_Volume]]);
    var Kaedehara_Kazuha_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaedehara_Kazuha_Pr.noUiSlider.get()[1])["P5_" + [Kaedehara_Kazuha_Pr_Max_Volume]]);
    var Kaedehara_Kazuha_Pr_P1 = Kaedehara_Kazuha_Pr_P1_1toMax_Volume - Kaedehara_Kazuha_Pr_P1_1toMin_Volume
    var Kaedehara_Kazuha_Pr_P2 = Kaedehara_Kazuha_Pr_P2_1toMax_Volume - Kaedehara_Kazuha_Pr_P2_1toMin_Volume
    var Kaedehara_Kazuha_Pr_P3 = Kaedehara_Kazuha_Pr_P3_1toMax_Volume - Kaedehara_Kazuha_Pr_P3_1toMin_Volume
    var Kaedehara_Kazuha_Pr_P4 = Kaedehara_Kazuha_Pr_P4_1toMax_Volume - Kaedehara_Kazuha_Pr_P4_1toMin_Volume
    var Kaedehara_Kazuha_Pr_P5 = Kaedehara_Kazuha_Pr_P5_1toMax_Volume - Kaedehara_Kazuha_Pr_P5_1toMin_Volume
    document.getElementById('Kaedehara_Kazuha_Pr_P1_Volume').innerHTML = Kaedehara_Kazuha_Pr_P1;
    document.getElementById('Kaedehara_Kazuha_Pr_P2_Volume').innerHTML = Kaedehara_Kazuha_Pr_P2;
    document.getElementById('Kaedehara_Kazuha_Pr_P3_Volume').innerHTML = Kaedehara_Kazuha_Pr_P3;
    document.getElementById('Kaedehara_Kazuha_Pr_P4_Volume').innerHTML = Kaedehara_Kazuha_Pr_P4;
    document.getElementById('Kaedehara_Kazuha_Pr_P5_Volume').innerHTML = Kaedehara_Kazuha_Pr_P5.toLocaleString();
  });
  Kaedehara_Kazuha_T1.noUiSlider.on('update', function (values, handle) {
    var Kaedehara_Kazuha_T1_Min_Volume = "L1toL" + Kaedehara_Kazuha_T1.noUiSlider.get()[0];
    var Kaedehara_Kazuha_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[0])["T1_" + [Kaedehara_Kazuha_T1_Min_Volume]]);
    var Kaedehara_Kazuha_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[0])["T2_" + [Kaedehara_Kazuha_T1_Min_Volume]]);
    var Kaedehara_Kazuha_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[0])["T3_" + [Kaedehara_Kazuha_T1_Min_Volume]]);
    var Kaedehara_Kazuha_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[0])["T4_" + [Kaedehara_Kazuha_T1_Min_Volume]]);
    var Kaedehara_Kazuha_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[0])["T5_" + [Kaedehara_Kazuha_T1_Min_Volume]]);
    var Kaedehara_Kazuha_T1_Max_Volume = "L1toL" + Kaedehara_Kazuha_T1.noUiSlider.get()[1];
    var Kaedehara_Kazuha_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[1])["T1_" + [Kaedehara_Kazuha_T1_Max_Volume]]);
    var Kaedehara_Kazuha_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[1])["T2_" + [Kaedehara_Kazuha_T1_Max_Volume]]);
    var Kaedehara_Kazuha_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[1])["T3_" + [Kaedehara_Kazuha_T1_Max_Volume]]);
    var Kaedehara_Kazuha_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[1])["T4_" + [Kaedehara_Kazuha_T1_Max_Volume]]);
    var Kaedehara_Kazuha_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T1.noUiSlider.get()[1])["T5_" + [Kaedehara_Kazuha_T1_Max_Volume]]);
    var Kaedehara_Kazuha_T1_T1 = Kaedehara_Kazuha_T1_T1_1toMax_Volume - Kaedehara_Kazuha_T1_T1_1toMin_Volume
    var Kaedehara_Kazuha_T1_T2 = Kaedehara_Kazuha_T1_T2_1toMax_Volume - Kaedehara_Kazuha_T1_T2_1toMin_Volume
    var Kaedehara_Kazuha_T1_T3 = Kaedehara_Kazuha_T1_T3_1toMax_Volume - Kaedehara_Kazuha_T1_T3_1toMin_Volume
    var Kaedehara_Kazuha_T1_T4 = Kaedehara_Kazuha_T1_T4_1toMax_Volume - Kaedehara_Kazuha_T1_T4_1toMin_Volume
    var Kaedehara_Kazuha_T1_T5 = Kaedehara_Kazuha_T1_T5_1toMax_Volume - Kaedehara_Kazuha_T1_T5_1toMin_Volume
    document.getElementById('Kaedehara_Kazuha_T1_T1_Volume').innerHTML = Kaedehara_Kazuha_T1_T1;
    document.getElementById('Kaedehara_Kazuha_T1_T2_Volume').innerHTML = Kaedehara_Kazuha_T1_T2;
    document.getElementById('Kaedehara_Kazuha_T1_T3_Volume').innerHTML = Kaedehara_Kazuha_T1_T3;
    document.getElementById('Kaedehara_Kazuha_T1_T4_Volume').innerHTML = Kaedehara_Kazuha_T1_T4;
    document.getElementById('Kaedehara_Kazuha_T1_T5_Volume').innerHTML = Kaedehara_Kazuha_T1_T5.toLocaleString();
  });
  Kaedehara_Kazuha_T2.noUiSlider.on('update', function (values, handle) {
    var Kaedehara_Kazuha_T2_Min_Volume = "L1toL" + Kaedehara_Kazuha_T2.noUiSlider.get()[0];
    var Kaedehara_Kazuha_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[0])["T1_" + [Kaedehara_Kazuha_T2_Min_Volume]]);
    var Kaedehara_Kazuha_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[0])["T2_" + [Kaedehara_Kazuha_T2_Min_Volume]]);
    var Kaedehara_Kazuha_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[0])["T3_" + [Kaedehara_Kazuha_T2_Min_Volume]]);
    var Kaedehara_Kazuha_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[0])["T4_" + [Kaedehara_Kazuha_T2_Min_Volume]]);
    var Kaedehara_Kazuha_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[0])["T5_" + [Kaedehara_Kazuha_T2_Min_Volume]]);
    var Kaedehara_Kazuha_T2_Max_Volume = "L1toL" + Kaedehara_Kazuha_T2.noUiSlider.get()[1];
    var Kaedehara_Kazuha_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[1])["T1_" + [Kaedehara_Kazuha_T2_Max_Volume]]);
    var Kaedehara_Kazuha_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[1])["T2_" + [Kaedehara_Kazuha_T2_Max_Volume]]);
    var Kaedehara_Kazuha_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[1])["T3_" + [Kaedehara_Kazuha_T2_Max_Volume]]);
    var Kaedehara_Kazuha_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[1])["T4_" + [Kaedehara_Kazuha_T2_Max_Volume]]);
    var Kaedehara_Kazuha_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T2.noUiSlider.get()[1])["T5_" + [Kaedehara_Kazuha_T2_Max_Volume]]);
    var Kaedehara_Kazuha_T2_T1 = Kaedehara_Kazuha_T2_T1_1toMax_Volume - Kaedehara_Kazuha_T2_T1_1toMin_Volume
    var Kaedehara_Kazuha_T2_T2 = Kaedehara_Kazuha_T2_T2_1toMax_Volume - Kaedehara_Kazuha_T2_T2_1toMin_Volume
    var Kaedehara_Kazuha_T2_T3 = Kaedehara_Kazuha_T2_T3_1toMax_Volume - Kaedehara_Kazuha_T2_T3_1toMin_Volume
    var Kaedehara_Kazuha_T2_T4 = Kaedehara_Kazuha_T2_T4_1toMax_Volume - Kaedehara_Kazuha_T2_T4_1toMin_Volume
    var Kaedehara_Kazuha_T2_T5 = Kaedehara_Kazuha_T2_T5_1toMax_Volume - Kaedehara_Kazuha_T2_T5_1toMin_Volume
    document.getElementById('Kaedehara_Kazuha_T2_T1_Volume').innerHTML = Kaedehara_Kazuha_T2_T1;
    document.getElementById('Kaedehara_Kazuha_T2_T2_Volume').innerHTML = Kaedehara_Kazuha_T2_T2;
    document.getElementById('Kaedehara_Kazuha_T2_T3_Volume').innerHTML = Kaedehara_Kazuha_T2_T3;
    document.getElementById('Kaedehara_Kazuha_T2_T4_Volume').innerHTML = Kaedehara_Kazuha_T2_T4;
    document.getElementById('Kaedehara_Kazuha_T2_T5_Volume').innerHTML = Kaedehara_Kazuha_T2_T5.toLocaleString();
  });
  Kaedehara_Kazuha_T3.noUiSlider.on('update', function (values, handle) {
    var Kaedehara_Kazuha_T3_Min_Volume = "L1toL" + Kaedehara_Kazuha_T3.noUiSlider.get()[0];
    var Kaedehara_Kazuha_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[0])["T1_" + [Kaedehara_Kazuha_T3_Min_Volume]]);
    var Kaedehara_Kazuha_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[0])["T2_" + [Kaedehara_Kazuha_T3_Min_Volume]]);
    var Kaedehara_Kazuha_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[0])["T3_" + [Kaedehara_Kazuha_T3_Min_Volume]]);
    var Kaedehara_Kazuha_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[0])["T4_" + [Kaedehara_Kazuha_T3_Min_Volume]]);
    var Kaedehara_Kazuha_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[0])["T5_" + [Kaedehara_Kazuha_T3_Min_Volume]]);
    var Kaedehara_Kazuha_T3_Max_Volume = "L1toL" + Kaedehara_Kazuha_T3.noUiSlider.get()[1];
    var Kaedehara_Kazuha_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[1])["T1_" + [Kaedehara_Kazuha_T3_Max_Volume]]);
    var Kaedehara_Kazuha_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[1])["T2_" + [Kaedehara_Kazuha_T3_Max_Volume]]);
    var Kaedehara_Kazuha_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[1])["T3_" + [Kaedehara_Kazuha_T3_Max_Volume]]);
    var Kaedehara_Kazuha_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[1])["T4_" + [Kaedehara_Kazuha_T3_Max_Volume]]);
    var Kaedehara_Kazuha_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaedehara_Kazuha_T3.noUiSlider.get()[1])["T5_" + [Kaedehara_Kazuha_T3_Max_Volume]]);
    var Kaedehara_Kazuha_T3_T1 = Kaedehara_Kazuha_T3_T1_1toMax_Volume - Kaedehara_Kazuha_T3_T1_1toMin_Volume
    var Kaedehara_Kazuha_T3_T2 = Kaedehara_Kazuha_T3_T2_1toMax_Volume - Kaedehara_Kazuha_T3_T2_1toMin_Volume
    var Kaedehara_Kazuha_T3_T3 = Kaedehara_Kazuha_T3_T3_1toMax_Volume - Kaedehara_Kazuha_T3_T3_1toMin_Volume
    var Kaedehara_Kazuha_T3_T4 = Kaedehara_Kazuha_T3_T4_1toMax_Volume - Kaedehara_Kazuha_T3_T4_1toMin_Volume
    var Kaedehara_Kazuha_T3_T5 = Kaedehara_Kazuha_T3_T5_1toMax_Volume - Kaedehara_Kazuha_T3_T5_1toMin_Volume
    document.getElementById('Kaedehara_Kazuha_T3_T1_Volume').innerHTML = Kaedehara_Kazuha_T3_T1;
    document.getElementById('Kaedehara_Kazuha_T3_T2_Volume').innerHTML = Kaedehara_Kazuha_T3_T2;
    document.getElementById('Kaedehara_Kazuha_T3_T3_Volume').innerHTML = Kaedehara_Kazuha_T3_T3;
    document.getElementById('Kaedehara_Kazuha_T3_T4_Volume').innerHTML = Kaedehara_Kazuha_T3_T4;
    document.getElementById('Kaedehara_Kazuha_T3_T5_Volume').innerHTML = Kaedehara_Kazuha_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Kaedehara_Kazuha  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Eula  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Eula_Ex = document.getElementById('Eula_Ex');
noUiSlider.create(Eula_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Eula_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Eula_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Eula_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Eula_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function EulaLoad() {
  Eula_Ex.noUiSlider.on('update', function (values, handle) {
    var Eula_Ex_Min_Volume = "L1toL" + Eula_Ex.noUiSlider.get()[0];
    var Eula_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Eula_Ex.noUiSlider.get()[0])[Eula_Ex_Min_Volume]);
    var Eula_Ex_Max_Volume = "L1toL" + Eula_Ex.noUiSlider.get()[1];
    var Eula_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Eula_Ex.noUiSlider.get()[1])[Eula_Ex_Max_Volume]);
    var Eula_Ex_Volume = Eula_Ex_1toMax_Volume - Eula_Ex_1toMin_Volume
    var Eula_Ex_Book_Volume = Eula_Ex_Volume / 1000
    var Eula_Ex_Mora_Volume = Eula_Ex_Volume * 0.2
    document.getElementById('Eula_Ex_Volume').innerHTML = Eula_Ex_Volume.toLocaleString();
    document.getElementById('Eula_Ex_Book_Volume').innerHTML = Eula_Ex_Book_Volume.toLocaleString();
    document.getElementById('Eula_Ex_Mora_Volume').innerHTML = Eula_Ex_Mora_Volume.toLocaleString();
  });
  Eula_Pr.noUiSlider.on('update', function (values, handle) {
    var Eula_Pr_Min_Volume = "L1toL" + Eula_Pr.noUiSlider.get()[0];
    var Eula_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[0])["P1_" + [Eula_Pr_Min_Volume]]);
    var Eula_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[0])["P2_" + [Eula_Pr_Min_Volume]]);
    var Eula_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[0])["P3_" + [Eula_Pr_Min_Volume]]);
    var Eula_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[0])["P4_" + [Eula_Pr_Min_Volume]]);
    var Eula_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[0])["P5_" + [Eula_Pr_Min_Volume]]);
    var Eula_Pr_Max_Volume = "L1toL" + Eula_Pr.noUiSlider.get()[1];
    var Eula_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[1])["P1_" + [Eula_Pr_Max_Volume]]);
    var Eula_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[1])["P2_" + [Eula_Pr_Max_Volume]]);
    var Eula_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[1])["P3_" + [Eula_Pr_Max_Volume]]);
    var Eula_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[1])["P4_" + [Eula_Pr_Max_Volume]]);
    var Eula_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Eula_Pr.noUiSlider.get()[1])["P5_" + [Eula_Pr_Max_Volume]]);
    var Eula_Pr_P1 = Eula_Pr_P1_1toMax_Volume - Eula_Pr_P1_1toMin_Volume
    var Eula_Pr_P2 = Eula_Pr_P2_1toMax_Volume - Eula_Pr_P2_1toMin_Volume
    var Eula_Pr_P3 = Eula_Pr_P3_1toMax_Volume - Eula_Pr_P3_1toMin_Volume
    var Eula_Pr_P4 = Eula_Pr_P4_1toMax_Volume - Eula_Pr_P4_1toMin_Volume
    var Eula_Pr_P5 = Eula_Pr_P5_1toMax_Volume - Eula_Pr_P5_1toMin_Volume
    document.getElementById('Eula_Pr_P1_Volume').innerHTML = Eula_Pr_P1;
    document.getElementById('Eula_Pr_P2_Volume').innerHTML = Eula_Pr_P2;
    document.getElementById('Eula_Pr_P3_Volume').innerHTML = Eula_Pr_P3;
    document.getElementById('Eula_Pr_P4_Volume').innerHTML = Eula_Pr_P4;
    document.getElementById('Eula_Pr_P5_Volume').innerHTML = Eula_Pr_P5.toLocaleString();
  });
  Eula_T1.noUiSlider.on('update', function (values, handle) {
    var Eula_T1_Min_Volume = "L1toL" + Eula_T1.noUiSlider.get()[0];
    var Eula_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[0])["T1_" + [Eula_T1_Min_Volume]]);
    var Eula_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[0])["T2_" + [Eula_T1_Min_Volume]]);
    var Eula_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[0])["T3_" + [Eula_T1_Min_Volume]]);
    var Eula_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[0])["T4_" + [Eula_T1_Min_Volume]]);
    var Eula_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[0])["T5_" + [Eula_T1_Min_Volume]]);
    var Eula_T1_Max_Volume = "L1toL" + Eula_T1.noUiSlider.get()[1];
    var Eula_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[1])["T1_" + [Eula_T1_Max_Volume]]);
    var Eula_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[1])["T2_" + [Eula_T1_Max_Volume]]);
    var Eula_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[1])["T3_" + [Eula_T1_Max_Volume]]);
    var Eula_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[1])["T4_" + [Eula_T1_Max_Volume]]);
    var Eula_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T1.noUiSlider.get()[1])["T5_" + [Eula_T1_Max_Volume]]);
    var Eula_T1_T1 = Eula_T1_T1_1toMax_Volume - Eula_T1_T1_1toMin_Volume
    var Eula_T1_T2 = Eula_T1_T2_1toMax_Volume - Eula_T1_T2_1toMin_Volume
    var Eula_T1_T3 = Eula_T1_T3_1toMax_Volume - Eula_T1_T3_1toMin_Volume
    var Eula_T1_T4 = Eula_T1_T4_1toMax_Volume - Eula_T1_T4_1toMin_Volume
    var Eula_T1_T5 = Eula_T1_T5_1toMax_Volume - Eula_T1_T5_1toMin_Volume
    document.getElementById('Eula_T1_T1_Volume').innerHTML = Eula_T1_T1;
    document.getElementById('Eula_T1_T2_Volume').innerHTML = Eula_T1_T2;
    document.getElementById('Eula_T1_T3_Volume').innerHTML = Eula_T1_T3;
    document.getElementById('Eula_T1_T4_Volume').innerHTML = Eula_T1_T4;
    document.getElementById('Eula_T1_T5_Volume').innerHTML = Eula_T1_T5.toLocaleString();
  });
  Eula_T2.noUiSlider.on('update', function (values, handle) {
    var Eula_T2_Min_Volume = "L1toL" + Eula_T2.noUiSlider.get()[0];
    var Eula_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[0])["T1_" + [Eula_T2_Min_Volume]]);
    var Eula_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[0])["T2_" + [Eula_T2_Min_Volume]]);
    var Eula_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[0])["T3_" + [Eula_T2_Min_Volume]]);
    var Eula_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[0])["T4_" + [Eula_T2_Min_Volume]]);
    var Eula_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[0])["T5_" + [Eula_T2_Min_Volume]]);
    var Eula_T2_Max_Volume = "L1toL" + Eula_T2.noUiSlider.get()[1];
    var Eula_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[1])["T1_" + [Eula_T2_Max_Volume]]);
    var Eula_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[1])["T2_" + [Eula_T2_Max_Volume]]);
    var Eula_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[1])["T3_" + [Eula_T2_Max_Volume]]);
    var Eula_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[1])["T4_" + [Eula_T2_Max_Volume]]);
    var Eula_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T2.noUiSlider.get()[1])["T5_" + [Eula_T2_Max_Volume]]);
    var Eula_T2_T1 = Eula_T2_T1_1toMax_Volume - Eula_T2_T1_1toMin_Volume
    var Eula_T2_T2 = Eula_T2_T2_1toMax_Volume - Eula_T2_T2_1toMin_Volume
    var Eula_T2_T3 = Eula_T2_T3_1toMax_Volume - Eula_T2_T3_1toMin_Volume
    var Eula_T2_T4 = Eula_T2_T4_1toMax_Volume - Eula_T2_T4_1toMin_Volume
    var Eula_T2_T5 = Eula_T2_T5_1toMax_Volume - Eula_T2_T5_1toMin_Volume
    document.getElementById('Eula_T2_T1_Volume').innerHTML = Eula_T2_T1;
    document.getElementById('Eula_T2_T2_Volume').innerHTML = Eula_T2_T2;
    document.getElementById('Eula_T2_T3_Volume').innerHTML = Eula_T2_T3;
    document.getElementById('Eula_T2_T4_Volume').innerHTML = Eula_T2_T4;
    document.getElementById('Eula_T2_T5_Volume').innerHTML = Eula_T2_T5.toLocaleString();
  });
  Eula_T3.noUiSlider.on('update', function (values, handle) {
    var Eula_T3_Min_Volume = "L1toL" + Eula_T3.noUiSlider.get()[0];
    var Eula_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[0])["T1_" + [Eula_T3_Min_Volume]]);
    var Eula_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[0])["T2_" + [Eula_T3_Min_Volume]]);
    var Eula_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[0])["T3_" + [Eula_T3_Min_Volume]]);
    var Eula_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[0])["T4_" + [Eula_T3_Min_Volume]]);
    var Eula_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[0])["T5_" + [Eula_T3_Min_Volume]]);
    var Eula_T3_Max_Volume = "L1toL" + Eula_T3.noUiSlider.get()[1];
    var Eula_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[1])["T1_" + [Eula_T3_Max_Volume]]);
    var Eula_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[1])["T2_" + [Eula_T3_Max_Volume]]);
    var Eula_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[1])["T3_" + [Eula_T3_Max_Volume]]);
    var Eula_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[1])["T4_" + [Eula_T3_Max_Volume]]);
    var Eula_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Eula_T3.noUiSlider.get()[1])["T5_" + [Eula_T3_Max_Volume]]);
    var Eula_T3_T1 = Eula_T3_T1_1toMax_Volume - Eula_T3_T1_1toMin_Volume
    var Eula_T3_T2 = Eula_T3_T2_1toMax_Volume - Eula_T3_T2_1toMin_Volume
    var Eula_T3_T3 = Eula_T3_T3_1toMax_Volume - Eula_T3_T3_1toMin_Volume
    var Eula_T3_T4 = Eula_T3_T4_1toMax_Volume - Eula_T3_T4_1toMin_Volume
    var Eula_T3_T5 = Eula_T3_T5_1toMax_Volume - Eula_T3_T5_1toMin_Volume
    document.getElementById('Eula_T3_T1_Volume').innerHTML = Eula_T3_T1;
    document.getElementById('Eula_T3_T2_Volume').innerHTML = Eula_T3_T2;
    document.getElementById('Eula_T3_T3_Volume').innerHTML = Eula_T3_T3;
    document.getElementById('Eula_T3_T4_Volume').innerHTML = Eula_T3_T4;
    document.getElementById('Eula_T3_T5_Volume').innerHTML = Eula_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Eula  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Yanfei  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Yanfei_Ex = document.getElementById('Yanfei_Ex');
noUiSlider.create(Yanfei_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Yanfei_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Yanfei_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Yanfei_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Yanfei_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function YanfeiLoad() {
  Yanfei_Ex.noUiSlider.on('update', function (values, handle) {
    var Yanfei_Ex_Min_Volume = "L1toL" + Yanfei_Ex.noUiSlider.get()[0];
    var Yanfei_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Yanfei_Ex.noUiSlider.get()[0])[Yanfei_Ex_Min_Volume]);
    var Yanfei_Ex_Max_Volume = "L1toL" + Yanfei_Ex.noUiSlider.get()[1];
    var Yanfei_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Yanfei_Ex.noUiSlider.get()[1])[Yanfei_Ex_Max_Volume]);
    var Yanfei_Ex_Volume = Yanfei_Ex_1toMax_Volume - Yanfei_Ex_1toMin_Volume
    var Yanfei_Ex_Book_Volume = Yanfei_Ex_Volume / 1000
    var Yanfei_Ex_Mora_Volume = Yanfei_Ex_Volume * 0.2
    document.getElementById('Yanfei_Ex_Volume').innerHTML = Yanfei_Ex_Volume.toLocaleString();
    document.getElementById('Yanfei_Ex_Book_Volume').innerHTML = Yanfei_Ex_Book_Volume.toLocaleString();
    document.getElementById('Yanfei_Ex_Mora_Volume').innerHTML = Yanfei_Ex_Mora_Volume.toLocaleString();
  });
  Yanfei_Pr.noUiSlider.on('update', function (values, handle) {
    var Yanfei_Pr_Min_Volume = "L1toL" + Yanfei_Pr.noUiSlider.get()[0];
    var Yanfei_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[0])["P1_" + [Yanfei_Pr_Min_Volume]]);
    var Yanfei_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[0])["P2_" + [Yanfei_Pr_Min_Volume]]);
    var Yanfei_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[0])["P3_" + [Yanfei_Pr_Min_Volume]]);
    var Yanfei_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[0])["P4_" + [Yanfei_Pr_Min_Volume]]);
    var Yanfei_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[0])["P5_" + [Yanfei_Pr_Min_Volume]]);
    var Yanfei_Pr_Max_Volume = "L1toL" + Yanfei_Pr.noUiSlider.get()[1];
    var Yanfei_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[1])["P1_" + [Yanfei_Pr_Max_Volume]]);
    var Yanfei_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[1])["P2_" + [Yanfei_Pr_Max_Volume]]);
    var Yanfei_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[1])["P3_" + [Yanfei_Pr_Max_Volume]]);
    var Yanfei_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[1])["P4_" + [Yanfei_Pr_Max_Volume]]);
    var Yanfei_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Yanfei_Pr.noUiSlider.get()[1])["P5_" + [Yanfei_Pr_Max_Volume]]);
    var Yanfei_Pr_P1 = Yanfei_Pr_P1_1toMax_Volume - Yanfei_Pr_P1_1toMin_Volume
    var Yanfei_Pr_P2 = Yanfei_Pr_P2_1toMax_Volume - Yanfei_Pr_P2_1toMin_Volume
    var Yanfei_Pr_P3 = Yanfei_Pr_P3_1toMax_Volume - Yanfei_Pr_P3_1toMin_Volume
    var Yanfei_Pr_P4 = Yanfei_Pr_P4_1toMax_Volume - Yanfei_Pr_P4_1toMin_Volume
    var Yanfei_Pr_P5 = Yanfei_Pr_P5_1toMax_Volume - Yanfei_Pr_P5_1toMin_Volume
    document.getElementById('Yanfei_Pr_P1_Volume').innerHTML = Yanfei_Pr_P1;
    document.getElementById('Yanfei_Pr_P2_Volume').innerHTML = Yanfei_Pr_P2;
    document.getElementById('Yanfei_Pr_P3_Volume').innerHTML = Yanfei_Pr_P3;
    document.getElementById('Yanfei_Pr_P4_Volume').innerHTML = Yanfei_Pr_P4;
    document.getElementById('Yanfei_Pr_P5_Volume').innerHTML = Yanfei_Pr_P5.toLocaleString();
  });
  Yanfei_T1.noUiSlider.on('update', function (values, handle) {
    var Yanfei_T1_Min_Volume = "L1toL" + Yanfei_T1.noUiSlider.get()[0];
    var Yanfei_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[0])["T1_" + [Yanfei_T1_Min_Volume]]);
    var Yanfei_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[0])["T2_" + [Yanfei_T1_Min_Volume]]);
    var Yanfei_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[0])["T3_" + [Yanfei_T1_Min_Volume]]);
    var Yanfei_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[0])["T4_" + [Yanfei_T1_Min_Volume]]);
    var Yanfei_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[0])["T5_" + [Yanfei_T1_Min_Volume]]);
    var Yanfei_T1_Max_Volume = "L1toL" + Yanfei_T1.noUiSlider.get()[1];
    var Yanfei_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[1])["T1_" + [Yanfei_T1_Max_Volume]]);
    var Yanfei_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[1])["T2_" + [Yanfei_T1_Max_Volume]]);
    var Yanfei_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[1])["T3_" + [Yanfei_T1_Max_Volume]]);
    var Yanfei_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[1])["T4_" + [Yanfei_T1_Max_Volume]]);
    var Yanfei_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T1.noUiSlider.get()[1])["T5_" + [Yanfei_T1_Max_Volume]]);
    var Yanfei_T1_T1 = Yanfei_T1_T1_1toMax_Volume - Yanfei_T1_T1_1toMin_Volume
    var Yanfei_T1_T2 = Yanfei_T1_T2_1toMax_Volume - Yanfei_T1_T2_1toMin_Volume
    var Yanfei_T1_T3 = Yanfei_T1_T3_1toMax_Volume - Yanfei_T1_T3_1toMin_Volume
    var Yanfei_T1_T4 = Yanfei_T1_T4_1toMax_Volume - Yanfei_T1_T4_1toMin_Volume
    var Yanfei_T1_T5 = Yanfei_T1_T5_1toMax_Volume - Yanfei_T1_T5_1toMin_Volume
    document.getElementById('Yanfei_T1_T1_Volume').innerHTML = Yanfei_T1_T1;
    document.getElementById('Yanfei_T1_T2_Volume').innerHTML = Yanfei_T1_T2;
    document.getElementById('Yanfei_T1_T3_Volume').innerHTML = Yanfei_T1_T3;
    document.getElementById('Yanfei_T1_T4_Volume').innerHTML = Yanfei_T1_T4;
    document.getElementById('Yanfei_T1_T5_Volume').innerHTML = Yanfei_T1_T5.toLocaleString();
  });
  Yanfei_T2.noUiSlider.on('update', function (values, handle) {
    var Yanfei_T2_Min_Volume = "L1toL" + Yanfei_T2.noUiSlider.get()[0];
    var Yanfei_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[0])["T1_" + [Yanfei_T2_Min_Volume]]);
    var Yanfei_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[0])["T2_" + [Yanfei_T2_Min_Volume]]);
    var Yanfei_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[0])["T3_" + [Yanfei_T2_Min_Volume]]);
    var Yanfei_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[0])["T4_" + [Yanfei_T2_Min_Volume]]);
    var Yanfei_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[0])["T5_" + [Yanfei_T2_Min_Volume]]);
    var Yanfei_T2_Max_Volume = "L1toL" + Yanfei_T2.noUiSlider.get()[1];
    var Yanfei_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[1])["T1_" + [Yanfei_T2_Max_Volume]]);
    var Yanfei_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[1])["T2_" + [Yanfei_T2_Max_Volume]]);
    var Yanfei_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[1])["T3_" + [Yanfei_T2_Max_Volume]]);
    var Yanfei_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[1])["T4_" + [Yanfei_T2_Max_Volume]]);
    var Yanfei_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T2.noUiSlider.get()[1])["T5_" + [Yanfei_T2_Max_Volume]]);
    var Yanfei_T2_T1 = Yanfei_T2_T1_1toMax_Volume - Yanfei_T2_T1_1toMin_Volume
    var Yanfei_T2_T2 = Yanfei_T2_T2_1toMax_Volume - Yanfei_T2_T2_1toMin_Volume
    var Yanfei_T2_T3 = Yanfei_T2_T3_1toMax_Volume - Yanfei_T2_T3_1toMin_Volume
    var Yanfei_T2_T4 = Yanfei_T2_T4_1toMax_Volume - Yanfei_T2_T4_1toMin_Volume
    var Yanfei_T2_T5 = Yanfei_T2_T5_1toMax_Volume - Yanfei_T2_T5_1toMin_Volume
    document.getElementById('Yanfei_T2_T1_Volume').innerHTML = Yanfei_T2_T1;
    document.getElementById('Yanfei_T2_T2_Volume').innerHTML = Yanfei_T2_T2;
    document.getElementById('Yanfei_T2_T3_Volume').innerHTML = Yanfei_T2_T3;
    document.getElementById('Yanfei_T2_T4_Volume').innerHTML = Yanfei_T2_T4;
    document.getElementById('Yanfei_T2_T5_Volume').innerHTML = Yanfei_T2_T5.toLocaleString();
  });
  Yanfei_T3.noUiSlider.on('update', function (values, handle) {
    var Yanfei_T3_Min_Volume = "L1toL" + Yanfei_T3.noUiSlider.get()[0];
    var Yanfei_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[0])["T1_" + [Yanfei_T3_Min_Volume]]);
    var Yanfei_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[0])["T2_" + [Yanfei_T3_Min_Volume]]);
    var Yanfei_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[0])["T3_" + [Yanfei_T3_Min_Volume]]);
    var Yanfei_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[0])["T4_" + [Yanfei_T3_Min_Volume]]);
    var Yanfei_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[0])["T5_" + [Yanfei_T3_Min_Volume]]);
    var Yanfei_T3_Max_Volume = "L1toL" + Yanfei_T3.noUiSlider.get()[1];
    var Yanfei_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[1])["T1_" + [Yanfei_T3_Max_Volume]]);
    var Yanfei_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[1])["T2_" + [Yanfei_T3_Max_Volume]]);
    var Yanfei_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[1])["T3_" + [Yanfei_T3_Max_Volume]]);
    var Yanfei_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[1])["T4_" + [Yanfei_T3_Max_Volume]]);
    var Yanfei_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Yanfei_T3.noUiSlider.get()[1])["T5_" + [Yanfei_T3_Max_Volume]]);
    var Yanfei_T3_T1 = Yanfei_T3_T1_1toMax_Volume - Yanfei_T3_T1_1toMin_Volume
    var Yanfei_T3_T2 = Yanfei_T3_T2_1toMax_Volume - Yanfei_T3_T2_1toMin_Volume
    var Yanfei_T3_T3 = Yanfei_T3_T3_1toMax_Volume - Yanfei_T3_T3_1toMin_Volume
    var Yanfei_T3_T4 = Yanfei_T3_T4_1toMax_Volume - Yanfei_T3_T4_1toMin_Volume
    var Yanfei_T3_T5 = Yanfei_T3_T5_1toMax_Volume - Yanfei_T3_T5_1toMin_Volume
    document.getElementById('Yanfei_T3_T1_Volume').innerHTML = Yanfei_T3_T1;
    document.getElementById('Yanfei_T3_T2_Volume').innerHTML = Yanfei_T3_T2;
    document.getElementById('Yanfei_T3_T3_Volume').innerHTML = Yanfei_T3_T3;
    document.getElementById('Yanfei_T3_T4_Volume').innerHTML = Yanfei_T3_T4;
    document.getElementById('Yanfei_T3_T5_Volume').innerHTML = Yanfei_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Yanfei  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Rosaria  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Rosaria_Ex = document.getElementById('Rosaria_Ex');
noUiSlider.create(Rosaria_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Rosaria_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Rosaria_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Rosaria_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Rosaria_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function RosariaLoad() {
  Rosaria_Ex.noUiSlider.on('update', function (values, handle) {
    var Rosaria_Ex_Min_Volume = "L1toL" + Rosaria_Ex.noUiSlider.get()[0];
    var Rosaria_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Rosaria_Ex.noUiSlider.get()[0])[Rosaria_Ex_Min_Volume]);
    var Rosaria_Ex_Max_Volume = "L1toL" + Rosaria_Ex.noUiSlider.get()[1];
    var Rosaria_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Rosaria_Ex.noUiSlider.get()[1])[Rosaria_Ex_Max_Volume]);
    var Rosaria_Ex_Volume = Rosaria_Ex_1toMax_Volume - Rosaria_Ex_1toMin_Volume
    var Rosaria_Ex_Book_Volume = Rosaria_Ex_Volume / 1000
    var Rosaria_Ex_Mora_Volume = Rosaria_Ex_Volume * 0.2
    document.getElementById('Rosaria_Ex_Volume').innerHTML = Rosaria_Ex_Volume.toLocaleString();
    document.getElementById('Rosaria_Ex_Book_Volume').innerHTML = Rosaria_Ex_Book_Volume.toLocaleString();
    document.getElementById('Rosaria_Ex_Mora_Volume').innerHTML = Rosaria_Ex_Mora_Volume.toLocaleString();
  });
  Rosaria_Pr.noUiSlider.on('update', function (values, handle) {
    var Rosaria_Pr_Min_Volume = "L1toL" + Rosaria_Pr.noUiSlider.get()[0];
    var Rosaria_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[0])["P1_" + [Rosaria_Pr_Min_Volume]]);
    var Rosaria_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[0])["P2_" + [Rosaria_Pr_Min_Volume]]);
    var Rosaria_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[0])["P3_" + [Rosaria_Pr_Min_Volume]]);
    var Rosaria_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[0])["P4_" + [Rosaria_Pr_Min_Volume]]);
    var Rosaria_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[0])["P5_" + [Rosaria_Pr_Min_Volume]]);
    var Rosaria_Pr_Max_Volume = "L1toL" + Rosaria_Pr.noUiSlider.get()[1];
    var Rosaria_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[1])["P1_" + [Rosaria_Pr_Max_Volume]]);
    var Rosaria_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[1])["P2_" + [Rosaria_Pr_Max_Volume]]);
    var Rosaria_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[1])["P3_" + [Rosaria_Pr_Max_Volume]]);
    var Rosaria_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[1])["P4_" + [Rosaria_Pr_Max_Volume]]);
    var Rosaria_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Rosaria_Pr.noUiSlider.get()[1])["P5_" + [Rosaria_Pr_Max_Volume]]);
    var Rosaria_Pr_P1 = Rosaria_Pr_P1_1toMax_Volume - Rosaria_Pr_P1_1toMin_Volume
    var Rosaria_Pr_P2 = Rosaria_Pr_P2_1toMax_Volume - Rosaria_Pr_P2_1toMin_Volume
    var Rosaria_Pr_P3 = Rosaria_Pr_P3_1toMax_Volume - Rosaria_Pr_P3_1toMin_Volume
    var Rosaria_Pr_P4 = Rosaria_Pr_P4_1toMax_Volume - Rosaria_Pr_P4_1toMin_Volume
    var Rosaria_Pr_P5 = Rosaria_Pr_P5_1toMax_Volume - Rosaria_Pr_P5_1toMin_Volume
    document.getElementById('Rosaria_Pr_P1_Volume').innerHTML = Rosaria_Pr_P1;
    document.getElementById('Rosaria_Pr_P2_Volume').innerHTML = Rosaria_Pr_P2;
    document.getElementById('Rosaria_Pr_P3_Volume').innerHTML = Rosaria_Pr_P3;
    document.getElementById('Rosaria_Pr_P4_Volume').innerHTML = Rosaria_Pr_P4;
    document.getElementById('Rosaria_Pr_P5_Volume').innerHTML = Rosaria_Pr_P5.toLocaleString();
  });
  Rosaria_T1.noUiSlider.on('update', function (values, handle) {
    var Rosaria_T1_Min_Volume = "L1toL" + Rosaria_T1.noUiSlider.get()[0];
    var Rosaria_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[0])["T1_" + [Rosaria_T1_Min_Volume]]);
    var Rosaria_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[0])["T2_" + [Rosaria_T1_Min_Volume]]);
    var Rosaria_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[0])["T3_" + [Rosaria_T1_Min_Volume]]);
    var Rosaria_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[0])["T4_" + [Rosaria_T1_Min_Volume]]);
    var Rosaria_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[0])["T5_" + [Rosaria_T1_Min_Volume]]);
    var Rosaria_T1_Max_Volume = "L1toL" + Rosaria_T1.noUiSlider.get()[1];
    var Rosaria_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[1])["T1_" + [Rosaria_T1_Max_Volume]]);
    var Rosaria_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[1])["T2_" + [Rosaria_T1_Max_Volume]]);
    var Rosaria_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[1])["T3_" + [Rosaria_T1_Max_Volume]]);
    var Rosaria_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[1])["T4_" + [Rosaria_T1_Max_Volume]]);
    var Rosaria_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T1.noUiSlider.get()[1])["T5_" + [Rosaria_T1_Max_Volume]]);
    var Rosaria_T1_T1 = Rosaria_T1_T1_1toMax_Volume - Rosaria_T1_T1_1toMin_Volume
    var Rosaria_T1_T2 = Rosaria_T1_T2_1toMax_Volume - Rosaria_T1_T2_1toMin_Volume
    var Rosaria_T1_T3 = Rosaria_T1_T3_1toMax_Volume - Rosaria_T1_T3_1toMin_Volume
    var Rosaria_T1_T4 = Rosaria_T1_T4_1toMax_Volume - Rosaria_T1_T4_1toMin_Volume
    var Rosaria_T1_T5 = Rosaria_T1_T5_1toMax_Volume - Rosaria_T1_T5_1toMin_Volume
    document.getElementById('Rosaria_T1_T1_Volume').innerHTML = Rosaria_T1_T1;
    document.getElementById('Rosaria_T1_T2_Volume').innerHTML = Rosaria_T1_T2;
    document.getElementById('Rosaria_T1_T3_Volume').innerHTML = Rosaria_T1_T3;
    document.getElementById('Rosaria_T1_T4_Volume').innerHTML = Rosaria_T1_T4;
    document.getElementById('Rosaria_T1_T5_Volume').innerHTML = Rosaria_T1_T5.toLocaleString();
  });
  Rosaria_T2.noUiSlider.on('update', function (values, handle) {
    var Rosaria_T2_Min_Volume = "L1toL" + Rosaria_T2.noUiSlider.get()[0];
    var Rosaria_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[0])["T1_" + [Rosaria_T2_Min_Volume]]);
    var Rosaria_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[0])["T2_" + [Rosaria_T2_Min_Volume]]);
    var Rosaria_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[0])["T3_" + [Rosaria_T2_Min_Volume]]);
    var Rosaria_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[0])["T4_" + [Rosaria_T2_Min_Volume]]);
    var Rosaria_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[0])["T5_" + [Rosaria_T2_Min_Volume]]);
    var Rosaria_T2_Max_Volume = "L1toL" + Rosaria_T2.noUiSlider.get()[1];
    var Rosaria_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[1])["T1_" + [Rosaria_T2_Max_Volume]]);
    var Rosaria_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[1])["T2_" + [Rosaria_T2_Max_Volume]]);
    var Rosaria_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[1])["T3_" + [Rosaria_T2_Max_Volume]]);
    var Rosaria_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[1])["T4_" + [Rosaria_T2_Max_Volume]]);
    var Rosaria_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T2.noUiSlider.get()[1])["T5_" + [Rosaria_T2_Max_Volume]]);
    var Rosaria_T2_T1 = Rosaria_T2_T1_1toMax_Volume - Rosaria_T2_T1_1toMin_Volume
    var Rosaria_T2_T2 = Rosaria_T2_T2_1toMax_Volume - Rosaria_T2_T2_1toMin_Volume
    var Rosaria_T2_T3 = Rosaria_T2_T3_1toMax_Volume - Rosaria_T2_T3_1toMin_Volume
    var Rosaria_T2_T4 = Rosaria_T2_T4_1toMax_Volume - Rosaria_T2_T4_1toMin_Volume
    var Rosaria_T2_T5 = Rosaria_T2_T5_1toMax_Volume - Rosaria_T2_T5_1toMin_Volume
    document.getElementById('Rosaria_T2_T1_Volume').innerHTML = Rosaria_T2_T1;
    document.getElementById('Rosaria_T2_T2_Volume').innerHTML = Rosaria_T2_T2;
    document.getElementById('Rosaria_T2_T3_Volume').innerHTML = Rosaria_T2_T3;
    document.getElementById('Rosaria_T2_T4_Volume').innerHTML = Rosaria_T2_T4;
    document.getElementById('Rosaria_T2_T5_Volume').innerHTML = Rosaria_T2_T5.toLocaleString();
  });
  Rosaria_T3.noUiSlider.on('update', function (values, handle) {
    var Rosaria_T3_Min_Volume = "L1toL" + Rosaria_T3.noUiSlider.get()[0];
    var Rosaria_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[0])["T1_" + [Rosaria_T3_Min_Volume]]);
    var Rosaria_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[0])["T2_" + [Rosaria_T3_Min_Volume]]);
    var Rosaria_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[0])["T3_" + [Rosaria_T3_Min_Volume]]);
    var Rosaria_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[0])["T4_" + [Rosaria_T3_Min_Volume]]);
    var Rosaria_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[0])["T5_" + [Rosaria_T3_Min_Volume]]);
    var Rosaria_T3_Max_Volume = "L1toL" + Rosaria_T3.noUiSlider.get()[1];
    var Rosaria_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[1])["T1_" + [Rosaria_T3_Max_Volume]]);
    var Rosaria_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[1])["T2_" + [Rosaria_T3_Max_Volume]]);
    var Rosaria_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[1])["T3_" + [Rosaria_T3_Max_Volume]]);
    var Rosaria_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[1])["T4_" + [Rosaria_T3_Max_Volume]]);
    var Rosaria_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Rosaria_T3.noUiSlider.get()[1])["T5_" + [Rosaria_T3_Max_Volume]]);
    var Rosaria_T3_T1 = Rosaria_T3_T1_1toMax_Volume - Rosaria_T3_T1_1toMin_Volume
    var Rosaria_T3_T2 = Rosaria_T3_T2_1toMax_Volume - Rosaria_T3_T2_1toMin_Volume
    var Rosaria_T3_T3 = Rosaria_T3_T3_1toMax_Volume - Rosaria_T3_T3_1toMin_Volume
    var Rosaria_T3_T4 = Rosaria_T3_T4_1toMax_Volume - Rosaria_T3_T4_1toMin_Volume
    var Rosaria_T3_T5 = Rosaria_T3_T5_1toMax_Volume - Rosaria_T3_T5_1toMin_Volume
    document.getElementById('Rosaria_T3_T1_Volume').innerHTML = Rosaria_T3_T1;
    document.getElementById('Rosaria_T3_T2_Volume').innerHTML = Rosaria_T3_T2;
    document.getElementById('Rosaria_T3_T3_Volume').innerHTML = Rosaria_T3_T3;
    document.getElementById('Rosaria_T3_T4_Volume').innerHTML = Rosaria_T3_T4;
    document.getElementById('Rosaria_T3_T5_Volume').innerHTML = Rosaria_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Rosaria  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  HuTao  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var HuTao_Ex = document.getElementById('HuTao_Ex');
noUiSlider.create(HuTao_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(HuTao_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(HuTao_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(HuTao_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(HuTao_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function HuTaoLoad() {
  HuTao_Ex.noUiSlider.on('update', function (values, handle) {
    var HuTao_Ex_Min_Volume = "L1toL" + HuTao_Ex.noUiSlider.get()[0];
    var HuTao_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == HuTao_Ex.noUiSlider.get()[0])[HuTao_Ex_Min_Volume]);
    var HuTao_Ex_Max_Volume = "L1toL" + HuTao_Ex.noUiSlider.get()[1];
    var HuTao_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == HuTao_Ex.noUiSlider.get()[1])[HuTao_Ex_Max_Volume]);
    var HuTao_Ex_Volume = HuTao_Ex_1toMax_Volume - HuTao_Ex_1toMin_Volume
    var HuTao_Ex_Book_Volume = HuTao_Ex_Volume / 1000
    var HuTao_Ex_Mora_Volume = HuTao_Ex_Volume * 0.2
    document.getElementById('HuTao_Ex_Volume').innerHTML = HuTao_Ex_Volume.toLocaleString();
    document.getElementById('HuTao_Ex_Book_Volume').innerHTML = HuTao_Ex_Book_Volume.toLocaleString();
    document.getElementById('HuTao_Ex_Mora_Volume').innerHTML = HuTao_Ex_Mora_Volume.toLocaleString();
  });
  HuTao_Pr.noUiSlider.on('update', function (values, handle) {
    var HuTao_Pr_Min_Volume = "L1toL" + HuTao_Pr.noUiSlider.get()[0];
    var HuTao_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[0])["P1_" + [HuTao_Pr_Min_Volume]]);
    var HuTao_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[0])["P2_" + [HuTao_Pr_Min_Volume]]);
    var HuTao_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[0])["P3_" + [HuTao_Pr_Min_Volume]]);
    var HuTao_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[0])["P4_" + [HuTao_Pr_Min_Volume]]);
    var HuTao_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[0])["P5_" + [HuTao_Pr_Min_Volume]]);
    var HuTao_Pr_Max_Volume = "L1toL" + HuTao_Pr.noUiSlider.get()[1];
    var HuTao_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[1])["P1_" + [HuTao_Pr_Max_Volume]]);
    var HuTao_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[1])["P2_" + [HuTao_Pr_Max_Volume]]);
    var HuTao_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[1])["P3_" + [HuTao_Pr_Max_Volume]]);
    var HuTao_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[1])["P4_" + [HuTao_Pr_Max_Volume]]);
    var HuTao_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == HuTao_Pr.noUiSlider.get()[1])["P5_" + [HuTao_Pr_Max_Volume]]);
    var HuTao_Pr_P1 = HuTao_Pr_P1_1toMax_Volume - HuTao_Pr_P1_1toMin_Volume
    var HuTao_Pr_P2 = HuTao_Pr_P2_1toMax_Volume - HuTao_Pr_P2_1toMin_Volume
    var HuTao_Pr_P3 = HuTao_Pr_P3_1toMax_Volume - HuTao_Pr_P3_1toMin_Volume
    var HuTao_Pr_P4 = HuTao_Pr_P4_1toMax_Volume - HuTao_Pr_P4_1toMin_Volume
    var HuTao_Pr_P5 = HuTao_Pr_P5_1toMax_Volume - HuTao_Pr_P5_1toMin_Volume
    document.getElementById('HuTao_Pr_P1_Volume').innerHTML = HuTao_Pr_P1;
    document.getElementById('HuTao_Pr_P2_Volume').innerHTML = HuTao_Pr_P2;
    document.getElementById('HuTao_Pr_P3_Volume').innerHTML = HuTao_Pr_P3;
    document.getElementById('HuTao_Pr_P4_Volume').innerHTML = HuTao_Pr_P4;
    document.getElementById('HuTao_Pr_P5_Volume').innerHTML = HuTao_Pr_P5.toLocaleString();
  });
  HuTao_T1.noUiSlider.on('update', function (values, handle) {
    var HuTao_T1_Min_Volume = "L1toL" + HuTao_T1.noUiSlider.get()[0];
    var HuTao_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[0])["T1_" + [HuTao_T1_Min_Volume]]);
    var HuTao_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[0])["T2_" + [HuTao_T1_Min_Volume]]);
    var HuTao_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[0])["T3_" + [HuTao_T1_Min_Volume]]);
    var HuTao_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[0])["T4_" + [HuTao_T1_Min_Volume]]);
    var HuTao_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[0])["T5_" + [HuTao_T1_Min_Volume]]);
    var HuTao_T1_Max_Volume = "L1toL" + HuTao_T1.noUiSlider.get()[1];
    var HuTao_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[1])["T1_" + [HuTao_T1_Max_Volume]]);
    var HuTao_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[1])["T2_" + [HuTao_T1_Max_Volume]]);
    var HuTao_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[1])["T3_" + [HuTao_T1_Max_Volume]]);
    var HuTao_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[1])["T4_" + [HuTao_T1_Max_Volume]]);
    var HuTao_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T1.noUiSlider.get()[1])["T5_" + [HuTao_T1_Max_Volume]]);
    var HuTao_T1_T1 = HuTao_T1_T1_1toMax_Volume - HuTao_T1_T1_1toMin_Volume
    var HuTao_T1_T2 = HuTao_T1_T2_1toMax_Volume - HuTao_T1_T2_1toMin_Volume
    var HuTao_T1_T3 = HuTao_T1_T3_1toMax_Volume - HuTao_T1_T3_1toMin_Volume
    var HuTao_T1_T4 = HuTao_T1_T4_1toMax_Volume - HuTao_T1_T4_1toMin_Volume
    var HuTao_T1_T5 = HuTao_T1_T5_1toMax_Volume - HuTao_T1_T5_1toMin_Volume
    document.getElementById('HuTao_T1_T1_Volume').innerHTML = HuTao_T1_T1;
    document.getElementById('HuTao_T1_T2_Volume').innerHTML = HuTao_T1_T2;
    document.getElementById('HuTao_T1_T3_Volume').innerHTML = HuTao_T1_T3;
    document.getElementById('HuTao_T1_T4_Volume').innerHTML = HuTao_T1_T4;
    document.getElementById('HuTao_T1_T5_Volume').innerHTML = HuTao_T1_T5.toLocaleString();
  });
  HuTao_T2.noUiSlider.on('update', function (values, handle) {
    var HuTao_T2_Min_Volume = "L1toL" + HuTao_T2.noUiSlider.get()[0];
    var HuTao_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[0])["T1_" + [HuTao_T2_Min_Volume]]);
    var HuTao_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[0])["T2_" + [HuTao_T2_Min_Volume]]);
    var HuTao_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[0])["T3_" + [HuTao_T2_Min_Volume]]);
    var HuTao_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[0])["T4_" + [HuTao_T2_Min_Volume]]);
    var HuTao_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[0])["T5_" + [HuTao_T2_Min_Volume]]);
    var HuTao_T2_Max_Volume = "L1toL" + HuTao_T2.noUiSlider.get()[1];
    var HuTao_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[1])["T1_" + [HuTao_T2_Max_Volume]]);
    var HuTao_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[1])["T2_" + [HuTao_T2_Max_Volume]]);
    var HuTao_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[1])["T3_" + [HuTao_T2_Max_Volume]]);
    var HuTao_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[1])["T4_" + [HuTao_T2_Max_Volume]]);
    var HuTao_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T2.noUiSlider.get()[1])["T5_" + [HuTao_T2_Max_Volume]]);
    var HuTao_T2_T1 = HuTao_T2_T1_1toMax_Volume - HuTao_T2_T1_1toMin_Volume
    var HuTao_T2_T2 = HuTao_T2_T2_1toMax_Volume - HuTao_T2_T2_1toMin_Volume
    var HuTao_T2_T3 = HuTao_T2_T3_1toMax_Volume - HuTao_T2_T3_1toMin_Volume
    var HuTao_T2_T4 = HuTao_T2_T4_1toMax_Volume - HuTao_T2_T4_1toMin_Volume
    var HuTao_T2_T5 = HuTao_T2_T5_1toMax_Volume - HuTao_T2_T5_1toMin_Volume
    document.getElementById('HuTao_T2_T1_Volume').innerHTML = HuTao_T2_T1;
    document.getElementById('HuTao_T2_T2_Volume').innerHTML = HuTao_T2_T2;
    document.getElementById('HuTao_T2_T3_Volume').innerHTML = HuTao_T2_T3;
    document.getElementById('HuTao_T2_T4_Volume').innerHTML = HuTao_T2_T4;
    document.getElementById('HuTao_T2_T5_Volume').innerHTML = HuTao_T2_T5.toLocaleString();
  });
  HuTao_T3.noUiSlider.on('update', function (values, handle) {
    var HuTao_T3_Min_Volume = "L1toL" + HuTao_T3.noUiSlider.get()[0];
    var HuTao_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[0])["T1_" + [HuTao_T3_Min_Volume]]);
    var HuTao_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[0])["T2_" + [HuTao_T3_Min_Volume]]);
    var HuTao_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[0])["T3_" + [HuTao_T3_Min_Volume]]);
    var HuTao_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[0])["T4_" + [HuTao_T3_Min_Volume]]);
    var HuTao_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[0])["T5_" + [HuTao_T3_Min_Volume]]);
    var HuTao_T3_Max_Volume = "L1toL" + HuTao_T3.noUiSlider.get()[1];
    var HuTao_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[1])["T1_" + [HuTao_T3_Max_Volume]]);
    var HuTao_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[1])["T2_" + [HuTao_T3_Max_Volume]]);
    var HuTao_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[1])["T3_" + [HuTao_T3_Max_Volume]]);
    var HuTao_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[1])["T4_" + [HuTao_T3_Max_Volume]]);
    var HuTao_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == HuTao_T3.noUiSlider.get()[1])["T5_" + [HuTao_T3_Max_Volume]]);
    var HuTao_T3_T1 = HuTao_T3_T1_1toMax_Volume - HuTao_T3_T1_1toMin_Volume
    var HuTao_T3_T2 = HuTao_T3_T2_1toMax_Volume - HuTao_T3_T2_1toMin_Volume
    var HuTao_T3_T3 = HuTao_T3_T3_1toMax_Volume - HuTao_T3_T3_1toMin_Volume
    var HuTao_T3_T4 = HuTao_T3_T4_1toMax_Volume - HuTao_T3_T4_1toMin_Volume
    var HuTao_T3_T5 = HuTao_T3_T5_1toMax_Volume - HuTao_T3_T5_1toMin_Volume
    document.getElementById('HuTao_T3_T1_Volume').innerHTML = HuTao_T3_T1;
    document.getElementById('HuTao_T3_T2_Volume').innerHTML = HuTao_T3_T2;
    document.getElementById('HuTao_T3_T3_Volume').innerHTML = HuTao_T3_T3;
    document.getElementById('HuTao_T3_T4_Volume').innerHTML = HuTao_T3_T4;
    document.getElementById('HuTao_T3_T5_Volume').innerHTML = HuTao_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  HuTao  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Xiao  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Xiao_Ex = document.getElementById('Xiao_Ex');
noUiSlider.create(Xiao_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xiao_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xiao_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xiao_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xiao_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function XiaoLoad() {
  Xiao_Ex.noUiSlider.on('update', function (values, handle) {
    var Xiao_Ex_Min_Volume = "L1toL" + Xiao_Ex.noUiSlider.get()[0];
    var Xiao_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Xiao_Ex.noUiSlider.get()[0])[Xiao_Ex_Min_Volume]);
    var Xiao_Ex_Max_Volume = "L1toL" + Xiao_Ex.noUiSlider.get()[1];
    var Xiao_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Xiao_Ex.noUiSlider.get()[1])[Xiao_Ex_Max_Volume]);
    var Xiao_Ex_Volume = Xiao_Ex_1toMax_Volume - Xiao_Ex_1toMin_Volume
    var Xiao_Ex_Book_Volume = Xiao_Ex_Volume / 1000
    var Xiao_Ex_Mora_Volume = Xiao_Ex_Volume * 0.2
    document.getElementById('Xiao_Ex_Volume').innerHTML = Xiao_Ex_Volume.toLocaleString();
    document.getElementById('Xiao_Ex_Book_Volume').innerHTML = Xiao_Ex_Book_Volume.toLocaleString();
    document.getElementById('Xiao_Ex_Mora_Volume').innerHTML = Xiao_Ex_Mora_Volume.toLocaleString();
  });
  Xiao_Pr.noUiSlider.on('update', function (values, handle) {
    var Xiao_Pr_Min_Volume = "L1toL" + Xiao_Pr.noUiSlider.get()[0];
    var Xiao_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[0])["P1_" + [Xiao_Pr_Min_Volume]]);
    var Xiao_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[0])["P2_" + [Xiao_Pr_Min_Volume]]);
    var Xiao_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[0])["P3_" + [Xiao_Pr_Min_Volume]]);
    var Xiao_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[0])["P4_" + [Xiao_Pr_Min_Volume]]);
    var Xiao_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[0])["P5_" + [Xiao_Pr_Min_Volume]]);
    var Xiao_Pr_Max_Volume = "L1toL" + Xiao_Pr.noUiSlider.get()[1];
    var Xiao_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[1])["P1_" + [Xiao_Pr_Max_Volume]]);
    var Xiao_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[1])["P2_" + [Xiao_Pr_Max_Volume]]);
    var Xiao_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[1])["P3_" + [Xiao_Pr_Max_Volume]]);
    var Xiao_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[1])["P4_" + [Xiao_Pr_Max_Volume]]);
    var Xiao_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiao_Pr.noUiSlider.get()[1])["P5_" + [Xiao_Pr_Max_Volume]]);
    var Xiao_Pr_P1 = Xiao_Pr_P1_1toMax_Volume - Xiao_Pr_P1_1toMin_Volume
    var Xiao_Pr_P2 = Xiao_Pr_P2_1toMax_Volume - Xiao_Pr_P2_1toMin_Volume
    var Xiao_Pr_P3 = Xiao_Pr_P3_1toMax_Volume - Xiao_Pr_P3_1toMin_Volume
    var Xiao_Pr_P4 = Xiao_Pr_P4_1toMax_Volume - Xiao_Pr_P4_1toMin_Volume
    var Xiao_Pr_P5 = Xiao_Pr_P5_1toMax_Volume - Xiao_Pr_P5_1toMin_Volume
    document.getElementById('Xiao_Pr_P1_Volume').innerHTML = Xiao_Pr_P1;
    document.getElementById('Xiao_Pr_P2_Volume').innerHTML = Xiao_Pr_P2;
    document.getElementById('Xiao_Pr_P3_Volume').innerHTML = Xiao_Pr_P3;
    document.getElementById('Xiao_Pr_P4_Volume').innerHTML = Xiao_Pr_P4;
    document.getElementById('Xiao_Pr_P5_Volume').innerHTML = Xiao_Pr_P5.toLocaleString();
  });
  Xiao_T1.noUiSlider.on('update', function (values, handle) {
    var Xiao_T1_Min_Volume = "L1toL" + Xiao_T1.noUiSlider.get()[0];
    var Xiao_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[0])["T1_" + [Xiao_T1_Min_Volume]]);
    var Xiao_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[0])["T2_" + [Xiao_T1_Min_Volume]]);
    var Xiao_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[0])["T3_" + [Xiao_T1_Min_Volume]]);
    var Xiao_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[0])["T4_" + [Xiao_T1_Min_Volume]]);
    var Xiao_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[0])["T5_" + [Xiao_T1_Min_Volume]]);
    var Xiao_T1_Max_Volume = "L1toL" + Xiao_T1.noUiSlider.get()[1];
    var Xiao_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[1])["T1_" + [Xiao_T1_Max_Volume]]);
    var Xiao_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[1])["T2_" + [Xiao_T1_Max_Volume]]);
    var Xiao_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[1])["T3_" + [Xiao_T1_Max_Volume]]);
    var Xiao_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[1])["T4_" + [Xiao_T1_Max_Volume]]);
    var Xiao_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T1.noUiSlider.get()[1])["T5_" + [Xiao_T1_Max_Volume]]);
    var Xiao_T1_T1 = Xiao_T1_T1_1toMax_Volume - Xiao_T1_T1_1toMin_Volume
    var Xiao_T1_T2 = Xiao_T1_T2_1toMax_Volume - Xiao_T1_T2_1toMin_Volume
    var Xiao_T1_T3 = Xiao_T1_T3_1toMax_Volume - Xiao_T1_T3_1toMin_Volume
    var Xiao_T1_T4 = Xiao_T1_T4_1toMax_Volume - Xiao_T1_T4_1toMin_Volume
    var Xiao_T1_T5 = Xiao_T1_T5_1toMax_Volume - Xiao_T1_T5_1toMin_Volume
    document.getElementById('Xiao_T1_T1_Volume').innerHTML = Xiao_T1_T1;
    document.getElementById('Xiao_T1_T2_Volume').innerHTML = Xiao_T1_T2;
    document.getElementById('Xiao_T1_T3_Volume').innerHTML = Xiao_T1_T3;
    document.getElementById('Xiao_T1_T4_Volume').innerHTML = Xiao_T1_T4;
    document.getElementById('Xiao_T1_T5_Volume').innerHTML = Xiao_T1_T5.toLocaleString();
  });
  Xiao_T2.noUiSlider.on('update', function (values, handle) {
    var Xiao_T2_Min_Volume = "L1toL" + Xiao_T2.noUiSlider.get()[0];
    var Xiao_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[0])["T1_" + [Xiao_T2_Min_Volume]]);
    var Xiao_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[0])["T2_" + [Xiao_T2_Min_Volume]]);
    var Xiao_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[0])["T3_" + [Xiao_T2_Min_Volume]]);
    var Xiao_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[0])["T4_" + [Xiao_T2_Min_Volume]]);
    var Xiao_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[0])["T5_" + [Xiao_T2_Min_Volume]]);
    var Xiao_T2_Max_Volume = "L1toL" + Xiao_T2.noUiSlider.get()[1];
    var Xiao_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[1])["T1_" + [Xiao_T2_Max_Volume]]);
    var Xiao_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[1])["T2_" + [Xiao_T2_Max_Volume]]);
    var Xiao_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[1])["T3_" + [Xiao_T2_Max_Volume]]);
    var Xiao_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[1])["T4_" + [Xiao_T2_Max_Volume]]);
    var Xiao_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T2.noUiSlider.get()[1])["T5_" + [Xiao_T2_Max_Volume]]);
    var Xiao_T2_T1 = Xiao_T2_T1_1toMax_Volume - Xiao_T2_T1_1toMin_Volume
    var Xiao_T2_T2 = Xiao_T2_T2_1toMax_Volume - Xiao_T2_T2_1toMin_Volume
    var Xiao_T2_T3 = Xiao_T2_T3_1toMax_Volume - Xiao_T2_T3_1toMin_Volume
    var Xiao_T2_T4 = Xiao_T2_T4_1toMax_Volume - Xiao_T2_T4_1toMin_Volume
    var Xiao_T2_T5 = Xiao_T2_T5_1toMax_Volume - Xiao_T2_T5_1toMin_Volume
    document.getElementById('Xiao_T2_T1_Volume').innerHTML = Xiao_T2_T1;
    document.getElementById('Xiao_T2_T2_Volume').innerHTML = Xiao_T2_T2;
    document.getElementById('Xiao_T2_T3_Volume').innerHTML = Xiao_T2_T3;
    document.getElementById('Xiao_T2_T4_Volume').innerHTML = Xiao_T2_T4;
    document.getElementById('Xiao_T2_T5_Volume').innerHTML = Xiao_T2_T5.toLocaleString();
  });
  Xiao_T3.noUiSlider.on('update', function (values, handle) {
    var Xiao_T3_Min_Volume = "L1toL" + Xiao_T3.noUiSlider.get()[0];
    var Xiao_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[0])["T1_" + [Xiao_T3_Min_Volume]]);
    var Xiao_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[0])["T2_" + [Xiao_T3_Min_Volume]]);
    var Xiao_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[0])["T3_" + [Xiao_T3_Min_Volume]]);
    var Xiao_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[0])["T4_" + [Xiao_T3_Min_Volume]]);
    var Xiao_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[0])["T5_" + [Xiao_T3_Min_Volume]]);
    var Xiao_T3_Max_Volume = "L1toL" + Xiao_T3.noUiSlider.get()[1];
    var Xiao_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[1])["T1_" + [Xiao_T3_Max_Volume]]);
    var Xiao_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[1])["T2_" + [Xiao_T3_Max_Volume]]);
    var Xiao_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[1])["T3_" + [Xiao_T3_Max_Volume]]);
    var Xiao_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[1])["T4_" + [Xiao_T3_Max_Volume]]);
    var Xiao_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiao_T3.noUiSlider.get()[1])["T5_" + [Xiao_T3_Max_Volume]]);
    var Xiao_T3_T1 = Xiao_T3_T1_1toMax_Volume - Xiao_T3_T1_1toMin_Volume
    var Xiao_T3_T2 = Xiao_T3_T2_1toMax_Volume - Xiao_T3_T2_1toMin_Volume
    var Xiao_T3_T3 = Xiao_T3_T3_1toMax_Volume - Xiao_T3_T3_1toMin_Volume
    var Xiao_T3_T4 = Xiao_T3_T4_1toMax_Volume - Xiao_T3_T4_1toMin_Volume
    var Xiao_T3_T5 = Xiao_T3_T5_1toMax_Volume - Xiao_T3_T5_1toMin_Volume
    document.getElementById('Xiao_T3_T1_Volume').innerHTML = Xiao_T3_T1;
    document.getElementById('Xiao_T3_T2_Volume').innerHTML = Xiao_T3_T2;
    document.getElementById('Xiao_T3_T3_Volume').innerHTML = Xiao_T3_T3;
    document.getElementById('Xiao_T3_T4_Volume').innerHTML = Xiao_T3_T4;
    document.getElementById('Xiao_T3_T5_Volume').innerHTML = Xiao_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Xiao  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Ganyu  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Ganyu_Ex = document.getElementById('Ganyu_Ex');
noUiSlider.create(Ganyu_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Ganyu_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Ganyu_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Ganyu_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Ganyu_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function GanyuLoad() {
  Ganyu_Ex.noUiSlider.on('update', function (values, handle) {
    var Ganyu_Ex_Min_Volume = "L1toL" + Ganyu_Ex.noUiSlider.get()[0];
    var Ganyu_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Ganyu_Ex.noUiSlider.get()[0])[Ganyu_Ex_Min_Volume]);
    var Ganyu_Ex_Max_Volume = "L1toL" + Ganyu_Ex.noUiSlider.get()[1];
    var Ganyu_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Ganyu_Ex.noUiSlider.get()[1])[Ganyu_Ex_Max_Volume]);
    var Ganyu_Ex_Volume = Ganyu_Ex_1toMax_Volume - Ganyu_Ex_1toMin_Volume
    var Ganyu_Ex_Book_Volume = Ganyu_Ex_Volume / 1000
    var Ganyu_Ex_Mora_Volume = Ganyu_Ex_Volume * 0.2
    document.getElementById('Ganyu_Ex_Volume').innerHTML = Ganyu_Ex_Volume.toLocaleString();
    document.getElementById('Ganyu_Ex_Book_Volume').innerHTML = Ganyu_Ex_Book_Volume.toLocaleString();
    document.getElementById('Ganyu_Ex_Mora_Volume').innerHTML = Ganyu_Ex_Mora_Volume.toLocaleString();
  });
  Ganyu_Pr.noUiSlider.on('update', function (values, handle) {
    var Ganyu_Pr_Min_Volume = "L1toL" + Ganyu_Pr.noUiSlider.get()[0];
    var Ganyu_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[0])["P1_" + [Ganyu_Pr_Min_Volume]]);
    var Ganyu_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[0])["P2_" + [Ganyu_Pr_Min_Volume]]);
    var Ganyu_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[0])["P3_" + [Ganyu_Pr_Min_Volume]]);
    var Ganyu_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[0])["P4_" + [Ganyu_Pr_Min_Volume]]);
    var Ganyu_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[0])["P5_" + [Ganyu_Pr_Min_Volume]]);
    var Ganyu_Pr_Max_Volume = "L1toL" + Ganyu_Pr.noUiSlider.get()[1];
    var Ganyu_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[1])["P1_" + [Ganyu_Pr_Max_Volume]]);
    var Ganyu_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[1])["P2_" + [Ganyu_Pr_Max_Volume]]);
    var Ganyu_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[1])["P3_" + [Ganyu_Pr_Max_Volume]]);
    var Ganyu_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[1])["P4_" + [Ganyu_Pr_Max_Volume]]);
    var Ganyu_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ganyu_Pr.noUiSlider.get()[1])["P5_" + [Ganyu_Pr_Max_Volume]]);
    var Ganyu_Pr_P1 = Ganyu_Pr_P1_1toMax_Volume - Ganyu_Pr_P1_1toMin_Volume
    var Ganyu_Pr_P2 = Ganyu_Pr_P2_1toMax_Volume - Ganyu_Pr_P2_1toMin_Volume
    var Ganyu_Pr_P3 = Ganyu_Pr_P3_1toMax_Volume - Ganyu_Pr_P3_1toMin_Volume
    var Ganyu_Pr_P4 = Ganyu_Pr_P4_1toMax_Volume - Ganyu_Pr_P4_1toMin_Volume
    var Ganyu_Pr_P5 = Ganyu_Pr_P5_1toMax_Volume - Ganyu_Pr_P5_1toMin_Volume
    document.getElementById('Ganyu_Pr_P1_Volume').innerHTML = Ganyu_Pr_P1;
    document.getElementById('Ganyu_Pr_P2_Volume').innerHTML = Ganyu_Pr_P2;
    document.getElementById('Ganyu_Pr_P3_Volume').innerHTML = Ganyu_Pr_P3;
    document.getElementById('Ganyu_Pr_P4_Volume').innerHTML = Ganyu_Pr_P4;
    document.getElementById('Ganyu_Pr_P5_Volume').innerHTML = Ganyu_Pr_P5.toLocaleString();
  });
  Ganyu_T1.noUiSlider.on('update', function (values, handle) {
    var Ganyu_T1_Min_Volume = "L1toL" + Ganyu_T1.noUiSlider.get()[0];
    var Ganyu_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[0])["T1_" + [Ganyu_T1_Min_Volume]]);
    var Ganyu_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[0])["T2_" + [Ganyu_T1_Min_Volume]]);
    var Ganyu_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[0])["T3_" + [Ganyu_T1_Min_Volume]]);
    var Ganyu_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[0])["T4_" + [Ganyu_T1_Min_Volume]]);
    var Ganyu_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[0])["T5_" + [Ganyu_T1_Min_Volume]]);
    var Ganyu_T1_Max_Volume = "L1toL" + Ganyu_T1.noUiSlider.get()[1];
    var Ganyu_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[1])["T1_" + [Ganyu_T1_Max_Volume]]);
    var Ganyu_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[1])["T2_" + [Ganyu_T1_Max_Volume]]);
    var Ganyu_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[1])["T3_" + [Ganyu_T1_Max_Volume]]);
    var Ganyu_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[1])["T4_" + [Ganyu_T1_Max_Volume]]);
    var Ganyu_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T1.noUiSlider.get()[1])["T5_" + [Ganyu_T1_Max_Volume]]);
    var Ganyu_T1_T1 = Ganyu_T1_T1_1toMax_Volume - Ganyu_T1_T1_1toMin_Volume
    var Ganyu_T1_T2 = Ganyu_T1_T2_1toMax_Volume - Ganyu_T1_T2_1toMin_Volume
    var Ganyu_T1_T3 = Ganyu_T1_T3_1toMax_Volume - Ganyu_T1_T3_1toMin_Volume
    var Ganyu_T1_T4 = Ganyu_T1_T4_1toMax_Volume - Ganyu_T1_T4_1toMin_Volume
    var Ganyu_T1_T5 = Ganyu_T1_T5_1toMax_Volume - Ganyu_T1_T5_1toMin_Volume
    document.getElementById('Ganyu_T1_T1_Volume').innerHTML = Ganyu_T1_T1;
    document.getElementById('Ganyu_T1_T2_Volume').innerHTML = Ganyu_T1_T2;
    document.getElementById('Ganyu_T1_T3_Volume').innerHTML = Ganyu_T1_T3;
    document.getElementById('Ganyu_T1_T4_Volume').innerHTML = Ganyu_T1_T4;
    document.getElementById('Ganyu_T1_T5_Volume').innerHTML = Ganyu_T1_T5.toLocaleString();
  });
  Ganyu_T2.noUiSlider.on('update', function (values, handle) {
    var Ganyu_T2_Min_Volume = "L1toL" + Ganyu_T2.noUiSlider.get()[0];
    var Ganyu_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[0])["T1_" + [Ganyu_T2_Min_Volume]]);
    var Ganyu_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[0])["T2_" + [Ganyu_T2_Min_Volume]]);
    var Ganyu_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[0])["T3_" + [Ganyu_T2_Min_Volume]]);
    var Ganyu_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[0])["T4_" + [Ganyu_T2_Min_Volume]]);
    var Ganyu_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[0])["T5_" + [Ganyu_T2_Min_Volume]]);
    var Ganyu_T2_Max_Volume = "L1toL" + Ganyu_T2.noUiSlider.get()[1];
    var Ganyu_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[1])["T1_" + [Ganyu_T2_Max_Volume]]);
    var Ganyu_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[1])["T2_" + [Ganyu_T2_Max_Volume]]);
    var Ganyu_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[1])["T3_" + [Ganyu_T2_Max_Volume]]);
    var Ganyu_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[1])["T4_" + [Ganyu_T2_Max_Volume]]);
    var Ganyu_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T2.noUiSlider.get()[1])["T5_" + [Ganyu_T2_Max_Volume]]);
    var Ganyu_T2_T1 = Ganyu_T2_T1_1toMax_Volume - Ganyu_T2_T1_1toMin_Volume
    var Ganyu_T2_T2 = Ganyu_T2_T2_1toMax_Volume - Ganyu_T2_T2_1toMin_Volume
    var Ganyu_T2_T3 = Ganyu_T2_T3_1toMax_Volume - Ganyu_T2_T3_1toMin_Volume
    var Ganyu_T2_T4 = Ganyu_T2_T4_1toMax_Volume - Ganyu_T2_T4_1toMin_Volume
    var Ganyu_T2_T5 = Ganyu_T2_T5_1toMax_Volume - Ganyu_T2_T5_1toMin_Volume
    document.getElementById('Ganyu_T2_T1_Volume').innerHTML = Ganyu_T2_T1;
    document.getElementById('Ganyu_T2_T2_Volume').innerHTML = Ganyu_T2_T2;
    document.getElementById('Ganyu_T2_T3_Volume').innerHTML = Ganyu_T2_T3;
    document.getElementById('Ganyu_T2_T4_Volume').innerHTML = Ganyu_T2_T4;
    document.getElementById('Ganyu_T2_T5_Volume').innerHTML = Ganyu_T2_T5.toLocaleString();
  });
  Ganyu_T3.noUiSlider.on('update', function (values, handle) {
    var Ganyu_T3_Min_Volume = "L1toL" + Ganyu_T3.noUiSlider.get()[0];
    var Ganyu_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[0])["T1_" + [Ganyu_T3_Min_Volume]]);
    var Ganyu_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[0])["T2_" + [Ganyu_T3_Min_Volume]]);
    var Ganyu_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[0])["T3_" + [Ganyu_T3_Min_Volume]]);
    var Ganyu_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[0])["T4_" + [Ganyu_T3_Min_Volume]]);
    var Ganyu_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[0])["T5_" + [Ganyu_T3_Min_Volume]]);
    var Ganyu_T3_Max_Volume = "L1toL" + Ganyu_T3.noUiSlider.get()[1];
    var Ganyu_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[1])["T1_" + [Ganyu_T3_Max_Volume]]);
    var Ganyu_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[1])["T2_" + [Ganyu_T3_Max_Volume]]);
    var Ganyu_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[1])["T3_" + [Ganyu_T3_Max_Volume]]);
    var Ganyu_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[1])["T4_" + [Ganyu_T3_Max_Volume]]);
    var Ganyu_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ganyu_T3.noUiSlider.get()[1])["T5_" + [Ganyu_T3_Max_Volume]]);
    var Ganyu_T3_T1 = Ganyu_T3_T1_1toMax_Volume - Ganyu_T3_T1_1toMin_Volume
    var Ganyu_T3_T2 = Ganyu_T3_T2_1toMax_Volume - Ganyu_T3_T2_1toMin_Volume
    var Ganyu_T3_T3 = Ganyu_T3_T3_1toMax_Volume - Ganyu_T3_T3_1toMin_Volume
    var Ganyu_T3_T4 = Ganyu_T3_T4_1toMax_Volume - Ganyu_T3_T4_1toMin_Volume
    var Ganyu_T3_T5 = Ganyu_T3_T5_1toMax_Volume - Ganyu_T3_T5_1toMin_Volume
    document.getElementById('Ganyu_T3_T1_Volume').innerHTML = Ganyu_T3_T1;
    document.getElementById('Ganyu_T3_T2_Volume').innerHTML = Ganyu_T3_T2;
    document.getElementById('Ganyu_T3_T3_Volume').innerHTML = Ganyu_T3_T3;
    document.getElementById('Ganyu_T3_T4_Volume').innerHTML = Ganyu_T3_T4;
    document.getElementById('Ganyu_T3_T5_Volume').innerHTML = Ganyu_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Ganyu  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Albedo  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Albedo_Ex = document.getElementById('Albedo_Ex');
noUiSlider.create(Albedo_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Albedo_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Albedo_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Albedo_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Albedo_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function AlbedoLoad() {
  Albedo_Ex.noUiSlider.on('update', function (values, handle) {
    var Albedo_Ex_Min_Volume = "L1toL" + Albedo_Ex.noUiSlider.get()[0];
    var Albedo_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Albedo_Ex.noUiSlider.get()[0])[Albedo_Ex_Min_Volume]);
    var Albedo_Ex_Max_Volume = "L1toL" + Albedo_Ex.noUiSlider.get()[1];
    var Albedo_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Albedo_Ex.noUiSlider.get()[1])[Albedo_Ex_Max_Volume]);
    var Albedo_Ex_Volume = Albedo_Ex_1toMax_Volume - Albedo_Ex_1toMin_Volume
    var Albedo_Ex_Book_Volume = Albedo_Ex_Volume / 1000
    var Albedo_Ex_Mora_Volume = Albedo_Ex_Volume * 0.2
    document.getElementById('Albedo_Ex_Volume').innerHTML = Albedo_Ex_Volume.toLocaleString();
    document.getElementById('Albedo_Ex_Book_Volume').innerHTML = Albedo_Ex_Book_Volume.toLocaleString();
    document.getElementById('Albedo_Ex_Mora_Volume').innerHTML = Albedo_Ex_Mora_Volume.toLocaleString();
  });
  Albedo_Pr.noUiSlider.on('update', function (values, handle) {
    var Albedo_Pr_Min_Volume = "L1toL" + Albedo_Pr.noUiSlider.get()[0];
    var Albedo_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[0])["P1_" + [Albedo_Pr_Min_Volume]]);
    var Albedo_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[0])["P2_" + [Albedo_Pr_Min_Volume]]);
    var Albedo_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[0])["P3_" + [Albedo_Pr_Min_Volume]]);
    var Albedo_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[0])["P4_" + [Albedo_Pr_Min_Volume]]);
    var Albedo_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[0])["P5_" + [Albedo_Pr_Min_Volume]]);
    var Albedo_Pr_Max_Volume = "L1toL" + Albedo_Pr.noUiSlider.get()[1];
    var Albedo_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[1])["P1_" + [Albedo_Pr_Max_Volume]]);
    var Albedo_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[1])["P2_" + [Albedo_Pr_Max_Volume]]);
    var Albedo_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[1])["P3_" + [Albedo_Pr_Max_Volume]]);
    var Albedo_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[1])["P4_" + [Albedo_Pr_Max_Volume]]);
    var Albedo_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Albedo_Pr.noUiSlider.get()[1])["P5_" + [Albedo_Pr_Max_Volume]]);
    var Albedo_Pr_P1 = Albedo_Pr_P1_1toMax_Volume - Albedo_Pr_P1_1toMin_Volume
    var Albedo_Pr_P2 = Albedo_Pr_P2_1toMax_Volume - Albedo_Pr_P2_1toMin_Volume
    var Albedo_Pr_P3 = Albedo_Pr_P3_1toMax_Volume - Albedo_Pr_P3_1toMin_Volume
    var Albedo_Pr_P4 = Albedo_Pr_P4_1toMax_Volume - Albedo_Pr_P4_1toMin_Volume
    var Albedo_Pr_P5 = Albedo_Pr_P5_1toMax_Volume - Albedo_Pr_P5_1toMin_Volume
    document.getElementById('Albedo_Pr_P1_Volume').innerHTML = Albedo_Pr_P1;
    document.getElementById('Albedo_Pr_P2_Volume').innerHTML = Albedo_Pr_P2;
    document.getElementById('Albedo_Pr_P3_Volume').innerHTML = Albedo_Pr_P3;
    document.getElementById('Albedo_Pr_P4_Volume').innerHTML = Albedo_Pr_P4;
    document.getElementById('Albedo_Pr_P5_Volume').innerHTML = Albedo_Pr_P5.toLocaleString();
  });
  Albedo_T1.noUiSlider.on('update', function (values, handle) {
    var Albedo_T1_Min_Volume = "L1toL" + Albedo_T1.noUiSlider.get()[0];
    var Albedo_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[0])["T1_" + [Albedo_T1_Min_Volume]]);
    var Albedo_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[0])["T2_" + [Albedo_T1_Min_Volume]]);
    var Albedo_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[0])["T3_" + [Albedo_T1_Min_Volume]]);
    var Albedo_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[0])["T4_" + [Albedo_T1_Min_Volume]]);
    var Albedo_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[0])["T5_" + [Albedo_T1_Min_Volume]]);
    var Albedo_T1_Max_Volume = "L1toL" + Albedo_T1.noUiSlider.get()[1];
    var Albedo_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[1])["T1_" + [Albedo_T1_Max_Volume]]);
    var Albedo_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[1])["T2_" + [Albedo_T1_Max_Volume]]);
    var Albedo_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[1])["T3_" + [Albedo_T1_Max_Volume]]);
    var Albedo_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[1])["T4_" + [Albedo_T1_Max_Volume]]);
    var Albedo_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T1.noUiSlider.get()[1])["T5_" + [Albedo_T1_Max_Volume]]);
    var Albedo_T1_T1 = Albedo_T1_T1_1toMax_Volume - Albedo_T1_T1_1toMin_Volume
    var Albedo_T1_T2 = Albedo_T1_T2_1toMax_Volume - Albedo_T1_T2_1toMin_Volume
    var Albedo_T1_T3 = Albedo_T1_T3_1toMax_Volume - Albedo_T1_T3_1toMin_Volume
    var Albedo_T1_T4 = Albedo_T1_T4_1toMax_Volume - Albedo_T1_T4_1toMin_Volume
    var Albedo_T1_T5 = Albedo_T1_T5_1toMax_Volume - Albedo_T1_T5_1toMin_Volume
    document.getElementById('Albedo_T1_T1_Volume').innerHTML = Albedo_T1_T1;
    document.getElementById('Albedo_T1_T2_Volume').innerHTML = Albedo_T1_T2;
    document.getElementById('Albedo_T1_T3_Volume').innerHTML = Albedo_T1_T3;
    document.getElementById('Albedo_T1_T4_Volume').innerHTML = Albedo_T1_T4;
    document.getElementById('Albedo_T1_T5_Volume').innerHTML = Albedo_T1_T5.toLocaleString();
  });
  Albedo_T2.noUiSlider.on('update', function (values, handle) {
    var Albedo_T2_Min_Volume = "L1toL" + Albedo_T2.noUiSlider.get()[0];
    var Albedo_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[0])["T1_" + [Albedo_T2_Min_Volume]]);
    var Albedo_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[0])["T2_" + [Albedo_T2_Min_Volume]]);
    var Albedo_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[0])["T3_" + [Albedo_T2_Min_Volume]]);
    var Albedo_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[0])["T4_" + [Albedo_T2_Min_Volume]]);
    var Albedo_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[0])["T5_" + [Albedo_T2_Min_Volume]]);
    var Albedo_T2_Max_Volume = "L1toL" + Albedo_T2.noUiSlider.get()[1];
    var Albedo_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[1])["T1_" + [Albedo_T2_Max_Volume]]);
    var Albedo_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[1])["T2_" + [Albedo_T2_Max_Volume]]);
    var Albedo_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[1])["T3_" + [Albedo_T2_Max_Volume]]);
    var Albedo_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[1])["T4_" + [Albedo_T2_Max_Volume]]);
    var Albedo_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T2.noUiSlider.get()[1])["T5_" + [Albedo_T2_Max_Volume]]);
    var Albedo_T2_T1 = Albedo_T2_T1_1toMax_Volume - Albedo_T2_T1_1toMin_Volume
    var Albedo_T2_T2 = Albedo_T2_T2_1toMax_Volume - Albedo_T2_T2_1toMin_Volume
    var Albedo_T2_T3 = Albedo_T2_T3_1toMax_Volume - Albedo_T2_T3_1toMin_Volume
    var Albedo_T2_T4 = Albedo_T2_T4_1toMax_Volume - Albedo_T2_T4_1toMin_Volume
    var Albedo_T2_T5 = Albedo_T2_T5_1toMax_Volume - Albedo_T2_T5_1toMin_Volume
    document.getElementById('Albedo_T2_T1_Volume').innerHTML = Albedo_T2_T1;
    document.getElementById('Albedo_T2_T2_Volume').innerHTML = Albedo_T2_T2;
    document.getElementById('Albedo_T2_T3_Volume').innerHTML = Albedo_T2_T3;
    document.getElementById('Albedo_T2_T4_Volume').innerHTML = Albedo_T2_T4;
    document.getElementById('Albedo_T2_T5_Volume').innerHTML = Albedo_T2_T5.toLocaleString();
  });
  Albedo_T3.noUiSlider.on('update', function (values, handle) {
    var Albedo_T3_Min_Volume = "L1toL" + Albedo_T3.noUiSlider.get()[0];
    var Albedo_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[0])["T1_" + [Albedo_T3_Min_Volume]]);
    var Albedo_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[0])["T2_" + [Albedo_T3_Min_Volume]]);
    var Albedo_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[0])["T3_" + [Albedo_T3_Min_Volume]]);
    var Albedo_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[0])["T4_" + [Albedo_T3_Min_Volume]]);
    var Albedo_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[0])["T5_" + [Albedo_T3_Min_Volume]]);
    var Albedo_T3_Max_Volume = "L1toL" + Albedo_T3.noUiSlider.get()[1];
    var Albedo_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[1])["T1_" + [Albedo_T3_Max_Volume]]);
    var Albedo_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[1])["T2_" + [Albedo_T3_Max_Volume]]);
    var Albedo_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[1])["T3_" + [Albedo_T3_Max_Volume]]);
    var Albedo_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[1])["T4_" + [Albedo_T3_Max_Volume]]);
    var Albedo_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Albedo_T3.noUiSlider.get()[1])["T5_" + [Albedo_T3_Max_Volume]]);
    var Albedo_T3_T1 = Albedo_T3_T1_1toMax_Volume - Albedo_T3_T1_1toMin_Volume
    var Albedo_T3_T2 = Albedo_T3_T2_1toMax_Volume - Albedo_T3_T2_1toMin_Volume
    var Albedo_T3_T3 = Albedo_T3_T3_1toMax_Volume - Albedo_T3_T3_1toMin_Volume
    var Albedo_T3_T4 = Albedo_T3_T4_1toMax_Volume - Albedo_T3_T4_1toMin_Volume
    var Albedo_T3_T5 = Albedo_T3_T5_1toMax_Volume - Albedo_T3_T5_1toMin_Volume
    document.getElementById('Albedo_T3_T1_Volume').innerHTML = Albedo_T3_T1;
    document.getElementById('Albedo_T3_T2_Volume').innerHTML = Albedo_T3_T2;
    document.getElementById('Albedo_T3_T3_Volume').innerHTML = Albedo_T3_T3;
    document.getElementById('Albedo_T3_T4_Volume').innerHTML = Albedo_T3_T4;
    document.getElementById('Albedo_T3_T5_Volume').innerHTML = Albedo_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Albedo  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Zhongli  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Zhongli_Ex = document.getElementById('Zhongli_Ex');
noUiSlider.create(Zhongli_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Zhongli_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Zhongli_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Zhongli_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Zhongli_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function ZhongliLoad() {
  Zhongli_Ex.noUiSlider.on('update', function (values, handle) {
    var Zhongli_Ex_Min_Volume = "L1toL" + Zhongli_Ex.noUiSlider.get()[0];
    var Zhongli_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Zhongli_Ex.noUiSlider.get()[0])[Zhongli_Ex_Min_Volume]);
    var Zhongli_Ex_Max_Volume = "L1toL" + Zhongli_Ex.noUiSlider.get()[1];
    var Zhongli_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Zhongli_Ex.noUiSlider.get()[1])[Zhongli_Ex_Max_Volume]);
    var Zhongli_Ex_Volume = Zhongli_Ex_1toMax_Volume - Zhongli_Ex_1toMin_Volume
    var Zhongli_Ex_Book_Volume = Zhongli_Ex_Volume / 1000
    var Zhongli_Ex_Mora_Volume = Zhongli_Ex_Volume * 0.2
    document.getElementById('Zhongli_Ex_Volume').innerHTML = Zhongli_Ex_Volume.toLocaleString();
    document.getElementById('Zhongli_Ex_Book_Volume').innerHTML = Zhongli_Ex_Book_Volume.toLocaleString();
    document.getElementById('Zhongli_Ex_Mora_Volume').innerHTML = Zhongli_Ex_Mora_Volume.toLocaleString();
  });
  Zhongli_Pr.noUiSlider.on('update', function (values, handle) {
    var Zhongli_Pr_Min_Volume = "L1toL" + Zhongli_Pr.noUiSlider.get()[0];
    var Zhongli_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[0])["P1_" + [Zhongli_Pr_Min_Volume]]);
    var Zhongli_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[0])["P2_" + [Zhongli_Pr_Min_Volume]]);
    var Zhongli_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[0])["P3_" + [Zhongli_Pr_Min_Volume]]);
    var Zhongli_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[0])["P4_" + [Zhongli_Pr_Min_Volume]]);
    var Zhongli_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[0])["P5_" + [Zhongli_Pr_Min_Volume]]);
    var Zhongli_Pr_Max_Volume = "L1toL" + Zhongli_Pr.noUiSlider.get()[1];
    var Zhongli_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[1])["P1_" + [Zhongli_Pr_Max_Volume]]);
    var Zhongli_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[1])["P2_" + [Zhongli_Pr_Max_Volume]]);
    var Zhongli_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[1])["P3_" + [Zhongli_Pr_Max_Volume]]);
    var Zhongli_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[1])["P4_" + [Zhongli_Pr_Max_Volume]]);
    var Zhongli_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Zhongli_Pr.noUiSlider.get()[1])["P5_" + [Zhongli_Pr_Max_Volume]]);
    var Zhongli_Pr_P1 = Zhongli_Pr_P1_1toMax_Volume - Zhongli_Pr_P1_1toMin_Volume
    var Zhongli_Pr_P2 = Zhongli_Pr_P2_1toMax_Volume - Zhongli_Pr_P2_1toMin_Volume
    var Zhongli_Pr_P3 = Zhongli_Pr_P3_1toMax_Volume - Zhongli_Pr_P3_1toMin_Volume
    var Zhongli_Pr_P4 = Zhongli_Pr_P4_1toMax_Volume - Zhongli_Pr_P4_1toMin_Volume
    var Zhongli_Pr_P5 = Zhongli_Pr_P5_1toMax_Volume - Zhongli_Pr_P5_1toMin_Volume
    document.getElementById('Zhongli_Pr_P1_Volume').innerHTML = Zhongli_Pr_P1;
    document.getElementById('Zhongli_Pr_P2_Volume').innerHTML = Zhongli_Pr_P2;
    document.getElementById('Zhongli_Pr_P3_Volume').innerHTML = Zhongli_Pr_P3;
    document.getElementById('Zhongli_Pr_P4_Volume').innerHTML = Zhongli_Pr_P4;
    document.getElementById('Zhongli_Pr_P5_Volume').innerHTML = Zhongli_Pr_P5.toLocaleString();
  });
  Zhongli_T1.noUiSlider.on('update', function (values, handle) {
    var Zhongli_T1_Min_Volume = "L1toL" + Zhongli_T1.noUiSlider.get()[0];
    var Zhongli_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[0])["T1_" + [Zhongli_T1_Min_Volume]]);
    var Zhongli_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[0])["T2_" + [Zhongli_T1_Min_Volume]]);
    var Zhongli_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[0])["T3_" + [Zhongli_T1_Min_Volume]]);
    var Zhongli_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[0])["T4_" + [Zhongli_T1_Min_Volume]]);
    var Zhongli_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[0])["T5_" + [Zhongli_T1_Min_Volume]]);
    var Zhongli_T1_Max_Volume = "L1toL" + Zhongli_T1.noUiSlider.get()[1];
    var Zhongli_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[1])["T1_" + [Zhongli_T1_Max_Volume]]);
    var Zhongli_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[1])["T2_" + [Zhongli_T1_Max_Volume]]);
    var Zhongli_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[1])["T3_" + [Zhongli_T1_Max_Volume]]);
    var Zhongli_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[1])["T4_" + [Zhongli_T1_Max_Volume]]);
    var Zhongli_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T1.noUiSlider.get()[1])["T5_" + [Zhongli_T1_Max_Volume]]);
    var Zhongli_T1_T1 = Zhongli_T1_T1_1toMax_Volume - Zhongli_T1_T1_1toMin_Volume
    var Zhongli_T1_T2 = Zhongli_T1_T2_1toMax_Volume - Zhongli_T1_T2_1toMin_Volume
    var Zhongli_T1_T3 = Zhongli_T1_T3_1toMax_Volume - Zhongli_T1_T3_1toMin_Volume
    var Zhongli_T1_T4 = Zhongli_T1_T4_1toMax_Volume - Zhongli_T1_T4_1toMin_Volume
    var Zhongli_T1_T5 = Zhongli_T1_T5_1toMax_Volume - Zhongli_T1_T5_1toMin_Volume
    document.getElementById('Zhongli_T1_T1_Volume').innerHTML = Zhongli_T1_T1;
    document.getElementById('Zhongli_T1_T2_Volume').innerHTML = Zhongli_T1_T2;
    document.getElementById('Zhongli_T1_T3_Volume').innerHTML = Zhongli_T1_T3;
    document.getElementById('Zhongli_T1_T4_Volume').innerHTML = Zhongli_T1_T4;
    document.getElementById('Zhongli_T1_T5_Volume').innerHTML = Zhongli_T1_T5.toLocaleString();
  });
  Zhongli_T2.noUiSlider.on('update', function (values, handle) {
    var Zhongli_T2_Min_Volume = "L1toL" + Zhongli_T2.noUiSlider.get()[0];
    var Zhongli_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[0])["T1_" + [Zhongli_T2_Min_Volume]]);
    var Zhongli_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[0])["T2_" + [Zhongli_T2_Min_Volume]]);
    var Zhongli_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[0])["T3_" + [Zhongli_T2_Min_Volume]]);
    var Zhongli_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[0])["T4_" + [Zhongli_T2_Min_Volume]]);
    var Zhongli_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[0])["T5_" + [Zhongli_T2_Min_Volume]]);
    var Zhongli_T2_Max_Volume = "L1toL" + Zhongli_T2.noUiSlider.get()[1];
    var Zhongli_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[1])["T1_" + [Zhongli_T2_Max_Volume]]);
    var Zhongli_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[1])["T2_" + [Zhongli_T2_Max_Volume]]);
    var Zhongli_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[1])["T3_" + [Zhongli_T2_Max_Volume]]);
    var Zhongli_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[1])["T4_" + [Zhongli_T2_Max_Volume]]);
    var Zhongli_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T2.noUiSlider.get()[1])["T5_" + [Zhongli_T2_Max_Volume]]);
    var Zhongli_T2_T1 = Zhongli_T2_T1_1toMax_Volume - Zhongli_T2_T1_1toMin_Volume
    var Zhongli_T2_T2 = Zhongli_T2_T2_1toMax_Volume - Zhongli_T2_T2_1toMin_Volume
    var Zhongli_T2_T3 = Zhongli_T2_T3_1toMax_Volume - Zhongli_T2_T3_1toMin_Volume
    var Zhongli_T2_T4 = Zhongli_T2_T4_1toMax_Volume - Zhongli_T2_T4_1toMin_Volume
    var Zhongli_T2_T5 = Zhongli_T2_T5_1toMax_Volume - Zhongli_T2_T5_1toMin_Volume
    document.getElementById('Zhongli_T2_T1_Volume').innerHTML = Zhongli_T2_T1;
    document.getElementById('Zhongli_T2_T2_Volume').innerHTML = Zhongli_T2_T2;
    document.getElementById('Zhongli_T2_T3_Volume').innerHTML = Zhongli_T2_T3;
    document.getElementById('Zhongli_T2_T4_Volume').innerHTML = Zhongli_T2_T4;
    document.getElementById('Zhongli_T2_T5_Volume').innerHTML = Zhongli_T2_T5.toLocaleString();
  });
  Zhongli_T3.noUiSlider.on('update', function (values, handle) {
    var Zhongli_T3_Min_Volume = "L1toL" + Zhongli_T3.noUiSlider.get()[0];
    var Zhongli_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[0])["T1_" + [Zhongli_T3_Min_Volume]]);
    var Zhongli_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[0])["T2_" + [Zhongli_T3_Min_Volume]]);
    var Zhongli_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[0])["T3_" + [Zhongli_T3_Min_Volume]]);
    var Zhongli_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[0])["T4_" + [Zhongli_T3_Min_Volume]]);
    var Zhongli_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[0])["T5_" + [Zhongli_T3_Min_Volume]]);
    var Zhongli_T3_Max_Volume = "L1toL" + Zhongli_T3.noUiSlider.get()[1];
    var Zhongli_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[1])["T1_" + [Zhongli_T3_Max_Volume]]);
    var Zhongli_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[1])["T2_" + [Zhongli_T3_Max_Volume]]);
    var Zhongli_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[1])["T3_" + [Zhongli_T3_Max_Volume]]);
    var Zhongli_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[1])["T4_" + [Zhongli_T3_Max_Volume]]);
    var Zhongli_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Zhongli_T3.noUiSlider.get()[1])["T5_" + [Zhongli_T3_Max_Volume]]);
    var Zhongli_T3_T1 = Zhongli_T3_T1_1toMax_Volume - Zhongli_T3_T1_1toMin_Volume
    var Zhongli_T3_T2 = Zhongli_T3_T2_1toMax_Volume - Zhongli_T3_T2_1toMin_Volume
    var Zhongli_T3_T3 = Zhongli_T3_T3_1toMax_Volume - Zhongli_T3_T3_1toMin_Volume
    var Zhongli_T3_T4 = Zhongli_T3_T4_1toMax_Volume - Zhongli_T3_T4_1toMin_Volume
    var Zhongli_T3_T5 = Zhongli_T3_T5_1toMax_Volume - Zhongli_T3_T5_1toMin_Volume
    document.getElementById('Zhongli_T3_T1_Volume').innerHTML = Zhongli_T3_T1;
    document.getElementById('Zhongli_T3_T2_Volume').innerHTML = Zhongli_T3_T2;
    document.getElementById('Zhongli_T3_T3_Volume').innerHTML = Zhongli_T3_T3;
    document.getElementById('Zhongli_T3_T4_Volume').innerHTML = Zhongli_T3_T4;
    document.getElementById('Zhongli_T3_T5_Volume').innerHTML = Zhongli_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Zhongli  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Xinyan  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Xinyan_Ex = document.getElementById('Xinyan_Ex');
noUiSlider.create(Xinyan_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xinyan_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xinyan_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xinyan_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xinyan_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function XinyanLoad() {
  Xinyan_Ex.noUiSlider.on('update', function (values, handle) {
    var Xinyan_Ex_Min_Volume = "L1toL" + Xinyan_Ex.noUiSlider.get()[0];
    var Xinyan_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Xinyan_Ex.noUiSlider.get()[0])[Xinyan_Ex_Min_Volume]);
    var Xinyan_Ex_Max_Volume = "L1toL" + Xinyan_Ex.noUiSlider.get()[1];
    var Xinyan_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Xinyan_Ex.noUiSlider.get()[1])[Xinyan_Ex_Max_Volume]);
    var Xinyan_Ex_Volume = Xinyan_Ex_1toMax_Volume - Xinyan_Ex_1toMin_Volume
    var Xinyan_Ex_Book_Volume = Xinyan_Ex_Volume / 1000
    var Xinyan_Ex_Mora_Volume = Xinyan_Ex_Volume * 0.2
    document.getElementById('Xinyan_Ex_Volume').innerHTML = Xinyan_Ex_Volume.toLocaleString();
    document.getElementById('Xinyan_Ex_Book_Volume').innerHTML = Xinyan_Ex_Book_Volume.toLocaleString();
    document.getElementById('Xinyan_Ex_Mora_Volume').innerHTML = Xinyan_Ex_Mora_Volume.toLocaleString();
  });
  Xinyan_Pr.noUiSlider.on('update', function (values, handle) {
    var Xinyan_Pr_Min_Volume = "L1toL" + Xinyan_Pr.noUiSlider.get()[0];
    var Xinyan_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[0])["P1_" + [Xinyan_Pr_Min_Volume]]);
    var Xinyan_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[0])["P2_" + [Xinyan_Pr_Min_Volume]]);
    var Xinyan_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[0])["P3_" + [Xinyan_Pr_Min_Volume]]);
    var Xinyan_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[0])["P4_" + [Xinyan_Pr_Min_Volume]]);
    var Xinyan_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[0])["P5_" + [Xinyan_Pr_Min_Volume]]);
    var Xinyan_Pr_Max_Volume = "L1toL" + Xinyan_Pr.noUiSlider.get()[1];
    var Xinyan_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[1])["P1_" + [Xinyan_Pr_Max_Volume]]);
    var Xinyan_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[1])["P2_" + [Xinyan_Pr_Max_Volume]]);
    var Xinyan_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[1])["P3_" + [Xinyan_Pr_Max_Volume]]);
    var Xinyan_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[1])["P4_" + [Xinyan_Pr_Max_Volume]]);
    var Xinyan_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xinyan_Pr.noUiSlider.get()[1])["P5_" + [Xinyan_Pr_Max_Volume]]);
    var Xinyan_Pr_P1 = Xinyan_Pr_P1_1toMax_Volume - Xinyan_Pr_P1_1toMin_Volume
    var Xinyan_Pr_P2 = Xinyan_Pr_P2_1toMax_Volume - Xinyan_Pr_P2_1toMin_Volume
    var Xinyan_Pr_P3 = Xinyan_Pr_P3_1toMax_Volume - Xinyan_Pr_P3_1toMin_Volume
    var Xinyan_Pr_P4 = Xinyan_Pr_P4_1toMax_Volume - Xinyan_Pr_P4_1toMin_Volume
    var Xinyan_Pr_P5 = Xinyan_Pr_P5_1toMax_Volume - Xinyan_Pr_P5_1toMin_Volume
    document.getElementById('Xinyan_Pr_P1_Volume').innerHTML = Xinyan_Pr_P1;
    document.getElementById('Xinyan_Pr_P2_Volume').innerHTML = Xinyan_Pr_P2;
    document.getElementById('Xinyan_Pr_P3_Volume').innerHTML = Xinyan_Pr_P3;
    document.getElementById('Xinyan_Pr_P4_Volume').innerHTML = Xinyan_Pr_P4;
    document.getElementById('Xinyan_Pr_P5_Volume').innerHTML = Xinyan_Pr_P5.toLocaleString();
  });
  Xinyan_T1.noUiSlider.on('update', function (values, handle) {
    var Xinyan_T1_Min_Volume = "L1toL" + Xinyan_T1.noUiSlider.get()[0];
    var Xinyan_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[0])["T1_" + [Xinyan_T1_Min_Volume]]);
    var Xinyan_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[0])["T2_" + [Xinyan_T1_Min_Volume]]);
    var Xinyan_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[0])["T3_" + [Xinyan_T1_Min_Volume]]);
    var Xinyan_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[0])["T4_" + [Xinyan_T1_Min_Volume]]);
    var Xinyan_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[0])["T5_" + [Xinyan_T1_Min_Volume]]);
    var Xinyan_T1_Max_Volume = "L1toL" + Xinyan_T1.noUiSlider.get()[1];
    var Xinyan_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[1])["T1_" + [Xinyan_T1_Max_Volume]]);
    var Xinyan_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[1])["T2_" + [Xinyan_T1_Max_Volume]]);
    var Xinyan_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[1])["T3_" + [Xinyan_T1_Max_Volume]]);
    var Xinyan_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[1])["T4_" + [Xinyan_T1_Max_Volume]]);
    var Xinyan_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T1.noUiSlider.get()[1])["T5_" + [Xinyan_T1_Max_Volume]]);
    var Xinyan_T1_T1 = Xinyan_T1_T1_1toMax_Volume - Xinyan_T1_T1_1toMin_Volume
    var Xinyan_T1_T2 = Xinyan_T1_T2_1toMax_Volume - Xinyan_T1_T2_1toMin_Volume
    var Xinyan_T1_T3 = Xinyan_T1_T3_1toMax_Volume - Xinyan_T1_T3_1toMin_Volume
    var Xinyan_T1_T4 = Xinyan_T1_T4_1toMax_Volume - Xinyan_T1_T4_1toMin_Volume
    var Xinyan_T1_T5 = Xinyan_T1_T5_1toMax_Volume - Xinyan_T1_T5_1toMin_Volume
    document.getElementById('Xinyan_T1_T1_Volume').innerHTML = Xinyan_T1_T1;
    document.getElementById('Xinyan_T1_T2_Volume').innerHTML = Xinyan_T1_T2;
    document.getElementById('Xinyan_T1_T3_Volume').innerHTML = Xinyan_T1_T3;
    document.getElementById('Xinyan_T1_T4_Volume').innerHTML = Xinyan_T1_T4;
    document.getElementById('Xinyan_T1_T5_Volume').innerHTML = Xinyan_T1_T5.toLocaleString();
  });
  Xinyan_T2.noUiSlider.on('update', function (values, handle) {
    var Xinyan_T2_Min_Volume = "L1toL" + Xinyan_T2.noUiSlider.get()[0];
    var Xinyan_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[0])["T1_" + [Xinyan_T2_Min_Volume]]);
    var Xinyan_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[0])["T2_" + [Xinyan_T2_Min_Volume]]);
    var Xinyan_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[0])["T3_" + [Xinyan_T2_Min_Volume]]);
    var Xinyan_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[0])["T4_" + [Xinyan_T2_Min_Volume]]);
    var Xinyan_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[0])["T5_" + [Xinyan_T2_Min_Volume]]);
    var Xinyan_T2_Max_Volume = "L1toL" + Xinyan_T2.noUiSlider.get()[1];
    var Xinyan_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[1])["T1_" + [Xinyan_T2_Max_Volume]]);
    var Xinyan_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[1])["T2_" + [Xinyan_T2_Max_Volume]]);
    var Xinyan_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[1])["T3_" + [Xinyan_T2_Max_Volume]]);
    var Xinyan_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[1])["T4_" + [Xinyan_T2_Max_Volume]]);
    var Xinyan_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T2.noUiSlider.get()[1])["T5_" + [Xinyan_T2_Max_Volume]]);
    var Xinyan_T2_T1 = Xinyan_T2_T1_1toMax_Volume - Xinyan_T2_T1_1toMin_Volume
    var Xinyan_T2_T2 = Xinyan_T2_T2_1toMax_Volume - Xinyan_T2_T2_1toMin_Volume
    var Xinyan_T2_T3 = Xinyan_T2_T3_1toMax_Volume - Xinyan_T2_T3_1toMin_Volume
    var Xinyan_T2_T4 = Xinyan_T2_T4_1toMax_Volume - Xinyan_T2_T4_1toMin_Volume
    var Xinyan_T2_T5 = Xinyan_T2_T5_1toMax_Volume - Xinyan_T2_T5_1toMin_Volume
    document.getElementById('Xinyan_T2_T1_Volume').innerHTML = Xinyan_T2_T1;
    document.getElementById('Xinyan_T2_T2_Volume').innerHTML = Xinyan_T2_T2;
    document.getElementById('Xinyan_T2_T3_Volume').innerHTML = Xinyan_T2_T3;
    document.getElementById('Xinyan_T2_T4_Volume').innerHTML = Xinyan_T2_T4;
    document.getElementById('Xinyan_T2_T5_Volume').innerHTML = Xinyan_T2_T5.toLocaleString();
  });
  Xinyan_T3.noUiSlider.on('update', function (values, handle) {
    var Xinyan_T3_Min_Volume = "L1toL" + Xinyan_T3.noUiSlider.get()[0];
    var Xinyan_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[0])["T1_" + [Xinyan_T3_Min_Volume]]);
    var Xinyan_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[0])["T2_" + [Xinyan_T3_Min_Volume]]);
    var Xinyan_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[0])["T3_" + [Xinyan_T3_Min_Volume]]);
    var Xinyan_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[0])["T4_" + [Xinyan_T3_Min_Volume]]);
    var Xinyan_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[0])["T5_" + [Xinyan_T3_Min_Volume]]);
    var Xinyan_T3_Max_Volume = "L1toL" + Xinyan_T3.noUiSlider.get()[1];
    var Xinyan_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[1])["T1_" + [Xinyan_T3_Max_Volume]]);
    var Xinyan_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[1])["T2_" + [Xinyan_T3_Max_Volume]]);
    var Xinyan_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[1])["T3_" + [Xinyan_T3_Max_Volume]]);
    var Xinyan_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[1])["T4_" + [Xinyan_T3_Max_Volume]]);
    var Xinyan_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xinyan_T3.noUiSlider.get()[1])["T5_" + [Xinyan_T3_Max_Volume]]);
    var Xinyan_T3_T1 = Xinyan_T3_T1_1toMax_Volume - Xinyan_T3_T1_1toMin_Volume
    var Xinyan_T3_T2 = Xinyan_T3_T2_1toMax_Volume - Xinyan_T3_T2_1toMin_Volume
    var Xinyan_T3_T3 = Xinyan_T3_T3_1toMax_Volume - Xinyan_T3_T3_1toMin_Volume
    var Xinyan_T3_T4 = Xinyan_T3_T4_1toMax_Volume - Xinyan_T3_T4_1toMin_Volume
    var Xinyan_T3_T5 = Xinyan_T3_T5_1toMax_Volume - Xinyan_T3_T5_1toMin_Volume
    document.getElementById('Xinyan_T3_T1_Volume').innerHTML = Xinyan_T3_T1;
    document.getElementById('Xinyan_T3_T2_Volume').innerHTML = Xinyan_T3_T2;
    document.getElementById('Xinyan_T3_T3_Volume').innerHTML = Xinyan_T3_T3;
    document.getElementById('Xinyan_T3_T4_Volume').innerHTML = Xinyan_T3_T4;
    document.getElementById('Xinyan_T3_T5_Volume').innerHTML = Xinyan_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Xinyan  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Tartaglia  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Tartaglia_Ex = document.getElementById('Tartaglia_Ex');
noUiSlider.create(Tartaglia_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Tartaglia_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Tartaglia_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Tartaglia_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Tartaglia_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function TartagliaLoad() {
  Tartaglia_Ex.noUiSlider.on('update', function (values, handle) {
    var Tartaglia_Ex_Min_Volume = "L1toL" + Tartaglia_Ex.noUiSlider.get()[0];
    var Tartaglia_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Tartaglia_Ex.noUiSlider.get()[0])[Tartaglia_Ex_Min_Volume]);
    var Tartaglia_Ex_Max_Volume = "L1toL" + Tartaglia_Ex.noUiSlider.get()[1];
    var Tartaglia_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Tartaglia_Ex.noUiSlider.get()[1])[Tartaglia_Ex_Max_Volume]);
    var Tartaglia_Ex_Volume = Tartaglia_Ex_1toMax_Volume - Tartaglia_Ex_1toMin_Volume
    var Tartaglia_Ex_Book_Volume = Tartaglia_Ex_Volume / 1000
    var Tartaglia_Ex_Mora_Volume = Tartaglia_Ex_Volume * 0.2
    document.getElementById('Tartaglia_Ex_Volume').innerHTML = Tartaglia_Ex_Volume.toLocaleString();
    document.getElementById('Tartaglia_Ex_Book_Volume').innerHTML = Tartaglia_Ex_Book_Volume.toLocaleString();
    document.getElementById('Tartaglia_Ex_Mora_Volume').innerHTML = Tartaglia_Ex_Mora_Volume.toLocaleString();
  });
  Tartaglia_Pr.noUiSlider.on('update', function (values, handle) {
    var Tartaglia_Pr_Min_Volume = "L1toL" + Tartaglia_Pr.noUiSlider.get()[0];
    var Tartaglia_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[0])["P1_" + [Tartaglia_Pr_Min_Volume]]);
    var Tartaglia_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[0])["P2_" + [Tartaglia_Pr_Min_Volume]]);
    var Tartaglia_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[0])["P3_" + [Tartaglia_Pr_Min_Volume]]);
    var Tartaglia_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[0])["P4_" + [Tartaglia_Pr_Min_Volume]]);
    var Tartaglia_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[0])["P5_" + [Tartaglia_Pr_Min_Volume]]);
    var Tartaglia_Pr_Max_Volume = "L1toL" + Tartaglia_Pr.noUiSlider.get()[1];
    var Tartaglia_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[1])["P1_" + [Tartaglia_Pr_Max_Volume]]);
    var Tartaglia_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[1])["P2_" + [Tartaglia_Pr_Max_Volume]]);
    var Tartaglia_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[1])["P3_" + [Tartaglia_Pr_Max_Volume]]);
    var Tartaglia_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[1])["P4_" + [Tartaglia_Pr_Max_Volume]]);
    var Tartaglia_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Tartaglia_Pr.noUiSlider.get()[1])["P5_" + [Tartaglia_Pr_Max_Volume]]);
    var Tartaglia_Pr_P1 = Tartaglia_Pr_P1_1toMax_Volume - Tartaglia_Pr_P1_1toMin_Volume
    var Tartaglia_Pr_P2 = Tartaglia_Pr_P2_1toMax_Volume - Tartaglia_Pr_P2_1toMin_Volume
    var Tartaglia_Pr_P3 = Tartaglia_Pr_P3_1toMax_Volume - Tartaglia_Pr_P3_1toMin_Volume
    var Tartaglia_Pr_P4 = Tartaglia_Pr_P4_1toMax_Volume - Tartaglia_Pr_P4_1toMin_Volume
    var Tartaglia_Pr_P5 = Tartaglia_Pr_P5_1toMax_Volume - Tartaglia_Pr_P5_1toMin_Volume
    document.getElementById('Tartaglia_Pr_P1_Volume').innerHTML = Tartaglia_Pr_P1;
    document.getElementById('Tartaglia_Pr_P2_Volume').innerHTML = Tartaglia_Pr_P2;
    document.getElementById('Tartaglia_Pr_P3_Volume').innerHTML = Tartaglia_Pr_P3;
    document.getElementById('Tartaglia_Pr_P4_Volume').innerHTML = Tartaglia_Pr_P4;
    document.getElementById('Tartaglia_Pr_P5_Volume').innerHTML = Tartaglia_Pr_P5.toLocaleString();
  });
  Tartaglia_T1.noUiSlider.on('update', function (values, handle) {
    var Tartaglia_T1_Min_Volume = "L1toL" + Tartaglia_T1.noUiSlider.get()[0];
    var Tartaglia_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[0])["T1_" + [Tartaglia_T1_Min_Volume]]);
    var Tartaglia_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[0])["T2_" + [Tartaglia_T1_Min_Volume]]);
    var Tartaglia_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[0])["T3_" + [Tartaglia_T1_Min_Volume]]);
    var Tartaglia_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[0])["T4_" + [Tartaglia_T1_Min_Volume]]);
    var Tartaglia_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[0])["T5_" + [Tartaglia_T1_Min_Volume]]);
    var Tartaglia_T1_Max_Volume = "L1toL" + Tartaglia_T1.noUiSlider.get()[1];
    var Tartaglia_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[1])["T1_" + [Tartaglia_T1_Max_Volume]]);
    var Tartaglia_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[1])["T2_" + [Tartaglia_T1_Max_Volume]]);
    var Tartaglia_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[1])["T3_" + [Tartaglia_T1_Max_Volume]]);
    var Tartaglia_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[1])["T4_" + [Tartaglia_T1_Max_Volume]]);
    var Tartaglia_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T1.noUiSlider.get()[1])["T5_" + [Tartaglia_T1_Max_Volume]]);
    var Tartaglia_T1_T1 = Tartaglia_T1_T1_1toMax_Volume - Tartaglia_T1_T1_1toMin_Volume
    var Tartaglia_T1_T2 = Tartaglia_T1_T2_1toMax_Volume - Tartaglia_T1_T2_1toMin_Volume
    var Tartaglia_T1_T3 = Tartaglia_T1_T3_1toMax_Volume - Tartaglia_T1_T3_1toMin_Volume
    var Tartaglia_T1_T4 = Tartaglia_T1_T4_1toMax_Volume - Tartaglia_T1_T4_1toMin_Volume
    var Tartaglia_T1_T5 = Tartaglia_T1_T5_1toMax_Volume - Tartaglia_T1_T5_1toMin_Volume
    document.getElementById('Tartaglia_T1_T1_Volume').innerHTML = Tartaglia_T1_T1;
    document.getElementById('Tartaglia_T1_T2_Volume').innerHTML = Tartaglia_T1_T2;
    document.getElementById('Tartaglia_T1_T3_Volume').innerHTML = Tartaglia_T1_T3;
    document.getElementById('Tartaglia_T1_T4_Volume').innerHTML = Tartaglia_T1_T4;
    document.getElementById('Tartaglia_T1_T5_Volume').innerHTML = Tartaglia_T1_T5.toLocaleString();
  });
  Tartaglia_T2.noUiSlider.on('update', function (values, handle) {
    var Tartaglia_T2_Min_Volume = "L1toL" + Tartaglia_T2.noUiSlider.get()[0];
    var Tartaglia_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[0])["T1_" + [Tartaglia_T2_Min_Volume]]);
    var Tartaglia_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[0])["T2_" + [Tartaglia_T2_Min_Volume]]);
    var Tartaglia_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[0])["T3_" + [Tartaglia_T2_Min_Volume]]);
    var Tartaglia_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[0])["T4_" + [Tartaglia_T2_Min_Volume]]);
    var Tartaglia_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[0])["T5_" + [Tartaglia_T2_Min_Volume]]);
    var Tartaglia_T2_Max_Volume = "L1toL" + Tartaglia_T2.noUiSlider.get()[1];
    var Tartaglia_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[1])["T1_" + [Tartaglia_T2_Max_Volume]]);
    var Tartaglia_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[1])["T2_" + [Tartaglia_T2_Max_Volume]]);
    var Tartaglia_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[1])["T3_" + [Tartaglia_T2_Max_Volume]]);
    var Tartaglia_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[1])["T4_" + [Tartaglia_T2_Max_Volume]]);
    var Tartaglia_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T2.noUiSlider.get()[1])["T5_" + [Tartaglia_T2_Max_Volume]]);
    var Tartaglia_T2_T1 = Tartaglia_T2_T1_1toMax_Volume - Tartaglia_T2_T1_1toMin_Volume
    var Tartaglia_T2_T2 = Tartaglia_T2_T2_1toMax_Volume - Tartaglia_T2_T2_1toMin_Volume
    var Tartaglia_T2_T3 = Tartaglia_T2_T3_1toMax_Volume - Tartaglia_T2_T3_1toMin_Volume
    var Tartaglia_T2_T4 = Tartaglia_T2_T4_1toMax_Volume - Tartaglia_T2_T4_1toMin_Volume
    var Tartaglia_T2_T5 = Tartaglia_T2_T5_1toMax_Volume - Tartaglia_T2_T5_1toMin_Volume
    document.getElementById('Tartaglia_T2_T1_Volume').innerHTML = Tartaglia_T2_T1;
    document.getElementById('Tartaglia_T2_T2_Volume').innerHTML = Tartaglia_T2_T2;
    document.getElementById('Tartaglia_T2_T3_Volume').innerHTML = Tartaglia_T2_T3;
    document.getElementById('Tartaglia_T2_T4_Volume').innerHTML = Tartaglia_T2_T4;
    document.getElementById('Tartaglia_T2_T5_Volume').innerHTML = Tartaglia_T2_T5.toLocaleString();
  });
  Tartaglia_T3.noUiSlider.on('update', function (values, handle) {
    var Tartaglia_T3_Min_Volume = "L1toL" + Tartaglia_T3.noUiSlider.get()[0];
    var Tartaglia_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[0])["T1_" + [Tartaglia_T3_Min_Volume]]);
    var Tartaglia_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[0])["T2_" + [Tartaglia_T3_Min_Volume]]);
    var Tartaglia_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[0])["T3_" + [Tartaglia_T3_Min_Volume]]);
    var Tartaglia_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[0])["T4_" + [Tartaglia_T3_Min_Volume]]);
    var Tartaglia_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[0])["T5_" + [Tartaglia_T3_Min_Volume]]);
    var Tartaglia_T3_Max_Volume = "L1toL" + Tartaglia_T3.noUiSlider.get()[1];
    var Tartaglia_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[1])["T1_" + [Tartaglia_T3_Max_Volume]]);
    var Tartaglia_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[1])["T2_" + [Tartaglia_T3_Max_Volume]]);
    var Tartaglia_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[1])["T3_" + [Tartaglia_T3_Max_Volume]]);
    var Tartaglia_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[1])["T4_" + [Tartaglia_T3_Max_Volume]]);
    var Tartaglia_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Tartaglia_T3.noUiSlider.get()[1])["T5_" + [Tartaglia_T3_Max_Volume]]);
    var Tartaglia_T3_T1 = Tartaglia_T3_T1_1toMax_Volume - Tartaglia_T3_T1_1toMin_Volume
    var Tartaglia_T3_T2 = Tartaglia_T3_T2_1toMax_Volume - Tartaglia_T3_T2_1toMin_Volume
    var Tartaglia_T3_T3 = Tartaglia_T3_T3_1toMax_Volume - Tartaglia_T3_T3_1toMin_Volume
    var Tartaglia_T3_T4 = Tartaglia_T3_T4_1toMax_Volume - Tartaglia_T3_T4_1toMin_Volume
    var Tartaglia_T3_T5 = Tartaglia_T3_T5_1toMax_Volume - Tartaglia_T3_T5_1toMin_Volume
    document.getElementById('Tartaglia_T3_T1_Volume').innerHTML = Tartaglia_T3_T1;
    document.getElementById('Tartaglia_T3_T2_Volume').innerHTML = Tartaglia_T3_T2;
    document.getElementById('Tartaglia_T3_T3_Volume').innerHTML = Tartaglia_T3_T3;
    document.getElementById('Tartaglia_T3_T4_Volume').innerHTML = Tartaglia_T3_T4;
    document.getElementById('Tartaglia_T3_T5_Volume').innerHTML = Tartaglia_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Tartaglia  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Diona  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Diona_Ex = document.getElementById('Diona_Ex');
noUiSlider.create(Diona_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Diona_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Diona_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Diona_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Diona_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function DionaLoad() {
  Diona_Ex.noUiSlider.on('update', function (values, handle) {
    var Diona_Ex_Min_Volume = "L1toL" + Diona_Ex.noUiSlider.get()[0];
    var Diona_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Diona_Ex.noUiSlider.get()[0])[Diona_Ex_Min_Volume]);
    var Diona_Ex_Max_Volume = "L1toL" + Diona_Ex.noUiSlider.get()[1];
    var Diona_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Diona_Ex.noUiSlider.get()[1])[Diona_Ex_Max_Volume]);
    var Diona_Ex_Volume = Diona_Ex_1toMax_Volume - Diona_Ex_1toMin_Volume
    var Diona_Ex_Book_Volume = Diona_Ex_Volume / 1000
    var Diona_Ex_Mora_Volume = Diona_Ex_Volume * 0.2
    document.getElementById('Diona_Ex_Volume').innerHTML = Diona_Ex_Volume.toLocaleString();
    document.getElementById('Diona_Ex_Book_Volume').innerHTML = Diona_Ex_Book_Volume.toLocaleString();
    document.getElementById('Diona_Ex_Mora_Volume').innerHTML = Diona_Ex_Mora_Volume.toLocaleString();
  });
  Diona_Pr.noUiSlider.on('update', function (values, handle) {
    var Diona_Pr_Min_Volume = "L1toL" + Diona_Pr.noUiSlider.get()[0];
    var Diona_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[0])["P1_" + [Diona_Pr_Min_Volume]]);
    var Diona_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[0])["P2_" + [Diona_Pr_Min_Volume]]);
    var Diona_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[0])["P3_" + [Diona_Pr_Min_Volume]]);
    var Diona_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[0])["P4_" + [Diona_Pr_Min_Volume]]);
    var Diona_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[0])["P5_" + [Diona_Pr_Min_Volume]]);
    var Diona_Pr_Max_Volume = "L1toL" + Diona_Pr.noUiSlider.get()[1];
    var Diona_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[1])["P1_" + [Diona_Pr_Max_Volume]]);
    var Diona_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[1])["P2_" + [Diona_Pr_Max_Volume]]);
    var Diona_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[1])["P3_" + [Diona_Pr_Max_Volume]]);
    var Diona_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[1])["P4_" + [Diona_Pr_Max_Volume]]);
    var Diona_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diona_Pr.noUiSlider.get()[1])["P5_" + [Diona_Pr_Max_Volume]]);
    var Diona_Pr_P1 = Diona_Pr_P1_1toMax_Volume - Diona_Pr_P1_1toMin_Volume
    var Diona_Pr_P2 = Diona_Pr_P2_1toMax_Volume - Diona_Pr_P2_1toMin_Volume
    var Diona_Pr_P3 = Diona_Pr_P3_1toMax_Volume - Diona_Pr_P3_1toMin_Volume
    var Diona_Pr_P4 = Diona_Pr_P4_1toMax_Volume - Diona_Pr_P4_1toMin_Volume
    var Diona_Pr_P5 = Diona_Pr_P5_1toMax_Volume - Diona_Pr_P5_1toMin_Volume
    document.getElementById('Diona_Pr_P1_Volume').innerHTML = Diona_Pr_P1;
    document.getElementById('Diona_Pr_P2_Volume').innerHTML = Diona_Pr_P2;
    document.getElementById('Diona_Pr_P3_Volume').innerHTML = Diona_Pr_P3;
    document.getElementById('Diona_Pr_P4_Volume').innerHTML = Diona_Pr_P4;
    document.getElementById('Diona_Pr_P5_Volume').innerHTML = Diona_Pr_P5.toLocaleString();
  });
  Diona_T1.noUiSlider.on('update', function (values, handle) {
    var Diona_T1_Min_Volume = "L1toL" + Diona_T1.noUiSlider.get()[0];
    var Diona_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[0])["T1_" + [Diona_T1_Min_Volume]]);
    var Diona_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[0])["T2_" + [Diona_T1_Min_Volume]]);
    var Diona_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[0])["T3_" + [Diona_T1_Min_Volume]]);
    var Diona_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[0])["T4_" + [Diona_T1_Min_Volume]]);
    var Diona_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[0])["T5_" + [Diona_T1_Min_Volume]]);
    var Diona_T1_Max_Volume = "L1toL" + Diona_T1.noUiSlider.get()[1];
    var Diona_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[1])["T1_" + [Diona_T1_Max_Volume]]);
    var Diona_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[1])["T2_" + [Diona_T1_Max_Volume]]);
    var Diona_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[1])["T3_" + [Diona_T1_Max_Volume]]);
    var Diona_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[1])["T4_" + [Diona_T1_Max_Volume]]);
    var Diona_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T1.noUiSlider.get()[1])["T5_" + [Diona_T1_Max_Volume]]);
    var Diona_T1_T1 = Diona_T1_T1_1toMax_Volume - Diona_T1_T1_1toMin_Volume
    var Diona_T1_T2 = Diona_T1_T2_1toMax_Volume - Diona_T1_T2_1toMin_Volume
    var Diona_T1_T3 = Diona_T1_T3_1toMax_Volume - Diona_T1_T3_1toMin_Volume
    var Diona_T1_T4 = Diona_T1_T4_1toMax_Volume - Diona_T1_T4_1toMin_Volume
    var Diona_T1_T5 = Diona_T1_T5_1toMax_Volume - Diona_T1_T5_1toMin_Volume
    document.getElementById('Diona_T1_T1_Volume').innerHTML = Diona_T1_T1;
    document.getElementById('Diona_T1_T2_Volume').innerHTML = Diona_T1_T2;
    document.getElementById('Diona_T1_T3_Volume').innerHTML = Diona_T1_T3;
    document.getElementById('Diona_T1_T4_Volume').innerHTML = Diona_T1_T4;
    document.getElementById('Diona_T1_T5_Volume').innerHTML = Diona_T1_T5.toLocaleString();
  });
  Diona_T2.noUiSlider.on('update', function (values, handle) {
    var Diona_T2_Min_Volume = "L1toL" + Diona_T2.noUiSlider.get()[0];
    var Diona_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[0])["T1_" + [Diona_T2_Min_Volume]]);
    var Diona_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[0])["T2_" + [Diona_T2_Min_Volume]]);
    var Diona_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[0])["T3_" + [Diona_T2_Min_Volume]]);
    var Diona_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[0])["T4_" + [Diona_T2_Min_Volume]]);
    var Diona_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[0])["T5_" + [Diona_T2_Min_Volume]]);
    var Diona_T2_Max_Volume = "L1toL" + Diona_T2.noUiSlider.get()[1];
    var Diona_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[1])["T1_" + [Diona_T2_Max_Volume]]);
    var Diona_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[1])["T2_" + [Diona_T2_Max_Volume]]);
    var Diona_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[1])["T3_" + [Diona_T2_Max_Volume]]);
    var Diona_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[1])["T4_" + [Diona_T2_Max_Volume]]);
    var Diona_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T2.noUiSlider.get()[1])["T5_" + [Diona_T2_Max_Volume]]);
    var Diona_T2_T1 = Diona_T2_T1_1toMax_Volume - Diona_T2_T1_1toMin_Volume
    var Diona_T2_T2 = Diona_T2_T2_1toMax_Volume - Diona_T2_T2_1toMin_Volume
    var Diona_T2_T3 = Diona_T2_T3_1toMax_Volume - Diona_T2_T3_1toMin_Volume
    var Diona_T2_T4 = Diona_T2_T4_1toMax_Volume - Diona_T2_T4_1toMin_Volume
    var Diona_T2_T5 = Diona_T2_T5_1toMax_Volume - Diona_T2_T5_1toMin_Volume
    document.getElementById('Diona_T2_T1_Volume').innerHTML = Diona_T2_T1;
    document.getElementById('Diona_T2_T2_Volume').innerHTML = Diona_T2_T2;
    document.getElementById('Diona_T2_T3_Volume').innerHTML = Diona_T2_T3;
    document.getElementById('Diona_T2_T4_Volume').innerHTML = Diona_T2_T4;
    document.getElementById('Diona_T2_T5_Volume').innerHTML = Diona_T2_T5.toLocaleString();
  });
  Diona_T3.noUiSlider.on('update', function (values, handle) {
    var Diona_T3_Min_Volume = "L1toL" + Diona_T3.noUiSlider.get()[0];
    var Diona_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[0])["T1_" + [Diona_T3_Min_Volume]]);
    var Diona_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[0])["T2_" + [Diona_T3_Min_Volume]]);
    var Diona_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[0])["T3_" + [Diona_T3_Min_Volume]]);
    var Diona_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[0])["T4_" + [Diona_T3_Min_Volume]]);
    var Diona_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[0])["T5_" + [Diona_T3_Min_Volume]]);
    var Diona_T3_Max_Volume = "L1toL" + Diona_T3.noUiSlider.get()[1];
    var Diona_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[1])["T1_" + [Diona_T3_Max_Volume]]);
    var Diona_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[1])["T2_" + [Diona_T3_Max_Volume]]);
    var Diona_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[1])["T3_" + [Diona_T3_Max_Volume]]);
    var Diona_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[1])["T4_" + [Diona_T3_Max_Volume]]);
    var Diona_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diona_T3.noUiSlider.get()[1])["T5_" + [Diona_T3_Max_Volume]]);
    var Diona_T3_T1 = Diona_T3_T1_1toMax_Volume - Diona_T3_T1_1toMin_Volume
    var Diona_T3_T2 = Diona_T3_T2_1toMax_Volume - Diona_T3_T2_1toMin_Volume
    var Diona_T3_T3 = Diona_T3_T3_1toMax_Volume - Diona_T3_T3_1toMin_Volume
    var Diona_T3_T4 = Diona_T3_T4_1toMax_Volume - Diona_T3_T4_1toMin_Volume
    var Diona_T3_T5 = Diona_T3_T5_1toMax_Volume - Diona_T3_T5_1toMin_Volume
    document.getElementById('Diona_T3_T1_Volume').innerHTML = Diona_T3_T1;
    document.getElementById('Diona_T3_T2_Volume').innerHTML = Diona_T3_T2;
    document.getElementById('Diona_T3_T3_Volume').innerHTML = Diona_T3_T3;
    document.getElementById('Diona_T3_T4_Volume').innerHTML = Diona_T3_T4;
    document.getElementById('Diona_T3_T5_Volume').innerHTML = Diona_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Diona  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Klee  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Klee_Ex = document.getElementById('Klee_Ex');
noUiSlider.create(Klee_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Klee_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Klee_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Klee_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Klee_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function KleeLoad() {
  Klee_Ex.noUiSlider.on('update', function (values, handle) {
    var Klee_Ex_Min_Volume = "L1toL" + Klee_Ex.noUiSlider.get()[0];
    var Klee_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Klee_Ex.noUiSlider.get()[0])[Klee_Ex_Min_Volume]);
    var Klee_Ex_Max_Volume = "L1toL" + Klee_Ex.noUiSlider.get()[1];
    var Klee_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Klee_Ex.noUiSlider.get()[1])[Klee_Ex_Max_Volume]);
    var Klee_Ex_Volume = Klee_Ex_1toMax_Volume - Klee_Ex_1toMin_Volume
    var Klee_Ex_Book_Volume = Klee_Ex_Volume / 1000
    var Klee_Ex_Mora_Volume = Klee_Ex_Volume * 0.2
    document.getElementById('Klee_Ex_Volume').innerHTML = Klee_Ex_Volume.toLocaleString();
    document.getElementById('Klee_Ex_Book_Volume').innerHTML = Klee_Ex_Book_Volume.toLocaleString();
    document.getElementById('Klee_Ex_Mora_Volume').innerHTML = Klee_Ex_Mora_Volume.toLocaleString();
  });
  Klee_Pr.noUiSlider.on('update', function (values, handle) {
    var Klee_Pr_Min_Volume = "L1toL" + Klee_Pr.noUiSlider.get()[0];
    var Klee_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[0])["P1_" + [Klee_Pr_Min_Volume]]);
    var Klee_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[0])["P2_" + [Klee_Pr_Min_Volume]]);
    var Klee_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[0])["P3_" + [Klee_Pr_Min_Volume]]);
    var Klee_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[0])["P4_" + [Klee_Pr_Min_Volume]]);
    var Klee_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[0])["P5_" + [Klee_Pr_Min_Volume]]);
    var Klee_Pr_Max_Volume = "L1toL" + Klee_Pr.noUiSlider.get()[1];
    var Klee_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[1])["P1_" + [Klee_Pr_Max_Volume]]);
    var Klee_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[1])["P2_" + [Klee_Pr_Max_Volume]]);
    var Klee_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[1])["P3_" + [Klee_Pr_Max_Volume]]);
    var Klee_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[1])["P4_" + [Klee_Pr_Max_Volume]]);
    var Klee_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Klee_Pr.noUiSlider.get()[1])["P5_" + [Klee_Pr_Max_Volume]]);
    var Klee_Pr_P1 = Klee_Pr_P1_1toMax_Volume - Klee_Pr_P1_1toMin_Volume
    var Klee_Pr_P2 = Klee_Pr_P2_1toMax_Volume - Klee_Pr_P2_1toMin_Volume
    var Klee_Pr_P3 = Klee_Pr_P3_1toMax_Volume - Klee_Pr_P3_1toMin_Volume
    var Klee_Pr_P4 = Klee_Pr_P4_1toMax_Volume - Klee_Pr_P4_1toMin_Volume
    var Klee_Pr_P5 = Klee_Pr_P5_1toMax_Volume - Klee_Pr_P5_1toMin_Volume
    document.getElementById('Klee_Pr_P1_Volume').innerHTML = Klee_Pr_P1;
    document.getElementById('Klee_Pr_P2_Volume').innerHTML = Klee_Pr_P2;
    document.getElementById('Klee_Pr_P3_Volume').innerHTML = Klee_Pr_P3;
    document.getElementById('Klee_Pr_P4_Volume').innerHTML = Klee_Pr_P4;
    document.getElementById('Klee_Pr_P5_Volume').innerHTML = Klee_Pr_P5.toLocaleString();
  });
  Klee_T1.noUiSlider.on('update', function (values, handle) {
    var Klee_T1_Min_Volume = "L1toL" + Klee_T1.noUiSlider.get()[0];
    var Klee_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[0])["T1_" + [Klee_T1_Min_Volume]]);
    var Klee_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[0])["T2_" + [Klee_T1_Min_Volume]]);
    var Klee_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[0])["T3_" + [Klee_T1_Min_Volume]]);
    var Klee_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[0])["T4_" + [Klee_T1_Min_Volume]]);
    var Klee_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[0])["T5_" + [Klee_T1_Min_Volume]]);
    var Klee_T1_Max_Volume = "L1toL" + Klee_T1.noUiSlider.get()[1];
    var Klee_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[1])["T1_" + [Klee_T1_Max_Volume]]);
    var Klee_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[1])["T2_" + [Klee_T1_Max_Volume]]);
    var Klee_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[1])["T3_" + [Klee_T1_Max_Volume]]);
    var Klee_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[1])["T4_" + [Klee_T1_Max_Volume]]);
    var Klee_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T1.noUiSlider.get()[1])["T5_" + [Klee_T1_Max_Volume]]);
    var Klee_T1_T1 = Klee_T1_T1_1toMax_Volume - Klee_T1_T1_1toMin_Volume
    var Klee_T1_T2 = Klee_T1_T2_1toMax_Volume - Klee_T1_T2_1toMin_Volume
    var Klee_T1_T3 = Klee_T1_T3_1toMax_Volume - Klee_T1_T3_1toMin_Volume
    var Klee_T1_T4 = Klee_T1_T4_1toMax_Volume - Klee_T1_T4_1toMin_Volume
    var Klee_T1_T5 = Klee_T1_T5_1toMax_Volume - Klee_T1_T5_1toMin_Volume
    document.getElementById('Klee_T1_T1_Volume').innerHTML = Klee_T1_T1;
    document.getElementById('Klee_T1_T2_Volume').innerHTML = Klee_T1_T2;
    document.getElementById('Klee_T1_T3_Volume').innerHTML = Klee_T1_T3;
    document.getElementById('Klee_T1_T4_Volume').innerHTML = Klee_T1_T4;
    document.getElementById('Klee_T1_T5_Volume').innerHTML = Klee_T1_T5.toLocaleString();
  });
  Klee_T2.noUiSlider.on('update', function (values, handle) {
    var Klee_T2_Min_Volume = "L1toL" + Klee_T2.noUiSlider.get()[0];
    var Klee_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[0])["T1_" + [Klee_T2_Min_Volume]]);
    var Klee_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[0])["T2_" + [Klee_T2_Min_Volume]]);
    var Klee_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[0])["T3_" + [Klee_T2_Min_Volume]]);
    var Klee_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[0])["T4_" + [Klee_T2_Min_Volume]]);
    var Klee_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[0])["T5_" + [Klee_T2_Min_Volume]]);
    var Klee_T2_Max_Volume = "L1toL" + Klee_T2.noUiSlider.get()[1];
    var Klee_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[1])["T1_" + [Klee_T2_Max_Volume]]);
    var Klee_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[1])["T2_" + [Klee_T2_Max_Volume]]);
    var Klee_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[1])["T3_" + [Klee_T2_Max_Volume]]);
    var Klee_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[1])["T4_" + [Klee_T2_Max_Volume]]);
    var Klee_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T2.noUiSlider.get()[1])["T5_" + [Klee_T2_Max_Volume]]);
    var Klee_T2_T1 = Klee_T2_T1_1toMax_Volume - Klee_T2_T1_1toMin_Volume
    var Klee_T2_T2 = Klee_T2_T2_1toMax_Volume - Klee_T2_T2_1toMin_Volume
    var Klee_T2_T3 = Klee_T2_T3_1toMax_Volume - Klee_T2_T3_1toMin_Volume
    var Klee_T2_T4 = Klee_T2_T4_1toMax_Volume - Klee_T2_T4_1toMin_Volume
    var Klee_T2_T5 = Klee_T2_T5_1toMax_Volume - Klee_T2_T5_1toMin_Volume
    document.getElementById('Klee_T2_T1_Volume').innerHTML = Klee_T2_T1;
    document.getElementById('Klee_T2_T2_Volume').innerHTML = Klee_T2_T2;
    document.getElementById('Klee_T2_T3_Volume').innerHTML = Klee_T2_T3;
    document.getElementById('Klee_T2_T4_Volume').innerHTML = Klee_T2_T4;
    document.getElementById('Klee_T2_T5_Volume').innerHTML = Klee_T2_T5.toLocaleString();
  });
  Klee_T3.noUiSlider.on('update', function (values, handle) {
    var Klee_T3_Min_Volume = "L1toL" + Klee_T3.noUiSlider.get()[0];
    var Klee_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[0])["T1_" + [Klee_T3_Min_Volume]]);
    var Klee_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[0])["T2_" + [Klee_T3_Min_Volume]]);
    var Klee_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[0])["T3_" + [Klee_T3_Min_Volume]]);
    var Klee_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[0])["T4_" + [Klee_T3_Min_Volume]]);
    var Klee_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[0])["T5_" + [Klee_T3_Min_Volume]]);
    var Klee_T3_Max_Volume = "L1toL" + Klee_T3.noUiSlider.get()[1];
    var Klee_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[1])["T1_" + [Klee_T3_Max_Volume]]);
    var Klee_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[1])["T2_" + [Klee_T3_Max_Volume]]);
    var Klee_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[1])["T3_" + [Klee_T3_Max_Volume]]);
    var Klee_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[1])["T4_" + [Klee_T3_Max_Volume]]);
    var Klee_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Klee_T3.noUiSlider.get()[1])["T5_" + [Klee_T3_Max_Volume]]);
    var Klee_T3_T1 = Klee_T3_T1_1toMax_Volume - Klee_T3_T1_1toMin_Volume
    var Klee_T3_T2 = Klee_T3_T2_1toMax_Volume - Klee_T3_T2_1toMin_Volume
    var Klee_T3_T3 = Klee_T3_T3_1toMax_Volume - Klee_T3_T3_1toMin_Volume
    var Klee_T3_T4 = Klee_T3_T4_1toMax_Volume - Klee_T3_T4_1toMin_Volume
    var Klee_T3_T5 = Klee_T3_T5_1toMax_Volume - Klee_T3_T5_1toMin_Volume
    document.getElementById('Klee_T3_T1_Volume').innerHTML = Klee_T3_T1;
    document.getElementById('Klee_T3_T2_Volume').innerHTML = Klee_T3_T2;
    document.getElementById('Klee_T3_T3_Volume').innerHTML = Klee_T3_T3;
    document.getElementById('Klee_T3_T4_Volume').innerHTML = Klee_T3_T4;
    document.getElementById('Klee_T3_T5_Volume').innerHTML = Klee_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Klee  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Venti  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Venti_Ex = document.getElementById('Venti_Ex');
noUiSlider.create(Venti_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Venti_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Venti_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Venti_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Venti_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function VentiLoad() {
  Venti_Ex.noUiSlider.on('update', function (values, handle) {
    var Venti_Ex_Min_Volume = "L1toL" + Venti_Ex.noUiSlider.get()[0];
    var Venti_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Venti_Ex.noUiSlider.get()[0])[Venti_Ex_Min_Volume]);
    var Venti_Ex_Max_Volume = "L1toL" + Venti_Ex.noUiSlider.get()[1];
    var Venti_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Venti_Ex.noUiSlider.get()[1])[Venti_Ex_Max_Volume]);
    var Venti_Ex_Volume = Venti_Ex_1toMax_Volume - Venti_Ex_1toMin_Volume
    var Venti_Ex_Book_Volume = Venti_Ex_Volume / 1000
    var Venti_Ex_Mora_Volume = Venti_Ex_Volume * 0.2
    document.getElementById('Venti_Ex_Volume').innerHTML = Venti_Ex_Volume.toLocaleString();
    document.getElementById('Venti_Ex_Book_Volume').innerHTML = Venti_Ex_Book_Volume.toLocaleString();
    document.getElementById('Venti_Ex_Mora_Volume').innerHTML = Venti_Ex_Mora_Volume.toLocaleString();
  });
  Venti_Pr.noUiSlider.on('update', function (values, handle) {
    var Venti_Pr_Min_Volume = "L1toL" + Venti_Pr.noUiSlider.get()[0];
    var Venti_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[0])["P1_" + [Venti_Pr_Min_Volume]]);
    var Venti_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[0])["P2_" + [Venti_Pr_Min_Volume]]);
    var Venti_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[0])["P3_" + [Venti_Pr_Min_Volume]]);
    var Venti_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[0])["P4_" + [Venti_Pr_Min_Volume]]);
    var Venti_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[0])["P5_" + [Venti_Pr_Min_Volume]]);
    var Venti_Pr_Max_Volume = "L1toL" + Venti_Pr.noUiSlider.get()[1];
    var Venti_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[1])["P1_" + [Venti_Pr_Max_Volume]]);
    var Venti_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[1])["P2_" + [Venti_Pr_Max_Volume]]);
    var Venti_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[1])["P3_" + [Venti_Pr_Max_Volume]]);
    var Venti_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[1])["P4_" + [Venti_Pr_Max_Volume]]);
    var Venti_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Venti_Pr.noUiSlider.get()[1])["P5_" + [Venti_Pr_Max_Volume]]);
    var Venti_Pr_P1 = Venti_Pr_P1_1toMax_Volume - Venti_Pr_P1_1toMin_Volume
    var Venti_Pr_P2 = Venti_Pr_P2_1toMax_Volume - Venti_Pr_P2_1toMin_Volume
    var Venti_Pr_P3 = Venti_Pr_P3_1toMax_Volume - Venti_Pr_P3_1toMin_Volume
    var Venti_Pr_P4 = Venti_Pr_P4_1toMax_Volume - Venti_Pr_P4_1toMin_Volume
    var Venti_Pr_P5 = Venti_Pr_P5_1toMax_Volume - Venti_Pr_P5_1toMin_Volume
    document.getElementById('Venti_Pr_P1_Volume').innerHTML = Venti_Pr_P1;
    document.getElementById('Venti_Pr_P2_Volume').innerHTML = Venti_Pr_P2;
    document.getElementById('Venti_Pr_P3_Volume').innerHTML = Venti_Pr_P3;
    document.getElementById('Venti_Pr_P4_Volume').innerHTML = Venti_Pr_P4;
    document.getElementById('Venti_Pr_P5_Volume').innerHTML = Venti_Pr_P5.toLocaleString();
  });
  Venti_T1.noUiSlider.on('update', function (values, handle) {
    var Venti_T1_Min_Volume = "L1toL" + Venti_T1.noUiSlider.get()[0];
    var Venti_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[0])["T1_" + [Venti_T1_Min_Volume]]);
    var Venti_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[0])["T2_" + [Venti_T1_Min_Volume]]);
    var Venti_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[0])["T3_" + [Venti_T1_Min_Volume]]);
    var Venti_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[0])["T4_" + [Venti_T1_Min_Volume]]);
    var Venti_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[0])["T5_" + [Venti_T1_Min_Volume]]);
    var Venti_T1_Max_Volume = "L1toL" + Venti_T1.noUiSlider.get()[1];
    var Venti_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[1])["T1_" + [Venti_T1_Max_Volume]]);
    var Venti_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[1])["T2_" + [Venti_T1_Max_Volume]]);
    var Venti_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[1])["T3_" + [Venti_T1_Max_Volume]]);
    var Venti_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[1])["T4_" + [Venti_T1_Max_Volume]]);
    var Venti_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T1.noUiSlider.get()[1])["T5_" + [Venti_T1_Max_Volume]]);
    var Venti_T1_T1 = Venti_T1_T1_1toMax_Volume - Venti_T1_T1_1toMin_Volume
    var Venti_T1_T2 = Venti_T1_T2_1toMax_Volume - Venti_T1_T2_1toMin_Volume
    var Venti_T1_T3 = Venti_T1_T3_1toMax_Volume - Venti_T1_T3_1toMin_Volume
    var Venti_T1_T4 = Venti_T1_T4_1toMax_Volume - Venti_T1_T4_1toMin_Volume
    var Venti_T1_T5 = Venti_T1_T5_1toMax_Volume - Venti_T1_T5_1toMin_Volume
    document.getElementById('Venti_T1_T1_Volume').innerHTML = Venti_T1_T1;
    document.getElementById('Venti_T1_T2_Volume').innerHTML = Venti_T1_T2;
    document.getElementById('Venti_T1_T3_Volume').innerHTML = Venti_T1_T3;
    document.getElementById('Venti_T1_T4_Volume').innerHTML = Venti_T1_T4;
    document.getElementById('Venti_T1_T5_Volume').innerHTML = Venti_T1_T5.toLocaleString();
  });
  Venti_T2.noUiSlider.on('update', function (values, handle) {
    var Venti_T2_Min_Volume = "L1toL" + Venti_T2.noUiSlider.get()[0];
    var Venti_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[0])["T1_" + [Venti_T2_Min_Volume]]);
    var Venti_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[0])["T2_" + [Venti_T2_Min_Volume]]);
    var Venti_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[0])["T3_" + [Venti_T2_Min_Volume]]);
    var Venti_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[0])["T4_" + [Venti_T2_Min_Volume]]);
    var Venti_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[0])["T5_" + [Venti_T2_Min_Volume]]);
    var Venti_T2_Max_Volume = "L1toL" + Venti_T2.noUiSlider.get()[1];
    var Venti_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[1])["T1_" + [Venti_T2_Max_Volume]]);
    var Venti_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[1])["T2_" + [Venti_T2_Max_Volume]]);
    var Venti_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[1])["T3_" + [Venti_T2_Max_Volume]]);
    var Venti_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[1])["T4_" + [Venti_T2_Max_Volume]]);
    var Venti_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T2.noUiSlider.get()[1])["T5_" + [Venti_T2_Max_Volume]]);
    var Venti_T2_T1 = Venti_T2_T1_1toMax_Volume - Venti_T2_T1_1toMin_Volume
    var Venti_T2_T2 = Venti_T2_T2_1toMax_Volume - Venti_T2_T2_1toMin_Volume
    var Venti_T2_T3 = Venti_T2_T3_1toMax_Volume - Venti_T2_T3_1toMin_Volume
    var Venti_T2_T4 = Venti_T2_T4_1toMax_Volume - Venti_T2_T4_1toMin_Volume
    var Venti_T2_T5 = Venti_T2_T5_1toMax_Volume - Venti_T2_T5_1toMin_Volume
    document.getElementById('Venti_T2_T1_Volume').innerHTML = Venti_T2_T1;
    document.getElementById('Venti_T2_T2_Volume').innerHTML = Venti_T2_T2;
    document.getElementById('Venti_T2_T3_Volume').innerHTML = Venti_T2_T3;
    document.getElementById('Venti_T2_T4_Volume').innerHTML = Venti_T2_T4;
    document.getElementById('Venti_T2_T5_Volume').innerHTML = Venti_T2_T5.toLocaleString();
  });
  Venti_T3.noUiSlider.on('update', function (values, handle) {
    var Venti_T3_Min_Volume = "L1toL" + Venti_T3.noUiSlider.get()[0];
    var Venti_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[0])["T1_" + [Venti_T3_Min_Volume]]);
    var Venti_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[0])["T2_" + [Venti_T3_Min_Volume]]);
    var Venti_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[0])["T3_" + [Venti_T3_Min_Volume]]);
    var Venti_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[0])["T4_" + [Venti_T3_Min_Volume]]);
    var Venti_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[0])["T5_" + [Venti_T3_Min_Volume]]);
    var Venti_T3_Max_Volume = "L1toL" + Venti_T3.noUiSlider.get()[1];
    var Venti_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[1])["T1_" + [Venti_T3_Max_Volume]]);
    var Venti_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[1])["T2_" + [Venti_T3_Max_Volume]]);
    var Venti_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[1])["T3_" + [Venti_T3_Max_Volume]]);
    var Venti_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[1])["T4_" + [Venti_T3_Max_Volume]]);
    var Venti_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Venti_T3.noUiSlider.get()[1])["T5_" + [Venti_T3_Max_Volume]]);
    var Venti_T3_T1 = Venti_T3_T1_1toMax_Volume - Venti_T3_T1_1toMin_Volume
    var Venti_T3_T2 = Venti_T3_T2_1toMax_Volume - Venti_T3_T2_1toMin_Volume
    var Venti_T3_T3 = Venti_T3_T3_1toMax_Volume - Venti_T3_T3_1toMin_Volume
    var Venti_T3_T4 = Venti_T3_T4_1toMax_Volume - Venti_T3_T4_1toMin_Volume
    var Venti_T3_T5 = Venti_T3_T5_1toMax_Volume - Venti_T3_T5_1toMin_Volume
    document.getElementById('Venti_T3_T1_Volume').innerHTML = Venti_T3_T1;
    document.getElementById('Venti_T3_T2_Volume').innerHTML = Venti_T3_T2;
    document.getElementById('Venti_T3_T3_Volume').innerHTML = Venti_T3_T3;
    document.getElementById('Venti_T3_T4_Volume').innerHTML = Venti_T3_T4;
    document.getElementById('Venti_T3_T5_Volume').innerHTML = Venti_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Venti  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Keqing  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Keqing_Ex = document.getElementById('Keqing_Ex');
noUiSlider.create(Keqing_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Keqing_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Keqing_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Keqing_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Keqing_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function KeqingLoad() {
  Keqing_Ex.noUiSlider.on('update', function (values, handle) {
    var Keqing_Ex_Min_Volume = "L1toL" + Keqing_Ex.noUiSlider.get()[0];
    var Keqing_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Keqing_Ex.noUiSlider.get()[0])[Keqing_Ex_Min_Volume]);
    var Keqing_Ex_Max_Volume = "L1toL" + Keqing_Ex.noUiSlider.get()[1];
    var Keqing_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Keqing_Ex.noUiSlider.get()[1])[Keqing_Ex_Max_Volume]);
    var Keqing_Ex_Volume = Keqing_Ex_1toMax_Volume - Keqing_Ex_1toMin_Volume
    var Keqing_Ex_Book_Volume = Keqing_Ex_Volume / 1000
    var Keqing_Ex_Mora_Volume = Keqing_Ex_Volume * 0.2
    document.getElementById('Keqing_Ex_Volume').innerHTML = Keqing_Ex_Volume.toLocaleString();
    document.getElementById('Keqing_Ex_Book_Volume').innerHTML = Keqing_Ex_Book_Volume.toLocaleString();
    document.getElementById('Keqing_Ex_Mora_Volume').innerHTML = Keqing_Ex_Mora_Volume.toLocaleString();
  });
  Keqing_Pr.noUiSlider.on('update', function (values, handle) {
    var Keqing_Pr_Min_Volume = "L1toL" + Keqing_Pr.noUiSlider.get()[0];
    var Keqing_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[0])["P1_" + [Keqing_Pr_Min_Volume]]);
    var Keqing_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[0])["P2_" + [Keqing_Pr_Min_Volume]]);
    var Keqing_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[0])["P3_" + [Keqing_Pr_Min_Volume]]);
    var Keqing_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[0])["P4_" + [Keqing_Pr_Min_Volume]]);
    var Keqing_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[0])["P5_" + [Keqing_Pr_Min_Volume]]);
    var Keqing_Pr_Max_Volume = "L1toL" + Keqing_Pr.noUiSlider.get()[1];
    var Keqing_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[1])["P1_" + [Keqing_Pr_Max_Volume]]);
    var Keqing_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[1])["P2_" + [Keqing_Pr_Max_Volume]]);
    var Keqing_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[1])["P3_" + [Keqing_Pr_Max_Volume]]);
    var Keqing_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[1])["P4_" + [Keqing_Pr_Max_Volume]]);
    var Keqing_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Keqing_Pr.noUiSlider.get()[1])["P5_" + [Keqing_Pr_Max_Volume]]);
    var Keqing_Pr_P1 = Keqing_Pr_P1_1toMax_Volume - Keqing_Pr_P1_1toMin_Volume
    var Keqing_Pr_P2 = Keqing_Pr_P2_1toMax_Volume - Keqing_Pr_P2_1toMin_Volume
    var Keqing_Pr_P3 = Keqing_Pr_P3_1toMax_Volume - Keqing_Pr_P3_1toMin_Volume
    var Keqing_Pr_P4 = Keqing_Pr_P4_1toMax_Volume - Keqing_Pr_P4_1toMin_Volume
    var Keqing_Pr_P5 = Keqing_Pr_P5_1toMax_Volume - Keqing_Pr_P5_1toMin_Volume
    document.getElementById('Keqing_Pr_P1_Volume').innerHTML = Keqing_Pr_P1;
    document.getElementById('Keqing_Pr_P2_Volume').innerHTML = Keqing_Pr_P2;
    document.getElementById('Keqing_Pr_P3_Volume').innerHTML = Keqing_Pr_P3;
    document.getElementById('Keqing_Pr_P4_Volume').innerHTML = Keqing_Pr_P4;
    document.getElementById('Keqing_Pr_P5_Volume').innerHTML = Keqing_Pr_P5.toLocaleString();
  });
  Keqing_T1.noUiSlider.on('update', function (values, handle) {
    var Keqing_T1_Min_Volume = "L1toL" + Keqing_T1.noUiSlider.get()[0];
    var Keqing_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[0])["T1_" + [Keqing_T1_Min_Volume]]);
    var Keqing_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[0])["T2_" + [Keqing_T1_Min_Volume]]);
    var Keqing_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[0])["T3_" + [Keqing_T1_Min_Volume]]);
    var Keqing_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[0])["T4_" + [Keqing_T1_Min_Volume]]);
    var Keqing_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[0])["T5_" + [Keqing_T1_Min_Volume]]);
    var Keqing_T1_Max_Volume = "L1toL" + Keqing_T1.noUiSlider.get()[1];
    var Keqing_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[1])["T1_" + [Keqing_T1_Max_Volume]]);
    var Keqing_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[1])["T2_" + [Keqing_T1_Max_Volume]]);
    var Keqing_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[1])["T3_" + [Keqing_T1_Max_Volume]]);
    var Keqing_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[1])["T4_" + [Keqing_T1_Max_Volume]]);
    var Keqing_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T1.noUiSlider.get()[1])["T5_" + [Keqing_T1_Max_Volume]]);
    var Keqing_T1_T1 = Keqing_T1_T1_1toMax_Volume - Keqing_T1_T1_1toMin_Volume
    var Keqing_T1_T2 = Keqing_T1_T2_1toMax_Volume - Keqing_T1_T2_1toMin_Volume
    var Keqing_T1_T3 = Keqing_T1_T3_1toMax_Volume - Keqing_T1_T3_1toMin_Volume
    var Keqing_T1_T4 = Keqing_T1_T4_1toMax_Volume - Keqing_T1_T4_1toMin_Volume
    var Keqing_T1_T5 = Keqing_T1_T5_1toMax_Volume - Keqing_T1_T5_1toMin_Volume
    document.getElementById('Keqing_T1_T1_Volume').innerHTML = Keqing_T1_T1;
    document.getElementById('Keqing_T1_T2_Volume').innerHTML = Keqing_T1_T2;
    document.getElementById('Keqing_T1_T3_Volume').innerHTML = Keqing_T1_T3;
    document.getElementById('Keqing_T1_T4_Volume').innerHTML = Keqing_T1_T4;
    document.getElementById('Keqing_T1_T5_Volume').innerHTML = Keqing_T1_T5.toLocaleString();
  });
  Keqing_T2.noUiSlider.on('update', function (values, handle) {
    var Keqing_T2_Min_Volume = "L1toL" + Keqing_T2.noUiSlider.get()[0];
    var Keqing_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[0])["T1_" + [Keqing_T2_Min_Volume]]);
    var Keqing_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[0])["T2_" + [Keqing_T2_Min_Volume]]);
    var Keqing_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[0])["T3_" + [Keqing_T2_Min_Volume]]);
    var Keqing_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[0])["T4_" + [Keqing_T2_Min_Volume]]);
    var Keqing_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[0])["T5_" + [Keqing_T2_Min_Volume]]);
    var Keqing_T2_Max_Volume = "L1toL" + Keqing_T2.noUiSlider.get()[1];
    var Keqing_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[1])["T1_" + [Keqing_T2_Max_Volume]]);
    var Keqing_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[1])["T2_" + [Keqing_T2_Max_Volume]]);
    var Keqing_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[1])["T3_" + [Keqing_T2_Max_Volume]]);
    var Keqing_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[1])["T4_" + [Keqing_T2_Max_Volume]]);
    var Keqing_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T2.noUiSlider.get()[1])["T5_" + [Keqing_T2_Max_Volume]]);
    var Keqing_T2_T1 = Keqing_T2_T1_1toMax_Volume - Keqing_T2_T1_1toMin_Volume
    var Keqing_T2_T2 = Keqing_T2_T2_1toMax_Volume - Keqing_T2_T2_1toMin_Volume
    var Keqing_T2_T3 = Keqing_T2_T3_1toMax_Volume - Keqing_T2_T3_1toMin_Volume
    var Keqing_T2_T4 = Keqing_T2_T4_1toMax_Volume - Keqing_T2_T4_1toMin_Volume
    var Keqing_T2_T5 = Keqing_T2_T5_1toMax_Volume - Keqing_T2_T5_1toMin_Volume
    document.getElementById('Keqing_T2_T1_Volume').innerHTML = Keqing_T2_T1;
    document.getElementById('Keqing_T2_T2_Volume').innerHTML = Keqing_T2_T2;
    document.getElementById('Keqing_T2_T3_Volume').innerHTML = Keqing_T2_T3;
    document.getElementById('Keqing_T2_T4_Volume').innerHTML = Keqing_T2_T4;
    document.getElementById('Keqing_T2_T5_Volume').innerHTML = Keqing_T2_T5.toLocaleString();
  });
  Keqing_T3.noUiSlider.on('update', function (values, handle) {
    var Keqing_T3_Min_Volume = "L1toL" + Keqing_T3.noUiSlider.get()[0];
    var Keqing_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[0])["T1_" + [Keqing_T3_Min_Volume]]);
    var Keqing_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[0])["T2_" + [Keqing_T3_Min_Volume]]);
    var Keqing_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[0])["T3_" + [Keqing_T3_Min_Volume]]);
    var Keqing_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[0])["T4_" + [Keqing_T3_Min_Volume]]);
    var Keqing_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[0])["T5_" + [Keqing_T3_Min_Volume]]);
    var Keqing_T3_Max_Volume = "L1toL" + Keqing_T3.noUiSlider.get()[1];
    var Keqing_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[1])["T1_" + [Keqing_T3_Max_Volume]]);
    var Keqing_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[1])["T2_" + [Keqing_T3_Max_Volume]]);
    var Keqing_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[1])["T3_" + [Keqing_T3_Max_Volume]]);
    var Keqing_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[1])["T4_" + [Keqing_T3_Max_Volume]]);
    var Keqing_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Keqing_T3.noUiSlider.get()[1])["T5_" + [Keqing_T3_Max_Volume]]);
    var Keqing_T3_T1 = Keqing_T3_T1_1toMax_Volume - Keqing_T3_T1_1toMin_Volume
    var Keqing_T3_T2 = Keqing_T3_T2_1toMax_Volume - Keqing_T3_T2_1toMin_Volume
    var Keqing_T3_T3 = Keqing_T3_T3_1toMax_Volume - Keqing_T3_T3_1toMin_Volume
    var Keqing_T3_T4 = Keqing_T3_T4_1toMax_Volume - Keqing_T3_T4_1toMin_Volume
    var Keqing_T3_T5 = Keqing_T3_T5_1toMax_Volume - Keqing_T3_T5_1toMin_Volume
    document.getElementById('Keqing_T3_T1_Volume').innerHTML = Keqing_T3_T1;
    document.getElementById('Keqing_T3_T2_Volume').innerHTML = Keqing_T3_T2;
    document.getElementById('Keqing_T3_T3_Volume').innerHTML = Keqing_T3_T3;
    document.getElementById('Keqing_T3_T4_Volume').innerHTML = Keqing_T3_T4;
    document.getElementById('Keqing_T3_T5_Volume').innerHTML = Keqing_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Keqing  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Mona  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Mona_Ex = document.getElementById('Mona_Ex');
noUiSlider.create(Mona_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Mona_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Mona_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Mona_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Mona_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function MonaLoad() {
  Mona_Ex.noUiSlider.on('update', function (values, handle) {
    var Mona_Ex_Min_Volume = "L1toL" + Mona_Ex.noUiSlider.get()[0];
    var Mona_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Mona_Ex.noUiSlider.get()[0])[Mona_Ex_Min_Volume]);
    var Mona_Ex_Max_Volume = "L1toL" + Mona_Ex.noUiSlider.get()[1];
    var Mona_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Mona_Ex.noUiSlider.get()[1])[Mona_Ex_Max_Volume]);
    var Mona_Ex_Volume = Mona_Ex_1toMax_Volume - Mona_Ex_1toMin_Volume
    var Mona_Ex_Book_Volume = Mona_Ex_Volume / 1000
    var Mona_Ex_Mora_Volume = Mona_Ex_Volume * 0.2
    document.getElementById('Mona_Ex_Volume').innerHTML = Mona_Ex_Volume.toLocaleString();
    document.getElementById('Mona_Ex_Book_Volume').innerHTML = Mona_Ex_Book_Volume.toLocaleString();
    document.getElementById('Mona_Ex_Mora_Volume').innerHTML = Mona_Ex_Mora_Volume.toLocaleString();
  });
  Mona_Pr.noUiSlider.on('update', function (values, handle) {
    var Mona_Pr_Min_Volume = "L1toL" + Mona_Pr.noUiSlider.get()[0];
    var Mona_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[0])["P1_" + [Mona_Pr_Min_Volume]]);
    var Mona_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[0])["P2_" + [Mona_Pr_Min_Volume]]);
    var Mona_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[0])["P3_" + [Mona_Pr_Min_Volume]]);
    var Mona_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[0])["P4_" + [Mona_Pr_Min_Volume]]);
    var Mona_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[0])["P5_" + [Mona_Pr_Min_Volume]]);
    var Mona_Pr_Max_Volume = "L1toL" + Mona_Pr.noUiSlider.get()[1];
    var Mona_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[1])["P1_" + [Mona_Pr_Max_Volume]]);
    var Mona_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[1])["P2_" + [Mona_Pr_Max_Volume]]);
    var Mona_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[1])["P3_" + [Mona_Pr_Max_Volume]]);
    var Mona_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[1])["P4_" + [Mona_Pr_Max_Volume]]);
    var Mona_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Mona_Pr.noUiSlider.get()[1])["P5_" + [Mona_Pr_Max_Volume]]);
    var Mona_Pr_P1 = Mona_Pr_P1_1toMax_Volume - Mona_Pr_P1_1toMin_Volume
    var Mona_Pr_P2 = Mona_Pr_P2_1toMax_Volume - Mona_Pr_P2_1toMin_Volume
    var Mona_Pr_P3 = Mona_Pr_P3_1toMax_Volume - Mona_Pr_P3_1toMin_Volume
    var Mona_Pr_P4 = Mona_Pr_P4_1toMax_Volume - Mona_Pr_P4_1toMin_Volume
    var Mona_Pr_P5 = Mona_Pr_P5_1toMax_Volume - Mona_Pr_P5_1toMin_Volume
    document.getElementById('Mona_Pr_P1_Volume').innerHTML = Mona_Pr_P1;
    document.getElementById('Mona_Pr_P2_Volume').innerHTML = Mona_Pr_P2;
    document.getElementById('Mona_Pr_P3_Volume').innerHTML = Mona_Pr_P3;
    document.getElementById('Mona_Pr_P4_Volume').innerHTML = Mona_Pr_P4;
    document.getElementById('Mona_Pr_P5_Volume').innerHTML = Mona_Pr_P5.toLocaleString();
  });
  Mona_T1.noUiSlider.on('update', function (values, handle) {
    var Mona_T1_Min_Volume = "L1toL" + Mona_T1.noUiSlider.get()[0];
    var Mona_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[0])["T1_" + [Mona_T1_Min_Volume]]);
    var Mona_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[0])["T2_" + [Mona_T1_Min_Volume]]);
    var Mona_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[0])["T3_" + [Mona_T1_Min_Volume]]);
    var Mona_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[0])["T4_" + [Mona_T1_Min_Volume]]);
    var Mona_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[0])["T5_" + [Mona_T1_Min_Volume]]);
    var Mona_T1_Max_Volume = "L1toL" + Mona_T1.noUiSlider.get()[1];
    var Mona_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[1])["T1_" + [Mona_T1_Max_Volume]]);
    var Mona_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[1])["T2_" + [Mona_T1_Max_Volume]]);
    var Mona_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[1])["T3_" + [Mona_T1_Max_Volume]]);
    var Mona_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[1])["T4_" + [Mona_T1_Max_Volume]]);
    var Mona_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T1.noUiSlider.get()[1])["T5_" + [Mona_T1_Max_Volume]]);
    var Mona_T1_T1 = Mona_T1_T1_1toMax_Volume - Mona_T1_T1_1toMin_Volume
    var Mona_T1_T2 = Mona_T1_T2_1toMax_Volume - Mona_T1_T2_1toMin_Volume
    var Mona_T1_T3 = Mona_T1_T3_1toMax_Volume - Mona_T1_T3_1toMin_Volume
    var Mona_T1_T4 = Mona_T1_T4_1toMax_Volume - Mona_T1_T4_1toMin_Volume
    var Mona_T1_T5 = Mona_T1_T5_1toMax_Volume - Mona_T1_T5_1toMin_Volume
    document.getElementById('Mona_T1_T1_Volume').innerHTML = Mona_T1_T1;
    document.getElementById('Mona_T1_T2_Volume').innerHTML = Mona_T1_T2;
    document.getElementById('Mona_T1_T3_Volume').innerHTML = Mona_T1_T3;
    document.getElementById('Mona_T1_T4_Volume').innerHTML = Mona_T1_T4;
    document.getElementById('Mona_T1_T5_Volume').innerHTML = Mona_T1_T5.toLocaleString();
  });
  Mona_T2.noUiSlider.on('update', function (values, handle) {
    var Mona_T2_Min_Volume = "L1toL" + Mona_T2.noUiSlider.get()[0];
    var Mona_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[0])["T1_" + [Mona_T2_Min_Volume]]);
    var Mona_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[0])["T2_" + [Mona_T2_Min_Volume]]);
    var Mona_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[0])["T3_" + [Mona_T2_Min_Volume]]);
    var Mona_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[0])["T4_" + [Mona_T2_Min_Volume]]);
    var Mona_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[0])["T5_" + [Mona_T2_Min_Volume]]);
    var Mona_T2_Max_Volume = "L1toL" + Mona_T2.noUiSlider.get()[1];
    var Mona_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[1])["T1_" + [Mona_T2_Max_Volume]]);
    var Mona_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[1])["T2_" + [Mona_T2_Max_Volume]]);
    var Mona_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[1])["T3_" + [Mona_T2_Max_Volume]]);
    var Mona_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[1])["T4_" + [Mona_T2_Max_Volume]]);
    var Mona_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T2.noUiSlider.get()[1])["T5_" + [Mona_T2_Max_Volume]]);
    var Mona_T2_T1 = Mona_T2_T1_1toMax_Volume - Mona_T2_T1_1toMin_Volume
    var Mona_T2_T2 = Mona_T2_T2_1toMax_Volume - Mona_T2_T2_1toMin_Volume
    var Mona_T2_T3 = Mona_T2_T3_1toMax_Volume - Mona_T2_T3_1toMin_Volume
    var Mona_T2_T4 = Mona_T2_T4_1toMax_Volume - Mona_T2_T4_1toMin_Volume
    var Mona_T2_T5 = Mona_T2_T5_1toMax_Volume - Mona_T2_T5_1toMin_Volume
    document.getElementById('Mona_T2_T1_Volume').innerHTML = Mona_T2_T1;
    document.getElementById('Mona_T2_T2_Volume').innerHTML = Mona_T2_T2;
    document.getElementById('Mona_T2_T3_Volume').innerHTML = Mona_T2_T3;
    document.getElementById('Mona_T2_T4_Volume').innerHTML = Mona_T2_T4;
    document.getElementById('Mona_T2_T5_Volume').innerHTML = Mona_T2_T5.toLocaleString();
  });
  Mona_T3.noUiSlider.on('update', function (values, handle) {
    var Mona_T3_Min_Volume = "L1toL" + Mona_T3.noUiSlider.get()[0];
    var Mona_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[0])["T1_" + [Mona_T3_Min_Volume]]);
    var Mona_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[0])["T2_" + [Mona_T3_Min_Volume]]);
    var Mona_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[0])["T3_" + [Mona_T3_Min_Volume]]);
    var Mona_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[0])["T4_" + [Mona_T3_Min_Volume]]);
    var Mona_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[0])["T5_" + [Mona_T3_Min_Volume]]);
    var Mona_T3_Max_Volume = "L1toL" + Mona_T3.noUiSlider.get()[1];
    var Mona_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[1])["T1_" + [Mona_T3_Max_Volume]]);
    var Mona_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[1])["T2_" + [Mona_T3_Max_Volume]]);
    var Mona_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[1])["T3_" + [Mona_T3_Max_Volume]]);
    var Mona_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[1])["T4_" + [Mona_T3_Max_Volume]]);
    var Mona_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Mona_T3.noUiSlider.get()[1])["T5_" + [Mona_T3_Max_Volume]]);
    var Mona_T3_T1 = Mona_T3_T1_1toMax_Volume - Mona_T3_T1_1toMin_Volume
    var Mona_T3_T2 = Mona_T3_T2_1toMax_Volume - Mona_T3_T2_1toMin_Volume
    var Mona_T3_T3 = Mona_T3_T3_1toMax_Volume - Mona_T3_T3_1toMin_Volume
    var Mona_T3_T4 = Mona_T3_T4_1toMax_Volume - Mona_T3_T4_1toMin_Volume
    var Mona_T3_T5 = Mona_T3_T5_1toMax_Volume - Mona_T3_T5_1toMin_Volume
    document.getElementById('Mona_T3_T1_Volume').innerHTML = Mona_T3_T1;
    document.getElementById('Mona_T3_T2_Volume').innerHTML = Mona_T3_T2;
    document.getElementById('Mona_T3_T3_Volume').innerHTML = Mona_T3_T3;
    document.getElementById('Mona_T3_T4_Volume').innerHTML = Mona_T3_T4;
    document.getElementById('Mona_T3_T5_Volume').innerHTML = Mona_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Mona  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Qiqi  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Qiqi_Ex = document.getElementById('Qiqi_Ex');
noUiSlider.create(Qiqi_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Qiqi_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Qiqi_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Qiqi_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Qiqi_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function QiqiLoad() {
  Qiqi_Ex.noUiSlider.on('update', function (values, handle) {
    var Qiqi_Ex_Min_Volume = "L1toL" + Qiqi_Ex.noUiSlider.get()[0];
    var Qiqi_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Qiqi_Ex.noUiSlider.get()[0])[Qiqi_Ex_Min_Volume]);
    var Qiqi_Ex_Max_Volume = "L1toL" + Qiqi_Ex.noUiSlider.get()[1];
    var Qiqi_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Qiqi_Ex.noUiSlider.get()[1])[Qiqi_Ex_Max_Volume]);
    var Qiqi_Ex_Volume = Qiqi_Ex_1toMax_Volume - Qiqi_Ex_1toMin_Volume
    var Qiqi_Ex_Book_Volume = Qiqi_Ex_Volume / 1000
    var Qiqi_Ex_Mora_Volume = Qiqi_Ex_Volume * 0.2
    document.getElementById('Qiqi_Ex_Volume').innerHTML = Qiqi_Ex_Volume.toLocaleString();
    document.getElementById('Qiqi_Ex_Book_Volume').innerHTML = Qiqi_Ex_Book_Volume.toLocaleString();
    document.getElementById('Qiqi_Ex_Mora_Volume').innerHTML = Qiqi_Ex_Mora_Volume.toLocaleString();
  });
  Qiqi_Pr.noUiSlider.on('update', function (values, handle) {
    var Qiqi_Pr_Min_Volume = "L1toL" + Qiqi_Pr.noUiSlider.get()[0];
    var Qiqi_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[0])["P1_" + [Qiqi_Pr_Min_Volume]]);
    var Qiqi_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[0])["P2_" + [Qiqi_Pr_Min_Volume]]);
    var Qiqi_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[0])["P3_" + [Qiqi_Pr_Min_Volume]]);
    var Qiqi_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[0])["P4_" + [Qiqi_Pr_Min_Volume]]);
    var Qiqi_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[0])["P5_" + [Qiqi_Pr_Min_Volume]]);
    var Qiqi_Pr_Max_Volume = "L1toL" + Qiqi_Pr.noUiSlider.get()[1];
    var Qiqi_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[1])["P1_" + [Qiqi_Pr_Max_Volume]]);
    var Qiqi_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[1])["P2_" + [Qiqi_Pr_Max_Volume]]);
    var Qiqi_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[1])["P3_" + [Qiqi_Pr_Max_Volume]]);
    var Qiqi_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[1])["P4_" + [Qiqi_Pr_Max_Volume]]);
    var Qiqi_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Qiqi_Pr.noUiSlider.get()[1])["P5_" + [Qiqi_Pr_Max_Volume]]);
    var Qiqi_Pr_P1 = Qiqi_Pr_P1_1toMax_Volume - Qiqi_Pr_P1_1toMin_Volume
    var Qiqi_Pr_P2 = Qiqi_Pr_P2_1toMax_Volume - Qiqi_Pr_P2_1toMin_Volume
    var Qiqi_Pr_P3 = Qiqi_Pr_P3_1toMax_Volume - Qiqi_Pr_P3_1toMin_Volume
    var Qiqi_Pr_P4 = Qiqi_Pr_P4_1toMax_Volume - Qiqi_Pr_P4_1toMin_Volume
    var Qiqi_Pr_P5 = Qiqi_Pr_P5_1toMax_Volume - Qiqi_Pr_P5_1toMin_Volume
    document.getElementById('Qiqi_Pr_P1_Volume').innerHTML = Qiqi_Pr_P1;
    document.getElementById('Qiqi_Pr_P2_Volume').innerHTML = Qiqi_Pr_P2;
    document.getElementById('Qiqi_Pr_P3_Volume').innerHTML = Qiqi_Pr_P3;
    document.getElementById('Qiqi_Pr_P4_Volume').innerHTML = Qiqi_Pr_P4;
    document.getElementById('Qiqi_Pr_P5_Volume').innerHTML = Qiqi_Pr_P5.toLocaleString();
  });
  Qiqi_T1.noUiSlider.on('update', function (values, handle) {
    var Qiqi_T1_Min_Volume = "L1toL" + Qiqi_T1.noUiSlider.get()[0];
    var Qiqi_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[0])["T1_" + [Qiqi_T1_Min_Volume]]);
    var Qiqi_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[0])["T2_" + [Qiqi_T1_Min_Volume]]);
    var Qiqi_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[0])["T3_" + [Qiqi_T1_Min_Volume]]);
    var Qiqi_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[0])["T4_" + [Qiqi_T1_Min_Volume]]);
    var Qiqi_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[0])["T5_" + [Qiqi_T1_Min_Volume]]);
    var Qiqi_T1_Max_Volume = "L1toL" + Qiqi_T1.noUiSlider.get()[1];
    var Qiqi_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[1])["T1_" + [Qiqi_T1_Max_Volume]]);
    var Qiqi_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[1])["T2_" + [Qiqi_T1_Max_Volume]]);
    var Qiqi_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[1])["T3_" + [Qiqi_T1_Max_Volume]]);
    var Qiqi_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[1])["T4_" + [Qiqi_T1_Max_Volume]]);
    var Qiqi_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T1.noUiSlider.get()[1])["T5_" + [Qiqi_T1_Max_Volume]]);
    var Qiqi_T1_T1 = Qiqi_T1_T1_1toMax_Volume - Qiqi_T1_T1_1toMin_Volume
    var Qiqi_T1_T2 = Qiqi_T1_T2_1toMax_Volume - Qiqi_T1_T2_1toMin_Volume
    var Qiqi_T1_T3 = Qiqi_T1_T3_1toMax_Volume - Qiqi_T1_T3_1toMin_Volume
    var Qiqi_T1_T4 = Qiqi_T1_T4_1toMax_Volume - Qiqi_T1_T4_1toMin_Volume
    var Qiqi_T1_T5 = Qiqi_T1_T5_1toMax_Volume - Qiqi_T1_T5_1toMin_Volume
    document.getElementById('Qiqi_T1_T1_Volume').innerHTML = Qiqi_T1_T1;
    document.getElementById('Qiqi_T1_T2_Volume').innerHTML = Qiqi_T1_T2;
    document.getElementById('Qiqi_T1_T3_Volume').innerHTML = Qiqi_T1_T3;
    document.getElementById('Qiqi_T1_T4_Volume').innerHTML = Qiqi_T1_T4;
    document.getElementById('Qiqi_T1_T5_Volume').innerHTML = Qiqi_T1_T5.toLocaleString();
  });
  Qiqi_T2.noUiSlider.on('update', function (values, handle) {
    var Qiqi_T2_Min_Volume = "L1toL" + Qiqi_T2.noUiSlider.get()[0];
    var Qiqi_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[0])["T1_" + [Qiqi_T2_Min_Volume]]);
    var Qiqi_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[0])["T2_" + [Qiqi_T2_Min_Volume]]);
    var Qiqi_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[0])["T3_" + [Qiqi_T2_Min_Volume]]);
    var Qiqi_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[0])["T4_" + [Qiqi_T2_Min_Volume]]);
    var Qiqi_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[0])["T5_" + [Qiqi_T2_Min_Volume]]);
    var Qiqi_T2_Max_Volume = "L1toL" + Qiqi_T2.noUiSlider.get()[1];
    var Qiqi_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[1])["T1_" + [Qiqi_T2_Max_Volume]]);
    var Qiqi_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[1])["T2_" + [Qiqi_T2_Max_Volume]]);
    var Qiqi_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[1])["T3_" + [Qiqi_T2_Max_Volume]]);
    var Qiqi_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[1])["T4_" + [Qiqi_T2_Max_Volume]]);
    var Qiqi_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T2.noUiSlider.get()[1])["T5_" + [Qiqi_T2_Max_Volume]]);
    var Qiqi_T2_T1 = Qiqi_T2_T1_1toMax_Volume - Qiqi_T2_T1_1toMin_Volume
    var Qiqi_T2_T2 = Qiqi_T2_T2_1toMax_Volume - Qiqi_T2_T2_1toMin_Volume
    var Qiqi_T2_T3 = Qiqi_T2_T3_1toMax_Volume - Qiqi_T2_T3_1toMin_Volume
    var Qiqi_T2_T4 = Qiqi_T2_T4_1toMax_Volume - Qiqi_T2_T4_1toMin_Volume
    var Qiqi_T2_T5 = Qiqi_T2_T5_1toMax_Volume - Qiqi_T2_T5_1toMin_Volume
    document.getElementById('Qiqi_T2_T1_Volume').innerHTML = Qiqi_T2_T1;
    document.getElementById('Qiqi_T2_T2_Volume').innerHTML = Qiqi_T2_T2;
    document.getElementById('Qiqi_T2_T3_Volume').innerHTML = Qiqi_T2_T3;
    document.getElementById('Qiqi_T2_T4_Volume').innerHTML = Qiqi_T2_T4;
    document.getElementById('Qiqi_T2_T5_Volume').innerHTML = Qiqi_T2_T5.toLocaleString();
  });
  Qiqi_T3.noUiSlider.on('update', function (values, handle) {
    var Qiqi_T3_Min_Volume = "L1toL" + Qiqi_T3.noUiSlider.get()[0];
    var Qiqi_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[0])["T1_" + [Qiqi_T3_Min_Volume]]);
    var Qiqi_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[0])["T2_" + [Qiqi_T3_Min_Volume]]);
    var Qiqi_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[0])["T3_" + [Qiqi_T3_Min_Volume]]);
    var Qiqi_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[0])["T4_" + [Qiqi_T3_Min_Volume]]);
    var Qiqi_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[0])["T5_" + [Qiqi_T3_Min_Volume]]);
    var Qiqi_T3_Max_Volume = "L1toL" + Qiqi_T3.noUiSlider.get()[1];
    var Qiqi_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[1])["T1_" + [Qiqi_T3_Max_Volume]]);
    var Qiqi_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[1])["T2_" + [Qiqi_T3_Max_Volume]]);
    var Qiqi_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[1])["T3_" + [Qiqi_T3_Max_Volume]]);
    var Qiqi_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[1])["T4_" + [Qiqi_T3_Max_Volume]]);
    var Qiqi_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Qiqi_T3.noUiSlider.get()[1])["T5_" + [Qiqi_T3_Max_Volume]]);
    var Qiqi_T3_T1 = Qiqi_T3_T1_1toMax_Volume - Qiqi_T3_T1_1toMin_Volume
    var Qiqi_T3_T2 = Qiqi_T3_T2_1toMax_Volume - Qiqi_T3_T2_1toMin_Volume
    var Qiqi_T3_T3 = Qiqi_T3_T3_1toMax_Volume - Qiqi_T3_T3_1toMin_Volume
    var Qiqi_T3_T4 = Qiqi_T3_T4_1toMax_Volume - Qiqi_T3_T4_1toMin_Volume
    var Qiqi_T3_T5 = Qiqi_T3_T5_1toMax_Volume - Qiqi_T3_T5_1toMin_Volume
    document.getElementById('Qiqi_T3_T1_Volume').innerHTML = Qiqi_T3_T1;
    document.getElementById('Qiqi_T3_T2_Volume').innerHTML = Qiqi_T3_T2;
    document.getElementById('Qiqi_T3_T3_Volume').innerHTML = Qiqi_T3_T3;
    document.getElementById('Qiqi_T3_T4_Volume').innerHTML = Qiqi_T3_T4;
    document.getElementById('Qiqi_T3_T5_Volume').innerHTML = Qiqi_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Qiqi  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Diluc  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Diluc_Ex = document.getElementById('Diluc_Ex');
noUiSlider.create(Diluc_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Diluc_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Diluc_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Diluc_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Diluc_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function DilucLoad() {
  Diluc_Ex.noUiSlider.on('update', function (values, handle) {
    var Diluc_Ex_Min_Volume = "L1toL" + Diluc_Ex.noUiSlider.get()[0];
    var Diluc_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Diluc_Ex.noUiSlider.get()[0])[Diluc_Ex_Min_Volume]);
    var Diluc_Ex_Max_Volume = "L1toL" + Diluc_Ex.noUiSlider.get()[1];
    var Diluc_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Diluc_Ex.noUiSlider.get()[1])[Diluc_Ex_Max_Volume]);
    var Diluc_Ex_Volume = Diluc_Ex_1toMax_Volume - Diluc_Ex_1toMin_Volume
    var Diluc_Ex_Book_Volume = Diluc_Ex_Volume / 1000
    var Diluc_Ex_Mora_Volume = Diluc_Ex_Volume * 0.2
    document.getElementById('Diluc_Ex_Volume').innerHTML = Diluc_Ex_Volume.toLocaleString();
    document.getElementById('Diluc_Ex_Book_Volume').innerHTML = Diluc_Ex_Book_Volume.toLocaleString();
    document.getElementById('Diluc_Ex_Mora_Volume').innerHTML = Diluc_Ex_Mora_Volume.toLocaleString();
  });
  Diluc_Pr.noUiSlider.on('update', function (values, handle) {
    var Diluc_Pr_Min_Volume = "L1toL" + Diluc_Pr.noUiSlider.get()[0];
    var Diluc_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[0])["P1_" + [Diluc_Pr_Min_Volume]]);
    var Diluc_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[0])["P2_" + [Diluc_Pr_Min_Volume]]);
    var Diluc_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[0])["P3_" + [Diluc_Pr_Min_Volume]]);
    var Diluc_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[0])["P4_" + [Diluc_Pr_Min_Volume]]);
    var Diluc_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[0])["P5_" + [Diluc_Pr_Min_Volume]]);
    var Diluc_Pr_Max_Volume = "L1toL" + Diluc_Pr.noUiSlider.get()[1];
    var Diluc_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[1])["P1_" + [Diluc_Pr_Max_Volume]]);
    var Diluc_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[1])["P2_" + [Diluc_Pr_Max_Volume]]);
    var Diluc_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[1])["P3_" + [Diluc_Pr_Max_Volume]]);
    var Diluc_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[1])["P4_" + [Diluc_Pr_Max_Volume]]);
    var Diluc_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Diluc_Pr.noUiSlider.get()[1])["P5_" + [Diluc_Pr_Max_Volume]]);
    var Diluc_Pr_P1 = Diluc_Pr_P1_1toMax_Volume - Diluc_Pr_P1_1toMin_Volume
    var Diluc_Pr_P2 = Diluc_Pr_P2_1toMax_Volume - Diluc_Pr_P2_1toMin_Volume
    var Diluc_Pr_P3 = Diluc_Pr_P3_1toMax_Volume - Diluc_Pr_P3_1toMin_Volume
    var Diluc_Pr_P4 = Diluc_Pr_P4_1toMax_Volume - Diluc_Pr_P4_1toMin_Volume
    var Diluc_Pr_P5 = Diluc_Pr_P5_1toMax_Volume - Diluc_Pr_P5_1toMin_Volume
    document.getElementById('Diluc_Pr_P1_Volume').innerHTML = Diluc_Pr_P1;
    document.getElementById('Diluc_Pr_P2_Volume').innerHTML = Diluc_Pr_P2;
    document.getElementById('Diluc_Pr_P3_Volume').innerHTML = Diluc_Pr_P3;
    document.getElementById('Diluc_Pr_P4_Volume').innerHTML = Diluc_Pr_P4;
    document.getElementById('Diluc_Pr_P5_Volume').innerHTML = Diluc_Pr_P5.toLocaleString();
  });
  Diluc_T1.noUiSlider.on('update', function (values, handle) {
    var Diluc_T1_Min_Volume = "L1toL" + Diluc_T1.noUiSlider.get()[0];
    var Diluc_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[0])["T1_" + [Diluc_T1_Min_Volume]]);
    var Diluc_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[0])["T2_" + [Diluc_T1_Min_Volume]]);
    var Diluc_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[0])["T3_" + [Diluc_T1_Min_Volume]]);
    var Diluc_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[0])["T4_" + [Diluc_T1_Min_Volume]]);
    var Diluc_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[0])["T5_" + [Diluc_T1_Min_Volume]]);
    var Diluc_T1_Max_Volume = "L1toL" + Diluc_T1.noUiSlider.get()[1];
    var Diluc_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[1])["T1_" + [Diluc_T1_Max_Volume]]);
    var Diluc_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[1])["T2_" + [Diluc_T1_Max_Volume]]);
    var Diluc_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[1])["T3_" + [Diluc_T1_Max_Volume]]);
    var Diluc_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[1])["T4_" + [Diluc_T1_Max_Volume]]);
    var Diluc_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T1.noUiSlider.get()[1])["T5_" + [Diluc_T1_Max_Volume]]);
    var Diluc_T1_T1 = Diluc_T1_T1_1toMax_Volume - Diluc_T1_T1_1toMin_Volume
    var Diluc_T1_T2 = Diluc_T1_T2_1toMax_Volume - Diluc_T1_T2_1toMin_Volume
    var Diluc_T1_T3 = Diluc_T1_T3_1toMax_Volume - Diluc_T1_T3_1toMin_Volume
    var Diluc_T1_T4 = Diluc_T1_T4_1toMax_Volume - Diluc_T1_T4_1toMin_Volume
    var Diluc_T1_T5 = Diluc_T1_T5_1toMax_Volume - Diluc_T1_T5_1toMin_Volume
    document.getElementById('Diluc_T1_T1_Volume').innerHTML = Diluc_T1_T1;
    document.getElementById('Diluc_T1_T2_Volume').innerHTML = Diluc_T1_T2;
    document.getElementById('Diluc_T1_T3_Volume').innerHTML = Diluc_T1_T3;
    document.getElementById('Diluc_T1_T4_Volume').innerHTML = Diluc_T1_T4;
    document.getElementById('Diluc_T1_T5_Volume').innerHTML = Diluc_T1_T5.toLocaleString();
  });
  Diluc_T2.noUiSlider.on('update', function (values, handle) {
    var Diluc_T2_Min_Volume = "L1toL" + Diluc_T2.noUiSlider.get()[0];
    var Diluc_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[0])["T1_" + [Diluc_T2_Min_Volume]]);
    var Diluc_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[0])["T2_" + [Diluc_T2_Min_Volume]]);
    var Diluc_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[0])["T3_" + [Diluc_T2_Min_Volume]]);
    var Diluc_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[0])["T4_" + [Diluc_T2_Min_Volume]]);
    var Diluc_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[0])["T5_" + [Diluc_T2_Min_Volume]]);
    var Diluc_T2_Max_Volume = "L1toL" + Diluc_T2.noUiSlider.get()[1];
    var Diluc_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[1])["T1_" + [Diluc_T2_Max_Volume]]);
    var Diluc_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[1])["T2_" + [Diluc_T2_Max_Volume]]);
    var Diluc_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[1])["T3_" + [Diluc_T2_Max_Volume]]);
    var Diluc_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[1])["T4_" + [Diluc_T2_Max_Volume]]);
    var Diluc_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T2.noUiSlider.get()[1])["T5_" + [Diluc_T2_Max_Volume]]);
    var Diluc_T2_T1 = Diluc_T2_T1_1toMax_Volume - Diluc_T2_T1_1toMin_Volume
    var Diluc_T2_T2 = Diluc_T2_T2_1toMax_Volume - Diluc_T2_T2_1toMin_Volume
    var Diluc_T2_T3 = Diluc_T2_T3_1toMax_Volume - Diluc_T2_T3_1toMin_Volume
    var Diluc_T2_T4 = Diluc_T2_T4_1toMax_Volume - Diluc_T2_T4_1toMin_Volume
    var Diluc_T2_T5 = Diluc_T2_T5_1toMax_Volume - Diluc_T2_T5_1toMin_Volume
    document.getElementById('Diluc_T2_T1_Volume').innerHTML = Diluc_T2_T1;
    document.getElementById('Diluc_T2_T2_Volume').innerHTML = Diluc_T2_T2;
    document.getElementById('Diluc_T2_T3_Volume').innerHTML = Diluc_T2_T3;
    document.getElementById('Diluc_T2_T4_Volume').innerHTML = Diluc_T2_T4;
    document.getElementById('Diluc_T2_T5_Volume').innerHTML = Diluc_T2_T5.toLocaleString();
  });
  Diluc_T3.noUiSlider.on('update', function (values, handle) {
    var Diluc_T3_Min_Volume = "L1toL" + Diluc_T3.noUiSlider.get()[0];
    var Diluc_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[0])["T1_" + [Diluc_T3_Min_Volume]]);
    var Diluc_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[0])["T2_" + [Diluc_T3_Min_Volume]]);
    var Diluc_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[0])["T3_" + [Diluc_T3_Min_Volume]]);
    var Diluc_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[0])["T4_" + [Diluc_T3_Min_Volume]]);
    var Diluc_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[0])["T5_" + [Diluc_T3_Min_Volume]]);
    var Diluc_T3_Max_Volume = "L1toL" + Diluc_T3.noUiSlider.get()[1];
    var Diluc_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[1])["T1_" + [Diluc_T3_Max_Volume]]);
    var Diluc_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[1])["T2_" + [Diluc_T3_Max_Volume]]);
    var Diluc_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[1])["T3_" + [Diluc_T3_Max_Volume]]);
    var Diluc_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[1])["T4_" + [Diluc_T3_Max_Volume]]);
    var Diluc_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Diluc_T3.noUiSlider.get()[1])["T5_" + [Diluc_T3_Max_Volume]]);
    var Diluc_T3_T1 = Diluc_T3_T1_1toMax_Volume - Diluc_T3_T1_1toMin_Volume
    var Diluc_T3_T2 = Diluc_T3_T2_1toMax_Volume - Diluc_T3_T2_1toMin_Volume
    var Diluc_T3_T3 = Diluc_T3_T3_1toMax_Volume - Diluc_T3_T3_1toMin_Volume
    var Diluc_T3_T4 = Diluc_T3_T4_1toMax_Volume - Diluc_T3_T4_1toMin_Volume
    var Diluc_T3_T5 = Diluc_T3_T5_1toMax_Volume - Diluc_T3_T5_1toMin_Volume
    document.getElementById('Diluc_T3_T1_Volume').innerHTML = Diluc_T3_T1;
    document.getElementById('Diluc_T3_T2_Volume').innerHTML = Diluc_T3_T2;
    document.getElementById('Diluc_T3_T3_Volume').innerHTML = Diluc_T3_T3;
    document.getElementById('Diluc_T3_T4_Volume').innerHTML = Diluc_T3_T4;
    document.getElementById('Diluc_T3_T5_Volume').innerHTML = Diluc_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Diluc  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Jean  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Jean_Ex = document.getElementById('Jean_Ex');
noUiSlider.create(Jean_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Jean_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Jean_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Jean_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Jean_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function JeanLoad() {
  Jean_Ex.noUiSlider.on('update', function (values, handle) {
    var Jean_Ex_Min_Volume = "L1toL" + Jean_Ex.noUiSlider.get()[0];
    var Jean_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Jean_Ex.noUiSlider.get()[0])[Jean_Ex_Min_Volume]);
    var Jean_Ex_Max_Volume = "L1toL" + Jean_Ex.noUiSlider.get()[1];
    var Jean_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Jean_Ex.noUiSlider.get()[1])[Jean_Ex_Max_Volume]);
    var Jean_Ex_Volume = Jean_Ex_1toMax_Volume - Jean_Ex_1toMin_Volume
    var Jean_Ex_Book_Volume = Jean_Ex_Volume / 1000
    var Jean_Ex_Mora_Volume = Jean_Ex_Volume * 0.2
    document.getElementById('Jean_Ex_Volume').innerHTML = Jean_Ex_Volume.toLocaleString();
    document.getElementById('Jean_Ex_Book_Volume').innerHTML = Jean_Ex_Book_Volume.toLocaleString();
    document.getElementById('Jean_Ex_Mora_Volume').innerHTML = Jean_Ex_Mora_Volume.toLocaleString();
  });
  Jean_Pr.noUiSlider.on('update', function (values, handle) {
    var Jean_Pr_Min_Volume = "L1toL" + Jean_Pr.noUiSlider.get()[0];
    var Jean_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[0])["P1_" + [Jean_Pr_Min_Volume]]);
    var Jean_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[0])["P2_" + [Jean_Pr_Min_Volume]]);
    var Jean_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[0])["P3_" + [Jean_Pr_Min_Volume]]);
    var Jean_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[0])["P4_" + [Jean_Pr_Min_Volume]]);
    var Jean_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[0])["P5_" + [Jean_Pr_Min_Volume]]);
    var Jean_Pr_Max_Volume = "L1toL" + Jean_Pr.noUiSlider.get()[1];
    var Jean_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[1])["P1_" + [Jean_Pr_Max_Volume]]);
    var Jean_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[1])["P2_" + [Jean_Pr_Max_Volume]]);
    var Jean_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[1])["P3_" + [Jean_Pr_Max_Volume]]);
    var Jean_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[1])["P4_" + [Jean_Pr_Max_Volume]]);
    var Jean_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Jean_Pr.noUiSlider.get()[1])["P5_" + [Jean_Pr_Max_Volume]]);
    var Jean_Pr_P1 = Jean_Pr_P1_1toMax_Volume - Jean_Pr_P1_1toMin_Volume
    var Jean_Pr_P2 = Jean_Pr_P2_1toMax_Volume - Jean_Pr_P2_1toMin_Volume
    var Jean_Pr_P3 = Jean_Pr_P3_1toMax_Volume - Jean_Pr_P3_1toMin_Volume
    var Jean_Pr_P4 = Jean_Pr_P4_1toMax_Volume - Jean_Pr_P4_1toMin_Volume
    var Jean_Pr_P5 = Jean_Pr_P5_1toMax_Volume - Jean_Pr_P5_1toMin_Volume
    document.getElementById('Jean_Pr_P1_Volume').innerHTML = Jean_Pr_P1;
    document.getElementById('Jean_Pr_P2_Volume').innerHTML = Jean_Pr_P2;
    document.getElementById('Jean_Pr_P3_Volume').innerHTML = Jean_Pr_P3;
    document.getElementById('Jean_Pr_P4_Volume').innerHTML = Jean_Pr_P4;
    document.getElementById('Jean_Pr_P5_Volume').innerHTML = Jean_Pr_P5.toLocaleString();
  });
  Jean_T1.noUiSlider.on('update', function (values, handle) {
    var Jean_T1_Min_Volume = "L1toL" + Jean_T1.noUiSlider.get()[0];
    var Jean_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[0])["T1_" + [Jean_T1_Min_Volume]]);
    var Jean_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[0])["T2_" + [Jean_T1_Min_Volume]]);
    var Jean_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[0])["T3_" + [Jean_T1_Min_Volume]]);
    var Jean_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[0])["T4_" + [Jean_T1_Min_Volume]]);
    var Jean_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[0])["T5_" + [Jean_T1_Min_Volume]]);
    var Jean_T1_Max_Volume = "L1toL" + Jean_T1.noUiSlider.get()[1];
    var Jean_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[1])["T1_" + [Jean_T1_Max_Volume]]);
    var Jean_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[1])["T2_" + [Jean_T1_Max_Volume]]);
    var Jean_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[1])["T3_" + [Jean_T1_Max_Volume]]);
    var Jean_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[1])["T4_" + [Jean_T1_Max_Volume]]);
    var Jean_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T1.noUiSlider.get()[1])["T5_" + [Jean_T1_Max_Volume]]);
    var Jean_T1_T1 = Jean_T1_T1_1toMax_Volume - Jean_T1_T1_1toMin_Volume
    var Jean_T1_T2 = Jean_T1_T2_1toMax_Volume - Jean_T1_T2_1toMin_Volume
    var Jean_T1_T3 = Jean_T1_T3_1toMax_Volume - Jean_T1_T3_1toMin_Volume
    var Jean_T1_T4 = Jean_T1_T4_1toMax_Volume - Jean_T1_T4_1toMin_Volume
    var Jean_T1_T5 = Jean_T1_T5_1toMax_Volume - Jean_T1_T5_1toMin_Volume
    document.getElementById('Jean_T1_T1_Volume').innerHTML = Jean_T1_T1;
    document.getElementById('Jean_T1_T2_Volume').innerHTML = Jean_T1_T2;
    document.getElementById('Jean_T1_T3_Volume').innerHTML = Jean_T1_T3;
    document.getElementById('Jean_T1_T4_Volume').innerHTML = Jean_T1_T4;
    document.getElementById('Jean_T1_T5_Volume').innerHTML = Jean_T1_T5.toLocaleString();
  });
  Jean_T2.noUiSlider.on('update', function (values, handle) {
    var Jean_T2_Min_Volume = "L1toL" + Jean_T2.noUiSlider.get()[0];
    var Jean_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[0])["T1_" + [Jean_T2_Min_Volume]]);
    var Jean_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[0])["T2_" + [Jean_T2_Min_Volume]]);
    var Jean_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[0])["T3_" + [Jean_T2_Min_Volume]]);
    var Jean_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[0])["T4_" + [Jean_T2_Min_Volume]]);
    var Jean_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[0])["T5_" + [Jean_T2_Min_Volume]]);
    var Jean_T2_Max_Volume = "L1toL" + Jean_T2.noUiSlider.get()[1];
    var Jean_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[1])["T1_" + [Jean_T2_Max_Volume]]);
    var Jean_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[1])["T2_" + [Jean_T2_Max_Volume]]);
    var Jean_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[1])["T3_" + [Jean_T2_Max_Volume]]);
    var Jean_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[1])["T4_" + [Jean_T2_Max_Volume]]);
    var Jean_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T2.noUiSlider.get()[1])["T5_" + [Jean_T2_Max_Volume]]);
    var Jean_T2_T1 = Jean_T2_T1_1toMax_Volume - Jean_T2_T1_1toMin_Volume
    var Jean_T2_T2 = Jean_T2_T2_1toMax_Volume - Jean_T2_T2_1toMin_Volume
    var Jean_T2_T3 = Jean_T2_T3_1toMax_Volume - Jean_T2_T3_1toMin_Volume
    var Jean_T2_T4 = Jean_T2_T4_1toMax_Volume - Jean_T2_T4_1toMin_Volume
    var Jean_T2_T5 = Jean_T2_T5_1toMax_Volume - Jean_T2_T5_1toMin_Volume
    document.getElementById('Jean_T2_T1_Volume').innerHTML = Jean_T2_T1;
    document.getElementById('Jean_T2_T2_Volume').innerHTML = Jean_T2_T2;
    document.getElementById('Jean_T2_T3_Volume').innerHTML = Jean_T2_T3;
    document.getElementById('Jean_T2_T4_Volume').innerHTML = Jean_T2_T4;
    document.getElementById('Jean_T2_T5_Volume').innerHTML = Jean_T2_T5.toLocaleString();
  });
  Jean_T3.noUiSlider.on('update', function (values, handle) {
    var Jean_T3_Min_Volume = "L1toL" + Jean_T3.noUiSlider.get()[0];
    var Jean_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[0])["T1_" + [Jean_T3_Min_Volume]]);
    var Jean_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[0])["T2_" + [Jean_T3_Min_Volume]]);
    var Jean_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[0])["T3_" + [Jean_T3_Min_Volume]]);
    var Jean_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[0])["T4_" + [Jean_T3_Min_Volume]]);
    var Jean_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[0])["T5_" + [Jean_T3_Min_Volume]]);
    var Jean_T3_Max_Volume = "L1toL" + Jean_T3.noUiSlider.get()[1];
    var Jean_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[1])["T1_" + [Jean_T3_Max_Volume]]);
    var Jean_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[1])["T2_" + [Jean_T3_Max_Volume]]);
    var Jean_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[1])["T3_" + [Jean_T3_Max_Volume]]);
    var Jean_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[1])["T4_" + [Jean_T3_Max_Volume]]);
    var Jean_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Jean_T3.noUiSlider.get()[1])["T5_" + [Jean_T3_Max_Volume]]);
    var Jean_T3_T1 = Jean_T3_T1_1toMax_Volume - Jean_T3_T1_1toMin_Volume
    var Jean_T3_T2 = Jean_T3_T2_1toMax_Volume - Jean_T3_T2_1toMin_Volume
    var Jean_T3_T3 = Jean_T3_T3_1toMax_Volume - Jean_T3_T3_1toMin_Volume
    var Jean_T3_T4 = Jean_T3_T4_1toMax_Volume - Jean_T3_T4_1toMin_Volume
    var Jean_T3_T5 = Jean_T3_T5_1toMax_Volume - Jean_T3_T5_1toMin_Volume
    document.getElementById('Jean_T3_T1_Volume').innerHTML = Jean_T3_T1;
    document.getElementById('Jean_T3_T2_Volume').innerHTML = Jean_T3_T2;
    document.getElementById('Jean_T3_T3_Volume').innerHTML = Jean_T3_T3;
    document.getElementById('Jean_T3_T4_Volume').innerHTML = Jean_T3_T4;
    document.getElementById('Jean_T3_T5_Volume').innerHTML = Jean_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Jean  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Sucrose  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Sucrose_Ex = document.getElementById('Sucrose_Ex');
noUiSlider.create(Sucrose_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sucrose_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sucrose_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sucrose_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Sucrose_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function SucroseLoad() {
  Sucrose_Ex.noUiSlider.on('update', function (values, handle) {
    var Sucrose_Ex_Min_Volume = "L1toL" + Sucrose_Ex.noUiSlider.get()[0];
    var Sucrose_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Sucrose_Ex.noUiSlider.get()[0])[Sucrose_Ex_Min_Volume]);
    var Sucrose_Ex_Max_Volume = "L1toL" + Sucrose_Ex.noUiSlider.get()[1];
    var Sucrose_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Sucrose_Ex.noUiSlider.get()[1])[Sucrose_Ex_Max_Volume]);
    var Sucrose_Ex_Volume = Sucrose_Ex_1toMax_Volume - Sucrose_Ex_1toMin_Volume
    var Sucrose_Ex_Book_Volume = Sucrose_Ex_Volume / 1000
    var Sucrose_Ex_Mora_Volume = Sucrose_Ex_Volume * 0.2
    document.getElementById('Sucrose_Ex_Volume').innerHTML = Sucrose_Ex_Volume.toLocaleString();
    document.getElementById('Sucrose_Ex_Book_Volume').innerHTML = Sucrose_Ex_Book_Volume.toLocaleString();
    document.getElementById('Sucrose_Ex_Mora_Volume').innerHTML = Sucrose_Ex_Mora_Volume.toLocaleString();
  });
  Sucrose_Pr.noUiSlider.on('update', function (values, handle) {
    var Sucrose_Pr_Min_Volume = "L1toL" + Sucrose_Pr.noUiSlider.get()[0];
    var Sucrose_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[0])["P1_" + [Sucrose_Pr_Min_Volume]]);
    var Sucrose_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[0])["P2_" + [Sucrose_Pr_Min_Volume]]);
    var Sucrose_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[0])["P3_" + [Sucrose_Pr_Min_Volume]]);
    var Sucrose_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[0])["P4_" + [Sucrose_Pr_Min_Volume]]);
    var Sucrose_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[0])["P5_" + [Sucrose_Pr_Min_Volume]]);
    var Sucrose_Pr_Max_Volume = "L1toL" + Sucrose_Pr.noUiSlider.get()[1];
    var Sucrose_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[1])["P1_" + [Sucrose_Pr_Max_Volume]]);
    var Sucrose_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[1])["P2_" + [Sucrose_Pr_Max_Volume]]);
    var Sucrose_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[1])["P3_" + [Sucrose_Pr_Max_Volume]]);
    var Sucrose_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[1])["P4_" + [Sucrose_Pr_Max_Volume]]);
    var Sucrose_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Sucrose_Pr.noUiSlider.get()[1])["P5_" + [Sucrose_Pr_Max_Volume]]);
    var Sucrose_Pr_P1 = Sucrose_Pr_P1_1toMax_Volume - Sucrose_Pr_P1_1toMin_Volume
    var Sucrose_Pr_P2 = Sucrose_Pr_P2_1toMax_Volume - Sucrose_Pr_P2_1toMin_Volume
    var Sucrose_Pr_P3 = Sucrose_Pr_P3_1toMax_Volume - Sucrose_Pr_P3_1toMin_Volume
    var Sucrose_Pr_P4 = Sucrose_Pr_P4_1toMax_Volume - Sucrose_Pr_P4_1toMin_Volume
    var Sucrose_Pr_P5 = Sucrose_Pr_P5_1toMax_Volume - Sucrose_Pr_P5_1toMin_Volume
    document.getElementById('Sucrose_Pr_P1_Volume').innerHTML = Sucrose_Pr_P1;
    document.getElementById('Sucrose_Pr_P2_Volume').innerHTML = Sucrose_Pr_P2;
    document.getElementById('Sucrose_Pr_P3_Volume').innerHTML = Sucrose_Pr_P3;
    document.getElementById('Sucrose_Pr_P4_Volume').innerHTML = Sucrose_Pr_P4;
    document.getElementById('Sucrose_Pr_P5_Volume').innerHTML = Sucrose_Pr_P5.toLocaleString();
  });
  Sucrose_T1.noUiSlider.on('update', function (values, handle) {
    var Sucrose_T1_Min_Volume = "L1toL" + Sucrose_T1.noUiSlider.get()[0];
    var Sucrose_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[0])["T1_" + [Sucrose_T1_Min_Volume]]);
    var Sucrose_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[0])["T2_" + [Sucrose_T1_Min_Volume]]);
    var Sucrose_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[0])["T3_" + [Sucrose_T1_Min_Volume]]);
    var Sucrose_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[0])["T4_" + [Sucrose_T1_Min_Volume]]);
    var Sucrose_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[0])["T5_" + [Sucrose_T1_Min_Volume]]);
    var Sucrose_T1_Max_Volume = "L1toL" + Sucrose_T1.noUiSlider.get()[1];
    var Sucrose_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[1])["T1_" + [Sucrose_T1_Max_Volume]]);
    var Sucrose_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[1])["T2_" + [Sucrose_T1_Max_Volume]]);
    var Sucrose_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[1])["T3_" + [Sucrose_T1_Max_Volume]]);
    var Sucrose_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[1])["T4_" + [Sucrose_T1_Max_Volume]]);
    var Sucrose_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T1.noUiSlider.get()[1])["T5_" + [Sucrose_T1_Max_Volume]]);
    var Sucrose_T1_T1 = Sucrose_T1_T1_1toMax_Volume - Sucrose_T1_T1_1toMin_Volume
    var Sucrose_T1_T2 = Sucrose_T1_T2_1toMax_Volume - Sucrose_T1_T2_1toMin_Volume
    var Sucrose_T1_T3 = Sucrose_T1_T3_1toMax_Volume - Sucrose_T1_T3_1toMin_Volume
    var Sucrose_T1_T4 = Sucrose_T1_T4_1toMax_Volume - Sucrose_T1_T4_1toMin_Volume
    var Sucrose_T1_T5 = Sucrose_T1_T5_1toMax_Volume - Sucrose_T1_T5_1toMin_Volume
    document.getElementById('Sucrose_T1_T1_Volume').innerHTML = Sucrose_T1_T1;
    document.getElementById('Sucrose_T1_T2_Volume').innerHTML = Sucrose_T1_T2;
    document.getElementById('Sucrose_T1_T3_Volume').innerHTML = Sucrose_T1_T3;
    document.getElementById('Sucrose_T1_T4_Volume').innerHTML = Sucrose_T1_T4;
    document.getElementById('Sucrose_T1_T5_Volume').innerHTML = Sucrose_T1_T5.toLocaleString();
  });
  Sucrose_T2.noUiSlider.on('update', function (values, handle) {
    var Sucrose_T2_Min_Volume = "L1toL" + Sucrose_T2.noUiSlider.get()[0];
    var Sucrose_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[0])["T1_" + [Sucrose_T2_Min_Volume]]);
    var Sucrose_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[0])["T2_" + [Sucrose_T2_Min_Volume]]);
    var Sucrose_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[0])["T3_" + [Sucrose_T2_Min_Volume]]);
    var Sucrose_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[0])["T4_" + [Sucrose_T2_Min_Volume]]);
    var Sucrose_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[0])["T5_" + [Sucrose_T2_Min_Volume]]);
    var Sucrose_T2_Max_Volume = "L1toL" + Sucrose_T2.noUiSlider.get()[1];
    var Sucrose_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[1])["T1_" + [Sucrose_T2_Max_Volume]]);
    var Sucrose_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[1])["T2_" + [Sucrose_T2_Max_Volume]]);
    var Sucrose_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[1])["T3_" + [Sucrose_T2_Max_Volume]]);
    var Sucrose_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[1])["T4_" + [Sucrose_T2_Max_Volume]]);
    var Sucrose_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T2.noUiSlider.get()[1])["T5_" + [Sucrose_T2_Max_Volume]]);
    var Sucrose_T2_T1 = Sucrose_T2_T1_1toMax_Volume - Sucrose_T2_T1_1toMin_Volume
    var Sucrose_T2_T2 = Sucrose_T2_T2_1toMax_Volume - Sucrose_T2_T2_1toMin_Volume
    var Sucrose_T2_T3 = Sucrose_T2_T3_1toMax_Volume - Sucrose_T2_T3_1toMin_Volume
    var Sucrose_T2_T4 = Sucrose_T2_T4_1toMax_Volume - Sucrose_T2_T4_1toMin_Volume
    var Sucrose_T2_T5 = Sucrose_T2_T5_1toMax_Volume - Sucrose_T2_T5_1toMin_Volume
    document.getElementById('Sucrose_T2_T1_Volume').innerHTML = Sucrose_T2_T1;
    document.getElementById('Sucrose_T2_T2_Volume').innerHTML = Sucrose_T2_T2;
    document.getElementById('Sucrose_T2_T3_Volume').innerHTML = Sucrose_T2_T3;
    document.getElementById('Sucrose_T2_T4_Volume').innerHTML = Sucrose_T2_T4;
    document.getElementById('Sucrose_T2_T5_Volume').innerHTML = Sucrose_T2_T5.toLocaleString();
  });
  Sucrose_T3.noUiSlider.on('update', function (values, handle) {
    var Sucrose_T3_Min_Volume = "L1toL" + Sucrose_T3.noUiSlider.get()[0];
    var Sucrose_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[0])["T1_" + [Sucrose_T3_Min_Volume]]);
    var Sucrose_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[0])["T2_" + [Sucrose_T3_Min_Volume]]);
    var Sucrose_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[0])["T3_" + [Sucrose_T3_Min_Volume]]);
    var Sucrose_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[0])["T4_" + [Sucrose_T3_Min_Volume]]);
    var Sucrose_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[0])["T5_" + [Sucrose_T3_Min_Volume]]);
    var Sucrose_T3_Max_Volume = "L1toL" + Sucrose_T3.noUiSlider.get()[1];
    var Sucrose_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[1])["T1_" + [Sucrose_T3_Max_Volume]]);
    var Sucrose_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[1])["T2_" + [Sucrose_T3_Max_Volume]]);
    var Sucrose_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[1])["T3_" + [Sucrose_T3_Max_Volume]]);
    var Sucrose_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[1])["T4_" + [Sucrose_T3_Max_Volume]]);
    var Sucrose_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Sucrose_T3.noUiSlider.get()[1])["T5_" + [Sucrose_T3_Max_Volume]]);
    var Sucrose_T3_T1 = Sucrose_T3_T1_1toMax_Volume - Sucrose_T3_T1_1toMin_Volume
    var Sucrose_T3_T2 = Sucrose_T3_T2_1toMax_Volume - Sucrose_T3_T2_1toMin_Volume
    var Sucrose_T3_T3 = Sucrose_T3_T3_1toMax_Volume - Sucrose_T3_T3_1toMin_Volume
    var Sucrose_T3_T4 = Sucrose_T3_T4_1toMax_Volume - Sucrose_T3_T4_1toMin_Volume
    var Sucrose_T3_T5 = Sucrose_T3_T5_1toMax_Volume - Sucrose_T3_T5_1toMin_Volume
    document.getElementById('Sucrose_T3_T1_Volume').innerHTML = Sucrose_T3_T1;
    document.getElementById('Sucrose_T3_T2_Volume').innerHTML = Sucrose_T3_T2;
    document.getElementById('Sucrose_T3_T3_Volume').innerHTML = Sucrose_T3_T3;
    document.getElementById('Sucrose_T3_T4_Volume').innerHTML = Sucrose_T3_T4;
    document.getElementById('Sucrose_T3_T5_Volume').innerHTML = Sucrose_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Sucrose  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Chongyun  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Chongyun_Ex = document.getElementById('Chongyun_Ex');
noUiSlider.create(Chongyun_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Chongyun_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Chongyun_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Chongyun_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Chongyun_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function ChongyunLoad() {
  Chongyun_Ex.noUiSlider.on('update', function (values, handle) {
    var Chongyun_Ex_Min_Volume = "L1toL" + Chongyun_Ex.noUiSlider.get()[0];
    var Chongyun_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Chongyun_Ex.noUiSlider.get()[0])[Chongyun_Ex_Min_Volume]);
    var Chongyun_Ex_Max_Volume = "L1toL" + Chongyun_Ex.noUiSlider.get()[1];
    var Chongyun_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Chongyun_Ex.noUiSlider.get()[1])[Chongyun_Ex_Max_Volume]);
    var Chongyun_Ex_Volume = Chongyun_Ex_1toMax_Volume - Chongyun_Ex_1toMin_Volume
    var Chongyun_Ex_Book_Volume = Chongyun_Ex_Volume / 1000
    var Chongyun_Ex_Mora_Volume = Chongyun_Ex_Volume * 0.2
    document.getElementById('Chongyun_Ex_Volume').innerHTML = Chongyun_Ex_Volume.toLocaleString();
    document.getElementById('Chongyun_Ex_Book_Volume').innerHTML = Chongyun_Ex_Book_Volume.toLocaleString();
    document.getElementById('Chongyun_Ex_Mora_Volume').innerHTML = Chongyun_Ex_Mora_Volume.toLocaleString();
  });
  Chongyun_Pr.noUiSlider.on('update', function (values, handle) {
    var Chongyun_Pr_Min_Volume = "L1toL" + Chongyun_Pr.noUiSlider.get()[0];
    var Chongyun_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[0])["P1_" + [Chongyun_Pr_Min_Volume]]);
    var Chongyun_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[0])["P2_" + [Chongyun_Pr_Min_Volume]]);
    var Chongyun_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[0])["P3_" + [Chongyun_Pr_Min_Volume]]);
    var Chongyun_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[0])["P4_" + [Chongyun_Pr_Min_Volume]]);
    var Chongyun_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[0])["P5_" + [Chongyun_Pr_Min_Volume]]);
    var Chongyun_Pr_Max_Volume = "L1toL" + Chongyun_Pr.noUiSlider.get()[1];
    var Chongyun_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[1])["P1_" + [Chongyun_Pr_Max_Volume]]);
    var Chongyun_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[1])["P2_" + [Chongyun_Pr_Max_Volume]]);
    var Chongyun_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[1])["P3_" + [Chongyun_Pr_Max_Volume]]);
    var Chongyun_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[1])["P4_" + [Chongyun_Pr_Max_Volume]]);
    var Chongyun_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Chongyun_Pr.noUiSlider.get()[1])["P5_" + [Chongyun_Pr_Max_Volume]]);
    var Chongyun_Pr_P1 = Chongyun_Pr_P1_1toMax_Volume - Chongyun_Pr_P1_1toMin_Volume
    var Chongyun_Pr_P2 = Chongyun_Pr_P2_1toMax_Volume - Chongyun_Pr_P2_1toMin_Volume
    var Chongyun_Pr_P3 = Chongyun_Pr_P3_1toMax_Volume - Chongyun_Pr_P3_1toMin_Volume
    var Chongyun_Pr_P4 = Chongyun_Pr_P4_1toMax_Volume - Chongyun_Pr_P4_1toMin_Volume
    var Chongyun_Pr_P5 = Chongyun_Pr_P5_1toMax_Volume - Chongyun_Pr_P5_1toMin_Volume
    document.getElementById('Chongyun_Pr_P1_Volume').innerHTML = Chongyun_Pr_P1;
    document.getElementById('Chongyun_Pr_P2_Volume').innerHTML = Chongyun_Pr_P2;
    document.getElementById('Chongyun_Pr_P3_Volume').innerHTML = Chongyun_Pr_P3;
    document.getElementById('Chongyun_Pr_P4_Volume').innerHTML = Chongyun_Pr_P4;
    document.getElementById('Chongyun_Pr_P5_Volume').innerHTML = Chongyun_Pr_P5.toLocaleString();
  });
  Chongyun_T1.noUiSlider.on('update', function (values, handle) {
    var Chongyun_T1_Min_Volume = "L1toL" + Chongyun_T1.noUiSlider.get()[0];
    var Chongyun_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[0])["T1_" + [Chongyun_T1_Min_Volume]]);
    var Chongyun_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[0])["T2_" + [Chongyun_T1_Min_Volume]]);
    var Chongyun_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[0])["T3_" + [Chongyun_T1_Min_Volume]]);
    var Chongyun_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[0])["T4_" + [Chongyun_T1_Min_Volume]]);
    var Chongyun_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[0])["T5_" + [Chongyun_T1_Min_Volume]]);
    var Chongyun_T1_Max_Volume = "L1toL" + Chongyun_T1.noUiSlider.get()[1];
    var Chongyun_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[1])["T1_" + [Chongyun_T1_Max_Volume]]);
    var Chongyun_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[1])["T2_" + [Chongyun_T1_Max_Volume]]);
    var Chongyun_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[1])["T3_" + [Chongyun_T1_Max_Volume]]);
    var Chongyun_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[1])["T4_" + [Chongyun_T1_Max_Volume]]);
    var Chongyun_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T1.noUiSlider.get()[1])["T5_" + [Chongyun_T1_Max_Volume]]);
    var Chongyun_T1_T1 = Chongyun_T1_T1_1toMax_Volume - Chongyun_T1_T1_1toMin_Volume
    var Chongyun_T1_T2 = Chongyun_T1_T2_1toMax_Volume - Chongyun_T1_T2_1toMin_Volume
    var Chongyun_T1_T3 = Chongyun_T1_T3_1toMax_Volume - Chongyun_T1_T3_1toMin_Volume
    var Chongyun_T1_T4 = Chongyun_T1_T4_1toMax_Volume - Chongyun_T1_T4_1toMin_Volume
    var Chongyun_T1_T5 = Chongyun_T1_T5_1toMax_Volume - Chongyun_T1_T5_1toMin_Volume
    document.getElementById('Chongyun_T1_T1_Volume').innerHTML = Chongyun_T1_T1;
    document.getElementById('Chongyun_T1_T2_Volume').innerHTML = Chongyun_T1_T2;
    document.getElementById('Chongyun_T1_T3_Volume').innerHTML = Chongyun_T1_T3;
    document.getElementById('Chongyun_T1_T4_Volume').innerHTML = Chongyun_T1_T4;
    document.getElementById('Chongyun_T1_T5_Volume').innerHTML = Chongyun_T1_T5.toLocaleString();
  });
  Chongyun_T2.noUiSlider.on('update', function (values, handle) {
    var Chongyun_T2_Min_Volume = "L1toL" + Chongyun_T2.noUiSlider.get()[0];
    var Chongyun_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[0])["T1_" + [Chongyun_T2_Min_Volume]]);
    var Chongyun_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[0])["T2_" + [Chongyun_T2_Min_Volume]]);
    var Chongyun_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[0])["T3_" + [Chongyun_T2_Min_Volume]]);
    var Chongyun_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[0])["T4_" + [Chongyun_T2_Min_Volume]]);
    var Chongyun_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[0])["T5_" + [Chongyun_T2_Min_Volume]]);
    var Chongyun_T2_Max_Volume = "L1toL" + Chongyun_T2.noUiSlider.get()[1];
    var Chongyun_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[1])["T1_" + [Chongyun_T2_Max_Volume]]);
    var Chongyun_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[1])["T2_" + [Chongyun_T2_Max_Volume]]);
    var Chongyun_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[1])["T3_" + [Chongyun_T2_Max_Volume]]);
    var Chongyun_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[1])["T4_" + [Chongyun_T2_Max_Volume]]);
    var Chongyun_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T2.noUiSlider.get()[1])["T5_" + [Chongyun_T2_Max_Volume]]);
    var Chongyun_T2_T1 = Chongyun_T2_T1_1toMax_Volume - Chongyun_T2_T1_1toMin_Volume
    var Chongyun_T2_T2 = Chongyun_T2_T2_1toMax_Volume - Chongyun_T2_T2_1toMin_Volume
    var Chongyun_T2_T3 = Chongyun_T2_T3_1toMax_Volume - Chongyun_T2_T3_1toMin_Volume
    var Chongyun_T2_T4 = Chongyun_T2_T4_1toMax_Volume - Chongyun_T2_T4_1toMin_Volume
    var Chongyun_T2_T5 = Chongyun_T2_T5_1toMax_Volume - Chongyun_T2_T5_1toMin_Volume
    document.getElementById('Chongyun_T2_T1_Volume').innerHTML = Chongyun_T2_T1;
    document.getElementById('Chongyun_T2_T2_Volume').innerHTML = Chongyun_T2_T2;
    document.getElementById('Chongyun_T2_T3_Volume').innerHTML = Chongyun_T2_T3;
    document.getElementById('Chongyun_T2_T4_Volume').innerHTML = Chongyun_T2_T4;
    document.getElementById('Chongyun_T2_T5_Volume').innerHTML = Chongyun_T2_T5.toLocaleString();
  });
  Chongyun_T3.noUiSlider.on('update', function (values, handle) {
    var Chongyun_T3_Min_Volume = "L1toL" + Chongyun_T3.noUiSlider.get()[0];
    var Chongyun_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[0])["T1_" + [Chongyun_T3_Min_Volume]]);
    var Chongyun_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[0])["T2_" + [Chongyun_T3_Min_Volume]]);
    var Chongyun_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[0])["T3_" + [Chongyun_T3_Min_Volume]]);
    var Chongyun_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[0])["T4_" + [Chongyun_T3_Min_Volume]]);
    var Chongyun_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[0])["T5_" + [Chongyun_T3_Min_Volume]]);
    var Chongyun_T3_Max_Volume = "L1toL" + Chongyun_T3.noUiSlider.get()[1];
    var Chongyun_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[1])["T1_" + [Chongyun_T3_Max_Volume]]);
    var Chongyun_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[1])["T2_" + [Chongyun_T3_Max_Volume]]);
    var Chongyun_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[1])["T3_" + [Chongyun_T3_Max_Volume]]);
    var Chongyun_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[1])["T4_" + [Chongyun_T3_Max_Volume]]);
    var Chongyun_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Chongyun_T3.noUiSlider.get()[1])["T5_" + [Chongyun_T3_Max_Volume]]);
    var Chongyun_T3_T1 = Chongyun_T3_T1_1toMax_Volume - Chongyun_T3_T1_1toMin_Volume
    var Chongyun_T3_T2 = Chongyun_T3_T2_1toMax_Volume - Chongyun_T3_T2_1toMin_Volume
    var Chongyun_T3_T3 = Chongyun_T3_T3_1toMax_Volume - Chongyun_T3_T3_1toMin_Volume
    var Chongyun_T3_T4 = Chongyun_T3_T4_1toMax_Volume - Chongyun_T3_T4_1toMin_Volume
    var Chongyun_T3_T5 = Chongyun_T3_T5_1toMax_Volume - Chongyun_T3_T5_1toMin_Volume
    document.getElementById('Chongyun_T3_T1_Volume').innerHTML = Chongyun_T3_T1;
    document.getElementById('Chongyun_T3_T2_Volume').innerHTML = Chongyun_T3_T2;
    document.getElementById('Chongyun_T3_T3_Volume').innerHTML = Chongyun_T3_T3;
    document.getElementById('Chongyun_T3_T4_Volume').innerHTML = Chongyun_T3_T4;
    document.getElementById('Chongyun_T3_T5_Volume').innerHTML = Chongyun_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Chongyun  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Noelle  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Noelle_Ex = document.getElementById('Noelle_Ex');
noUiSlider.create(Noelle_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Noelle_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Noelle_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Noelle_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Noelle_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function NoelleLoad() {
  Noelle_Ex.noUiSlider.on('update', function (values, handle) {
    var Noelle_Ex_Min_Volume = "L1toL" + Noelle_Ex.noUiSlider.get()[0];
    var Noelle_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Noelle_Ex.noUiSlider.get()[0])[Noelle_Ex_Min_Volume]);
    var Noelle_Ex_Max_Volume = "L1toL" + Noelle_Ex.noUiSlider.get()[1];
    var Noelle_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Noelle_Ex.noUiSlider.get()[1])[Noelle_Ex_Max_Volume]);
    var Noelle_Ex_Volume = Noelle_Ex_1toMax_Volume - Noelle_Ex_1toMin_Volume
    var Noelle_Ex_Book_Volume = Noelle_Ex_Volume / 1000
    var Noelle_Ex_Mora_Volume = Noelle_Ex_Volume * 0.2
    document.getElementById('Noelle_Ex_Volume').innerHTML = Noelle_Ex_Volume.toLocaleString();
    document.getElementById('Noelle_Ex_Book_Volume').innerHTML = Noelle_Ex_Book_Volume.toLocaleString();
    document.getElementById('Noelle_Ex_Mora_Volume').innerHTML = Noelle_Ex_Mora_Volume.toLocaleString();
  });
  Noelle_Pr.noUiSlider.on('update', function (values, handle) {
    var Noelle_Pr_Min_Volume = "L1toL" + Noelle_Pr.noUiSlider.get()[0];
    var Noelle_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[0])["P1_" + [Noelle_Pr_Min_Volume]]);
    var Noelle_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[0])["P2_" + [Noelle_Pr_Min_Volume]]);
    var Noelle_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[0])["P3_" + [Noelle_Pr_Min_Volume]]);
    var Noelle_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[0])["P4_" + [Noelle_Pr_Min_Volume]]);
    var Noelle_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[0])["P5_" + [Noelle_Pr_Min_Volume]]);
    var Noelle_Pr_Max_Volume = "L1toL" + Noelle_Pr.noUiSlider.get()[1];
    var Noelle_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[1])["P1_" + [Noelle_Pr_Max_Volume]]);
    var Noelle_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[1])["P2_" + [Noelle_Pr_Max_Volume]]);
    var Noelle_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[1])["P3_" + [Noelle_Pr_Max_Volume]]);
    var Noelle_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[1])["P4_" + [Noelle_Pr_Max_Volume]]);
    var Noelle_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Noelle_Pr.noUiSlider.get()[1])["P5_" + [Noelle_Pr_Max_Volume]]);
    var Noelle_Pr_P1 = Noelle_Pr_P1_1toMax_Volume - Noelle_Pr_P1_1toMin_Volume
    var Noelle_Pr_P2 = Noelle_Pr_P2_1toMax_Volume - Noelle_Pr_P2_1toMin_Volume
    var Noelle_Pr_P3 = Noelle_Pr_P3_1toMax_Volume - Noelle_Pr_P3_1toMin_Volume
    var Noelle_Pr_P4 = Noelle_Pr_P4_1toMax_Volume - Noelle_Pr_P4_1toMin_Volume
    var Noelle_Pr_P5 = Noelle_Pr_P5_1toMax_Volume - Noelle_Pr_P5_1toMin_Volume
    document.getElementById('Noelle_Pr_P1_Volume').innerHTML = Noelle_Pr_P1;
    document.getElementById('Noelle_Pr_P2_Volume').innerHTML = Noelle_Pr_P2;
    document.getElementById('Noelle_Pr_P3_Volume').innerHTML = Noelle_Pr_P3;
    document.getElementById('Noelle_Pr_P4_Volume').innerHTML = Noelle_Pr_P4;
    document.getElementById('Noelle_Pr_P5_Volume').innerHTML = Noelle_Pr_P5.toLocaleString();
  });
  Noelle_T1.noUiSlider.on('update', function (values, handle) {
    var Noelle_T1_Min_Volume = "L1toL" + Noelle_T1.noUiSlider.get()[0];
    var Noelle_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[0])["T1_" + [Noelle_T1_Min_Volume]]);
    var Noelle_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[0])["T2_" + [Noelle_T1_Min_Volume]]);
    var Noelle_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[0])["T3_" + [Noelle_T1_Min_Volume]]);
    var Noelle_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[0])["T4_" + [Noelle_T1_Min_Volume]]);
    var Noelle_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[0])["T5_" + [Noelle_T1_Min_Volume]]);
    var Noelle_T1_Max_Volume = "L1toL" + Noelle_T1.noUiSlider.get()[1];
    var Noelle_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[1])["T1_" + [Noelle_T1_Max_Volume]]);
    var Noelle_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[1])["T2_" + [Noelle_T1_Max_Volume]]);
    var Noelle_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[1])["T3_" + [Noelle_T1_Max_Volume]]);
    var Noelle_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[1])["T4_" + [Noelle_T1_Max_Volume]]);
    var Noelle_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T1.noUiSlider.get()[1])["T5_" + [Noelle_T1_Max_Volume]]);
    var Noelle_T1_T1 = Noelle_T1_T1_1toMax_Volume - Noelle_T1_T1_1toMin_Volume
    var Noelle_T1_T2 = Noelle_T1_T2_1toMax_Volume - Noelle_T1_T2_1toMin_Volume
    var Noelle_T1_T3 = Noelle_T1_T3_1toMax_Volume - Noelle_T1_T3_1toMin_Volume
    var Noelle_T1_T4 = Noelle_T1_T4_1toMax_Volume - Noelle_T1_T4_1toMin_Volume
    var Noelle_T1_T5 = Noelle_T1_T5_1toMax_Volume - Noelle_T1_T5_1toMin_Volume
    document.getElementById('Noelle_T1_T1_Volume').innerHTML = Noelle_T1_T1;
    document.getElementById('Noelle_T1_T2_Volume').innerHTML = Noelle_T1_T2;
    document.getElementById('Noelle_T1_T3_Volume').innerHTML = Noelle_T1_T3;
    document.getElementById('Noelle_T1_T4_Volume').innerHTML = Noelle_T1_T4;
    document.getElementById('Noelle_T1_T5_Volume').innerHTML = Noelle_T1_T5.toLocaleString();
  });
  Noelle_T2.noUiSlider.on('update', function (values, handle) {
    var Noelle_T2_Min_Volume = "L1toL" + Noelle_T2.noUiSlider.get()[0];
    var Noelle_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[0])["T1_" + [Noelle_T2_Min_Volume]]);
    var Noelle_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[0])["T2_" + [Noelle_T2_Min_Volume]]);
    var Noelle_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[0])["T3_" + [Noelle_T2_Min_Volume]]);
    var Noelle_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[0])["T4_" + [Noelle_T2_Min_Volume]]);
    var Noelle_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[0])["T5_" + [Noelle_T2_Min_Volume]]);
    var Noelle_T2_Max_Volume = "L1toL" + Noelle_T2.noUiSlider.get()[1];
    var Noelle_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[1])["T1_" + [Noelle_T2_Max_Volume]]);
    var Noelle_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[1])["T2_" + [Noelle_T2_Max_Volume]]);
    var Noelle_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[1])["T3_" + [Noelle_T2_Max_Volume]]);
    var Noelle_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[1])["T4_" + [Noelle_T2_Max_Volume]]);
    var Noelle_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T2.noUiSlider.get()[1])["T5_" + [Noelle_T2_Max_Volume]]);
    var Noelle_T2_T1 = Noelle_T2_T1_1toMax_Volume - Noelle_T2_T1_1toMin_Volume
    var Noelle_T2_T2 = Noelle_T2_T2_1toMax_Volume - Noelle_T2_T2_1toMin_Volume
    var Noelle_T2_T3 = Noelle_T2_T3_1toMax_Volume - Noelle_T2_T3_1toMin_Volume
    var Noelle_T2_T4 = Noelle_T2_T4_1toMax_Volume - Noelle_T2_T4_1toMin_Volume
    var Noelle_T2_T5 = Noelle_T2_T5_1toMax_Volume - Noelle_T2_T5_1toMin_Volume
    document.getElementById('Noelle_T2_T1_Volume').innerHTML = Noelle_T2_T1;
    document.getElementById('Noelle_T2_T2_Volume').innerHTML = Noelle_T2_T2;
    document.getElementById('Noelle_T2_T3_Volume').innerHTML = Noelle_T2_T3;
    document.getElementById('Noelle_T2_T4_Volume').innerHTML = Noelle_T2_T4;
    document.getElementById('Noelle_T2_T5_Volume').innerHTML = Noelle_T2_T5.toLocaleString();
  });
  Noelle_T3.noUiSlider.on('update', function (values, handle) {
    var Noelle_T3_Min_Volume = "L1toL" + Noelle_T3.noUiSlider.get()[0];
    var Noelle_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[0])["T1_" + [Noelle_T3_Min_Volume]]);
    var Noelle_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[0])["T2_" + [Noelle_T3_Min_Volume]]);
    var Noelle_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[0])["T3_" + [Noelle_T3_Min_Volume]]);
    var Noelle_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[0])["T4_" + [Noelle_T3_Min_Volume]]);
    var Noelle_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[0])["T5_" + [Noelle_T3_Min_Volume]]);
    var Noelle_T3_Max_Volume = "L1toL" + Noelle_T3.noUiSlider.get()[1];
    var Noelle_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[1])["T1_" + [Noelle_T3_Max_Volume]]);
    var Noelle_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[1])["T2_" + [Noelle_T3_Max_Volume]]);
    var Noelle_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[1])["T3_" + [Noelle_T3_Max_Volume]]);
    var Noelle_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[1])["T4_" + [Noelle_T3_Max_Volume]]);
    var Noelle_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Noelle_T3.noUiSlider.get()[1])["T5_" + [Noelle_T3_Max_Volume]]);
    var Noelle_T3_T1 = Noelle_T3_T1_1toMax_Volume - Noelle_T3_T1_1toMin_Volume
    var Noelle_T3_T2 = Noelle_T3_T2_1toMax_Volume - Noelle_T3_T2_1toMin_Volume
    var Noelle_T3_T3 = Noelle_T3_T3_1toMax_Volume - Noelle_T3_T3_1toMin_Volume
    var Noelle_T3_T4 = Noelle_T3_T4_1toMax_Volume - Noelle_T3_T4_1toMin_Volume
    var Noelle_T3_T5 = Noelle_T3_T5_1toMax_Volume - Noelle_T3_T5_1toMin_Volume
    document.getElementById('Noelle_T3_T1_Volume').innerHTML = Noelle_T3_T1;
    document.getElementById('Noelle_T3_T2_Volume').innerHTML = Noelle_T3_T2;
    document.getElementById('Noelle_T3_T3_Volume').innerHTML = Noelle_T3_T3;
    document.getElementById('Noelle_T3_T4_Volume').innerHTML = Noelle_T3_T4;
    document.getElementById('Noelle_T3_T5_Volume').innerHTML = Noelle_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Noelle  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Bennett  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Bennett_Ex = document.getElementById('Bennett_Ex');
noUiSlider.create(Bennett_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Bennett_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Bennett_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Bennett_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Bennett_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function BennettLoad() {
  Bennett_Ex.noUiSlider.on('update', function (values, handle) {
    var Bennett_Ex_Min_Volume = "L1toL" + Bennett_Ex.noUiSlider.get()[0];
    var Bennett_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Bennett_Ex.noUiSlider.get()[0])[Bennett_Ex_Min_Volume]);
    var Bennett_Ex_Max_Volume = "L1toL" + Bennett_Ex.noUiSlider.get()[1];
    var Bennett_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Bennett_Ex.noUiSlider.get()[1])[Bennett_Ex_Max_Volume]);
    var Bennett_Ex_Volume = Bennett_Ex_1toMax_Volume - Bennett_Ex_1toMin_Volume
    var Bennett_Ex_Book_Volume = Bennett_Ex_Volume / 1000
    var Bennett_Ex_Mora_Volume = Bennett_Ex_Volume * 0.2
    document.getElementById('Bennett_Ex_Volume').innerHTML = Bennett_Ex_Volume.toLocaleString();
    document.getElementById('Bennett_Ex_Book_Volume').innerHTML = Bennett_Ex_Book_Volume.toLocaleString();
    document.getElementById('Bennett_Ex_Mora_Volume').innerHTML = Bennett_Ex_Mora_Volume.toLocaleString();
  });
  Bennett_Pr.noUiSlider.on('update', function (values, handle) {
    var Bennett_Pr_Min_Volume = "L1toL" + Bennett_Pr.noUiSlider.get()[0];
    var Bennett_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[0])["P1_" + [Bennett_Pr_Min_Volume]]);
    var Bennett_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[0])["P2_" + [Bennett_Pr_Min_Volume]]);
    var Bennett_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[0])["P3_" + [Bennett_Pr_Min_Volume]]);
    var Bennett_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[0])["P4_" + [Bennett_Pr_Min_Volume]]);
    var Bennett_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[0])["P5_" + [Bennett_Pr_Min_Volume]]);
    var Bennett_Pr_Max_Volume = "L1toL" + Bennett_Pr.noUiSlider.get()[1];
    var Bennett_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[1])["P1_" + [Bennett_Pr_Max_Volume]]);
    var Bennett_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[1])["P2_" + [Bennett_Pr_Max_Volume]]);
    var Bennett_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[1])["P3_" + [Bennett_Pr_Max_Volume]]);
    var Bennett_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[1])["P4_" + [Bennett_Pr_Max_Volume]]);
    var Bennett_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Bennett_Pr.noUiSlider.get()[1])["P5_" + [Bennett_Pr_Max_Volume]]);
    var Bennett_Pr_P1 = Bennett_Pr_P1_1toMax_Volume - Bennett_Pr_P1_1toMin_Volume
    var Bennett_Pr_P2 = Bennett_Pr_P2_1toMax_Volume - Bennett_Pr_P2_1toMin_Volume
    var Bennett_Pr_P3 = Bennett_Pr_P3_1toMax_Volume - Bennett_Pr_P3_1toMin_Volume
    var Bennett_Pr_P4 = Bennett_Pr_P4_1toMax_Volume - Bennett_Pr_P4_1toMin_Volume
    var Bennett_Pr_P5 = Bennett_Pr_P5_1toMax_Volume - Bennett_Pr_P5_1toMin_Volume
    document.getElementById('Bennett_Pr_P1_Volume').innerHTML = Bennett_Pr_P1;
    document.getElementById('Bennett_Pr_P2_Volume').innerHTML = Bennett_Pr_P2;
    document.getElementById('Bennett_Pr_P3_Volume').innerHTML = Bennett_Pr_P3;
    document.getElementById('Bennett_Pr_P4_Volume').innerHTML = Bennett_Pr_P4;
    document.getElementById('Bennett_Pr_P5_Volume').innerHTML = Bennett_Pr_P5.toLocaleString();
  });
  Bennett_T1.noUiSlider.on('update', function (values, handle) {
    var Bennett_T1_Min_Volume = "L1toL" + Bennett_T1.noUiSlider.get()[0];
    var Bennett_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[0])["T1_" + [Bennett_T1_Min_Volume]]);
    var Bennett_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[0])["T2_" + [Bennett_T1_Min_Volume]]);
    var Bennett_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[0])["T3_" + [Bennett_T1_Min_Volume]]);
    var Bennett_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[0])["T4_" + [Bennett_T1_Min_Volume]]);
    var Bennett_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[0])["T5_" + [Bennett_T1_Min_Volume]]);
    var Bennett_T1_Max_Volume = "L1toL" + Bennett_T1.noUiSlider.get()[1];
    var Bennett_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[1])["T1_" + [Bennett_T1_Max_Volume]]);
    var Bennett_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[1])["T2_" + [Bennett_T1_Max_Volume]]);
    var Bennett_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[1])["T3_" + [Bennett_T1_Max_Volume]]);
    var Bennett_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[1])["T4_" + [Bennett_T1_Max_Volume]]);
    var Bennett_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T1.noUiSlider.get()[1])["T5_" + [Bennett_T1_Max_Volume]]);
    var Bennett_T1_T1 = Bennett_T1_T1_1toMax_Volume - Bennett_T1_T1_1toMin_Volume
    var Bennett_T1_T2 = Bennett_T1_T2_1toMax_Volume - Bennett_T1_T2_1toMin_Volume
    var Bennett_T1_T3 = Bennett_T1_T3_1toMax_Volume - Bennett_T1_T3_1toMin_Volume
    var Bennett_T1_T4 = Bennett_T1_T4_1toMax_Volume - Bennett_T1_T4_1toMin_Volume
    var Bennett_T1_T5 = Bennett_T1_T5_1toMax_Volume - Bennett_T1_T5_1toMin_Volume
    document.getElementById('Bennett_T1_T1_Volume').innerHTML = Bennett_T1_T1;
    document.getElementById('Bennett_T1_T2_Volume').innerHTML = Bennett_T1_T2;
    document.getElementById('Bennett_T1_T3_Volume').innerHTML = Bennett_T1_T3;
    document.getElementById('Bennett_T1_T4_Volume').innerHTML = Bennett_T1_T4;
    document.getElementById('Bennett_T1_T5_Volume').innerHTML = Bennett_T1_T5.toLocaleString();
  });
  Bennett_T2.noUiSlider.on('update', function (values, handle) {
    var Bennett_T2_Min_Volume = "L1toL" + Bennett_T2.noUiSlider.get()[0];
    var Bennett_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[0])["T1_" + [Bennett_T2_Min_Volume]]);
    var Bennett_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[0])["T2_" + [Bennett_T2_Min_Volume]]);
    var Bennett_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[0])["T3_" + [Bennett_T2_Min_Volume]]);
    var Bennett_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[0])["T4_" + [Bennett_T2_Min_Volume]]);
    var Bennett_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[0])["T5_" + [Bennett_T2_Min_Volume]]);
    var Bennett_T2_Max_Volume = "L1toL" + Bennett_T2.noUiSlider.get()[1];
    var Bennett_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[1])["T1_" + [Bennett_T2_Max_Volume]]);
    var Bennett_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[1])["T2_" + [Bennett_T2_Max_Volume]]);
    var Bennett_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[1])["T3_" + [Bennett_T2_Max_Volume]]);
    var Bennett_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[1])["T4_" + [Bennett_T2_Max_Volume]]);
    var Bennett_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T2.noUiSlider.get()[1])["T5_" + [Bennett_T2_Max_Volume]]);
    var Bennett_T2_T1 = Bennett_T2_T1_1toMax_Volume - Bennett_T2_T1_1toMin_Volume
    var Bennett_T2_T2 = Bennett_T2_T2_1toMax_Volume - Bennett_T2_T2_1toMin_Volume
    var Bennett_T2_T3 = Bennett_T2_T3_1toMax_Volume - Bennett_T2_T3_1toMin_Volume
    var Bennett_T2_T4 = Bennett_T2_T4_1toMax_Volume - Bennett_T2_T4_1toMin_Volume
    var Bennett_T2_T5 = Bennett_T2_T5_1toMax_Volume - Bennett_T2_T5_1toMin_Volume
    document.getElementById('Bennett_T2_T1_Volume').innerHTML = Bennett_T2_T1;
    document.getElementById('Bennett_T2_T2_Volume').innerHTML = Bennett_T2_T2;
    document.getElementById('Bennett_T2_T3_Volume').innerHTML = Bennett_T2_T3;
    document.getElementById('Bennett_T2_T4_Volume').innerHTML = Bennett_T2_T4;
    document.getElementById('Bennett_T2_T5_Volume').innerHTML = Bennett_T2_T5.toLocaleString();
  });
  Bennett_T3.noUiSlider.on('update', function (values, handle) {
    var Bennett_T3_Min_Volume = "L1toL" + Bennett_T3.noUiSlider.get()[0];
    var Bennett_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[0])["T1_" + [Bennett_T3_Min_Volume]]);
    var Bennett_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[0])["T2_" + [Bennett_T3_Min_Volume]]);
    var Bennett_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[0])["T3_" + [Bennett_T3_Min_Volume]]);
    var Bennett_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[0])["T4_" + [Bennett_T3_Min_Volume]]);
    var Bennett_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[0])["T5_" + [Bennett_T3_Min_Volume]]);
    var Bennett_T3_Max_Volume = "L1toL" + Bennett_T3.noUiSlider.get()[1];
    var Bennett_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[1])["T1_" + [Bennett_T3_Max_Volume]]);
    var Bennett_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[1])["T2_" + [Bennett_T3_Max_Volume]]);
    var Bennett_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[1])["T3_" + [Bennett_T3_Max_Volume]]);
    var Bennett_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[1])["T4_" + [Bennett_T3_Max_Volume]]);
    var Bennett_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Bennett_T3.noUiSlider.get()[1])["T5_" + [Bennett_T3_Max_Volume]]);
    var Bennett_T3_T1 = Bennett_T3_T1_1toMax_Volume - Bennett_T3_T1_1toMin_Volume
    var Bennett_T3_T2 = Bennett_T3_T2_1toMax_Volume - Bennett_T3_T2_1toMin_Volume
    var Bennett_T3_T3 = Bennett_T3_T3_1toMax_Volume - Bennett_T3_T3_1toMin_Volume
    var Bennett_T3_T4 = Bennett_T3_T4_1toMax_Volume - Bennett_T3_T4_1toMin_Volume
    var Bennett_T3_T5 = Bennett_T3_T5_1toMax_Volume - Bennett_T3_T5_1toMin_Volume
    document.getElementById('Bennett_T3_T1_Volume').innerHTML = Bennett_T3_T1;
    document.getElementById('Bennett_T3_T2_Volume').innerHTML = Bennett_T3_T2;
    document.getElementById('Bennett_T3_T3_Volume').innerHTML = Bennett_T3_T3;
    document.getElementById('Bennett_T3_T4_Volume').innerHTML = Bennett_T3_T4;
    document.getElementById('Bennett_T3_T5_Volume').innerHTML = Bennett_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Bennett  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Fischl  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Fischl_Ex = document.getElementById('Fischl_Ex');
noUiSlider.create(Fischl_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Fischl_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Fischl_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Fischl_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Fischl_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function FischlLoad() {
  Fischl_Ex.noUiSlider.on('update', function (values, handle) {
    var Fischl_Ex_Min_Volume = "L1toL" + Fischl_Ex.noUiSlider.get()[0];
    var Fischl_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Fischl_Ex.noUiSlider.get()[0])[Fischl_Ex_Min_Volume]);
    var Fischl_Ex_Max_Volume = "L1toL" + Fischl_Ex.noUiSlider.get()[1];
    var Fischl_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Fischl_Ex.noUiSlider.get()[1])[Fischl_Ex_Max_Volume]);
    var Fischl_Ex_Volume = Fischl_Ex_1toMax_Volume - Fischl_Ex_1toMin_Volume
    var Fischl_Ex_Book_Volume = Fischl_Ex_Volume / 1000
    var Fischl_Ex_Mora_Volume = Fischl_Ex_Volume * 0.2
    document.getElementById('Fischl_Ex_Volume').innerHTML = Fischl_Ex_Volume.toLocaleString();
    document.getElementById('Fischl_Ex_Book_Volume').innerHTML = Fischl_Ex_Book_Volume.toLocaleString();
    document.getElementById('Fischl_Ex_Mora_Volume').innerHTML = Fischl_Ex_Mora_Volume.toLocaleString();
  });
  Fischl_Pr.noUiSlider.on('update', function (values, handle) {
    var Fischl_Pr_Min_Volume = "L1toL" + Fischl_Pr.noUiSlider.get()[0];
    var Fischl_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[0])["P1_" + [Fischl_Pr_Min_Volume]]);
    var Fischl_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[0])["P2_" + [Fischl_Pr_Min_Volume]]);
    var Fischl_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[0])["P3_" + [Fischl_Pr_Min_Volume]]);
    var Fischl_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[0])["P4_" + [Fischl_Pr_Min_Volume]]);
    var Fischl_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[0])["P5_" + [Fischl_Pr_Min_Volume]]);
    var Fischl_Pr_Max_Volume = "L1toL" + Fischl_Pr.noUiSlider.get()[1];
    var Fischl_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[1])["P1_" + [Fischl_Pr_Max_Volume]]);
    var Fischl_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[1])["P2_" + [Fischl_Pr_Max_Volume]]);
    var Fischl_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[1])["P3_" + [Fischl_Pr_Max_Volume]]);
    var Fischl_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[1])["P4_" + [Fischl_Pr_Max_Volume]]);
    var Fischl_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Fischl_Pr.noUiSlider.get()[1])["P5_" + [Fischl_Pr_Max_Volume]]);
    var Fischl_Pr_P1 = Fischl_Pr_P1_1toMax_Volume - Fischl_Pr_P1_1toMin_Volume
    var Fischl_Pr_P2 = Fischl_Pr_P2_1toMax_Volume - Fischl_Pr_P2_1toMin_Volume
    var Fischl_Pr_P3 = Fischl_Pr_P3_1toMax_Volume - Fischl_Pr_P3_1toMin_Volume
    var Fischl_Pr_P4 = Fischl_Pr_P4_1toMax_Volume - Fischl_Pr_P4_1toMin_Volume
    var Fischl_Pr_P5 = Fischl_Pr_P5_1toMax_Volume - Fischl_Pr_P5_1toMin_Volume
    document.getElementById('Fischl_Pr_P1_Volume').innerHTML = Fischl_Pr_P1;
    document.getElementById('Fischl_Pr_P2_Volume').innerHTML = Fischl_Pr_P2;
    document.getElementById('Fischl_Pr_P3_Volume').innerHTML = Fischl_Pr_P3;
    document.getElementById('Fischl_Pr_P4_Volume').innerHTML = Fischl_Pr_P4;
    document.getElementById('Fischl_Pr_P5_Volume').innerHTML = Fischl_Pr_P5.toLocaleString();
  });
  Fischl_T1.noUiSlider.on('update', function (values, handle) {
    var Fischl_T1_Min_Volume = "L1toL" + Fischl_T1.noUiSlider.get()[0];
    var Fischl_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[0])["T1_" + [Fischl_T1_Min_Volume]]);
    var Fischl_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[0])["T2_" + [Fischl_T1_Min_Volume]]);
    var Fischl_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[0])["T3_" + [Fischl_T1_Min_Volume]]);
    var Fischl_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[0])["T4_" + [Fischl_T1_Min_Volume]]);
    var Fischl_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[0])["T5_" + [Fischl_T1_Min_Volume]]);
    var Fischl_T1_Max_Volume = "L1toL" + Fischl_T1.noUiSlider.get()[1];
    var Fischl_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[1])["T1_" + [Fischl_T1_Max_Volume]]);
    var Fischl_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[1])["T2_" + [Fischl_T1_Max_Volume]]);
    var Fischl_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[1])["T3_" + [Fischl_T1_Max_Volume]]);
    var Fischl_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[1])["T4_" + [Fischl_T1_Max_Volume]]);
    var Fischl_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T1.noUiSlider.get()[1])["T5_" + [Fischl_T1_Max_Volume]]);
    var Fischl_T1_T1 = Fischl_T1_T1_1toMax_Volume - Fischl_T1_T1_1toMin_Volume
    var Fischl_T1_T2 = Fischl_T1_T2_1toMax_Volume - Fischl_T1_T2_1toMin_Volume
    var Fischl_T1_T3 = Fischl_T1_T3_1toMax_Volume - Fischl_T1_T3_1toMin_Volume
    var Fischl_T1_T4 = Fischl_T1_T4_1toMax_Volume - Fischl_T1_T4_1toMin_Volume
    var Fischl_T1_T5 = Fischl_T1_T5_1toMax_Volume - Fischl_T1_T5_1toMin_Volume
    document.getElementById('Fischl_T1_T1_Volume').innerHTML = Fischl_T1_T1;
    document.getElementById('Fischl_T1_T2_Volume').innerHTML = Fischl_T1_T2;
    document.getElementById('Fischl_T1_T3_Volume').innerHTML = Fischl_T1_T3;
    document.getElementById('Fischl_T1_T4_Volume').innerHTML = Fischl_T1_T4;
    document.getElementById('Fischl_T1_T5_Volume').innerHTML = Fischl_T1_T5.toLocaleString();
  });
  Fischl_T2.noUiSlider.on('update', function (values, handle) {
    var Fischl_T2_Min_Volume = "L1toL" + Fischl_T2.noUiSlider.get()[0];
    var Fischl_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[0])["T1_" + [Fischl_T2_Min_Volume]]);
    var Fischl_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[0])["T2_" + [Fischl_T2_Min_Volume]]);
    var Fischl_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[0])["T3_" + [Fischl_T2_Min_Volume]]);
    var Fischl_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[0])["T4_" + [Fischl_T2_Min_Volume]]);
    var Fischl_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[0])["T5_" + [Fischl_T2_Min_Volume]]);
    var Fischl_T2_Max_Volume = "L1toL" + Fischl_T2.noUiSlider.get()[1];
    var Fischl_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[1])["T1_" + [Fischl_T2_Max_Volume]]);
    var Fischl_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[1])["T2_" + [Fischl_T2_Max_Volume]]);
    var Fischl_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[1])["T3_" + [Fischl_T2_Max_Volume]]);
    var Fischl_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[1])["T4_" + [Fischl_T2_Max_Volume]]);
    var Fischl_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T2.noUiSlider.get()[1])["T5_" + [Fischl_T2_Max_Volume]]);
    var Fischl_T2_T1 = Fischl_T2_T1_1toMax_Volume - Fischl_T2_T1_1toMin_Volume
    var Fischl_T2_T2 = Fischl_T2_T2_1toMax_Volume - Fischl_T2_T2_1toMin_Volume
    var Fischl_T2_T3 = Fischl_T2_T3_1toMax_Volume - Fischl_T2_T3_1toMin_Volume
    var Fischl_T2_T4 = Fischl_T2_T4_1toMax_Volume - Fischl_T2_T4_1toMin_Volume
    var Fischl_T2_T5 = Fischl_T2_T5_1toMax_Volume - Fischl_T2_T5_1toMin_Volume
    document.getElementById('Fischl_T2_T1_Volume').innerHTML = Fischl_T2_T1;
    document.getElementById('Fischl_T2_T2_Volume').innerHTML = Fischl_T2_T2;
    document.getElementById('Fischl_T2_T3_Volume').innerHTML = Fischl_T2_T3;
    document.getElementById('Fischl_T2_T4_Volume').innerHTML = Fischl_T2_T4;
    document.getElementById('Fischl_T2_T5_Volume').innerHTML = Fischl_T2_T5.toLocaleString();
  });
  Fischl_T3.noUiSlider.on('update', function (values, handle) {
    var Fischl_T3_Min_Volume = "L1toL" + Fischl_T3.noUiSlider.get()[0];
    var Fischl_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[0])["T1_" + [Fischl_T3_Min_Volume]]);
    var Fischl_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[0])["T2_" + [Fischl_T3_Min_Volume]]);
    var Fischl_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[0])["T3_" + [Fischl_T3_Min_Volume]]);
    var Fischl_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[0])["T4_" + [Fischl_T3_Min_Volume]]);
    var Fischl_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[0])["T5_" + [Fischl_T3_Min_Volume]]);
    var Fischl_T3_Max_Volume = "L1toL" + Fischl_T3.noUiSlider.get()[1];
    var Fischl_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[1])["T1_" + [Fischl_T3_Max_Volume]]);
    var Fischl_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[1])["T2_" + [Fischl_T3_Max_Volume]]);
    var Fischl_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[1])["T3_" + [Fischl_T3_Max_Volume]]);
    var Fischl_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[1])["T4_" + [Fischl_T3_Max_Volume]]);
    var Fischl_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Fischl_T3.noUiSlider.get()[1])["T5_" + [Fischl_T3_Max_Volume]]);
    var Fischl_T3_T1 = Fischl_T3_T1_1toMax_Volume - Fischl_T3_T1_1toMin_Volume
    var Fischl_T3_T2 = Fischl_T3_T2_1toMax_Volume - Fischl_T3_T2_1toMin_Volume
    var Fischl_T3_T3 = Fischl_T3_T3_1toMax_Volume - Fischl_T3_T3_1toMin_Volume
    var Fischl_T3_T4 = Fischl_T3_T4_1toMax_Volume - Fischl_T3_T4_1toMin_Volume
    var Fischl_T3_T5 = Fischl_T3_T5_1toMax_Volume - Fischl_T3_T5_1toMin_Volume
    document.getElementById('Fischl_T3_T1_Volume').innerHTML = Fischl_T3_T1;
    document.getElementById('Fischl_T3_T2_Volume').innerHTML = Fischl_T3_T2;
    document.getElementById('Fischl_T3_T3_Volume').innerHTML = Fischl_T3_T3;
    document.getElementById('Fischl_T3_T4_Volume').innerHTML = Fischl_T3_T4;
    document.getElementById('Fischl_T3_T5_Volume').innerHTML = Fischl_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Fischl  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Ningguang  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Ningguang_Ex = document.getElementById('Ningguang_Ex');
noUiSlider.create(Ningguang_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Ningguang_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Ningguang_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Ningguang_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Ningguang_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function NingguangLoad() {
  Ningguang_Ex.noUiSlider.on('update', function (values, handle) {
    var Ningguang_Ex_Min_Volume = "L1toL" + Ningguang_Ex.noUiSlider.get()[0];
    var Ningguang_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Ningguang_Ex.noUiSlider.get()[0])[Ningguang_Ex_Min_Volume]);
    var Ningguang_Ex_Max_Volume = "L1toL" + Ningguang_Ex.noUiSlider.get()[1];
    var Ningguang_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Ningguang_Ex.noUiSlider.get()[1])[Ningguang_Ex_Max_Volume]);
    var Ningguang_Ex_Volume = Ningguang_Ex_1toMax_Volume - Ningguang_Ex_1toMin_Volume
    var Ningguang_Ex_Book_Volume = Ningguang_Ex_Volume / 1000
    var Ningguang_Ex_Mora_Volume = Ningguang_Ex_Volume * 0.2
    document.getElementById('Ningguang_Ex_Volume').innerHTML = Ningguang_Ex_Volume.toLocaleString();
    document.getElementById('Ningguang_Ex_Book_Volume').innerHTML = Ningguang_Ex_Book_Volume.toLocaleString();
    document.getElementById('Ningguang_Ex_Mora_Volume').innerHTML = Ningguang_Ex_Mora_Volume.toLocaleString();
  });
  Ningguang_Pr.noUiSlider.on('update', function (values, handle) {
    var Ningguang_Pr_Min_Volume = "L1toL" + Ningguang_Pr.noUiSlider.get()[0];
    var Ningguang_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[0])["P1_" + [Ningguang_Pr_Min_Volume]]);
    var Ningguang_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[0])["P2_" + [Ningguang_Pr_Min_Volume]]);
    var Ningguang_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[0])["P3_" + [Ningguang_Pr_Min_Volume]]);
    var Ningguang_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[0])["P4_" + [Ningguang_Pr_Min_Volume]]);
    var Ningguang_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[0])["P5_" + [Ningguang_Pr_Min_Volume]]);
    var Ningguang_Pr_Max_Volume = "L1toL" + Ningguang_Pr.noUiSlider.get()[1];
    var Ningguang_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[1])["P1_" + [Ningguang_Pr_Max_Volume]]);
    var Ningguang_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[1])["P2_" + [Ningguang_Pr_Max_Volume]]);
    var Ningguang_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[1])["P3_" + [Ningguang_Pr_Max_Volume]]);
    var Ningguang_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[1])["P4_" + [Ningguang_Pr_Max_Volume]]);
    var Ningguang_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Ningguang_Pr.noUiSlider.get()[1])["P5_" + [Ningguang_Pr_Max_Volume]]);
    var Ningguang_Pr_P1 = Ningguang_Pr_P1_1toMax_Volume - Ningguang_Pr_P1_1toMin_Volume
    var Ningguang_Pr_P2 = Ningguang_Pr_P2_1toMax_Volume - Ningguang_Pr_P2_1toMin_Volume
    var Ningguang_Pr_P3 = Ningguang_Pr_P3_1toMax_Volume - Ningguang_Pr_P3_1toMin_Volume
    var Ningguang_Pr_P4 = Ningguang_Pr_P4_1toMax_Volume - Ningguang_Pr_P4_1toMin_Volume
    var Ningguang_Pr_P5 = Ningguang_Pr_P5_1toMax_Volume - Ningguang_Pr_P5_1toMin_Volume
    document.getElementById('Ningguang_Pr_P1_Volume').innerHTML = Ningguang_Pr_P1;
    document.getElementById('Ningguang_Pr_P2_Volume').innerHTML = Ningguang_Pr_P2;
    document.getElementById('Ningguang_Pr_P3_Volume').innerHTML = Ningguang_Pr_P3;
    document.getElementById('Ningguang_Pr_P4_Volume').innerHTML = Ningguang_Pr_P4;
    document.getElementById('Ningguang_Pr_P5_Volume').innerHTML = Ningguang_Pr_P5.toLocaleString();
  });
  Ningguang_T1.noUiSlider.on('update', function (values, handle) {
    var Ningguang_T1_Min_Volume = "L1toL" + Ningguang_T1.noUiSlider.get()[0];
    var Ningguang_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[0])["T1_" + [Ningguang_T1_Min_Volume]]);
    var Ningguang_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[0])["T2_" + [Ningguang_T1_Min_Volume]]);
    var Ningguang_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[0])["T3_" + [Ningguang_T1_Min_Volume]]);
    var Ningguang_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[0])["T4_" + [Ningguang_T1_Min_Volume]]);
    var Ningguang_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[0])["T5_" + [Ningguang_T1_Min_Volume]]);
    var Ningguang_T1_Max_Volume = "L1toL" + Ningguang_T1.noUiSlider.get()[1];
    var Ningguang_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[1])["T1_" + [Ningguang_T1_Max_Volume]]);
    var Ningguang_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[1])["T2_" + [Ningguang_T1_Max_Volume]]);
    var Ningguang_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[1])["T3_" + [Ningguang_T1_Max_Volume]]);
    var Ningguang_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[1])["T4_" + [Ningguang_T1_Max_Volume]]);
    var Ningguang_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T1.noUiSlider.get()[1])["T5_" + [Ningguang_T1_Max_Volume]]);
    var Ningguang_T1_T1 = Ningguang_T1_T1_1toMax_Volume - Ningguang_T1_T1_1toMin_Volume
    var Ningguang_T1_T2 = Ningguang_T1_T2_1toMax_Volume - Ningguang_T1_T2_1toMin_Volume
    var Ningguang_T1_T3 = Ningguang_T1_T3_1toMax_Volume - Ningguang_T1_T3_1toMin_Volume
    var Ningguang_T1_T4 = Ningguang_T1_T4_1toMax_Volume - Ningguang_T1_T4_1toMin_Volume
    var Ningguang_T1_T5 = Ningguang_T1_T5_1toMax_Volume - Ningguang_T1_T5_1toMin_Volume
    document.getElementById('Ningguang_T1_T1_Volume').innerHTML = Ningguang_T1_T1;
    document.getElementById('Ningguang_T1_T2_Volume').innerHTML = Ningguang_T1_T2;
    document.getElementById('Ningguang_T1_T3_Volume').innerHTML = Ningguang_T1_T3;
    document.getElementById('Ningguang_T1_T4_Volume').innerHTML = Ningguang_T1_T4;
    document.getElementById('Ningguang_T1_T5_Volume').innerHTML = Ningguang_T1_T5.toLocaleString();
  });
  Ningguang_T2.noUiSlider.on('update', function (values, handle) {
    var Ningguang_T2_Min_Volume = "L1toL" + Ningguang_T2.noUiSlider.get()[0];
    var Ningguang_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[0])["T1_" + [Ningguang_T2_Min_Volume]]);
    var Ningguang_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[0])["T2_" + [Ningguang_T2_Min_Volume]]);
    var Ningguang_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[0])["T3_" + [Ningguang_T2_Min_Volume]]);
    var Ningguang_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[0])["T4_" + [Ningguang_T2_Min_Volume]]);
    var Ningguang_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[0])["T5_" + [Ningguang_T2_Min_Volume]]);
    var Ningguang_T2_Max_Volume = "L1toL" + Ningguang_T2.noUiSlider.get()[1];
    var Ningguang_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[1])["T1_" + [Ningguang_T2_Max_Volume]]);
    var Ningguang_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[1])["T2_" + [Ningguang_T2_Max_Volume]]);
    var Ningguang_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[1])["T3_" + [Ningguang_T2_Max_Volume]]);
    var Ningguang_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[1])["T4_" + [Ningguang_T2_Max_Volume]]);
    var Ningguang_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T2.noUiSlider.get()[1])["T5_" + [Ningguang_T2_Max_Volume]]);
    var Ningguang_T2_T1 = Ningguang_T2_T1_1toMax_Volume - Ningguang_T2_T1_1toMin_Volume
    var Ningguang_T2_T2 = Ningguang_T2_T2_1toMax_Volume - Ningguang_T2_T2_1toMin_Volume
    var Ningguang_T2_T3 = Ningguang_T2_T3_1toMax_Volume - Ningguang_T2_T3_1toMin_Volume
    var Ningguang_T2_T4 = Ningguang_T2_T4_1toMax_Volume - Ningguang_T2_T4_1toMin_Volume
    var Ningguang_T2_T5 = Ningguang_T2_T5_1toMax_Volume - Ningguang_T2_T5_1toMin_Volume
    document.getElementById('Ningguang_T2_T1_Volume').innerHTML = Ningguang_T2_T1;
    document.getElementById('Ningguang_T2_T2_Volume').innerHTML = Ningguang_T2_T2;
    document.getElementById('Ningguang_T2_T3_Volume').innerHTML = Ningguang_T2_T3;
    document.getElementById('Ningguang_T2_T4_Volume').innerHTML = Ningguang_T2_T4;
    document.getElementById('Ningguang_T2_T5_Volume').innerHTML = Ningguang_T2_T5.toLocaleString();
  });
  Ningguang_T3.noUiSlider.on('update', function (values, handle) {
    var Ningguang_T3_Min_Volume = "L1toL" + Ningguang_T3.noUiSlider.get()[0];
    var Ningguang_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[0])["T1_" + [Ningguang_T3_Min_Volume]]);
    var Ningguang_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[0])["T2_" + [Ningguang_T3_Min_Volume]]);
    var Ningguang_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[0])["T3_" + [Ningguang_T3_Min_Volume]]);
    var Ningguang_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[0])["T4_" + [Ningguang_T3_Min_Volume]]);
    var Ningguang_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[0])["T5_" + [Ningguang_T3_Min_Volume]]);
    var Ningguang_T3_Max_Volume = "L1toL" + Ningguang_T3.noUiSlider.get()[1];
    var Ningguang_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[1])["T1_" + [Ningguang_T3_Max_Volume]]);
    var Ningguang_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[1])["T2_" + [Ningguang_T3_Max_Volume]]);
    var Ningguang_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[1])["T3_" + [Ningguang_T3_Max_Volume]]);
    var Ningguang_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[1])["T4_" + [Ningguang_T3_Max_Volume]]);
    var Ningguang_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Ningguang_T3.noUiSlider.get()[1])["T5_" + [Ningguang_T3_Max_Volume]]);
    var Ningguang_T3_T1 = Ningguang_T3_T1_1toMax_Volume - Ningguang_T3_T1_1toMin_Volume
    var Ningguang_T3_T2 = Ningguang_T3_T2_1toMax_Volume - Ningguang_T3_T2_1toMin_Volume
    var Ningguang_T3_T3 = Ningguang_T3_T3_1toMax_Volume - Ningguang_T3_T3_1toMin_Volume
    var Ningguang_T3_T4 = Ningguang_T3_T4_1toMax_Volume - Ningguang_T3_T4_1toMin_Volume
    var Ningguang_T3_T5 = Ningguang_T3_T5_1toMax_Volume - Ningguang_T3_T5_1toMin_Volume
    document.getElementById('Ningguang_T3_T1_Volume').innerHTML = Ningguang_T3_T1;
    document.getElementById('Ningguang_T3_T2_Volume').innerHTML = Ningguang_T3_T2;
    document.getElementById('Ningguang_T3_T3_Volume').innerHTML = Ningguang_T3_T3;
    document.getElementById('Ningguang_T3_T4_Volume').innerHTML = Ningguang_T3_T4;
    document.getElementById('Ningguang_T3_T5_Volume').innerHTML = Ningguang_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Ningguang  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Xingqiu  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Xingqiu_Ex = document.getElementById('Xingqiu_Ex');
noUiSlider.create(Xingqiu_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xingqiu_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xingqiu_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xingqiu_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xingqiu_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function XingqiuLoad() {
  Xingqiu_Ex.noUiSlider.on('update', function (values, handle) {
    var Xingqiu_Ex_Min_Volume = "L1toL" + Xingqiu_Ex.noUiSlider.get()[0];
    var Xingqiu_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Xingqiu_Ex.noUiSlider.get()[0])[Xingqiu_Ex_Min_Volume]);
    var Xingqiu_Ex_Max_Volume = "L1toL" + Xingqiu_Ex.noUiSlider.get()[1];
    var Xingqiu_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Xingqiu_Ex.noUiSlider.get()[1])[Xingqiu_Ex_Max_Volume]);
    var Xingqiu_Ex_Volume = Xingqiu_Ex_1toMax_Volume - Xingqiu_Ex_1toMin_Volume
    var Xingqiu_Ex_Book_Volume = Xingqiu_Ex_Volume / 1000
    var Xingqiu_Ex_Mora_Volume = Xingqiu_Ex_Volume * 0.2
    document.getElementById('Xingqiu_Ex_Volume').innerHTML = Xingqiu_Ex_Volume.toLocaleString();
    document.getElementById('Xingqiu_Ex_Book_Volume').innerHTML = Xingqiu_Ex_Book_Volume.toLocaleString();
    document.getElementById('Xingqiu_Ex_Mora_Volume').innerHTML = Xingqiu_Ex_Mora_Volume.toLocaleString();
  });
  Xingqiu_Pr.noUiSlider.on('update', function (values, handle) {
    var Xingqiu_Pr_Min_Volume = "L1toL" + Xingqiu_Pr.noUiSlider.get()[0];
    var Xingqiu_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[0])["P1_" + [Xingqiu_Pr_Min_Volume]]);
    var Xingqiu_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[0])["P2_" + [Xingqiu_Pr_Min_Volume]]);
    var Xingqiu_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[0])["P3_" + [Xingqiu_Pr_Min_Volume]]);
    var Xingqiu_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[0])["P4_" + [Xingqiu_Pr_Min_Volume]]);
    var Xingqiu_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[0])["P5_" + [Xingqiu_Pr_Min_Volume]]);
    var Xingqiu_Pr_Max_Volume = "L1toL" + Xingqiu_Pr.noUiSlider.get()[1];
    var Xingqiu_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[1])["P1_" + [Xingqiu_Pr_Max_Volume]]);
    var Xingqiu_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[1])["P2_" + [Xingqiu_Pr_Max_Volume]]);
    var Xingqiu_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[1])["P3_" + [Xingqiu_Pr_Max_Volume]]);
    var Xingqiu_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[1])["P4_" + [Xingqiu_Pr_Max_Volume]]);
    var Xingqiu_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xingqiu_Pr.noUiSlider.get()[1])["P5_" + [Xingqiu_Pr_Max_Volume]]);
    var Xingqiu_Pr_P1 = Xingqiu_Pr_P1_1toMax_Volume - Xingqiu_Pr_P1_1toMin_Volume
    var Xingqiu_Pr_P2 = Xingqiu_Pr_P2_1toMax_Volume - Xingqiu_Pr_P2_1toMin_Volume
    var Xingqiu_Pr_P3 = Xingqiu_Pr_P3_1toMax_Volume - Xingqiu_Pr_P3_1toMin_Volume
    var Xingqiu_Pr_P4 = Xingqiu_Pr_P4_1toMax_Volume - Xingqiu_Pr_P4_1toMin_Volume
    var Xingqiu_Pr_P5 = Xingqiu_Pr_P5_1toMax_Volume - Xingqiu_Pr_P5_1toMin_Volume
    document.getElementById('Xingqiu_Pr_P1_Volume').innerHTML = Xingqiu_Pr_P1;
    document.getElementById('Xingqiu_Pr_P2_Volume').innerHTML = Xingqiu_Pr_P2;
    document.getElementById('Xingqiu_Pr_P3_Volume').innerHTML = Xingqiu_Pr_P3;
    document.getElementById('Xingqiu_Pr_P4_Volume').innerHTML = Xingqiu_Pr_P4;
    document.getElementById('Xingqiu_Pr_P5_Volume').innerHTML = Xingqiu_Pr_P5.toLocaleString();
  });
  Xingqiu_T1.noUiSlider.on('update', function (values, handle) {
    var Xingqiu_T1_Min_Volume = "L1toL" + Xingqiu_T1.noUiSlider.get()[0];
    var Xingqiu_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[0])["T1_" + [Xingqiu_T1_Min_Volume]]);
    var Xingqiu_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[0])["T2_" + [Xingqiu_T1_Min_Volume]]);
    var Xingqiu_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[0])["T3_" + [Xingqiu_T1_Min_Volume]]);
    var Xingqiu_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[0])["T4_" + [Xingqiu_T1_Min_Volume]]);
    var Xingqiu_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[0])["T5_" + [Xingqiu_T1_Min_Volume]]);
    var Xingqiu_T1_Max_Volume = "L1toL" + Xingqiu_T1.noUiSlider.get()[1];
    var Xingqiu_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[1])["T1_" + [Xingqiu_T1_Max_Volume]]);
    var Xingqiu_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[1])["T2_" + [Xingqiu_T1_Max_Volume]]);
    var Xingqiu_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[1])["T3_" + [Xingqiu_T1_Max_Volume]]);
    var Xingqiu_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[1])["T4_" + [Xingqiu_T1_Max_Volume]]);
    var Xingqiu_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T1.noUiSlider.get()[1])["T5_" + [Xingqiu_T1_Max_Volume]]);
    var Xingqiu_T1_T1 = Xingqiu_T1_T1_1toMax_Volume - Xingqiu_T1_T1_1toMin_Volume
    var Xingqiu_T1_T2 = Xingqiu_T1_T2_1toMax_Volume - Xingqiu_T1_T2_1toMin_Volume
    var Xingqiu_T1_T3 = Xingqiu_T1_T3_1toMax_Volume - Xingqiu_T1_T3_1toMin_Volume
    var Xingqiu_T1_T4 = Xingqiu_T1_T4_1toMax_Volume - Xingqiu_T1_T4_1toMin_Volume
    var Xingqiu_T1_T5 = Xingqiu_T1_T5_1toMax_Volume - Xingqiu_T1_T5_1toMin_Volume
    document.getElementById('Xingqiu_T1_T1_Volume').innerHTML = Xingqiu_T1_T1;
    document.getElementById('Xingqiu_T1_T2_Volume').innerHTML = Xingqiu_T1_T2;
    document.getElementById('Xingqiu_T1_T3_Volume').innerHTML = Xingqiu_T1_T3;
    document.getElementById('Xingqiu_T1_T4_Volume').innerHTML = Xingqiu_T1_T4;
    document.getElementById('Xingqiu_T1_T5_Volume').innerHTML = Xingqiu_T1_T5.toLocaleString();
  });
  Xingqiu_T2.noUiSlider.on('update', function (values, handle) {
    var Xingqiu_T2_Min_Volume = "L1toL" + Xingqiu_T2.noUiSlider.get()[0];
    var Xingqiu_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[0])["T1_" + [Xingqiu_T2_Min_Volume]]);
    var Xingqiu_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[0])["T2_" + [Xingqiu_T2_Min_Volume]]);
    var Xingqiu_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[0])["T3_" + [Xingqiu_T2_Min_Volume]]);
    var Xingqiu_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[0])["T4_" + [Xingqiu_T2_Min_Volume]]);
    var Xingqiu_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[0])["T5_" + [Xingqiu_T2_Min_Volume]]);
    var Xingqiu_T2_Max_Volume = "L1toL" + Xingqiu_T2.noUiSlider.get()[1];
    var Xingqiu_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[1])["T1_" + [Xingqiu_T2_Max_Volume]]);
    var Xingqiu_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[1])["T2_" + [Xingqiu_T2_Max_Volume]]);
    var Xingqiu_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[1])["T3_" + [Xingqiu_T2_Max_Volume]]);
    var Xingqiu_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[1])["T4_" + [Xingqiu_T2_Max_Volume]]);
    var Xingqiu_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T2.noUiSlider.get()[1])["T5_" + [Xingqiu_T2_Max_Volume]]);
    var Xingqiu_T2_T1 = Xingqiu_T2_T1_1toMax_Volume - Xingqiu_T2_T1_1toMin_Volume
    var Xingqiu_T2_T2 = Xingqiu_T2_T2_1toMax_Volume - Xingqiu_T2_T2_1toMin_Volume
    var Xingqiu_T2_T3 = Xingqiu_T2_T3_1toMax_Volume - Xingqiu_T2_T3_1toMin_Volume
    var Xingqiu_T2_T4 = Xingqiu_T2_T4_1toMax_Volume - Xingqiu_T2_T4_1toMin_Volume
    var Xingqiu_T2_T5 = Xingqiu_T2_T5_1toMax_Volume - Xingqiu_T2_T5_1toMin_Volume
    document.getElementById('Xingqiu_T2_T1_Volume').innerHTML = Xingqiu_T2_T1;
    document.getElementById('Xingqiu_T2_T2_Volume').innerHTML = Xingqiu_T2_T2;
    document.getElementById('Xingqiu_T2_T3_Volume').innerHTML = Xingqiu_T2_T3;
    document.getElementById('Xingqiu_T2_T4_Volume').innerHTML = Xingqiu_T2_T4;
    document.getElementById('Xingqiu_T2_T5_Volume').innerHTML = Xingqiu_T2_T5.toLocaleString();
  });
  Xingqiu_T3.noUiSlider.on('update', function (values, handle) {
    var Xingqiu_T3_Min_Volume = "L1toL" + Xingqiu_T3.noUiSlider.get()[0];
    var Xingqiu_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[0])["T1_" + [Xingqiu_T3_Min_Volume]]);
    var Xingqiu_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[0])["T2_" + [Xingqiu_T3_Min_Volume]]);
    var Xingqiu_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[0])["T3_" + [Xingqiu_T3_Min_Volume]]);
    var Xingqiu_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[0])["T4_" + [Xingqiu_T3_Min_Volume]]);
    var Xingqiu_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[0])["T5_" + [Xingqiu_T3_Min_Volume]]);
    var Xingqiu_T3_Max_Volume = "L1toL" + Xingqiu_T3.noUiSlider.get()[1];
    var Xingqiu_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[1])["T1_" + [Xingqiu_T3_Max_Volume]]);
    var Xingqiu_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[1])["T2_" + [Xingqiu_T3_Max_Volume]]);
    var Xingqiu_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[1])["T3_" + [Xingqiu_T3_Max_Volume]]);
    var Xingqiu_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[1])["T4_" + [Xingqiu_T3_Max_Volume]]);
    var Xingqiu_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xingqiu_T3.noUiSlider.get()[1])["T5_" + [Xingqiu_T3_Max_Volume]]);
    var Xingqiu_T3_T1 = Xingqiu_T3_T1_1toMax_Volume - Xingqiu_T3_T1_1toMin_Volume
    var Xingqiu_T3_T2 = Xingqiu_T3_T2_1toMax_Volume - Xingqiu_T3_T2_1toMin_Volume
    var Xingqiu_T3_T3 = Xingqiu_T3_T3_1toMax_Volume - Xingqiu_T3_T3_1toMin_Volume
    var Xingqiu_T3_T4 = Xingqiu_T3_T4_1toMax_Volume - Xingqiu_T3_T4_1toMin_Volume
    var Xingqiu_T3_T5 = Xingqiu_T3_T5_1toMax_Volume - Xingqiu_T3_T5_1toMin_Volume
    document.getElementById('Xingqiu_T3_T1_Volume').innerHTML = Xingqiu_T3_T1;
    document.getElementById('Xingqiu_T3_T2_Volume').innerHTML = Xingqiu_T3_T2;
    document.getElementById('Xingqiu_T3_T3_Volume').innerHTML = Xingqiu_T3_T3;
    document.getElementById('Xingqiu_T3_T4_Volume').innerHTML = Xingqiu_T3_T4;
    document.getElementById('Xingqiu_T3_T5_Volume').innerHTML = Xingqiu_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Xingqiu  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Beidou  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Beidou_Ex = document.getElementById('Beidou_Ex');
noUiSlider.create(Beidou_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Beidou_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Beidou_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Beidou_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Beidou_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function BeidouLoad() {
  Beidou_Ex.noUiSlider.on('update', function (values, handle) {
    var Beidou_Ex_Min_Volume = "L1toL" + Beidou_Ex.noUiSlider.get()[0];
    var Beidou_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Beidou_Ex.noUiSlider.get()[0])[Beidou_Ex_Min_Volume]);
    var Beidou_Ex_Max_Volume = "L1toL" + Beidou_Ex.noUiSlider.get()[1];
    var Beidou_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Beidou_Ex.noUiSlider.get()[1])[Beidou_Ex_Max_Volume]);
    var Beidou_Ex_Volume = Beidou_Ex_1toMax_Volume - Beidou_Ex_1toMin_Volume
    var Beidou_Ex_Book_Volume = Beidou_Ex_Volume / 1000
    var Beidou_Ex_Mora_Volume = Beidou_Ex_Volume * 0.2
    document.getElementById('Beidou_Ex_Volume').innerHTML = Beidou_Ex_Volume.toLocaleString();
    document.getElementById('Beidou_Ex_Book_Volume').innerHTML = Beidou_Ex_Book_Volume.toLocaleString();
    document.getElementById('Beidou_Ex_Mora_Volume').innerHTML = Beidou_Ex_Mora_Volume.toLocaleString();
  });
  Beidou_Pr.noUiSlider.on('update', function (values, handle) {
    var Beidou_Pr_Min_Volume = "L1toL" + Beidou_Pr.noUiSlider.get()[0];
    var Beidou_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[0])["P1_" + [Beidou_Pr_Min_Volume]]);
    var Beidou_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[0])["P2_" + [Beidou_Pr_Min_Volume]]);
    var Beidou_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[0])["P3_" + [Beidou_Pr_Min_Volume]]);
    var Beidou_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[0])["P4_" + [Beidou_Pr_Min_Volume]]);
    var Beidou_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[0])["P5_" + [Beidou_Pr_Min_Volume]]);
    var Beidou_Pr_Max_Volume = "L1toL" + Beidou_Pr.noUiSlider.get()[1];
    var Beidou_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[1])["P1_" + [Beidou_Pr_Max_Volume]]);
    var Beidou_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[1])["P2_" + [Beidou_Pr_Max_Volume]]);
    var Beidou_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[1])["P3_" + [Beidou_Pr_Max_Volume]]);
    var Beidou_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[1])["P4_" + [Beidou_Pr_Max_Volume]]);
    var Beidou_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Beidou_Pr.noUiSlider.get()[1])["P5_" + [Beidou_Pr_Max_Volume]]);
    var Beidou_Pr_P1 = Beidou_Pr_P1_1toMax_Volume - Beidou_Pr_P1_1toMin_Volume
    var Beidou_Pr_P2 = Beidou_Pr_P2_1toMax_Volume - Beidou_Pr_P2_1toMin_Volume
    var Beidou_Pr_P3 = Beidou_Pr_P3_1toMax_Volume - Beidou_Pr_P3_1toMin_Volume
    var Beidou_Pr_P4 = Beidou_Pr_P4_1toMax_Volume - Beidou_Pr_P4_1toMin_Volume
    var Beidou_Pr_P5 = Beidou_Pr_P5_1toMax_Volume - Beidou_Pr_P5_1toMin_Volume
    document.getElementById('Beidou_Pr_P1_Volume').innerHTML = Beidou_Pr_P1;
    document.getElementById('Beidou_Pr_P2_Volume').innerHTML = Beidou_Pr_P2;
    document.getElementById('Beidou_Pr_P3_Volume').innerHTML = Beidou_Pr_P3;
    document.getElementById('Beidou_Pr_P4_Volume').innerHTML = Beidou_Pr_P4;
    document.getElementById('Beidou_Pr_P5_Volume').innerHTML = Beidou_Pr_P5.toLocaleString();
  });
  Beidou_T1.noUiSlider.on('update', function (values, handle) {
    var Beidou_T1_Min_Volume = "L1toL" + Beidou_T1.noUiSlider.get()[0];
    var Beidou_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[0])["T1_" + [Beidou_T1_Min_Volume]]);
    var Beidou_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[0])["T2_" + [Beidou_T1_Min_Volume]]);
    var Beidou_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[0])["T3_" + [Beidou_T1_Min_Volume]]);
    var Beidou_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[0])["T4_" + [Beidou_T1_Min_Volume]]);
    var Beidou_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[0])["T5_" + [Beidou_T1_Min_Volume]]);
    var Beidou_T1_Max_Volume = "L1toL" + Beidou_T1.noUiSlider.get()[1];
    var Beidou_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[1])["T1_" + [Beidou_T1_Max_Volume]]);
    var Beidou_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[1])["T2_" + [Beidou_T1_Max_Volume]]);
    var Beidou_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[1])["T3_" + [Beidou_T1_Max_Volume]]);
    var Beidou_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[1])["T4_" + [Beidou_T1_Max_Volume]]);
    var Beidou_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T1.noUiSlider.get()[1])["T5_" + [Beidou_T1_Max_Volume]]);
    var Beidou_T1_T1 = Beidou_T1_T1_1toMax_Volume - Beidou_T1_T1_1toMin_Volume
    var Beidou_T1_T2 = Beidou_T1_T2_1toMax_Volume - Beidou_T1_T2_1toMin_Volume
    var Beidou_T1_T3 = Beidou_T1_T3_1toMax_Volume - Beidou_T1_T3_1toMin_Volume
    var Beidou_T1_T4 = Beidou_T1_T4_1toMax_Volume - Beidou_T1_T4_1toMin_Volume
    var Beidou_T1_T5 = Beidou_T1_T5_1toMax_Volume - Beidou_T1_T5_1toMin_Volume
    document.getElementById('Beidou_T1_T1_Volume').innerHTML = Beidou_T1_T1;
    document.getElementById('Beidou_T1_T2_Volume').innerHTML = Beidou_T1_T2;
    document.getElementById('Beidou_T1_T3_Volume').innerHTML = Beidou_T1_T3;
    document.getElementById('Beidou_T1_T4_Volume').innerHTML = Beidou_T1_T4;
    document.getElementById('Beidou_T1_T5_Volume').innerHTML = Beidou_T1_T5.toLocaleString();
  });
  Beidou_T2.noUiSlider.on('update', function (values, handle) {
    var Beidou_T2_Min_Volume = "L1toL" + Beidou_T2.noUiSlider.get()[0];
    var Beidou_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[0])["T1_" + [Beidou_T2_Min_Volume]]);
    var Beidou_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[0])["T2_" + [Beidou_T2_Min_Volume]]);
    var Beidou_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[0])["T3_" + [Beidou_T2_Min_Volume]]);
    var Beidou_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[0])["T4_" + [Beidou_T2_Min_Volume]]);
    var Beidou_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[0])["T5_" + [Beidou_T2_Min_Volume]]);
    var Beidou_T2_Max_Volume = "L1toL" + Beidou_T2.noUiSlider.get()[1];
    var Beidou_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[1])["T1_" + [Beidou_T2_Max_Volume]]);
    var Beidou_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[1])["T2_" + [Beidou_T2_Max_Volume]]);
    var Beidou_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[1])["T3_" + [Beidou_T2_Max_Volume]]);
    var Beidou_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[1])["T4_" + [Beidou_T2_Max_Volume]]);
    var Beidou_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T2.noUiSlider.get()[1])["T5_" + [Beidou_T2_Max_Volume]]);
    var Beidou_T2_T1 = Beidou_T2_T1_1toMax_Volume - Beidou_T2_T1_1toMin_Volume
    var Beidou_T2_T2 = Beidou_T2_T2_1toMax_Volume - Beidou_T2_T2_1toMin_Volume
    var Beidou_T2_T3 = Beidou_T2_T3_1toMax_Volume - Beidou_T2_T3_1toMin_Volume
    var Beidou_T2_T4 = Beidou_T2_T4_1toMax_Volume - Beidou_T2_T4_1toMin_Volume
    var Beidou_T2_T5 = Beidou_T2_T5_1toMax_Volume - Beidou_T2_T5_1toMin_Volume
    document.getElementById('Beidou_T2_T1_Volume').innerHTML = Beidou_T2_T1;
    document.getElementById('Beidou_T2_T2_Volume').innerHTML = Beidou_T2_T2;
    document.getElementById('Beidou_T2_T3_Volume').innerHTML = Beidou_T2_T3;
    document.getElementById('Beidou_T2_T4_Volume').innerHTML = Beidou_T2_T4;
    document.getElementById('Beidou_T2_T5_Volume').innerHTML = Beidou_T2_T5.toLocaleString();
  });
  Beidou_T3.noUiSlider.on('update', function (values, handle) {
    var Beidou_T3_Min_Volume = "L1toL" + Beidou_T3.noUiSlider.get()[0];
    var Beidou_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[0])["T1_" + [Beidou_T3_Min_Volume]]);
    var Beidou_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[0])["T2_" + [Beidou_T3_Min_Volume]]);
    var Beidou_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[0])["T3_" + [Beidou_T3_Min_Volume]]);
    var Beidou_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[0])["T4_" + [Beidou_T3_Min_Volume]]);
    var Beidou_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[0])["T5_" + [Beidou_T3_Min_Volume]]);
    var Beidou_T3_Max_Volume = "L1toL" + Beidou_T3.noUiSlider.get()[1];
    var Beidou_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[1])["T1_" + [Beidou_T3_Max_Volume]]);
    var Beidou_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[1])["T2_" + [Beidou_T3_Max_Volume]]);
    var Beidou_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[1])["T3_" + [Beidou_T3_Max_Volume]]);
    var Beidou_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[1])["T4_" + [Beidou_T3_Max_Volume]]);
    var Beidou_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Beidou_T3.noUiSlider.get()[1])["T5_" + [Beidou_T3_Max_Volume]]);
    var Beidou_T3_T1 = Beidou_T3_T1_1toMax_Volume - Beidou_T3_T1_1toMin_Volume
    var Beidou_T3_T2 = Beidou_T3_T2_1toMax_Volume - Beidou_T3_T2_1toMin_Volume
    var Beidou_T3_T3 = Beidou_T3_T3_1toMax_Volume - Beidou_T3_T3_1toMin_Volume
    var Beidou_T3_T4 = Beidou_T3_T4_1toMax_Volume - Beidou_T3_T4_1toMin_Volume
    var Beidou_T3_T5 = Beidou_T3_T5_1toMax_Volume - Beidou_T3_T5_1toMin_Volume
    document.getElementById('Beidou_T3_T1_Volume').innerHTML = Beidou_T3_T1;
    document.getElementById('Beidou_T3_T2_Volume').innerHTML = Beidou_T3_T2;
    document.getElementById('Beidou_T3_T3_Volume').innerHTML = Beidou_T3_T3;
    document.getElementById('Beidou_T3_T4_Volume').innerHTML = Beidou_T3_T4;
    document.getElementById('Beidou_T3_T5_Volume').innerHTML = Beidou_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Beidou  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Xiangling  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Xiangling_Ex = document.getElementById('Xiangling_Ex');
noUiSlider.create(Xiangling_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xiangling_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xiangling_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xiangling_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Xiangling_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function XianglingLoad() {
  Xiangling_Ex.noUiSlider.on('update', function (values, handle) {
    var Xiangling_Ex_Min_Volume = "L1toL" + Xiangling_Ex.noUiSlider.get()[0];
    var Xiangling_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Xiangling_Ex.noUiSlider.get()[0])[Xiangling_Ex_Min_Volume]);
    var Xiangling_Ex_Max_Volume = "L1toL" + Xiangling_Ex.noUiSlider.get()[1];
    var Xiangling_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Xiangling_Ex.noUiSlider.get()[1])[Xiangling_Ex_Max_Volume]);
    var Xiangling_Ex_Volume = Xiangling_Ex_1toMax_Volume - Xiangling_Ex_1toMin_Volume
    var Xiangling_Ex_Book_Volume = Xiangling_Ex_Volume / 1000
    var Xiangling_Ex_Mora_Volume = Xiangling_Ex_Volume * 0.2
    document.getElementById('Xiangling_Ex_Volume').innerHTML = Xiangling_Ex_Volume.toLocaleString();
    document.getElementById('Xiangling_Ex_Book_Volume').innerHTML = Xiangling_Ex_Book_Volume.toLocaleString();
    document.getElementById('Xiangling_Ex_Mora_Volume').innerHTML = Xiangling_Ex_Mora_Volume.toLocaleString();
  });
  Xiangling_Pr.noUiSlider.on('update', function (values, handle) {
    var Xiangling_Pr_Min_Volume = "L1toL" + Xiangling_Pr.noUiSlider.get()[0];
    var Xiangling_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[0])["P1_" + [Xiangling_Pr_Min_Volume]]);
    var Xiangling_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[0])["P2_" + [Xiangling_Pr_Min_Volume]]);
    var Xiangling_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[0])["P3_" + [Xiangling_Pr_Min_Volume]]);
    var Xiangling_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[0])["P4_" + [Xiangling_Pr_Min_Volume]]);
    var Xiangling_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[0])["P5_" + [Xiangling_Pr_Min_Volume]]);
    var Xiangling_Pr_Max_Volume = "L1toL" + Xiangling_Pr.noUiSlider.get()[1];
    var Xiangling_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[1])["P1_" + [Xiangling_Pr_Max_Volume]]);
    var Xiangling_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[1])["P2_" + [Xiangling_Pr_Max_Volume]]);
    var Xiangling_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[1])["P3_" + [Xiangling_Pr_Max_Volume]]);
    var Xiangling_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[1])["P4_" + [Xiangling_Pr_Max_Volume]]);
    var Xiangling_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Xiangling_Pr.noUiSlider.get()[1])["P5_" + [Xiangling_Pr_Max_Volume]]);
    var Xiangling_Pr_P1 = Xiangling_Pr_P1_1toMax_Volume - Xiangling_Pr_P1_1toMin_Volume
    var Xiangling_Pr_P2 = Xiangling_Pr_P2_1toMax_Volume - Xiangling_Pr_P2_1toMin_Volume
    var Xiangling_Pr_P3 = Xiangling_Pr_P3_1toMax_Volume - Xiangling_Pr_P3_1toMin_Volume
    var Xiangling_Pr_P4 = Xiangling_Pr_P4_1toMax_Volume - Xiangling_Pr_P4_1toMin_Volume
    var Xiangling_Pr_P5 = Xiangling_Pr_P5_1toMax_Volume - Xiangling_Pr_P5_1toMin_Volume
    document.getElementById('Xiangling_Pr_P1_Volume').innerHTML = Xiangling_Pr_P1;
    document.getElementById('Xiangling_Pr_P2_Volume').innerHTML = Xiangling_Pr_P2;
    document.getElementById('Xiangling_Pr_P3_Volume').innerHTML = Xiangling_Pr_P3;
    document.getElementById('Xiangling_Pr_P4_Volume').innerHTML = Xiangling_Pr_P4;
    document.getElementById('Xiangling_Pr_P5_Volume').innerHTML = Xiangling_Pr_P5.toLocaleString();
  });
  Xiangling_T1.noUiSlider.on('update', function (values, handle) {
    var Xiangling_T1_Min_Volume = "L1toL" + Xiangling_T1.noUiSlider.get()[0];
    var Xiangling_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[0])["T1_" + [Xiangling_T1_Min_Volume]]);
    var Xiangling_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[0])["T2_" + [Xiangling_T1_Min_Volume]]);
    var Xiangling_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[0])["T3_" + [Xiangling_T1_Min_Volume]]);
    var Xiangling_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[0])["T4_" + [Xiangling_T1_Min_Volume]]);
    var Xiangling_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[0])["T5_" + [Xiangling_T1_Min_Volume]]);
    var Xiangling_T1_Max_Volume = "L1toL" + Xiangling_T1.noUiSlider.get()[1];
    var Xiangling_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[1])["T1_" + [Xiangling_T1_Max_Volume]]);
    var Xiangling_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[1])["T2_" + [Xiangling_T1_Max_Volume]]);
    var Xiangling_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[1])["T3_" + [Xiangling_T1_Max_Volume]]);
    var Xiangling_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[1])["T4_" + [Xiangling_T1_Max_Volume]]);
    var Xiangling_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T1.noUiSlider.get()[1])["T5_" + [Xiangling_T1_Max_Volume]]);
    var Xiangling_T1_T1 = Xiangling_T1_T1_1toMax_Volume - Xiangling_T1_T1_1toMin_Volume
    var Xiangling_T1_T2 = Xiangling_T1_T2_1toMax_Volume - Xiangling_T1_T2_1toMin_Volume
    var Xiangling_T1_T3 = Xiangling_T1_T3_1toMax_Volume - Xiangling_T1_T3_1toMin_Volume
    var Xiangling_T1_T4 = Xiangling_T1_T4_1toMax_Volume - Xiangling_T1_T4_1toMin_Volume
    var Xiangling_T1_T5 = Xiangling_T1_T5_1toMax_Volume - Xiangling_T1_T5_1toMin_Volume
    document.getElementById('Xiangling_T1_T1_Volume').innerHTML = Xiangling_T1_T1;
    document.getElementById('Xiangling_T1_T2_Volume').innerHTML = Xiangling_T1_T2;
    document.getElementById('Xiangling_T1_T3_Volume').innerHTML = Xiangling_T1_T3;
    document.getElementById('Xiangling_T1_T4_Volume').innerHTML = Xiangling_T1_T4;
    document.getElementById('Xiangling_T1_T5_Volume').innerHTML = Xiangling_T1_T5.toLocaleString();
  });
  Xiangling_T2.noUiSlider.on('update', function (values, handle) {
    var Xiangling_T2_Min_Volume = "L1toL" + Xiangling_T2.noUiSlider.get()[0];
    var Xiangling_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[0])["T1_" + [Xiangling_T2_Min_Volume]]);
    var Xiangling_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[0])["T2_" + [Xiangling_T2_Min_Volume]]);
    var Xiangling_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[0])["T3_" + [Xiangling_T2_Min_Volume]]);
    var Xiangling_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[0])["T4_" + [Xiangling_T2_Min_Volume]]);
    var Xiangling_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[0])["T5_" + [Xiangling_T2_Min_Volume]]);
    var Xiangling_T2_Max_Volume = "L1toL" + Xiangling_T2.noUiSlider.get()[1];
    var Xiangling_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[1])["T1_" + [Xiangling_T2_Max_Volume]]);
    var Xiangling_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[1])["T2_" + [Xiangling_T2_Max_Volume]]);
    var Xiangling_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[1])["T3_" + [Xiangling_T2_Max_Volume]]);
    var Xiangling_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[1])["T4_" + [Xiangling_T2_Max_Volume]]);
    var Xiangling_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T2.noUiSlider.get()[1])["T5_" + [Xiangling_T2_Max_Volume]]);
    var Xiangling_T2_T1 = Xiangling_T2_T1_1toMax_Volume - Xiangling_T2_T1_1toMin_Volume
    var Xiangling_T2_T2 = Xiangling_T2_T2_1toMax_Volume - Xiangling_T2_T2_1toMin_Volume
    var Xiangling_T2_T3 = Xiangling_T2_T3_1toMax_Volume - Xiangling_T2_T3_1toMin_Volume
    var Xiangling_T2_T4 = Xiangling_T2_T4_1toMax_Volume - Xiangling_T2_T4_1toMin_Volume
    var Xiangling_T2_T5 = Xiangling_T2_T5_1toMax_Volume - Xiangling_T2_T5_1toMin_Volume
    document.getElementById('Xiangling_T2_T1_Volume').innerHTML = Xiangling_T2_T1;
    document.getElementById('Xiangling_T2_T2_Volume').innerHTML = Xiangling_T2_T2;
    document.getElementById('Xiangling_T2_T3_Volume').innerHTML = Xiangling_T2_T3;
    document.getElementById('Xiangling_T2_T4_Volume').innerHTML = Xiangling_T2_T4;
    document.getElementById('Xiangling_T2_T5_Volume').innerHTML = Xiangling_T2_T5.toLocaleString();
  });
  Xiangling_T3.noUiSlider.on('update', function (values, handle) {
    var Xiangling_T3_Min_Volume = "L1toL" + Xiangling_T3.noUiSlider.get()[0];
    var Xiangling_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[0])["T1_" + [Xiangling_T3_Min_Volume]]);
    var Xiangling_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[0])["T2_" + [Xiangling_T3_Min_Volume]]);
    var Xiangling_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[0])["T3_" + [Xiangling_T3_Min_Volume]]);
    var Xiangling_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[0])["T4_" + [Xiangling_T3_Min_Volume]]);
    var Xiangling_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[0])["T5_" + [Xiangling_T3_Min_Volume]]);
    var Xiangling_T3_Max_Volume = "L1toL" + Xiangling_T3.noUiSlider.get()[1];
    var Xiangling_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[1])["T1_" + [Xiangling_T3_Max_Volume]]);
    var Xiangling_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[1])["T2_" + [Xiangling_T3_Max_Volume]]);
    var Xiangling_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[1])["T3_" + [Xiangling_T3_Max_Volume]]);
    var Xiangling_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[1])["T4_" + [Xiangling_T3_Max_Volume]]);
    var Xiangling_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Xiangling_T3.noUiSlider.get()[1])["T5_" + [Xiangling_T3_Max_Volume]]);
    var Xiangling_T3_T1 = Xiangling_T3_T1_1toMax_Volume - Xiangling_T3_T1_1toMin_Volume
    var Xiangling_T3_T2 = Xiangling_T3_T2_1toMax_Volume - Xiangling_T3_T2_1toMin_Volume
    var Xiangling_T3_T3 = Xiangling_T3_T3_1toMax_Volume - Xiangling_T3_T3_1toMin_Volume
    var Xiangling_T3_T4 = Xiangling_T3_T4_1toMax_Volume - Xiangling_T3_T4_1toMin_Volume
    var Xiangling_T3_T5 = Xiangling_T3_T5_1toMax_Volume - Xiangling_T3_T5_1toMin_Volume
    document.getElementById('Xiangling_T3_T1_Volume').innerHTML = Xiangling_T3_T1;
    document.getElementById('Xiangling_T3_T2_Volume').innerHTML = Xiangling_T3_T2;
    document.getElementById('Xiangling_T3_T3_Volume').innerHTML = Xiangling_T3_T3;
    document.getElementById('Xiangling_T3_T4_Volume').innerHTML = Xiangling_T3_T4;
    document.getElementById('Xiangling_T3_T5_Volume').innerHTML = Xiangling_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Xiangling  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Razor  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Razor_Ex = document.getElementById('Razor_Ex');
noUiSlider.create(Razor_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Razor_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Razor_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Razor_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Razor_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function RazorLoad() {
  Razor_Ex.noUiSlider.on('update', function (values, handle) {
    var Razor_Ex_Min_Volume = "L1toL" + Razor_Ex.noUiSlider.get()[0];
    var Razor_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Razor_Ex.noUiSlider.get()[0])[Razor_Ex_Min_Volume]);
    var Razor_Ex_Max_Volume = "L1toL" + Razor_Ex.noUiSlider.get()[1];
    var Razor_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Razor_Ex.noUiSlider.get()[1])[Razor_Ex_Max_Volume]);
    var Razor_Ex_Volume = Razor_Ex_1toMax_Volume - Razor_Ex_1toMin_Volume
    var Razor_Ex_Book_Volume = Razor_Ex_Volume / 1000
    var Razor_Ex_Mora_Volume = Razor_Ex_Volume * 0.2
    document.getElementById('Razor_Ex_Volume').innerHTML = Razor_Ex_Volume.toLocaleString();
    document.getElementById('Razor_Ex_Book_Volume').innerHTML = Razor_Ex_Book_Volume.toLocaleString();
    document.getElementById('Razor_Ex_Mora_Volume').innerHTML = Razor_Ex_Mora_Volume.toLocaleString();
  });
  Razor_Pr.noUiSlider.on('update', function (values, handle) {
    var Razor_Pr_Min_Volume = "L1toL" + Razor_Pr.noUiSlider.get()[0];
    var Razor_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[0])["P1_" + [Razor_Pr_Min_Volume]]);
    var Razor_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[0])["P2_" + [Razor_Pr_Min_Volume]]);
    var Razor_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[0])["P3_" + [Razor_Pr_Min_Volume]]);
    var Razor_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[0])["P4_" + [Razor_Pr_Min_Volume]]);
    var Razor_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[0])["P5_" + [Razor_Pr_Min_Volume]]);
    var Razor_Pr_Max_Volume = "L1toL" + Razor_Pr.noUiSlider.get()[1];
    var Razor_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[1])["P1_" + [Razor_Pr_Max_Volume]]);
    var Razor_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[1])["P2_" + [Razor_Pr_Max_Volume]]);
    var Razor_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[1])["P3_" + [Razor_Pr_Max_Volume]]);
    var Razor_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[1])["P4_" + [Razor_Pr_Max_Volume]]);
    var Razor_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Razor_Pr.noUiSlider.get()[1])["P5_" + [Razor_Pr_Max_Volume]]);
    var Razor_Pr_P1 = Razor_Pr_P1_1toMax_Volume - Razor_Pr_P1_1toMin_Volume
    var Razor_Pr_P2 = Razor_Pr_P2_1toMax_Volume - Razor_Pr_P2_1toMin_Volume
    var Razor_Pr_P3 = Razor_Pr_P3_1toMax_Volume - Razor_Pr_P3_1toMin_Volume
    var Razor_Pr_P4 = Razor_Pr_P4_1toMax_Volume - Razor_Pr_P4_1toMin_Volume
    var Razor_Pr_P5 = Razor_Pr_P5_1toMax_Volume - Razor_Pr_P5_1toMin_Volume
    document.getElementById('Razor_Pr_P1_Volume').innerHTML = Razor_Pr_P1;
    document.getElementById('Razor_Pr_P2_Volume').innerHTML = Razor_Pr_P2;
    document.getElementById('Razor_Pr_P3_Volume').innerHTML = Razor_Pr_P3;
    document.getElementById('Razor_Pr_P4_Volume').innerHTML = Razor_Pr_P4;
    document.getElementById('Razor_Pr_P5_Volume').innerHTML = Razor_Pr_P5.toLocaleString();
  });
  Razor_T1.noUiSlider.on('update', function (values, handle) {
    var Razor_T1_Min_Volume = "L1toL" + Razor_T1.noUiSlider.get()[0];
    var Razor_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[0])["T1_" + [Razor_T1_Min_Volume]]);
    var Razor_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[0])["T2_" + [Razor_T1_Min_Volume]]);
    var Razor_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[0])["T3_" + [Razor_T1_Min_Volume]]);
    var Razor_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[0])["T4_" + [Razor_T1_Min_Volume]]);
    var Razor_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[0])["T5_" + [Razor_T1_Min_Volume]]);
    var Razor_T1_Max_Volume = "L1toL" + Razor_T1.noUiSlider.get()[1];
    var Razor_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[1])["T1_" + [Razor_T1_Max_Volume]]);
    var Razor_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[1])["T2_" + [Razor_T1_Max_Volume]]);
    var Razor_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[1])["T3_" + [Razor_T1_Max_Volume]]);
    var Razor_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[1])["T4_" + [Razor_T1_Max_Volume]]);
    var Razor_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T1.noUiSlider.get()[1])["T5_" + [Razor_T1_Max_Volume]]);
    var Razor_T1_T1 = Razor_T1_T1_1toMax_Volume - Razor_T1_T1_1toMin_Volume
    var Razor_T1_T2 = Razor_T1_T2_1toMax_Volume - Razor_T1_T2_1toMin_Volume
    var Razor_T1_T3 = Razor_T1_T3_1toMax_Volume - Razor_T1_T3_1toMin_Volume
    var Razor_T1_T4 = Razor_T1_T4_1toMax_Volume - Razor_T1_T4_1toMin_Volume
    var Razor_T1_T5 = Razor_T1_T5_1toMax_Volume - Razor_T1_T5_1toMin_Volume
    document.getElementById('Razor_T1_T1_Volume').innerHTML = Razor_T1_T1;
    document.getElementById('Razor_T1_T2_Volume').innerHTML = Razor_T1_T2;
    document.getElementById('Razor_T1_T3_Volume').innerHTML = Razor_T1_T3;
    document.getElementById('Razor_T1_T4_Volume').innerHTML = Razor_T1_T4;
    document.getElementById('Razor_T1_T5_Volume').innerHTML = Razor_T1_T5.toLocaleString();
  });
  Razor_T2.noUiSlider.on('update', function (values, handle) {
    var Razor_T2_Min_Volume = "L1toL" + Razor_T2.noUiSlider.get()[0];
    var Razor_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[0])["T1_" + [Razor_T2_Min_Volume]]);
    var Razor_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[0])["T2_" + [Razor_T2_Min_Volume]]);
    var Razor_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[0])["T3_" + [Razor_T2_Min_Volume]]);
    var Razor_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[0])["T4_" + [Razor_T2_Min_Volume]]);
    var Razor_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[0])["T5_" + [Razor_T2_Min_Volume]]);
    var Razor_T2_Max_Volume = "L1toL" + Razor_T2.noUiSlider.get()[1];
    var Razor_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[1])["T1_" + [Razor_T2_Max_Volume]]);
    var Razor_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[1])["T2_" + [Razor_T2_Max_Volume]]);
    var Razor_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[1])["T3_" + [Razor_T2_Max_Volume]]);
    var Razor_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[1])["T4_" + [Razor_T2_Max_Volume]]);
    var Razor_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T2.noUiSlider.get()[1])["T5_" + [Razor_T2_Max_Volume]]);
    var Razor_T2_T1 = Razor_T2_T1_1toMax_Volume - Razor_T2_T1_1toMin_Volume
    var Razor_T2_T2 = Razor_T2_T2_1toMax_Volume - Razor_T2_T2_1toMin_Volume
    var Razor_T2_T3 = Razor_T2_T3_1toMax_Volume - Razor_T2_T3_1toMin_Volume
    var Razor_T2_T4 = Razor_T2_T4_1toMax_Volume - Razor_T2_T4_1toMin_Volume
    var Razor_T2_T5 = Razor_T2_T5_1toMax_Volume - Razor_T2_T5_1toMin_Volume
    document.getElementById('Razor_T2_T1_Volume').innerHTML = Razor_T2_T1;
    document.getElementById('Razor_T2_T2_Volume').innerHTML = Razor_T2_T2;
    document.getElementById('Razor_T2_T3_Volume').innerHTML = Razor_T2_T3;
    document.getElementById('Razor_T2_T4_Volume').innerHTML = Razor_T2_T4;
    document.getElementById('Razor_T2_T5_Volume').innerHTML = Razor_T2_T5.toLocaleString();
  });
  Razor_T3.noUiSlider.on('update', function (values, handle) {
    var Razor_T3_Min_Volume = "L1toL" + Razor_T3.noUiSlider.get()[0];
    var Razor_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[0])["T1_" + [Razor_T3_Min_Volume]]);
    var Razor_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[0])["T2_" + [Razor_T3_Min_Volume]]);
    var Razor_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[0])["T3_" + [Razor_T3_Min_Volume]]);
    var Razor_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[0])["T4_" + [Razor_T3_Min_Volume]]);
    var Razor_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[0])["T5_" + [Razor_T3_Min_Volume]]);
    var Razor_T3_Max_Volume = "L1toL" + Razor_T3.noUiSlider.get()[1];
    var Razor_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[1])["T1_" + [Razor_T3_Max_Volume]]);
    var Razor_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[1])["T2_" + [Razor_T3_Max_Volume]]);
    var Razor_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[1])["T3_" + [Razor_T3_Max_Volume]]);
    var Razor_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[1])["T4_" + [Razor_T3_Max_Volume]]);
    var Razor_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Razor_T3.noUiSlider.get()[1])["T5_" + [Razor_T3_Max_Volume]]);
    var Razor_T3_T1 = Razor_T3_T1_1toMax_Volume - Razor_T3_T1_1toMin_Volume
    var Razor_T3_T2 = Razor_T3_T2_1toMax_Volume - Razor_T3_T2_1toMin_Volume
    var Razor_T3_T3 = Razor_T3_T3_1toMax_Volume - Razor_T3_T3_1toMin_Volume
    var Razor_T3_T4 = Razor_T3_T4_1toMax_Volume - Razor_T3_T4_1toMin_Volume
    var Razor_T3_T5 = Razor_T3_T5_1toMax_Volume - Razor_T3_T5_1toMin_Volume
    document.getElementById('Razor_T3_T1_Volume').innerHTML = Razor_T3_T1;
    document.getElementById('Razor_T3_T2_Volume').innerHTML = Razor_T3_T2;
    document.getElementById('Razor_T3_T3_Volume').innerHTML = Razor_T3_T3;
    document.getElementById('Razor_T3_T4_Volume').innerHTML = Razor_T3_T4;
    document.getElementById('Razor_T3_T5_Volume').innerHTML = Razor_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Razor  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Barbara  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Barbara_Ex = document.getElementById('Barbara_Ex');
noUiSlider.create(Barbara_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Barbara_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Barbara_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Barbara_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Barbara_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function BarbaraLoad() {
  Barbara_Ex.noUiSlider.on('update', function (values, handle) {
    var Barbara_Ex_Min_Volume = "L1toL" + Barbara_Ex.noUiSlider.get()[0];
    var Barbara_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Barbara_Ex.noUiSlider.get()[0])[Barbara_Ex_Min_Volume]);
    var Barbara_Ex_Max_Volume = "L1toL" + Barbara_Ex.noUiSlider.get()[1];
    var Barbara_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Barbara_Ex.noUiSlider.get()[1])[Barbara_Ex_Max_Volume]);
    var Barbara_Ex_Volume = Barbara_Ex_1toMax_Volume - Barbara_Ex_1toMin_Volume
    var Barbara_Ex_Book_Volume = Barbara_Ex_Volume / 1000
    var Barbara_Ex_Mora_Volume = Barbara_Ex_Volume * 0.2
    document.getElementById('Barbara_Ex_Volume').innerHTML = Barbara_Ex_Volume.toLocaleString();
    document.getElementById('Barbara_Ex_Book_Volume').innerHTML = Barbara_Ex_Book_Volume.toLocaleString();
    document.getElementById('Barbara_Ex_Mora_Volume').innerHTML = Barbara_Ex_Mora_Volume.toLocaleString();
  });
  Barbara_Pr.noUiSlider.on('update', function (values, handle) {
    var Barbara_Pr_Min_Volume = "L1toL" + Barbara_Pr.noUiSlider.get()[0];
    var Barbara_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[0])["P1_" + [Barbara_Pr_Min_Volume]]);
    var Barbara_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[0])["P2_" + [Barbara_Pr_Min_Volume]]);
    var Barbara_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[0])["P3_" + [Barbara_Pr_Min_Volume]]);
    var Barbara_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[0])["P4_" + [Barbara_Pr_Min_Volume]]);
    var Barbara_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[0])["P5_" + [Barbara_Pr_Min_Volume]]);
    var Barbara_Pr_Max_Volume = "L1toL" + Barbara_Pr.noUiSlider.get()[1];
    var Barbara_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[1])["P1_" + [Barbara_Pr_Max_Volume]]);
    var Barbara_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[1])["P2_" + [Barbara_Pr_Max_Volume]]);
    var Barbara_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[1])["P3_" + [Barbara_Pr_Max_Volume]]);
    var Barbara_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[1])["P4_" + [Barbara_Pr_Max_Volume]]);
    var Barbara_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Barbara_Pr.noUiSlider.get()[1])["P5_" + [Barbara_Pr_Max_Volume]]);
    var Barbara_Pr_P1 = Barbara_Pr_P1_1toMax_Volume - Barbara_Pr_P1_1toMin_Volume
    var Barbara_Pr_P2 = Barbara_Pr_P2_1toMax_Volume - Barbara_Pr_P2_1toMin_Volume
    var Barbara_Pr_P3 = Barbara_Pr_P3_1toMax_Volume - Barbara_Pr_P3_1toMin_Volume
    var Barbara_Pr_P4 = Barbara_Pr_P4_1toMax_Volume - Barbara_Pr_P4_1toMin_Volume
    var Barbara_Pr_P5 = Barbara_Pr_P5_1toMax_Volume - Barbara_Pr_P5_1toMin_Volume
    document.getElementById('Barbara_Pr_P1_Volume').innerHTML = Barbara_Pr_P1;
    document.getElementById('Barbara_Pr_P2_Volume').innerHTML = Barbara_Pr_P2;
    document.getElementById('Barbara_Pr_P3_Volume').innerHTML = Barbara_Pr_P3;
    document.getElementById('Barbara_Pr_P4_Volume').innerHTML = Barbara_Pr_P4;
    document.getElementById('Barbara_Pr_P5_Volume').innerHTML = Barbara_Pr_P5.toLocaleString();
  });
  Barbara_T1.noUiSlider.on('update', function (values, handle) {
    var Barbara_T1_Min_Volume = "L1toL" + Barbara_T1.noUiSlider.get()[0];
    var Barbara_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[0])["T1_" + [Barbara_T1_Min_Volume]]);
    var Barbara_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[0])["T2_" + [Barbara_T1_Min_Volume]]);
    var Barbara_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[0])["T3_" + [Barbara_T1_Min_Volume]]);
    var Barbara_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[0])["T4_" + [Barbara_T1_Min_Volume]]);
    var Barbara_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[0])["T5_" + [Barbara_T1_Min_Volume]]);
    var Barbara_T1_Max_Volume = "L1toL" + Barbara_T1.noUiSlider.get()[1];
    var Barbara_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[1])["T1_" + [Barbara_T1_Max_Volume]]);
    var Barbara_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[1])["T2_" + [Barbara_T1_Max_Volume]]);
    var Barbara_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[1])["T3_" + [Barbara_T1_Max_Volume]]);
    var Barbara_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[1])["T4_" + [Barbara_T1_Max_Volume]]);
    var Barbara_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T1.noUiSlider.get()[1])["T5_" + [Barbara_T1_Max_Volume]]);
    var Barbara_T1_T1 = Barbara_T1_T1_1toMax_Volume - Barbara_T1_T1_1toMin_Volume
    var Barbara_T1_T2 = Barbara_T1_T2_1toMax_Volume - Barbara_T1_T2_1toMin_Volume
    var Barbara_T1_T3 = Barbara_T1_T3_1toMax_Volume - Barbara_T1_T3_1toMin_Volume
    var Barbara_T1_T4 = Barbara_T1_T4_1toMax_Volume - Barbara_T1_T4_1toMin_Volume
    var Barbara_T1_T5 = Barbara_T1_T5_1toMax_Volume - Barbara_T1_T5_1toMin_Volume
    document.getElementById('Barbara_T1_T1_Volume').innerHTML = Barbara_T1_T1;
    document.getElementById('Barbara_T1_T2_Volume').innerHTML = Barbara_T1_T2;
    document.getElementById('Barbara_T1_T3_Volume').innerHTML = Barbara_T1_T3;
    document.getElementById('Barbara_T1_T4_Volume').innerHTML = Barbara_T1_T4;
    document.getElementById('Barbara_T1_T5_Volume').innerHTML = Barbara_T1_T5.toLocaleString();
  });
  Barbara_T2.noUiSlider.on('update', function (values, handle) {
    var Barbara_T2_Min_Volume = "L1toL" + Barbara_T2.noUiSlider.get()[0];
    var Barbara_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[0])["T1_" + [Barbara_T2_Min_Volume]]);
    var Barbara_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[0])["T2_" + [Barbara_T2_Min_Volume]]);
    var Barbara_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[0])["T3_" + [Barbara_T2_Min_Volume]]);
    var Barbara_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[0])["T4_" + [Barbara_T2_Min_Volume]]);
    var Barbara_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[0])["T5_" + [Barbara_T2_Min_Volume]]);
    var Barbara_T2_Max_Volume = "L1toL" + Barbara_T2.noUiSlider.get()[1];
    var Barbara_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[1])["T1_" + [Barbara_T2_Max_Volume]]);
    var Barbara_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[1])["T2_" + [Barbara_T2_Max_Volume]]);
    var Barbara_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[1])["T3_" + [Barbara_T2_Max_Volume]]);
    var Barbara_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[1])["T4_" + [Barbara_T2_Max_Volume]]);
    var Barbara_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T2.noUiSlider.get()[1])["T5_" + [Barbara_T2_Max_Volume]]);
    var Barbara_T2_T1 = Barbara_T2_T1_1toMax_Volume - Barbara_T2_T1_1toMin_Volume
    var Barbara_T2_T2 = Barbara_T2_T2_1toMax_Volume - Barbara_T2_T2_1toMin_Volume
    var Barbara_T2_T3 = Barbara_T2_T3_1toMax_Volume - Barbara_T2_T3_1toMin_Volume
    var Barbara_T2_T4 = Barbara_T2_T4_1toMax_Volume - Barbara_T2_T4_1toMin_Volume
    var Barbara_T2_T5 = Barbara_T2_T5_1toMax_Volume - Barbara_T2_T5_1toMin_Volume
    document.getElementById('Barbara_T2_T1_Volume').innerHTML = Barbara_T2_T1;
    document.getElementById('Barbara_T2_T2_Volume').innerHTML = Barbara_T2_T2;
    document.getElementById('Barbara_T2_T3_Volume').innerHTML = Barbara_T2_T3;
    document.getElementById('Barbara_T2_T4_Volume').innerHTML = Barbara_T2_T4;
    document.getElementById('Barbara_T2_T5_Volume').innerHTML = Barbara_T2_T5.toLocaleString();
  });
  Barbara_T3.noUiSlider.on('update', function (values, handle) {
    var Barbara_T3_Min_Volume = "L1toL" + Barbara_T3.noUiSlider.get()[0];
    var Barbara_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[0])["T1_" + [Barbara_T3_Min_Volume]]);
    var Barbara_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[0])["T2_" + [Barbara_T3_Min_Volume]]);
    var Barbara_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[0])["T3_" + [Barbara_T3_Min_Volume]]);
    var Barbara_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[0])["T4_" + [Barbara_T3_Min_Volume]]);
    var Barbara_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[0])["T5_" + [Barbara_T3_Min_Volume]]);
    var Barbara_T3_Max_Volume = "L1toL" + Barbara_T3.noUiSlider.get()[1];
    var Barbara_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[1])["T1_" + [Barbara_T3_Max_Volume]]);
    var Barbara_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[1])["T2_" + [Barbara_T3_Max_Volume]]);
    var Barbara_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[1])["T3_" + [Barbara_T3_Max_Volume]]);
    var Barbara_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[1])["T4_" + [Barbara_T3_Max_Volume]]);
    var Barbara_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Barbara_T3.noUiSlider.get()[1])["T5_" + [Barbara_T3_Max_Volume]]);
    var Barbara_T3_T1 = Barbara_T3_T1_1toMax_Volume - Barbara_T3_T1_1toMin_Volume
    var Barbara_T3_T2 = Barbara_T3_T2_1toMax_Volume - Barbara_T3_T2_1toMin_Volume
    var Barbara_T3_T3 = Barbara_T3_T3_1toMax_Volume - Barbara_T3_T3_1toMin_Volume
    var Barbara_T3_T4 = Barbara_T3_T4_1toMax_Volume - Barbara_T3_T4_1toMin_Volume
    var Barbara_T3_T5 = Barbara_T3_T5_1toMax_Volume - Barbara_T3_T5_1toMin_Volume
    document.getElementById('Barbara_T3_T1_Volume').innerHTML = Barbara_T3_T1;
    document.getElementById('Barbara_T3_T2_Volume').innerHTML = Barbara_T3_T2;
    document.getElementById('Barbara_T3_T3_Volume').innerHTML = Barbara_T3_T3;
    document.getElementById('Barbara_T3_T4_Volume').innerHTML = Barbara_T3_T4;
    document.getElementById('Barbara_T3_T5_Volume').innerHTML = Barbara_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Barbara  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Lisa  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Lisa_Ex = document.getElementById('Lisa_Ex');
noUiSlider.create(Lisa_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Lisa_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Lisa_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Lisa_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Lisa_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function LisaLoad() {
  Lisa_Ex.noUiSlider.on('update', function (values, handle) {
    var Lisa_Ex_Min_Volume = "L1toL" + Lisa_Ex.noUiSlider.get()[0];
    var Lisa_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Lisa_Ex.noUiSlider.get()[0])[Lisa_Ex_Min_Volume]);
    var Lisa_Ex_Max_Volume = "L1toL" + Lisa_Ex.noUiSlider.get()[1];
    var Lisa_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Lisa_Ex.noUiSlider.get()[1])[Lisa_Ex_Max_Volume]);
    var Lisa_Ex_Volume = Lisa_Ex_1toMax_Volume - Lisa_Ex_1toMin_Volume
    var Lisa_Ex_Book_Volume = Lisa_Ex_Volume / 1000
    var Lisa_Ex_Mora_Volume = Lisa_Ex_Volume * 0.2
    document.getElementById('Lisa_Ex_Volume').innerHTML = Lisa_Ex_Volume.toLocaleString();
    document.getElementById('Lisa_Ex_Book_Volume').innerHTML = Lisa_Ex_Book_Volume.toLocaleString();
    document.getElementById('Lisa_Ex_Mora_Volume').innerHTML = Lisa_Ex_Mora_Volume.toLocaleString();
  });
  Lisa_Pr.noUiSlider.on('update', function (values, handle) {
    var Lisa_Pr_Min_Volume = "L1toL" + Lisa_Pr.noUiSlider.get()[0];
    var Lisa_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[0])["P1_" + [Lisa_Pr_Min_Volume]]);
    var Lisa_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[0])["P2_" + [Lisa_Pr_Min_Volume]]);
    var Lisa_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[0])["P3_" + [Lisa_Pr_Min_Volume]]);
    var Lisa_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[0])["P4_" + [Lisa_Pr_Min_Volume]]);
    var Lisa_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[0])["P5_" + [Lisa_Pr_Min_Volume]]);
    var Lisa_Pr_Max_Volume = "L1toL" + Lisa_Pr.noUiSlider.get()[1];
    var Lisa_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[1])["P1_" + [Lisa_Pr_Max_Volume]]);
    var Lisa_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[1])["P2_" + [Lisa_Pr_Max_Volume]]);
    var Lisa_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[1])["P3_" + [Lisa_Pr_Max_Volume]]);
    var Lisa_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[1])["P4_" + [Lisa_Pr_Max_Volume]]);
    var Lisa_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Lisa_Pr.noUiSlider.get()[1])["P5_" + [Lisa_Pr_Max_Volume]]);
    var Lisa_Pr_P1 = Lisa_Pr_P1_1toMax_Volume - Lisa_Pr_P1_1toMin_Volume
    var Lisa_Pr_P2 = Lisa_Pr_P2_1toMax_Volume - Lisa_Pr_P2_1toMin_Volume
    var Lisa_Pr_P3 = Lisa_Pr_P3_1toMax_Volume - Lisa_Pr_P3_1toMin_Volume
    var Lisa_Pr_P4 = Lisa_Pr_P4_1toMax_Volume - Lisa_Pr_P4_1toMin_Volume
    var Lisa_Pr_P5 = Lisa_Pr_P5_1toMax_Volume - Lisa_Pr_P5_1toMin_Volume
    document.getElementById('Lisa_Pr_P1_Volume').innerHTML = Lisa_Pr_P1;
    document.getElementById('Lisa_Pr_P2_Volume').innerHTML = Lisa_Pr_P2;
    document.getElementById('Lisa_Pr_P3_Volume').innerHTML = Lisa_Pr_P3;
    document.getElementById('Lisa_Pr_P4_Volume').innerHTML = Lisa_Pr_P4;
    document.getElementById('Lisa_Pr_P5_Volume').innerHTML = Lisa_Pr_P5.toLocaleString();
  });
  Lisa_T1.noUiSlider.on('update', function (values, handle) {
    var Lisa_T1_Min_Volume = "L1toL" + Lisa_T1.noUiSlider.get()[0];
    var Lisa_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[0])["T1_" + [Lisa_T1_Min_Volume]]);
    var Lisa_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[0])["T2_" + [Lisa_T1_Min_Volume]]);
    var Lisa_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[0])["T3_" + [Lisa_T1_Min_Volume]]);
    var Lisa_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[0])["T4_" + [Lisa_T1_Min_Volume]]);
    var Lisa_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[0])["T5_" + [Lisa_T1_Min_Volume]]);
    var Lisa_T1_Max_Volume = "L1toL" + Lisa_T1.noUiSlider.get()[1];
    var Lisa_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[1])["T1_" + [Lisa_T1_Max_Volume]]);
    var Lisa_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[1])["T2_" + [Lisa_T1_Max_Volume]]);
    var Lisa_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[1])["T3_" + [Lisa_T1_Max_Volume]]);
    var Lisa_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[1])["T4_" + [Lisa_T1_Max_Volume]]);
    var Lisa_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T1.noUiSlider.get()[1])["T5_" + [Lisa_T1_Max_Volume]]);
    var Lisa_T1_T1 = Lisa_T1_T1_1toMax_Volume - Lisa_T1_T1_1toMin_Volume
    var Lisa_T1_T2 = Lisa_T1_T2_1toMax_Volume - Lisa_T1_T2_1toMin_Volume
    var Lisa_T1_T3 = Lisa_T1_T3_1toMax_Volume - Lisa_T1_T3_1toMin_Volume
    var Lisa_T1_T4 = Lisa_T1_T4_1toMax_Volume - Lisa_T1_T4_1toMin_Volume
    var Lisa_T1_T5 = Lisa_T1_T5_1toMax_Volume - Lisa_T1_T5_1toMin_Volume
    document.getElementById('Lisa_T1_T1_Volume').innerHTML = Lisa_T1_T1;
    document.getElementById('Lisa_T1_T2_Volume').innerHTML = Lisa_T1_T2;
    document.getElementById('Lisa_T1_T3_Volume').innerHTML = Lisa_T1_T3;
    document.getElementById('Lisa_T1_T4_Volume').innerHTML = Lisa_T1_T4;
    document.getElementById('Lisa_T1_T5_Volume').innerHTML = Lisa_T1_T5.toLocaleString();
  });
  Lisa_T2.noUiSlider.on('update', function (values, handle) {
    var Lisa_T2_Min_Volume = "L1toL" + Lisa_T2.noUiSlider.get()[0];
    var Lisa_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[0])["T1_" + [Lisa_T2_Min_Volume]]);
    var Lisa_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[0])["T2_" + [Lisa_T2_Min_Volume]]);
    var Lisa_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[0])["T3_" + [Lisa_T2_Min_Volume]]);
    var Lisa_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[0])["T4_" + [Lisa_T2_Min_Volume]]);
    var Lisa_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[0])["T5_" + [Lisa_T2_Min_Volume]]);
    var Lisa_T2_Max_Volume = "L1toL" + Lisa_T2.noUiSlider.get()[1];
    var Lisa_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[1])["T1_" + [Lisa_T2_Max_Volume]]);
    var Lisa_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[1])["T2_" + [Lisa_T2_Max_Volume]]);
    var Lisa_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[1])["T3_" + [Lisa_T2_Max_Volume]]);
    var Lisa_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[1])["T4_" + [Lisa_T2_Max_Volume]]);
    var Lisa_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T2.noUiSlider.get()[1])["T5_" + [Lisa_T2_Max_Volume]]);
    var Lisa_T2_T1 = Lisa_T2_T1_1toMax_Volume - Lisa_T2_T1_1toMin_Volume
    var Lisa_T2_T2 = Lisa_T2_T2_1toMax_Volume - Lisa_T2_T2_1toMin_Volume
    var Lisa_T2_T3 = Lisa_T2_T3_1toMax_Volume - Lisa_T2_T3_1toMin_Volume
    var Lisa_T2_T4 = Lisa_T2_T4_1toMax_Volume - Lisa_T2_T4_1toMin_Volume
    var Lisa_T2_T5 = Lisa_T2_T5_1toMax_Volume - Lisa_T2_T5_1toMin_Volume
    document.getElementById('Lisa_T2_T1_Volume').innerHTML = Lisa_T2_T1;
    document.getElementById('Lisa_T2_T2_Volume').innerHTML = Lisa_T2_T2;
    document.getElementById('Lisa_T2_T3_Volume').innerHTML = Lisa_T2_T3;
    document.getElementById('Lisa_T2_T4_Volume').innerHTML = Lisa_T2_T4;
    document.getElementById('Lisa_T2_T5_Volume').innerHTML = Lisa_T2_T5.toLocaleString();
  });
  Lisa_T3.noUiSlider.on('update', function (values, handle) {
    var Lisa_T3_Min_Volume = "L1toL" + Lisa_T3.noUiSlider.get()[0];
    var Lisa_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[0])["T1_" + [Lisa_T3_Min_Volume]]);
    var Lisa_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[0])["T2_" + [Lisa_T3_Min_Volume]]);
    var Lisa_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[0])["T3_" + [Lisa_T3_Min_Volume]]);
    var Lisa_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[0])["T4_" + [Lisa_T3_Min_Volume]]);
    var Lisa_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[0])["T5_" + [Lisa_T3_Min_Volume]]);
    var Lisa_T3_Max_Volume = "L1toL" + Lisa_T3.noUiSlider.get()[1];
    var Lisa_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[1])["T1_" + [Lisa_T3_Max_Volume]]);
    var Lisa_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[1])["T2_" + [Lisa_T3_Max_Volume]]);
    var Lisa_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[1])["T3_" + [Lisa_T3_Max_Volume]]);
    var Lisa_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[1])["T4_" + [Lisa_T3_Max_Volume]]);
    var Lisa_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Lisa_T3.noUiSlider.get()[1])["T5_" + [Lisa_T3_Max_Volume]]);
    var Lisa_T3_T1 = Lisa_T3_T1_1toMax_Volume - Lisa_T3_T1_1toMin_Volume
    var Lisa_T3_T2 = Lisa_T3_T2_1toMax_Volume - Lisa_T3_T2_1toMin_Volume
    var Lisa_T3_T3 = Lisa_T3_T3_1toMax_Volume - Lisa_T3_T3_1toMin_Volume
    var Lisa_T3_T4 = Lisa_T3_T4_1toMax_Volume - Lisa_T3_T4_1toMin_Volume
    var Lisa_T3_T5 = Lisa_T3_T5_1toMax_Volume - Lisa_T3_T5_1toMin_Volume
    document.getElementById('Lisa_T3_T1_Volume').innerHTML = Lisa_T3_T1;
    document.getElementById('Lisa_T3_T2_Volume').innerHTML = Lisa_T3_T2;
    document.getElementById('Lisa_T3_T3_Volume').innerHTML = Lisa_T3_T3;
    document.getElementById('Lisa_T3_T4_Volume').innerHTML = Lisa_T3_T4;
    document.getElementById('Lisa_T3_T5_Volume').innerHTML = Lisa_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Lisa  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Kaeya  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Kaeya_Ex = document.getElementById('Kaeya_Ex');
noUiSlider.create(Kaeya_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kaeya_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kaeya_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kaeya_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Kaeya_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function KaeyaLoad() {
  Kaeya_Ex.noUiSlider.on('update', function (values, handle) {
    var Kaeya_Ex_Min_Volume = "L1toL" + Kaeya_Ex.noUiSlider.get()[0];
    var Kaeya_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Kaeya_Ex.noUiSlider.get()[0])[Kaeya_Ex_Min_Volume]);
    var Kaeya_Ex_Max_Volume = "L1toL" + Kaeya_Ex.noUiSlider.get()[1];
    var Kaeya_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Kaeya_Ex.noUiSlider.get()[1])[Kaeya_Ex_Max_Volume]);
    var Kaeya_Ex_Volume = Kaeya_Ex_1toMax_Volume - Kaeya_Ex_1toMin_Volume
    var Kaeya_Ex_Book_Volume = Kaeya_Ex_Volume / 1000
    var Kaeya_Ex_Mora_Volume = Kaeya_Ex_Volume * 0.2
    document.getElementById('Kaeya_Ex_Volume').innerHTML = Kaeya_Ex_Volume.toLocaleString();
    document.getElementById('Kaeya_Ex_Book_Volume').innerHTML = Kaeya_Ex_Book_Volume.toLocaleString();
    document.getElementById('Kaeya_Ex_Mora_Volume').innerHTML = Kaeya_Ex_Mora_Volume.toLocaleString();
  });
  Kaeya_Pr.noUiSlider.on('update', function (values, handle) {
    var Kaeya_Pr_Min_Volume = "L1toL" + Kaeya_Pr.noUiSlider.get()[0];
    var Kaeya_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[0])["P1_" + [Kaeya_Pr_Min_Volume]]);
    var Kaeya_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[0])["P2_" + [Kaeya_Pr_Min_Volume]]);
    var Kaeya_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[0])["P3_" + [Kaeya_Pr_Min_Volume]]);
    var Kaeya_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[0])["P4_" + [Kaeya_Pr_Min_Volume]]);
    var Kaeya_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[0])["P5_" + [Kaeya_Pr_Min_Volume]]);
    var Kaeya_Pr_Max_Volume = "L1toL" + Kaeya_Pr.noUiSlider.get()[1];
    var Kaeya_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[1])["P1_" + [Kaeya_Pr_Max_Volume]]);
    var Kaeya_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[1])["P2_" + [Kaeya_Pr_Max_Volume]]);
    var Kaeya_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[1])["P3_" + [Kaeya_Pr_Max_Volume]]);
    var Kaeya_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[1])["P4_" + [Kaeya_Pr_Max_Volume]]);
    var Kaeya_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Kaeya_Pr.noUiSlider.get()[1])["P5_" + [Kaeya_Pr_Max_Volume]]);
    var Kaeya_Pr_P1 = Kaeya_Pr_P1_1toMax_Volume - Kaeya_Pr_P1_1toMin_Volume
    var Kaeya_Pr_P2 = Kaeya_Pr_P2_1toMax_Volume - Kaeya_Pr_P2_1toMin_Volume
    var Kaeya_Pr_P3 = Kaeya_Pr_P3_1toMax_Volume - Kaeya_Pr_P3_1toMin_Volume
    var Kaeya_Pr_P4 = Kaeya_Pr_P4_1toMax_Volume - Kaeya_Pr_P4_1toMin_Volume
    var Kaeya_Pr_P5 = Kaeya_Pr_P5_1toMax_Volume - Kaeya_Pr_P5_1toMin_Volume
    document.getElementById('Kaeya_Pr_P1_Volume').innerHTML = Kaeya_Pr_P1;
    document.getElementById('Kaeya_Pr_P2_Volume').innerHTML = Kaeya_Pr_P2;
    document.getElementById('Kaeya_Pr_P3_Volume').innerHTML = Kaeya_Pr_P3;
    document.getElementById('Kaeya_Pr_P4_Volume').innerHTML = Kaeya_Pr_P4;
    document.getElementById('Kaeya_Pr_P5_Volume').innerHTML = Kaeya_Pr_P5.toLocaleString();
  });
  Kaeya_T1.noUiSlider.on('update', function (values, handle) {
    var Kaeya_T1_Min_Volume = "L1toL" + Kaeya_T1.noUiSlider.get()[0];
    var Kaeya_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[0])["T1_" + [Kaeya_T1_Min_Volume]]);
    var Kaeya_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[0])["T2_" + [Kaeya_T1_Min_Volume]]);
    var Kaeya_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[0])["T3_" + [Kaeya_T1_Min_Volume]]);
    var Kaeya_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[0])["T4_" + [Kaeya_T1_Min_Volume]]);
    var Kaeya_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[0])["T5_" + [Kaeya_T1_Min_Volume]]);
    var Kaeya_T1_Max_Volume = "L1toL" + Kaeya_T1.noUiSlider.get()[1];
    var Kaeya_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[1])["T1_" + [Kaeya_T1_Max_Volume]]);
    var Kaeya_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[1])["T2_" + [Kaeya_T1_Max_Volume]]);
    var Kaeya_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[1])["T3_" + [Kaeya_T1_Max_Volume]]);
    var Kaeya_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[1])["T4_" + [Kaeya_T1_Max_Volume]]);
    var Kaeya_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T1.noUiSlider.get()[1])["T5_" + [Kaeya_T1_Max_Volume]]);
    var Kaeya_T1_T1 = Kaeya_T1_T1_1toMax_Volume - Kaeya_T1_T1_1toMin_Volume
    var Kaeya_T1_T2 = Kaeya_T1_T2_1toMax_Volume - Kaeya_T1_T2_1toMin_Volume
    var Kaeya_T1_T3 = Kaeya_T1_T3_1toMax_Volume - Kaeya_T1_T3_1toMin_Volume
    var Kaeya_T1_T4 = Kaeya_T1_T4_1toMax_Volume - Kaeya_T1_T4_1toMin_Volume
    var Kaeya_T1_T5 = Kaeya_T1_T5_1toMax_Volume - Kaeya_T1_T5_1toMin_Volume
    document.getElementById('Kaeya_T1_T1_Volume').innerHTML = Kaeya_T1_T1;
    document.getElementById('Kaeya_T1_T2_Volume').innerHTML = Kaeya_T1_T2;
    document.getElementById('Kaeya_T1_T3_Volume').innerHTML = Kaeya_T1_T3;
    document.getElementById('Kaeya_T1_T4_Volume').innerHTML = Kaeya_T1_T4;
    document.getElementById('Kaeya_T1_T5_Volume').innerHTML = Kaeya_T1_T5.toLocaleString();
  });
  Kaeya_T2.noUiSlider.on('update', function (values, handle) {
    var Kaeya_T2_Min_Volume = "L1toL" + Kaeya_T2.noUiSlider.get()[0];
    var Kaeya_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[0])["T1_" + [Kaeya_T2_Min_Volume]]);
    var Kaeya_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[0])["T2_" + [Kaeya_T2_Min_Volume]]);
    var Kaeya_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[0])["T3_" + [Kaeya_T2_Min_Volume]]);
    var Kaeya_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[0])["T4_" + [Kaeya_T2_Min_Volume]]);
    var Kaeya_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[0])["T5_" + [Kaeya_T2_Min_Volume]]);
    var Kaeya_T2_Max_Volume = "L1toL" + Kaeya_T2.noUiSlider.get()[1];
    var Kaeya_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[1])["T1_" + [Kaeya_T2_Max_Volume]]);
    var Kaeya_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[1])["T2_" + [Kaeya_T2_Max_Volume]]);
    var Kaeya_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[1])["T3_" + [Kaeya_T2_Max_Volume]]);
    var Kaeya_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[1])["T4_" + [Kaeya_T2_Max_Volume]]);
    var Kaeya_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T2.noUiSlider.get()[1])["T5_" + [Kaeya_T2_Max_Volume]]);
    var Kaeya_T2_T1 = Kaeya_T2_T1_1toMax_Volume - Kaeya_T2_T1_1toMin_Volume
    var Kaeya_T2_T2 = Kaeya_T2_T2_1toMax_Volume - Kaeya_T2_T2_1toMin_Volume
    var Kaeya_T2_T3 = Kaeya_T2_T3_1toMax_Volume - Kaeya_T2_T3_1toMin_Volume
    var Kaeya_T2_T4 = Kaeya_T2_T4_1toMax_Volume - Kaeya_T2_T4_1toMin_Volume
    var Kaeya_T2_T5 = Kaeya_T2_T5_1toMax_Volume - Kaeya_T2_T5_1toMin_Volume
    document.getElementById('Kaeya_T2_T1_Volume').innerHTML = Kaeya_T2_T1;
    document.getElementById('Kaeya_T2_T2_Volume').innerHTML = Kaeya_T2_T2;
    document.getElementById('Kaeya_T2_T3_Volume').innerHTML = Kaeya_T2_T3;
    document.getElementById('Kaeya_T2_T4_Volume').innerHTML = Kaeya_T2_T4;
    document.getElementById('Kaeya_T2_T5_Volume').innerHTML = Kaeya_T2_T5.toLocaleString();
  });
  Kaeya_T3.noUiSlider.on('update', function (values, handle) {
    var Kaeya_T3_Min_Volume = "L1toL" + Kaeya_T3.noUiSlider.get()[0];
    var Kaeya_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[0])["T1_" + [Kaeya_T3_Min_Volume]]);
    var Kaeya_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[0])["T2_" + [Kaeya_T3_Min_Volume]]);
    var Kaeya_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[0])["T3_" + [Kaeya_T3_Min_Volume]]);
    var Kaeya_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[0])["T4_" + [Kaeya_T3_Min_Volume]]);
    var Kaeya_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[0])["T5_" + [Kaeya_T3_Min_Volume]]);
    var Kaeya_T3_Max_Volume = "L1toL" + Kaeya_T3.noUiSlider.get()[1];
    var Kaeya_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[1])["T1_" + [Kaeya_T3_Max_Volume]]);
    var Kaeya_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[1])["T2_" + [Kaeya_T3_Max_Volume]]);
    var Kaeya_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[1])["T3_" + [Kaeya_T3_Max_Volume]]);
    var Kaeya_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[1])["T4_" + [Kaeya_T3_Max_Volume]]);
    var Kaeya_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Kaeya_T3.noUiSlider.get()[1])["T5_" + [Kaeya_T3_Max_Volume]]);
    var Kaeya_T3_T1 = Kaeya_T3_T1_1toMax_Volume - Kaeya_T3_T1_1toMin_Volume
    var Kaeya_T3_T2 = Kaeya_T3_T2_1toMax_Volume - Kaeya_T3_T2_1toMin_Volume
    var Kaeya_T3_T3 = Kaeya_T3_T3_1toMax_Volume - Kaeya_T3_T3_1toMin_Volume
    var Kaeya_T3_T4 = Kaeya_T3_T4_1toMax_Volume - Kaeya_T3_T4_1toMin_Volume
    var Kaeya_T3_T5 = Kaeya_T3_T5_1toMax_Volume - Kaeya_T3_T5_1toMin_Volume
    document.getElementById('Kaeya_T3_T1_Volume').innerHTML = Kaeya_T3_T1;
    document.getElementById('Kaeya_T3_T2_Volume').innerHTML = Kaeya_T3_T2;
    document.getElementById('Kaeya_T3_T3_Volume').innerHTML = Kaeya_T3_T3;
    document.getElementById('Kaeya_T3_T4_Volume').innerHTML = Kaeya_T3_T4;
    document.getElementById('Kaeya_T3_T5_Volume').innerHTML = Kaeya_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Kaeya  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Amber  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Amber_Ex = document.getElementById('Amber_Ex');
noUiSlider.create(Amber_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Amber_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Amber_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Amber_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Amber_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function AmberLoad() {
  Amber_Ex.noUiSlider.on('update', function (values, handle) {
    var Amber_Ex_Min_Volume = "L1toL" + Amber_Ex.noUiSlider.get()[0];
    var Amber_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Amber_Ex.noUiSlider.get()[0])[Amber_Ex_Min_Volume]);
    var Amber_Ex_Max_Volume = "L1toL" + Amber_Ex.noUiSlider.get()[1];
    var Amber_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Amber_Ex.noUiSlider.get()[1])[Amber_Ex_Max_Volume]);
    var Amber_Ex_Volume = Amber_Ex_1toMax_Volume - Amber_Ex_1toMin_Volume
    var Amber_Ex_Book_Volume = Amber_Ex_Volume / 1000
    var Amber_Ex_Mora_Volume = Amber_Ex_Volume * 0.2
    document.getElementById('Amber_Ex_Volume').innerHTML = Amber_Ex_Volume.toLocaleString();
    document.getElementById('Amber_Ex_Book_Volume').innerHTML = Amber_Ex_Book_Volume.toLocaleString();
    document.getElementById('Amber_Ex_Mora_Volume').innerHTML = Amber_Ex_Mora_Volume.toLocaleString();
  });
  Amber_Pr.noUiSlider.on('update', function (values, handle) {
    var Amber_Pr_Min_Volume = "L1toL" + Amber_Pr.noUiSlider.get()[0];
    var Amber_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[0])["P1_" + [Amber_Pr_Min_Volume]]);
    var Amber_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[0])["P2_" + [Amber_Pr_Min_Volume]]);
    var Amber_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[0])["P3_" + [Amber_Pr_Min_Volume]]);
    var Amber_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[0])["P4_" + [Amber_Pr_Min_Volume]]);
    var Amber_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[0])["P5_" + [Amber_Pr_Min_Volume]]);
    var Amber_Pr_Max_Volume = "L1toL" + Amber_Pr.noUiSlider.get()[1];
    var Amber_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[1])["P1_" + [Amber_Pr_Max_Volume]]);
    var Amber_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[1])["P2_" + [Amber_Pr_Max_Volume]]);
    var Amber_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[1])["P3_" + [Amber_Pr_Max_Volume]]);
    var Amber_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[1])["P4_" + [Amber_Pr_Max_Volume]]);
    var Amber_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Amber_Pr.noUiSlider.get()[1])["P5_" + [Amber_Pr_Max_Volume]]);
    var Amber_Pr_P1 = Amber_Pr_P1_1toMax_Volume - Amber_Pr_P1_1toMin_Volume
    var Amber_Pr_P2 = Amber_Pr_P2_1toMax_Volume - Amber_Pr_P2_1toMin_Volume
    var Amber_Pr_P3 = Amber_Pr_P3_1toMax_Volume - Amber_Pr_P3_1toMin_Volume
    var Amber_Pr_P4 = Amber_Pr_P4_1toMax_Volume - Amber_Pr_P4_1toMin_Volume
    var Amber_Pr_P5 = Amber_Pr_P5_1toMax_Volume - Amber_Pr_P5_1toMin_Volume
    document.getElementById('Amber_Pr_P1_Volume').innerHTML = Amber_Pr_P1;
    document.getElementById('Amber_Pr_P2_Volume').innerHTML = Amber_Pr_P2;
    document.getElementById('Amber_Pr_P3_Volume').innerHTML = Amber_Pr_P3;
    document.getElementById('Amber_Pr_P4_Volume').innerHTML = Amber_Pr_P4;
    document.getElementById('Amber_Pr_P5_Volume').innerHTML = Amber_Pr_P5.toLocaleString();
  });
  Amber_T1.noUiSlider.on('update', function (values, handle) {
    var Amber_T1_Min_Volume = "L1toL" + Amber_T1.noUiSlider.get()[0];
    var Amber_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[0])["T1_" + [Amber_T1_Min_Volume]]);
    var Amber_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[0])["T2_" + [Amber_T1_Min_Volume]]);
    var Amber_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[0])["T3_" + [Amber_T1_Min_Volume]]);
    var Amber_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[0])["T4_" + [Amber_T1_Min_Volume]]);
    var Amber_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[0])["T5_" + [Amber_T1_Min_Volume]]);
    var Amber_T1_Max_Volume = "L1toL" + Amber_T1.noUiSlider.get()[1];
    var Amber_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[1])["T1_" + [Amber_T1_Max_Volume]]);
    var Amber_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[1])["T2_" + [Amber_T1_Max_Volume]]);
    var Amber_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[1])["T3_" + [Amber_T1_Max_Volume]]);
    var Amber_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[1])["T4_" + [Amber_T1_Max_Volume]]);
    var Amber_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T1.noUiSlider.get()[1])["T5_" + [Amber_T1_Max_Volume]]);
    var Amber_T1_T1 = Amber_T1_T1_1toMax_Volume - Amber_T1_T1_1toMin_Volume
    var Amber_T1_T2 = Amber_T1_T2_1toMax_Volume - Amber_T1_T2_1toMin_Volume
    var Amber_T1_T3 = Amber_T1_T3_1toMax_Volume - Amber_T1_T3_1toMin_Volume
    var Amber_T1_T4 = Amber_T1_T4_1toMax_Volume - Amber_T1_T4_1toMin_Volume
    var Amber_T1_T5 = Amber_T1_T5_1toMax_Volume - Amber_T1_T5_1toMin_Volume
    document.getElementById('Amber_T1_T1_Volume').innerHTML = Amber_T1_T1;
    document.getElementById('Amber_T1_T2_Volume').innerHTML = Amber_T1_T2;
    document.getElementById('Amber_T1_T3_Volume').innerHTML = Amber_T1_T3;
    document.getElementById('Amber_T1_T4_Volume').innerHTML = Amber_T1_T4;
    document.getElementById('Amber_T1_T5_Volume').innerHTML = Amber_T1_T5.toLocaleString();
  });
  Amber_T2.noUiSlider.on('update', function (values, handle) {
    var Amber_T2_Min_Volume = "L1toL" + Amber_T2.noUiSlider.get()[0];
    var Amber_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[0])["T1_" + [Amber_T2_Min_Volume]]);
    var Amber_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[0])["T2_" + [Amber_T2_Min_Volume]]);
    var Amber_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[0])["T3_" + [Amber_T2_Min_Volume]]);
    var Amber_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[0])["T4_" + [Amber_T2_Min_Volume]]);
    var Amber_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[0])["T5_" + [Amber_T2_Min_Volume]]);
    var Amber_T2_Max_Volume = "L1toL" + Amber_T2.noUiSlider.get()[1];
    var Amber_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[1])["T1_" + [Amber_T2_Max_Volume]]);
    var Amber_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[1])["T2_" + [Amber_T2_Max_Volume]]);
    var Amber_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[1])["T3_" + [Amber_T2_Max_Volume]]);
    var Amber_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[1])["T4_" + [Amber_T2_Max_Volume]]);
    var Amber_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T2.noUiSlider.get()[1])["T5_" + [Amber_T2_Max_Volume]]);
    var Amber_T2_T1 = Amber_T2_T1_1toMax_Volume - Amber_T2_T1_1toMin_Volume
    var Amber_T2_T2 = Amber_T2_T2_1toMax_Volume - Amber_T2_T2_1toMin_Volume
    var Amber_T2_T3 = Amber_T2_T3_1toMax_Volume - Amber_T2_T3_1toMin_Volume
    var Amber_T2_T4 = Amber_T2_T4_1toMax_Volume - Amber_T2_T4_1toMin_Volume
    var Amber_T2_T5 = Amber_T2_T5_1toMax_Volume - Amber_T2_T5_1toMin_Volume
    document.getElementById('Amber_T2_T1_Volume').innerHTML = Amber_T2_T1;
    document.getElementById('Amber_T2_T2_Volume').innerHTML = Amber_T2_T2;
    document.getElementById('Amber_T2_T3_Volume').innerHTML = Amber_T2_T3;
    document.getElementById('Amber_T2_T4_Volume').innerHTML = Amber_T2_T4;
    document.getElementById('Amber_T2_T5_Volume').innerHTML = Amber_T2_T5.toLocaleString();
  });
  Amber_T3.noUiSlider.on('update', function (values, handle) {
    var Amber_T3_Min_Volume = "L1toL" + Amber_T3.noUiSlider.get()[0];
    var Amber_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[0])["T1_" + [Amber_T3_Min_Volume]]);
    var Amber_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[0])["T2_" + [Amber_T3_Min_Volume]]);
    var Amber_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[0])["T3_" + [Amber_T3_Min_Volume]]);
    var Amber_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[0])["T4_" + [Amber_T3_Min_Volume]]);
    var Amber_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[0])["T5_" + [Amber_T3_Min_Volume]]);
    var Amber_T3_Max_Volume = "L1toL" + Amber_T3.noUiSlider.get()[1];
    var Amber_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[1])["T1_" + [Amber_T3_Max_Volume]]);
    var Amber_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[1])["T2_" + [Amber_T3_Max_Volume]]);
    var Amber_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[1])["T3_" + [Amber_T3_Max_Volume]]);
    var Amber_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[1])["T4_" + [Amber_T3_Max_Volume]]);
    var Amber_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Amber_T3.noUiSlider.get()[1])["T5_" + [Amber_T3_Max_Volume]]);
    var Amber_T3_T1 = Amber_T3_T1_1toMax_Volume - Amber_T3_T1_1toMin_Volume
    var Amber_T3_T2 = Amber_T3_T2_1toMax_Volume - Amber_T3_T2_1toMin_Volume
    var Amber_T3_T3 = Amber_T3_T3_1toMax_Volume - Amber_T3_T3_1toMin_Volume
    var Amber_T3_T4 = Amber_T3_T4_1toMax_Volume - Amber_T3_T4_1toMin_Volume
    var Amber_T3_T5 = Amber_T3_T5_1toMax_Volume - Amber_T3_T5_1toMin_Volume
    document.getElementById('Amber_T3_T1_Volume').innerHTML = Amber_T3_T1;
    document.getElementById('Amber_T3_T2_Volume').innerHTML = Amber_T3_T2;
    document.getElementById('Amber_T3_T3_Volume').innerHTML = Amber_T3_T3;
    document.getElementById('Amber_T3_T4_Volume').innerHTML = Amber_T3_T4;
    document.getElementById('Amber_T3_T5_Volume').innerHTML = Amber_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Amber  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Aloy  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// var Aloy_Ex = document.getElementById('Aloy_Ex');
noUiSlider.create(Aloy_Ex,{start:[1,90],connect:true,step:1,orientation:"horizontal",range:{min:1,max:90},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Aloy_Pr,{start:[0,6],connect:true,step:1,orientation:"horizontal",range:{min:0,max:6},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Aloy_T1,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Aloy_T2,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
noUiSlider.create(Aloy_T3,{start:[1,10],connect:true,step:1,orientation:"horizontal",range:{min:1,max:10},format:wNumb({decimals:1,thousand:"."})});
function AloyLoad() {
  Aloy_Ex.noUiSlider.on('update', function (values, handle) {
    var Aloy_Ex_Min_Volume = "L1toL" + Aloy_Ex.noUiSlider.get()[0];
    var Aloy_Ex_1toMin_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Aloy_Ex.noUiSlider.get()[0])[Aloy_Ex_Min_Volume]);
    var Aloy_Ex_Max_Volume = "L1toL" + Aloy_Ex.noUiSlider.get()[1];
    var Aloy_Ex_1toMax_Volume = parseInt(JSON.parse(httpObj.response).CharacterEXP.find((v) => v.Lv == Aloy_Ex.noUiSlider.get()[1])[Aloy_Ex_Max_Volume]);
    var Aloy_Ex_Volume = Aloy_Ex_1toMax_Volume - Aloy_Ex_1toMin_Volume
    var Aloy_Ex_Book_Volume = Aloy_Ex_Volume / 1000
    var Aloy_Ex_Mora_Volume = Aloy_Ex_Volume * 0.2
    document.getElementById('Aloy_Ex_Volume').innerHTML = Aloy_Ex_Volume.toLocaleString();
    document.getElementById('Aloy_Ex_Book_Volume').innerHTML = Aloy_Ex_Book_Volume.toLocaleString();
    document.getElementById('Aloy_Ex_Mora_Volume').innerHTML = Aloy_Ex_Mora_Volume.toLocaleString();
  });
  Aloy_Pr.noUiSlider.on('update', function (values, handle) {
    var Aloy_Pr_Min_Volume = "L1toL" + Aloy_Pr.noUiSlider.get()[0];
    var Aloy_Pr_P1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[0])["P1_" + [Aloy_Pr_Min_Volume]]);
    var Aloy_Pr_P2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[0])["P2_" + [Aloy_Pr_Min_Volume]]);
    var Aloy_Pr_P3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[0])["P3_" + [Aloy_Pr_Min_Volume]]);
    var Aloy_Pr_P4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[0])["P4_" + [Aloy_Pr_Min_Volume]]);
    var Aloy_Pr_P5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[0])["P5_" + [Aloy_Pr_Min_Volume]]);
    var Aloy_Pr_Max_Volume = "L1toL" + Aloy_Pr.noUiSlider.get()[1];
    var Aloy_Pr_P1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[1])["P1_" + [Aloy_Pr_Max_Volume]]);
    var Aloy_Pr_P2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[1])["P2_" + [Aloy_Pr_Max_Volume]]);
    var Aloy_Pr_P3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[1])["P3_" + [Aloy_Pr_Max_Volume]]);
    var Aloy_Pr_P4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[1])["P4_" + [Aloy_Pr_Max_Volume]]);
    var Aloy_Pr_P5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).ProgressionMaterials.find((v) => v.Lv == Aloy_Pr.noUiSlider.get()[1])["P5_" + [Aloy_Pr_Max_Volume]]);
    var Aloy_Pr_P1 = Aloy_Pr_P1_1toMax_Volume - Aloy_Pr_P1_1toMin_Volume
    var Aloy_Pr_P2 = Aloy_Pr_P2_1toMax_Volume - Aloy_Pr_P2_1toMin_Volume
    var Aloy_Pr_P3 = Aloy_Pr_P3_1toMax_Volume - Aloy_Pr_P3_1toMin_Volume
    var Aloy_Pr_P4 = Aloy_Pr_P4_1toMax_Volume - Aloy_Pr_P4_1toMin_Volume
    var Aloy_Pr_P5 = Aloy_Pr_P5_1toMax_Volume - Aloy_Pr_P5_1toMin_Volume
    document.getElementById('Aloy_Pr_P1_Volume').innerHTML = Aloy_Pr_P1;
    document.getElementById('Aloy_Pr_P2_Volume').innerHTML = Aloy_Pr_P2;
    document.getElementById('Aloy_Pr_P3_Volume').innerHTML = Aloy_Pr_P3;
    document.getElementById('Aloy_Pr_P4_Volume').innerHTML = Aloy_Pr_P4;
    document.getElementById('Aloy_Pr_P5_Volume').innerHTML = Aloy_Pr_P5.toLocaleString();
  });
  Aloy_T1.noUiSlider.on('update', function (values, handle) {
    var Aloy_T1_Min_Volume = "L1toL" + Aloy_T1.noUiSlider.get()[0];
    var Aloy_T1_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[0])["T1_" + [Aloy_T1_Min_Volume]]);
    var Aloy_T1_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[0])["T2_" + [Aloy_T1_Min_Volume]]);
    var Aloy_T1_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[0])["T3_" + [Aloy_T1_Min_Volume]]);
    var Aloy_T1_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[0])["T4_" + [Aloy_T1_Min_Volume]]);
    var Aloy_T1_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[0])["T5_" + [Aloy_T1_Min_Volume]]);
    var Aloy_T1_Max_Volume = "L1toL" + Aloy_T1.noUiSlider.get()[1];
    var Aloy_T1_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[1])["T1_" + [Aloy_T1_Max_Volume]]);
    var Aloy_T1_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[1])["T2_" + [Aloy_T1_Max_Volume]]);
    var Aloy_T1_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[1])["T3_" + [Aloy_T1_Max_Volume]]);
    var Aloy_T1_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[1])["T4_" + [Aloy_T1_Max_Volume]]);
    var Aloy_T1_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T1.noUiSlider.get()[1])["T5_" + [Aloy_T1_Max_Volume]]);
    var Aloy_T1_T1 = Aloy_T1_T1_1toMax_Volume - Aloy_T1_T1_1toMin_Volume
    var Aloy_T1_T2 = Aloy_T1_T2_1toMax_Volume - Aloy_T1_T2_1toMin_Volume
    var Aloy_T1_T3 = Aloy_T1_T3_1toMax_Volume - Aloy_T1_T3_1toMin_Volume
    var Aloy_T1_T4 = Aloy_T1_T4_1toMax_Volume - Aloy_T1_T4_1toMin_Volume
    var Aloy_T1_T5 = Aloy_T1_T5_1toMax_Volume - Aloy_T1_T5_1toMin_Volume
    document.getElementById('Aloy_T1_T1_Volume').innerHTML = Aloy_T1_T1;
    document.getElementById('Aloy_T1_T2_Volume').innerHTML = Aloy_T1_T2;
    document.getElementById('Aloy_T1_T3_Volume').innerHTML = Aloy_T1_T3;
    document.getElementById('Aloy_T1_T4_Volume').innerHTML = Aloy_T1_T4;
    document.getElementById('Aloy_T1_T5_Volume').innerHTML = Aloy_T1_T5.toLocaleString();
  });
  Aloy_T2.noUiSlider.on('update', function (values, handle) {
    var Aloy_T2_Min_Volume = "L1toL" + Aloy_T2.noUiSlider.get()[0];
    var Aloy_T2_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[0])["T1_" + [Aloy_T2_Min_Volume]]);
    var Aloy_T2_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[0])["T2_" + [Aloy_T2_Min_Volume]]);
    var Aloy_T2_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[0])["T3_" + [Aloy_T2_Min_Volume]]);
    var Aloy_T2_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[0])["T4_" + [Aloy_T2_Min_Volume]]);
    var Aloy_T2_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[0])["T5_" + [Aloy_T2_Min_Volume]]);
    var Aloy_T2_Max_Volume = "L1toL" + Aloy_T2.noUiSlider.get()[1];
    var Aloy_T2_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[1])["T1_" + [Aloy_T2_Max_Volume]]);
    var Aloy_T2_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[1])["T2_" + [Aloy_T2_Max_Volume]]);
    var Aloy_T2_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[1])["T3_" + [Aloy_T2_Max_Volume]]);
    var Aloy_T2_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[1])["T4_" + [Aloy_T2_Max_Volume]]);
    var Aloy_T2_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T2.noUiSlider.get()[1])["T5_" + [Aloy_T2_Max_Volume]]);
    var Aloy_T2_T1 = Aloy_T2_T1_1toMax_Volume - Aloy_T2_T1_1toMin_Volume
    var Aloy_T2_T2 = Aloy_T2_T2_1toMax_Volume - Aloy_T2_T2_1toMin_Volume
    var Aloy_T2_T3 = Aloy_T2_T3_1toMax_Volume - Aloy_T2_T3_1toMin_Volume
    var Aloy_T2_T4 = Aloy_T2_T4_1toMax_Volume - Aloy_T2_T4_1toMin_Volume
    var Aloy_T2_T5 = Aloy_T2_T5_1toMax_Volume - Aloy_T2_T5_1toMin_Volume
    document.getElementById('Aloy_T2_T1_Volume').innerHTML = Aloy_T2_T1;
    document.getElementById('Aloy_T2_T2_Volume').innerHTML = Aloy_T2_T2;
    document.getElementById('Aloy_T2_T3_Volume').innerHTML = Aloy_T2_T3;
    document.getElementById('Aloy_T2_T4_Volume').innerHTML = Aloy_T2_T4;
    document.getElementById('Aloy_T2_T5_Volume').innerHTML = Aloy_T2_T5.toLocaleString();
  });
  Aloy_T3.noUiSlider.on('update', function (values, handle) {
    var Aloy_T3_Min_Volume = "L1toL" + Aloy_T3.noUiSlider.get()[0];
    var Aloy_T3_T1_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[0])["T1_" + [Aloy_T3_Min_Volume]]);
    var Aloy_T3_T2_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[0])["T2_" + [Aloy_T3_Min_Volume]]);
    var Aloy_T3_T3_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[0])["T3_" + [Aloy_T3_Min_Volume]]);
    var Aloy_T3_T4_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[0])["T4_" + [Aloy_T3_Min_Volume]]);
    var Aloy_T3_T5_1toMin_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[0])["T5_" + [Aloy_T3_Min_Volume]]);
    var Aloy_T3_Max_Volume = "L1toL" + Aloy_T3.noUiSlider.get()[1];
    var Aloy_T3_T1_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[1])["T1_" + [Aloy_T3_Max_Volume]]);
    var Aloy_T3_T2_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[1])["T2_" + [Aloy_T3_Max_Volume]]);
    var Aloy_T3_T3_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[1])["T3_" + [Aloy_T3_Max_Volume]]);
    var Aloy_T3_T4_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[1])["T4_" + [Aloy_T3_Max_Volume]]);
    var Aloy_T3_T5_1toMax_Volume = parseInt(JSON.parse(httpObj.response).TalentMaterials.find((v) => v.Lv == Aloy_T3.noUiSlider.get()[1])["T5_" + [Aloy_T3_Max_Volume]]);
    var Aloy_T3_T1 = Aloy_T3_T1_1toMax_Volume - Aloy_T3_T1_1toMin_Volume
    var Aloy_T3_T2 = Aloy_T3_T2_1toMax_Volume - Aloy_T3_T2_1toMin_Volume
    var Aloy_T3_T3 = Aloy_T3_T3_1toMax_Volume - Aloy_T3_T3_1toMin_Volume
    var Aloy_T3_T4 = Aloy_T3_T4_1toMax_Volume - Aloy_T3_T4_1toMin_Volume
    var Aloy_T3_T5 = Aloy_T3_T5_1toMax_Volume - Aloy_T3_T5_1toMin_Volume
    document.getElementById('Aloy_T3_T1_Volume').innerHTML = Aloy_T3_T1;
    document.getElementById('Aloy_T3_T2_Volume').innerHTML = Aloy_T3_T2;
    document.getElementById('Aloy_T3_T3_Volume').innerHTML = Aloy_T3_T3;
    document.getElementById('Aloy_T3_T4_Volume').innerHTML = Aloy_T3_T4;
    document.getElementById('Aloy_T3_T5_Volume').innerHTML = Aloy_T3_T5.toLocaleString();
  });
}
// /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/  Aloy  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/



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


``// セーブ系
function Save() {
var now = new Date().toUTCString();
document.cookie = "Character4=\
Sangonomiya_Kokomi_Ex_CookieMin=" + Sangonomiya_Kokomi_Ex.noUiSlider.get()[0] + "/\
Sangonomiya_Kokomi_Ex_CookieMax=" + Sangonomiya_Kokomi_Ex.noUiSlider.get()[1] + "/\
Sangonomiya_Kokomi_Pr_CookieMin=" + Sangonomiya_Kokomi_Pr.noUiSlider.get()[0] + "/\
Sangonomiya_Kokomi_Pr_CookieMax=" + Sangonomiya_Kokomi_Pr.noUiSlider.get()[1] + "/\
Sangonomiya_Kokomi_T1_CookieMin=" + Sangonomiya_Kokomi_T1.noUiSlider.get()[0] + "/\
Sangonomiya_Kokomi_T1_CookieMax=" + Sangonomiya_Kokomi_T1.noUiSlider.get()[1] + "/\
Sangonomiya_Kokomi_T2_CookieMin=" + Sangonomiya_Kokomi_T2.noUiSlider.get()[0] + "/\
Sangonomiya_Kokomi_T2_CookieMax=" + Sangonomiya_Kokomi_T2.noUiSlider.get()[1] + "/\
Sangonomiya_Kokomi_T3_CookieMin=" + Sangonomiya_Kokomi_T3.noUiSlider.get()[0] + "/\
Sangonomiya_Kokomi_T3_CookieMax=" + Sangonomiya_Kokomi_T3.noUiSlider.get()[1] + "/\
Raiden_Shogun_Ex_CookieMin=" + Raiden_Shogun_Ex.noUiSlider.get()[0] + "/\
Raiden_Shogun_Ex_CookieMax=" + Raiden_Shogun_Ex.noUiSlider.get()[1] + "/\
Raiden_Shogun_Pr_CookieMin=" + Raiden_Shogun_Pr.noUiSlider.get()[0] + "/\
Raiden_Shogun_Pr_CookieMax=" + Raiden_Shogun_Pr.noUiSlider.get()[1] + "/\
Raiden_Shogun_T1_CookieMin=" + Raiden_Shogun_T1.noUiSlider.get()[0] + "/\
Raiden_Shogun_T1_CookieMax=" + Raiden_Shogun_T1.noUiSlider.get()[1] + "/\
Raiden_Shogun_T2_CookieMin=" + Raiden_Shogun_T2.noUiSlider.get()[0] + "/\
Raiden_Shogun_T2_CookieMax=" + Raiden_Shogun_T2.noUiSlider.get()[1] + "/\
Raiden_Shogun_T3_CookieMin=" + Raiden_Shogun_T3.noUiSlider.get()[0] + "/\
Raiden_Shogun_T3_CookieMax=" + Raiden_Shogun_T3.noUiSlider.get()[1] + "/\
Kujou_Sara_Ex_CookieMin=" + Kujou_Sara_Ex.noUiSlider.get()[0] + "/\
Kujou_Sara_Ex_CookieMax=" + Kujou_Sara_Ex.noUiSlider.get()[1] + "/\
Kujou_Sara_Pr_CookieMin=" + Kujou_Sara_Pr.noUiSlider.get()[0] + "/\
Kujou_Sara_Pr_CookieMax=" + Kujou_Sara_Pr.noUiSlider.get()[1] + "/\
Kujou_Sara_T1_CookieMin=" + Kujou_Sara_T1.noUiSlider.get()[0] + "/\
Kujou_Sara_T1_CookieMax=" + Kujou_Sara_T1.noUiSlider.get()[1] + "/\
Kujou_Sara_T2_CookieMin=" + Kujou_Sara_T2.noUiSlider.get()[0] + "/\
Kujou_Sara_T2_CookieMax=" + Kujou_Sara_T2.noUiSlider.get()[1] + "/\
Kujou_Sara_T3_CookieMin=" + Kujou_Sara_T3.noUiSlider.get()[0] + "/\
Kujou_Sara_T3_CookieMax=" + Kujou_Sara_T3.noUiSlider.get()[1] + "/\
Yoimiya_Ex_CookieMin=" + Yoimiya_Ex.noUiSlider.get()[0] + "/\
Yoimiya_Ex_CookieMax=" + Yoimiya_Ex.noUiSlider.get()[1] + "/\
Yoimiya_Pr_CookieMin=" + Yoimiya_Pr.noUiSlider.get()[0] + "/\
Yoimiya_Pr_CookieMax=" + Yoimiya_Pr.noUiSlider.get()[1] + "/\
Yoimiya_T1_CookieMin=" + Yoimiya_T1.noUiSlider.get()[0] + "/\
Yoimiya_T1_CookieMax=" + Yoimiya_T1.noUiSlider.get()[1] + "/\
Yoimiya_T2_CookieMin=" + Yoimiya_T2.noUiSlider.get()[0] + "/\
Yoimiya_T2_CookieMax=" + Yoimiya_T2.noUiSlider.get()[1] + "/\
Yoimiya_T3_CookieMin=" + Yoimiya_T3.noUiSlider.get()[0] + "/\
Yoimiya_T3_CookieMax=" + Yoimiya_T3.noUiSlider.get()[1] + "/\
Sayu_Ex_CookieMin=" + Sayu_Ex.noUiSlider.get()[0] + "/\
Sayu_Ex_CookieMax=" + Sayu_Ex.noUiSlider.get()[1] + "/\
Sayu_Pr_CookieMin=" + Sayu_Pr.noUiSlider.get()[0] + "/\
Sayu_Pr_CookieMax=" + Sayu_Pr.noUiSlider.get()[1] + "/\
Sayu_T1_CookieMin=" + Sayu_T1.noUiSlider.get()[0] + "/\
Sayu_T1_CookieMax=" + Sayu_T1.noUiSlider.get()[1] + "/\
Sayu_T2_CookieMin=" + Sayu_T2.noUiSlider.get()[0] + "/\
Sayu_T2_CookieMax=" + Sayu_T2.noUiSlider.get()[1] + "/\
Sayu_T3_CookieMin=" + Sayu_T3.noUiSlider.get()[0] + "/\
Sayu_T3_CookieMax=" + Sayu_T3.noUiSlider.get()[1] + "/\
Kamisato_Ayaka_Ex_CookieMin=" + Kamisato_Ayaka_Ex.noUiSlider.get()[0] + "/\
Kamisato_Ayaka_Ex_CookieMax=" + Kamisato_Ayaka_Ex.noUiSlider.get()[1] + "/\
Kamisato_Ayaka_Pr_CookieMin=" + Kamisato_Ayaka_Pr.noUiSlider.get()[0] + "/\
Kamisato_Ayaka_Pr_CookieMax=" + Kamisato_Ayaka_Pr.noUiSlider.get()[1] + "/\
Kamisato_Ayaka_T1_CookieMin=" + Kamisato_Ayaka_T1.noUiSlider.get()[0] + "/\
Kamisato_Ayaka_T1_CookieMax=" + Kamisato_Ayaka_T1.noUiSlider.get()[1] + "/\
Kamisato_Ayaka_T2_CookieMin=" + Kamisato_Ayaka_T2.noUiSlider.get()[0] + "/\
Kamisato_Ayaka_T2_CookieMax=" + Kamisato_Ayaka_T2.noUiSlider.get()[1] + "/\
Kamisato_Ayaka_T3_CookieMin=" + Kamisato_Ayaka_T3.noUiSlider.get()[0] + "/\
Kamisato_Ayaka_T3_CookieMax=" + Kamisato_Ayaka_T3.noUiSlider.get()[1] + "/\
Kaedehara_Kazuha_Ex_CookieMin=" + Kaedehara_Kazuha_Ex.noUiSlider.get()[0] + "/\
Kaedehara_Kazuha_Ex_CookieMax=" + Kaedehara_Kazuha_Ex.noUiSlider.get()[1] + "/\
Kaedehara_Kazuha_Pr_CookieMin=" + Kaedehara_Kazuha_Pr.noUiSlider.get()[0] + "/\
Kaedehara_Kazuha_Pr_CookieMax=" + Kaedehara_Kazuha_Pr.noUiSlider.get()[1] + "/\
Kaedehara_Kazuha_T1_CookieMin=" + Kaedehara_Kazuha_T1.noUiSlider.get()[0] + "/\
Kaedehara_Kazuha_T1_CookieMax=" + Kaedehara_Kazuha_T1.noUiSlider.get()[1] + "/\
Kaedehara_Kazuha_T2_CookieMin=" + Kaedehara_Kazuha_T2.noUiSlider.get()[0] + "/\
Kaedehara_Kazuha_T2_CookieMax=" + Kaedehara_Kazuha_T2.noUiSlider.get()[1] + "/\
Kaedehara_Kazuha_T3_CookieMin=" + Kaedehara_Kazuha_T3.noUiSlider.get()[0] + "/\
Kaedehara_Kazuha_T3_CookieMax=" + Kaedehara_Kazuha_T3.noUiSlider.get()[1] + "/\
Eula_Ex_CookieMin=" + Eula_Ex.noUiSlider.get()[0] + "/\
Eula_Ex_CookieMax=" + Eula_Ex.noUiSlider.get()[1] + "/\
Eula_Pr_CookieMin=" + Eula_Pr.noUiSlider.get()[0] + "/\
Eula_Pr_CookieMax=" + Eula_Pr.noUiSlider.get()[1] + "/\
Eula_T1_CookieMin=" + Eula_T1.noUiSlider.get()[0] + "/\
Eula_T1_CookieMax=" + Eula_T1.noUiSlider.get()[1] + "/\
Eula_T2_CookieMin=" + Eula_T2.noUiSlider.get()[0] + "/\
Eula_T2_CookieMax=" + Eula_T2.noUiSlider.get()[1] + "/\
Eula_T3_CookieMin=" + Eula_T3.noUiSlider.get()[0] + "/\
Eula_T3_CookieMax=" + Eula_T3.noUiSlider.get()[1] + "/\
Yanfei_Ex_CookieMin=" + Yanfei_Ex.noUiSlider.get()[0] + "/\
Yanfei_Ex_CookieMax=" + Yanfei_Ex.noUiSlider.get()[1] + "/\
Yanfei_Pr_CookieMin=" + Yanfei_Pr.noUiSlider.get()[0] + "/\
Yanfei_Pr_CookieMax=" + Yanfei_Pr.noUiSlider.get()[1] + "/\
Yanfei_T1_CookieMin=" + Yanfei_T1.noUiSlider.get()[0] + "/\
Yanfei_T1_CookieMax=" + Yanfei_T1.noUiSlider.get()[1] + "/\
Yanfei_T2_CookieMin=" + Yanfei_T2.noUiSlider.get()[0] + "/\
Yanfei_T2_CookieMax=" + Yanfei_T2.noUiSlider.get()[1] + "/\
Yanfei_T3_CookieMin=" + Yanfei_T3.noUiSlider.get()[0] + "/\
Yanfei_T3_CookieMax=" + Yanfei_T3.noUiSlider.get()[1] + "/\
Rosaria_Ex_CookieMin=" + Rosaria_Ex.noUiSlider.get()[0] + "/\
Rosaria_Ex_CookieMax=" + Rosaria_Ex.noUiSlider.get()[1] + "/\
Rosaria_Pr_CookieMin=" + Rosaria_Pr.noUiSlider.get()[0] + "/\
Rosaria_Pr_CookieMax=" + Rosaria_Pr.noUiSlider.get()[1] + "/\
Rosaria_T1_CookieMin=" + Rosaria_T1.noUiSlider.get()[0] + "/\
Rosaria_T1_CookieMax=" + Rosaria_T1.noUiSlider.get()[1] + "/\
Rosaria_T2_CookieMin=" + Rosaria_T2.noUiSlider.get()[0] + "/\
Rosaria_T2_CookieMax=" + Rosaria_T2.noUiSlider.get()[1] + "/\
Rosaria_T3_CookieMin=" + Rosaria_T3.noUiSlider.get()[0] + "/\
Rosaria_T3_CookieMax=" + Rosaria_T3.noUiSlider.get()[1] + "/\
; expires=" + now + "; max-age=31536000; path=/; SameSite=Strict;";
document.cookie = "Character3=\
HuTao_Ex_CookieMin=" + HuTao_Ex.noUiSlider.get()[0] + "/\
HuTao_Ex_CookieMax=" + HuTao_Ex.noUiSlider.get()[1] + "/\
HuTao_Pr_CookieMin=" + HuTao_Pr.noUiSlider.get()[0] + "/\
HuTao_Pr_CookieMax=" + HuTao_Pr.noUiSlider.get()[1] + "/\
HuTao_T1_CookieMin=" + HuTao_T1.noUiSlider.get()[0] + "/\
HuTao_T1_CookieMax=" + HuTao_T1.noUiSlider.get()[1] + "/\
HuTao_T2_CookieMin=" + HuTao_T2.noUiSlider.get()[0] + "/\
HuTao_T2_CookieMax=" + HuTao_T2.noUiSlider.get()[1] + "/\
HuTao_T3_CookieMin=" + HuTao_T3.noUiSlider.get()[0] + "/\
HuTao_T3_CookieMax=" + HuTao_T3.noUiSlider.get()[1] + "/\
Xiao_Ex_CookieMin=" + Xiao_Ex.noUiSlider.get()[0] + "/\
Xiao_Ex_CookieMax=" + Xiao_Ex.noUiSlider.get()[1] + "/\
Xiao_Pr_CookieMin=" + Xiao_Pr.noUiSlider.get()[0] + "/\
Xiao_Pr_CookieMax=" + Xiao_Pr.noUiSlider.get()[1] + "/\
Xiao_T1_CookieMin=" + Xiao_T1.noUiSlider.get()[0] + "/\
Xiao_T1_CookieMax=" + Xiao_T1.noUiSlider.get()[1] + "/\
Xiao_T2_CookieMin=" + Xiao_T2.noUiSlider.get()[0] + "/\
Xiao_T2_CookieMax=" + Xiao_T2.noUiSlider.get()[1] + "/\
Xiao_T3_CookieMin=" + Xiao_T3.noUiSlider.get()[0] + "/\
Xiao_T3_CookieMax=" + Xiao_T3.noUiSlider.get()[1] + "/\
Ganyu_Ex_CookieMin=" + Ganyu_Ex.noUiSlider.get()[0] + "/\
Ganyu_Ex_CookieMax=" + Ganyu_Ex.noUiSlider.get()[1] + "/\
Ganyu_Pr_CookieMin=" + Ganyu_Pr.noUiSlider.get()[0] + "/\
Ganyu_Pr_CookieMax=" + Ganyu_Pr.noUiSlider.get()[1] + "/\
Ganyu_T1_CookieMin=" + Ganyu_T1.noUiSlider.get()[0] + "/\
Ganyu_T1_CookieMax=" + Ganyu_T1.noUiSlider.get()[1] + "/\
Ganyu_T2_CookieMin=" + Ganyu_T2.noUiSlider.get()[0] + "/\
Ganyu_T2_CookieMax=" + Ganyu_T2.noUiSlider.get()[1] + "/\
Ganyu_T3_CookieMin=" + Ganyu_T3.noUiSlider.get()[0] + "/\
Ganyu_T3_CookieMax=" + Ganyu_T3.noUiSlider.get()[1] + "/\
Albedo_Ex_CookieMin=" + Albedo_Ex.noUiSlider.get()[0] + "/\
Albedo_Ex_CookieMax=" + Albedo_Ex.noUiSlider.get()[1] + "/\
Albedo_Pr_CookieMin=" + Albedo_Pr.noUiSlider.get()[0] + "/\
Albedo_Pr_CookieMax=" + Albedo_Pr.noUiSlider.get()[1] + "/\
Albedo_T1_CookieMin=" + Albedo_T1.noUiSlider.get()[0] + "/\
Albedo_T1_CookieMax=" + Albedo_T1.noUiSlider.get()[1] + "/\
Albedo_T2_CookieMin=" + Albedo_T2.noUiSlider.get()[0] + "/\
Albedo_T2_CookieMax=" + Albedo_T2.noUiSlider.get()[1] + "/\
Albedo_T3_CookieMin=" + Albedo_T3.noUiSlider.get()[0] + "/\
Albedo_T3_CookieMax=" + Albedo_T3.noUiSlider.get()[1] + "/\
Zhongli_Ex_CookieMin=" + Zhongli_Ex.noUiSlider.get()[0] + "/\
Zhongli_Ex_CookieMax=" + Zhongli_Ex.noUiSlider.get()[1] + "/\
Zhongli_Pr_CookieMin=" + Zhongli_Pr.noUiSlider.get()[0] + "/\
Zhongli_Pr_CookieMax=" + Zhongli_Pr.noUiSlider.get()[1] + "/\
Zhongli_T1_CookieMin=" + Zhongli_T1.noUiSlider.get()[0] + "/\
Zhongli_T1_CookieMax=" + Zhongli_T1.noUiSlider.get()[1] + "/\
Zhongli_T2_CookieMin=" + Zhongli_T2.noUiSlider.get()[0] + "/\
Zhongli_T2_CookieMax=" + Zhongli_T2.noUiSlider.get()[1] + "/\
Zhongli_T3_CookieMin=" + Zhongli_T3.noUiSlider.get()[0] + "/\
Zhongli_T3_CookieMax=" + Zhongli_T3.noUiSlider.get()[1] + "/\
Xinyan_Ex_CookieMin=" + Xinyan_Ex.noUiSlider.get()[0] + "/\
Xinyan_Ex_CookieMax=" + Xinyan_Ex.noUiSlider.get()[1] + "/\
Xinyan_Pr_CookieMin=" + Xinyan_Pr.noUiSlider.get()[0] + "/\
Xinyan_Pr_CookieMax=" + Xinyan_Pr.noUiSlider.get()[1] + "/\
Xinyan_T1_CookieMin=" + Xinyan_T1.noUiSlider.get()[0] + "/\
Xinyan_T1_CookieMax=" + Xinyan_T1.noUiSlider.get()[1] + "/\
Xinyan_T2_CookieMin=" + Xinyan_T2.noUiSlider.get()[0] + "/\
Xinyan_T2_CookieMax=" + Xinyan_T2.noUiSlider.get()[1] + "/\
Xinyan_T3_CookieMin=" + Xinyan_T3.noUiSlider.get()[0] + "/\
Xinyan_T3_CookieMax=" + Xinyan_T3.noUiSlider.get()[1] + "/\
Tartaglia_Ex_CookieMin=" + Tartaglia_Ex.noUiSlider.get()[0] + "/\
Tartaglia_Ex_CookieMax=" + Tartaglia_Ex.noUiSlider.get()[1] + "/\
Tartaglia_Pr_CookieMin=" + Tartaglia_Pr.noUiSlider.get()[0] + "/\
Tartaglia_Pr_CookieMax=" + Tartaglia_Pr.noUiSlider.get()[1] + "/\
Tartaglia_T1_CookieMin=" + Tartaglia_T1.noUiSlider.get()[0] + "/\
Tartaglia_T1_CookieMax=" + Tartaglia_T1.noUiSlider.get()[1] + "/\
Tartaglia_T2_CookieMin=" + Tartaglia_T2.noUiSlider.get()[0] + "/\
Tartaglia_T2_CookieMax=" + Tartaglia_T2.noUiSlider.get()[1] + "/\
Tartaglia_T3_CookieMin=" + Tartaglia_T3.noUiSlider.get()[0] + "/\
Tartaglia_T3_CookieMax=" + Tartaglia_T3.noUiSlider.get()[1] + "/\
Diona_Ex_CookieMin=" + Diona_Ex.noUiSlider.get()[0] + "/\
Diona_Ex_CookieMax=" + Diona_Ex.noUiSlider.get()[1] + "/\
Diona_Pr_CookieMin=" + Diona_Pr.noUiSlider.get()[0] + "/\
Diona_Pr_CookieMax=" + Diona_Pr.noUiSlider.get()[1] + "/\
Diona_T1_CookieMin=" + Diona_T1.noUiSlider.get()[0] + "/\
Diona_T1_CookieMax=" + Diona_T1.noUiSlider.get()[1] + "/\
Diona_T2_CookieMin=" + Diona_T2.noUiSlider.get()[0] + "/\
Diona_T2_CookieMax=" + Diona_T2.noUiSlider.get()[1] + "/\
Diona_T3_CookieMin=" + Diona_T3.noUiSlider.get()[0] + "/\
Diona_T3_CookieMax=" + Diona_T3.noUiSlider.get()[1] + "/\
Klee_Ex_CookieMin=" + Klee_Ex.noUiSlider.get()[0] + "/\
Klee_Ex_CookieMax=" + Klee_Ex.noUiSlider.get()[1] + "/\
Klee_Pr_CookieMin=" + Klee_Pr.noUiSlider.get()[0] + "/\
Klee_Pr_CookieMax=" + Klee_Pr.noUiSlider.get()[1] + "/\
Klee_T1_CookieMin=" + Klee_T1.noUiSlider.get()[0] + "/\
Klee_T1_CookieMax=" + Klee_T1.noUiSlider.get()[1] + "/\
Klee_T2_CookieMin=" + Klee_T2.noUiSlider.get()[0] + "/\
Klee_T2_CookieMax=" + Klee_T2.noUiSlider.get()[1] + "/\
Klee_T3_CookieMin=" + Klee_T3.noUiSlider.get()[0] + "/\
Klee_T3_CookieMax=" + Klee_T3.noUiSlider.get()[1] + "/\
Venti_Ex_CookieMin=" + Venti_Ex.noUiSlider.get()[0] + "/\
Venti_Ex_CookieMax=" + Venti_Ex.noUiSlider.get()[1] + "/\
Venti_Pr_CookieMin=" + Venti_Pr.noUiSlider.get()[0] + "/\
Venti_Pr_CookieMax=" + Venti_Pr.noUiSlider.get()[1] + "/\
Venti_T1_CookieMin=" + Venti_T1.noUiSlider.get()[0] + "/\
Venti_T1_CookieMax=" + Venti_T1.noUiSlider.get()[1] + "/\
Venti_T2_CookieMin=" + Venti_T2.noUiSlider.get()[0] + "/\
Venti_T2_CookieMax=" + Venti_T2.noUiSlider.get()[1] + "/\
Venti_T3_CookieMin=" + Venti_T3.noUiSlider.get()[0] + "/\
Venti_T3_CookieMax=" + Venti_T3.noUiSlider.get()[1] + "/\
; expires=" + now + "; max-age=31536000; path=/; SameSite=Strict;";
document.cookie = "Character2=\
Keqing_Ex_CookieMin=" + Keqing_Ex.noUiSlider.get()[0] + "/\
Keqing_Ex_CookieMax=" + Keqing_Ex.noUiSlider.get()[1] + "/\
Keqing_Pr_CookieMin=" + Keqing_Pr.noUiSlider.get()[0] + "/\
Keqing_Pr_CookieMax=" + Keqing_Pr.noUiSlider.get()[1] + "/\
Keqing_T1_CookieMin=" + Keqing_T1.noUiSlider.get()[0] + "/\
Keqing_T1_CookieMax=" + Keqing_T1.noUiSlider.get()[1] + "/\
Keqing_T2_CookieMin=" + Keqing_T2.noUiSlider.get()[0] + "/\
Keqing_T2_CookieMax=" + Keqing_T2.noUiSlider.get()[1] + "/\
Keqing_T3_CookieMin=" + Keqing_T3.noUiSlider.get()[0] + "/\
Keqing_T3_CookieMax=" + Keqing_T3.noUiSlider.get()[1] + "/\
Mona_Ex_CookieMin=" + Mona_Ex.noUiSlider.get()[0] + "/\
Mona_Ex_CookieMax=" + Mona_Ex.noUiSlider.get()[1] + "/\
Mona_Pr_CookieMin=" + Mona_Pr.noUiSlider.get()[0] + "/\
Mona_Pr_CookieMax=" + Mona_Pr.noUiSlider.get()[1] + "/\
Mona_T1_CookieMin=" + Mona_T1.noUiSlider.get()[0] + "/\
Mona_T1_CookieMax=" + Mona_T1.noUiSlider.get()[1] + "/\
Mona_T2_CookieMin=" + Mona_T2.noUiSlider.get()[0] + "/\
Mona_T2_CookieMax=" + Mona_T2.noUiSlider.get()[1] + "/\
Mona_T3_CookieMin=" + Mona_T3.noUiSlider.get()[0] + "/\
Mona_T3_CookieMax=" + Mona_T3.noUiSlider.get()[1] + "/\
Qiqi_Ex_CookieMin=" + Qiqi_Ex.noUiSlider.get()[0] + "/\
Qiqi_Ex_CookieMax=" + Qiqi_Ex.noUiSlider.get()[1] + "/\
Qiqi_Pr_CookieMin=" + Qiqi_Pr.noUiSlider.get()[0] + "/\
Qiqi_Pr_CookieMax=" + Qiqi_Pr.noUiSlider.get()[1] + "/\
Qiqi_T1_CookieMin=" + Qiqi_T1.noUiSlider.get()[0] + "/\
Qiqi_T1_CookieMax=" + Qiqi_T1.noUiSlider.get()[1] + "/\
Qiqi_T2_CookieMin=" + Qiqi_T2.noUiSlider.get()[0] + "/\
Qiqi_T2_CookieMax=" + Qiqi_T2.noUiSlider.get()[1] + "/\
Qiqi_T3_CookieMin=" + Qiqi_T3.noUiSlider.get()[0] + "/\
Qiqi_T3_CookieMax=" + Qiqi_T3.noUiSlider.get()[1] + "/\
Diluc_Ex_CookieMin=" + Diluc_Ex.noUiSlider.get()[0] + "/\
Diluc_Ex_CookieMax=" + Diluc_Ex.noUiSlider.get()[1] + "/\
Diluc_Pr_CookieMin=" + Diluc_Pr.noUiSlider.get()[0] + "/\
Diluc_Pr_CookieMax=" + Diluc_Pr.noUiSlider.get()[1] + "/\
Diluc_T1_CookieMin=" + Diluc_T1.noUiSlider.get()[0] + "/\
Diluc_T1_CookieMax=" + Diluc_T1.noUiSlider.get()[1] + "/\
Diluc_T2_CookieMin=" + Diluc_T2.noUiSlider.get()[0] + "/\
Diluc_T2_CookieMax=" + Diluc_T2.noUiSlider.get()[1] + "/\
Diluc_T3_CookieMin=" + Diluc_T3.noUiSlider.get()[0] + "/\
Diluc_T3_CookieMax=" + Diluc_T3.noUiSlider.get()[1] + "/\
Jean_Ex_CookieMin=" + Jean_Ex.noUiSlider.get()[0] + "/\
Jean_Ex_CookieMax=" + Jean_Ex.noUiSlider.get()[1] + "/\
Jean_Pr_CookieMin=" + Jean_Pr.noUiSlider.get()[0] + "/\
Jean_Pr_CookieMax=" + Jean_Pr.noUiSlider.get()[1] + "/\
Jean_T1_CookieMin=" + Jean_T1.noUiSlider.get()[0] + "/\
Jean_T1_CookieMax=" + Jean_T1.noUiSlider.get()[1] + "/\
Jean_T2_CookieMin=" + Jean_T2.noUiSlider.get()[0] + "/\
Jean_T2_CookieMax=" + Jean_T2.noUiSlider.get()[1] + "/\
Jean_T3_CookieMin=" + Jean_T3.noUiSlider.get()[0] + "/\
Jean_T3_CookieMax=" + Jean_T3.noUiSlider.get()[1] + "/\
Sucrose_Ex_CookieMin=" + Sucrose_Ex.noUiSlider.get()[0] + "/\
Sucrose_Ex_CookieMax=" + Sucrose_Ex.noUiSlider.get()[1] + "/\
Sucrose_Pr_CookieMin=" + Sucrose_Pr.noUiSlider.get()[0] + "/\
Sucrose_Pr_CookieMax=" + Sucrose_Pr.noUiSlider.get()[1] + "/\
Sucrose_T1_CookieMin=" + Sucrose_T1.noUiSlider.get()[0] + "/\
Sucrose_T1_CookieMax=" + Sucrose_T1.noUiSlider.get()[1] + "/\
Sucrose_T2_CookieMin=" + Sucrose_T2.noUiSlider.get()[0] + "/\
Sucrose_T2_CookieMax=" + Sucrose_T2.noUiSlider.get()[1] + "/\
Sucrose_T3_CookieMin=" + Sucrose_T3.noUiSlider.get()[0] + "/\
Sucrose_T3_CookieMax=" + Sucrose_T3.noUiSlider.get()[1] + "/\
Chongyun_Ex_CookieMin=" + Chongyun_Ex.noUiSlider.get()[0] + "/\
Chongyun_Ex_CookieMax=" + Chongyun_Ex.noUiSlider.get()[1] + "/\
Chongyun_Pr_CookieMin=" + Chongyun_Pr.noUiSlider.get()[0] + "/\
Chongyun_Pr_CookieMax=" + Chongyun_Pr.noUiSlider.get()[1] + "/\
Chongyun_T1_CookieMin=" + Chongyun_T1.noUiSlider.get()[0] + "/\
Chongyun_T1_CookieMax=" + Chongyun_T1.noUiSlider.get()[1] + "/\
Chongyun_T2_CookieMin=" + Chongyun_T2.noUiSlider.get()[0] + "/\
Chongyun_T2_CookieMax=" + Chongyun_T2.noUiSlider.get()[1] + "/\
Chongyun_T3_CookieMin=" + Chongyun_T3.noUiSlider.get()[0] + "/\
Chongyun_T3_CookieMax=" + Chongyun_T3.noUiSlider.get()[1] + "/\
Noelle_Ex_CookieMin=" + Noelle_Ex.noUiSlider.get()[0] + "/\
Noelle_Ex_CookieMax=" + Noelle_Ex.noUiSlider.get()[1] + "/\
Noelle_Pr_CookieMin=" + Noelle_Pr.noUiSlider.get()[0] + "/\
Noelle_Pr_CookieMax=" + Noelle_Pr.noUiSlider.get()[1] + "/\
Noelle_T1_CookieMin=" + Noelle_T1.noUiSlider.get()[0] + "/\
Noelle_T1_CookieMax=" + Noelle_T1.noUiSlider.get()[1] + "/\
Noelle_T2_CookieMin=" + Noelle_T2.noUiSlider.get()[0] + "/\
Noelle_T2_CookieMax=" + Noelle_T2.noUiSlider.get()[1] + "/\
Noelle_T3_CookieMin=" + Noelle_T3.noUiSlider.get()[0] + "/\
Noelle_T3_CookieMax=" + Noelle_T3.noUiSlider.get()[1] + "/\
Bennett_Ex_CookieMin=" + Bennett_Ex.noUiSlider.get()[0] + "/\
Bennett_Ex_CookieMax=" + Bennett_Ex.noUiSlider.get()[1] + "/\
Bennett_Pr_CookieMin=" + Bennett_Pr.noUiSlider.get()[0] + "/\
Bennett_Pr_CookieMax=" + Bennett_Pr.noUiSlider.get()[1] + "/\
Bennett_T1_CookieMin=" + Bennett_T1.noUiSlider.get()[0] + "/\
Bennett_T1_CookieMax=" + Bennett_T1.noUiSlider.get()[1] + "/\
Bennett_T2_CookieMin=" + Bennett_T2.noUiSlider.get()[0] + "/\
Bennett_T2_CookieMax=" + Bennett_T2.noUiSlider.get()[1] + "/\
Bennett_T3_CookieMin=" + Bennett_T3.noUiSlider.get()[0] + "/\
Bennett_T3_CookieMax=" + Bennett_T3.noUiSlider.get()[1] + "/\
; expires=" + now + "; max-age=31536000; path=/; SameSite=Strict;";
document.cookie = "Character1=\
Fischl_Ex_CookieMin=" + Fischl_Ex.noUiSlider.get()[0] + "/\
Fischl_Ex_CookieMax=" + Fischl_Ex.noUiSlider.get()[1] + "/\
Fischl_Pr_CookieMin=" + Fischl_Pr.noUiSlider.get()[0] + "/\
Fischl_Pr_CookieMax=" + Fischl_Pr.noUiSlider.get()[1] + "/\
Fischl_T1_CookieMin=" + Fischl_T1.noUiSlider.get()[0] + "/\
Fischl_T1_CookieMax=" + Fischl_T1.noUiSlider.get()[1] + "/\
Fischl_T2_CookieMin=" + Fischl_T2.noUiSlider.get()[0] + "/\
Fischl_T2_CookieMax=" + Fischl_T2.noUiSlider.get()[1] + "/\
Fischl_T3_CookieMin=" + Fischl_T3.noUiSlider.get()[0] + "/\
Fischl_T3_CookieMax=" + Fischl_T3.noUiSlider.get()[1] + "/\
Ningguang_Ex_CookieMin=" + Ningguang_Ex.noUiSlider.get()[0] + "/\
Ningguang_Ex_CookieMax=" + Ningguang_Ex.noUiSlider.get()[1] + "/\
Ningguang_Pr_CookieMin=" + Ningguang_Pr.noUiSlider.get()[0] + "/\
Ningguang_Pr_CookieMax=" + Ningguang_Pr.noUiSlider.get()[1] + "/\
Ningguang_T1_CookieMin=" + Ningguang_T1.noUiSlider.get()[0] + "/\
Ningguang_T1_CookieMax=" + Ningguang_T1.noUiSlider.get()[1] + "/\
Ningguang_T2_CookieMin=" + Ningguang_T2.noUiSlider.get()[0] + "/\
Ningguang_T2_CookieMax=" + Ningguang_T2.noUiSlider.get()[1] + "/\
Ningguang_T3_CookieMin=" + Ningguang_T3.noUiSlider.get()[0] + "/\
Ningguang_T3_CookieMax=" + Ningguang_T3.noUiSlider.get()[1] + "/\
Xingqiu_Ex_CookieMin=" + Xingqiu_Ex.noUiSlider.get()[0] + "/\
Xingqiu_Ex_CookieMax=" + Xingqiu_Ex.noUiSlider.get()[1] + "/\
Xingqiu_Pr_CookieMin=" + Xingqiu_Pr.noUiSlider.get()[0] + "/\
Xingqiu_Pr_CookieMax=" + Xingqiu_Pr.noUiSlider.get()[1] + "/\
Xingqiu_T1_CookieMin=" + Xingqiu_T1.noUiSlider.get()[0] + "/\
Xingqiu_T1_CookieMax=" + Xingqiu_T1.noUiSlider.get()[1] + "/\
Xingqiu_T2_CookieMin=" + Xingqiu_T2.noUiSlider.get()[0] + "/\
Xingqiu_T2_CookieMax=" + Xingqiu_T2.noUiSlider.get()[1] + "/\
Xingqiu_T3_CookieMin=" + Xingqiu_T3.noUiSlider.get()[0] + "/\
Xingqiu_T3_CookieMax=" + Xingqiu_T3.noUiSlider.get()[1] + "/\
Beidou_Ex_CookieMin=" + Beidou_Ex.noUiSlider.get()[0] + "/\
Beidou_Ex_CookieMax=" + Beidou_Ex.noUiSlider.get()[1] + "/\
Beidou_Pr_CookieMin=" + Beidou_Pr.noUiSlider.get()[0] + "/\
Beidou_Pr_CookieMax=" + Beidou_Pr.noUiSlider.get()[1] + "/\
Beidou_T1_CookieMin=" + Beidou_T1.noUiSlider.get()[0] + "/\
Beidou_T1_CookieMax=" + Beidou_T1.noUiSlider.get()[1] + "/\
Beidou_T2_CookieMin=" + Beidou_T2.noUiSlider.get()[0] + "/\
Beidou_T2_CookieMax=" + Beidou_T2.noUiSlider.get()[1] + "/\
Beidou_T3_CookieMin=" + Beidou_T3.noUiSlider.get()[0] + "/\
Beidou_T3_CookieMax=" + Beidou_T3.noUiSlider.get()[1] + "/\
Xiangling_Ex_CookieMin=" + Xiangling_Ex.noUiSlider.get()[0] + "/\
Xiangling_Ex_CookieMax=" + Xiangling_Ex.noUiSlider.get()[1] + "/\
Xiangling_Pr_CookieMin=" + Xiangling_Pr.noUiSlider.get()[0] + "/\
Xiangling_Pr_CookieMax=" + Xiangling_Pr.noUiSlider.get()[1] + "/\
Xiangling_T1_CookieMin=" + Xiangling_T1.noUiSlider.get()[0] + "/\
Xiangling_T1_CookieMax=" + Xiangling_T1.noUiSlider.get()[1] + "/\
Xiangling_T2_CookieMin=" + Xiangling_T2.noUiSlider.get()[0] + "/\
Xiangling_T2_CookieMax=" + Xiangling_T2.noUiSlider.get()[1] + "/\
Xiangling_T3_CookieMin=" + Xiangling_T3.noUiSlider.get()[0] + "/\
Xiangling_T3_CookieMax=" + Xiangling_T3.noUiSlider.get()[1] + "/\
Razor_Ex_CookieMin=" + Razor_Ex.noUiSlider.get()[0] + "/\
Razor_Ex_CookieMax=" + Razor_Ex.noUiSlider.get()[1] + "/\
Razor_Pr_CookieMin=" + Razor_Pr.noUiSlider.get()[0] + "/\
Razor_Pr_CookieMax=" + Razor_Pr.noUiSlider.get()[1] + "/\
Razor_T1_CookieMin=" + Razor_T1.noUiSlider.get()[0] + "/\
Razor_T1_CookieMax=" + Razor_T1.noUiSlider.get()[1] + "/\
Razor_T2_CookieMin=" + Razor_T2.noUiSlider.get()[0] + "/\
Razor_T2_CookieMax=" + Razor_T2.noUiSlider.get()[1] + "/\
Razor_T3_CookieMin=" + Razor_T3.noUiSlider.get()[0] + "/\
Razor_T3_CookieMax=" + Razor_T3.noUiSlider.get()[1] + "/\
Barbara_Ex_CookieMin=" + Barbara_Ex.noUiSlider.get()[0] + "/\
Barbara_Ex_CookieMax=" + Barbara_Ex.noUiSlider.get()[1] + "/\
Barbara_Pr_CookieMin=" + Barbara_Pr.noUiSlider.get()[0] + "/\
Barbara_Pr_CookieMax=" + Barbara_Pr.noUiSlider.get()[1] + "/\
Barbara_T1_CookieMin=" + Barbara_T1.noUiSlider.get()[0] + "/\
Barbara_T1_CookieMax=" + Barbara_T1.noUiSlider.get()[1] + "/\
Barbara_T2_CookieMin=" + Barbara_T2.noUiSlider.get()[0] + "/\
Barbara_T2_CookieMax=" + Barbara_T2.noUiSlider.get()[1] + "/\
Barbara_T3_CookieMin=" + Barbara_T3.noUiSlider.get()[0] + "/\
Barbara_T3_CookieMax=" + Barbara_T3.noUiSlider.get()[1] + "/\
Lisa_Ex_CookieMin=" + Lisa_Ex.noUiSlider.get()[0] + "/\
Lisa_Ex_CookieMax=" + Lisa_Ex.noUiSlider.get()[1] + "/\
Lisa_Pr_CookieMin=" + Lisa_Pr.noUiSlider.get()[0] + "/\
Lisa_Pr_CookieMax=" + Lisa_Pr.noUiSlider.get()[1] + "/\
Lisa_T1_CookieMin=" + Lisa_T1.noUiSlider.get()[0] + "/\
Lisa_T1_CookieMax=" + Lisa_T1.noUiSlider.get()[1] + "/\
Lisa_T2_CookieMin=" + Lisa_T2.noUiSlider.get()[0] + "/\
Lisa_T2_CookieMax=" + Lisa_T2.noUiSlider.get()[1] + "/\
Lisa_T3_CookieMin=" + Lisa_T3.noUiSlider.get()[0] + "/\
Lisa_T3_CookieMax=" + Lisa_T3.noUiSlider.get()[1] + "/\
Kaeya_Ex_CookieMin=" + Kaeya_Ex.noUiSlider.get()[0] + "/\
Kaeya_Ex_CookieMax=" + Kaeya_Ex.noUiSlider.get()[1] + "/\
Kaeya_Pr_CookieMin=" + Kaeya_Pr.noUiSlider.get()[0] + "/\
Kaeya_Pr_CookieMax=" + Kaeya_Pr.noUiSlider.get()[1] + "/\
Kaeya_T1_CookieMin=" + Kaeya_T1.noUiSlider.get()[0] + "/\
Kaeya_T1_CookieMax=" + Kaeya_T1.noUiSlider.get()[1] + "/\
Kaeya_T2_CookieMin=" + Kaeya_T2.noUiSlider.get()[0] + "/\
Kaeya_T2_CookieMax=" + Kaeya_T2.noUiSlider.get()[1] + "/\
Kaeya_T3_CookieMin=" + Kaeya_T3.noUiSlider.get()[0] + "/\
Kaeya_T3_CookieMax=" + Kaeya_T3.noUiSlider.get()[1] + "/\
Amber_Ex_CookieMin=" + Amber_Ex.noUiSlider.get()[0] + "/\
Amber_Ex_CookieMax=" + Amber_Ex.noUiSlider.get()[1] + "/\
Amber_Pr_CookieMin=" + Amber_Pr.noUiSlider.get()[0] + "/\
Amber_Pr_CookieMax=" + Amber_Pr.noUiSlider.get()[1] + "/\
Amber_T1_CookieMin=" + Amber_T1.noUiSlider.get()[0] + "/\
Amber_T1_CookieMax=" + Amber_T1.noUiSlider.get()[1] + "/\
Amber_T2_CookieMin=" + Amber_T2.noUiSlider.get()[0] + "/\
Amber_T2_CookieMax=" + Amber_T2.noUiSlider.get()[1] + "/\
Amber_T3_CookieMin=" + Amber_T3.noUiSlider.get()[0] + "/\
Amber_T3_CookieMax=" + Amber_T3.noUiSlider.get()[1] + "/\
Aloy_Ex_CookieMin=" + Aloy_Ex.noUiSlider.get()[0] + "/\
Aloy_Ex_CookieMax=" + Aloy_Ex.noUiSlider.get()[1] + "/\
Aloy_Pr_CookieMin=" + Aloy_Pr.noUiSlider.get()[0] + "/\
Aloy_Pr_CookieMax=" + Aloy_Pr.noUiSlider.get()[1] + "/\
Aloy_T1_CookieMin=" + Aloy_T1.noUiSlider.get()[0] + "/\
Aloy_T1_CookieMax=" + Aloy_T1.noUiSlider.get()[1] + "/\
Aloy_T2_CookieMin=" + Aloy_T2.noUiSlider.get()[0] + "/\
Aloy_T2_CookieMax=" + Aloy_T2.noUiSlider.get()[1] + "/\
Aloy_T3_CookieMin=" + Aloy_T3.noUiSlider.get()[0] + "/\
Aloy_T3_CookieMax=" + Aloy_T3.noUiSlider.get()[1] + "/\
; expires=" + now + "; max-age=31536000; path=/; SameSite=Strict;";

document.cookie = "Inventory1=\
Heros_Wit_Cookie=" + document.getElementById("Heros_Wit").value + "/\
Adventurers_Experience_Cookie=" + document.getElementById("Adventurers_Experience").value + "/\
Wanderers_Advice_Cookie=" + document.getElementById("Wanderers_Advice").value + "/\
Mora_Cookie=" + document.getElementById("Mora").value + "/\
Slime_Concentrate_Cookie=" + document.getElementById("Slime_Concentrate").value + "/\
Slime_Secretions_Cookie=" + document.getElementById("Slime_Secretions").value + "/\
Slime_Condensate_Cookie=" + document.getElementById("Slime_Condensate").value + "/\
Ominous_Mask_Cookie=" + document.getElementById("Ominous_Mask").value + "/\
Stained_Mask_Cookie=" + document.getElementById("Stained_Mask").value + "/\
Damaged_Mask_Cookie=" + document.getElementById("Damaged_Mask").value + "/\
Forbidden_Curse_Scroll_Cookie=" + document.getElementById("Forbidden_Curse_Scroll").value + "/\
Sealed_Scroll_Cookie=" + document.getElementById("Sealed_Scroll").value + "/\
Divining_Scroll_Cookie=" + document.getElementById("Divining_Scroll").value + "/\
Weathered_Arrowhead_Cookie=" + document.getElementById("Weathered_Arrowhead").value + "/\
Sharp_Arrowhead_Cookie=" + document.getElementById("Sharp_Arrowhead").value + "/\
Firm_Arrowhead_Cookie=" + document.getElementById("Firm_Arrowhead").value + "/\
Lieutenants_Insignia_Cookie=" + document.getElementById("Lieutenants_Insignia").value + "/\
Sergeants_Insignia_Cookie=" + document.getElementById("Sergeants_Insignia").value + "/\
Recruits_Insignia_Cookie=" + document.getElementById("Recruits_Insignia").value + "/\
Golden_Raven_Insignia_Cookie=" + document.getElementById("Golden_Raven_Insignia").value + "/\
Silver_Raven_Insignia_Cookie=" + document.getElementById("Silver_Raven_Insignia").value + "/\
Treasure_Hoarder_Insignia_Cookie=" + document.getElementById("Treasure_Hoarder_Insignia").value + "/\
Energy_Nectar_Cookie=" + document.getElementById("Energy_Nectar").value + "/\
Shimmering_Nectar_Cookie=" + document.getElementById("Shimmering_Nectar").value + "/\
Whopperflower_Nectar_Cookie=" + document.getElementById("Whopperflower_Nectar").value + "/\
Famed_Handguard_Cookie=" + document.getElementById("Famed_Handguard").value + "/\
Kageuchi_Handguard_Cookie=" + document.getElementById("Kageuchi_Handguard").value + "/\
Old_Handguard_Cookie=" + document.getElementById("Old_Handguard").value + "/\
Spectral_Nucleus_Cookie=" + document.getElementById("Spectral_Nucleus").value + "/\
Spectral_Heart_Cookie=" + document.getElementById("Spectral_Heart").value + "/\
Spectral_Husk_Cookie=" + document.getElementById("Spectral_Husk").value + "/\
Dvalins_Plume_Cookie=" + document.getElementById("Dvalins_Plume").value + "/\
Dvalins_Claw_Cookie=" + document.getElementById("Dvalins_Claw").value + "/\
Dvalins_Sigh_Cookie=" + document.getElementById("Dvalins_Sigh").value + "/\
Tail_of_Boreas_Cookie=" + document.getElementById("Tail_of_Boreas").value + "/\
Ring_of_Boreas_Cookie=" + document.getElementById("Ring_of_Boreas").value + "/\
Spirit_Locket_of_Boreas_Cookie=" + document.getElementById("Spirit_Locket_of_Boreas").value + "/\
Tusk_of_Monoceros_Caeli_Cookie=" + document.getElementById("Tusk_of_Monoceros_Caeli").value + "/\
Shard_of_a_Foul_Legacy_Cookie=" + document.getElementById("Shard_of_a_Foul_Legacy").value + "/\
Shadow_of_the_Warrior_Cookie=" + document.getElementById("Shadow_of_the_Warrior").value + "/\
Dragon_Lords_Crown_Cookie=" + document.getElementById("Dragon_Lords_Crown").value + "/\
Bloodjade_Branch_Cookie=" + document.getElementById("Bloodjade_Branch").value + "/\
Gilded_Scale_Cookie=" + document.getElementById("Gilded_Scale").value + "/\
Molten_Moment_Cookie=" + document.getElementById("Molten_Moment").value + "/\
Hellfire_Butterfly_Cookie=" + document.getElementById("Hellfire_Butterfly").value + "/\
Ashen_Heart_Cookie=" + document.getElementById("Ashen_Heart").value + "/\
Hurricane_Seed_Cookie=" + document.getElementById("Hurricane_Seed").value + "/\
Lightning_Prism_Cookie=" + document.getElementById("Lightning_Prism").value + "/\
Basalt_Pillar_Cookie=" + document.getElementById("Basalt_Pillar").value + "/\
Hoarfrost_Core_Cookie=" + document.getElementById("Hoarfrost_Core").value + "/\
Everflame_Seed_Cookie=" + document.getElementById("Everflame_Seed").value + "/\
Cleansing_Heart_Cookie=" + document.getElementById("Cleansing_Heart").value + "/\
Juvenile_Jade_Cookie=" + document.getElementById("Juvenile_Jade").value + "/\
Crystalline_Bloom_Cookie=" + document.getElementById("Crystalline_Bloom").value + "/\
Marionette_Core_Cookie=" + document.getElementById("Marionette_Core").value + "/\
Perpetual_Heart_Cookie=" + document.getElementById("Perpetual_Heart").value + "/\
Smoldering_Pearl_Cookie=" + document.getElementById("Smoldering_Pearl").value + "/\
Dew_of_Repudiation_Cookie=" + document.getElementById("Dew_of_Repudiation").value + "/\
Storm_Beads_Cookie=" + document.getElementById("Storm_Beads").value + "/\
; expires=" + now + "; max-age=31536000; path=/; SameSite=Strict;";

document.cookie = "Inventory2=\
Agate_Gemstone_Cookie=" + document.getElementById("Agate_Gemstone").value + "/\
Agate_Chunk_Cookie=" + document.getElementById("Agate_Chunk").value + "/\
Agate_Fragment_Cookie=" + document.getElementById("Agate_Fragment").value + "/\
Agate_Sliver_Cookie=" + document.getElementById("Agate_Sliver").value + "/\
Lazurite_Gemstone_Cookie=" + document.getElementById("Lazurite_Gemstone").value + "/\
Lazurite_Chunk_Cookie=" + document.getElementById("Lazurite_Chunk").value + "/\
Lazurite_Fragment_Cookie=" + document.getElementById("Lazurite_Fragment").value + "/\
Lazurite_Sliver_Cookie=" + document.getElementById("Lazurite_Sliver").value + "/\
Amethyst_Gemstone_Cookie=" + document.getElementById("Amethyst_Gemstone").value + "/\
Amethyst_Chunk_Cookie=" + document.getElementById("Amethyst_Chunk").value + "/\
Amethyst_Fragment_Cookie=" + document.getElementById("Amethyst_Fragment").value + "/\
Amethyst_Sliver_Cookie=" + document.getElementById("Amethyst_Sliver").value + "/\
Turquoise_Gemstone_Cookie=" + document.getElementById("Turquoise_Gemstone").value + "/\
Turquoise_Chunk_Cookie=" + document.getElementById("Turquoise_Chunk").value + "/\
Turquoise_Fragment_Cookie=" + document.getElementById("Turquoise_Fragment").value + "/\
Turquoise_Sliver_Cookie=" + document.getElementById("Turquoise_Sliver").value + "/\
Jade_Gemstone_Cookie=" + document.getElementById("Jade_Gemstone").value + "/\
Jade_Chunk_Cookie=" + document.getElementById("Jade_Chunk").value + "/\
Jade_Fragment_Cookie=" + document.getElementById("Jade_Fragment").value + "/\
Jade_Sliver_Cookie=" + document.getElementById("Jade_Sliver").value + "/\
Topaz_Gemstone_Cookie=" + document.getElementById("Topaz_Gemstone").value + "/\
Topaz_Chunk_Cookie=" + document.getElementById("Topaz_Chunk").value + "/\
Topaz_Fragment_Cookie=" + document.getElementById("Topaz_Fragment").value + "/\
Topaz_Sliver_Cookie=" + document.getElementById("Topaz_Sliver").value + "/\
Emerald_Gemstone_Cookie=" + document.getElementById("Emerald_Gemstone").value + "/\
Emerald_Chunk_Cookie=" + document.getElementById("Emerald_Chunk").value + "/\
Emerald_Fragment_Cookie=" + document.getElementById("Emerald_Fragment").value + "/\
Emerald_Sliver_Cookie=" + document.getElementById("Emerald_Sliver").value + "/\
Philosophies_of_Freedom_Cookie=" + document.getElementById("Philosophies_of_Freedom").value + "/\
Guide_to_Freedom_Cookie=" + document.getElementById("Guide_to_Freedom").value + "/\
Teachings_of_Freedom_Cookie=" + document.getElementById("Teachings_of_Freedom").value + "/\
Philosophies_of_Ballad_Cookie=" + document.getElementById("Philosophies_of_Ballad").value + "/\
Guide_to_Ballad_Cookie=" + document.getElementById("Guide_to_Ballad").value + "/\
Teachings_of_Ballad_Cookie=" + document.getElementById("Teachings_of_Ballad").value + "/\
Philosophies_of_Resistance_Cookie=" + document.getElementById("Philosophies_of_Resistance").value + "/\
Guide_to_Resistance_Cookie=" + document.getElementById("Guide_to_Resistance").value + "/\
Teachings_of_Resistance_Cookie=" + document.getElementById("Teachings_of_Resistance").value + "/\
Philosophies_of_Prosperity_Cookie=" + document.getElementById("Philosophies_of_Prosperity").value + "/\
Guide_to_Prosperity_Cookie=" + document.getElementById("Guide_to_Prosperity").value + "/\
Teachings_of_Prosperity_Cookie=" + document.getElementById("Teachings_of_Prosperity").value + "/\
Philosophies_of_Diligence_Cookie=" + document.getElementById("Philosophies_of_Diligence").value + "/\
Guide_to_Diligence_Cookie=" + document.getElementById("Guide_to_Diligence").value + "/\
Teachings_of_Diligence_Cookie=" + document.getElementById("Teachings_of_Diligence").value + "/\
Philosophies_of_Gold_Cookie=" + document.getElementById("Philosophies_of_Gold").value + "/\
Guide_to_Gold_Cookie=" + document.getElementById("Guide_to_Gold").value + "/\
Teachings_of_Gold_Cookie=" + document.getElementById("Teachings_of_Gold").value + "/\
Philosophies_of_Transience_Cookie=" + document.getElementById("Philosophies_of_Transience").value + "/\
Guide_to_Transience_Cookie=" + document.getElementById("Guide_to_Transience").value + "/\
Teachings_of_Transience_Cookie=" + document.getElementById("Teachings_of_Transience").value + "/\
Philosophies_of_Elegance_Cookie=" + document.getElementById("Philosophies_of_Elegance").value + "/\
Guide_to_Elegance_Cookie=" + document.getElementById("Guide_to_Elegance").value + "/\
Teachings_of_Elegance_Cookie=" + document.getElementById("Teachings_of_Elegance").value + "/\
Philosophies_of_Light_Cookie=" + document.getElementById("Philosophies_of_Light").value + "/\
Guide_to_Light_Cookie=" + document.getElementById("Guide_to_Light").value + "/\
Teachings_of_Light_Cookie=" + document.getElementById("Teachings_of_Light").value + "/\
Crown_of_Insight_Cookie=" + document.getElementById("Crown_of_Insight").value + "/\
; expires=" + now + "; max-age=31536000; path=/; SameSite=Strict;";

document.cookie = "Inventory3=\
Calla_Lily_Cookie=" + document.getElementById("Calla_Lily").value + "/\
Wolfhook_Cookie=" + document.getElementById("Wolfhook").value + "/\
Valberry_Cookie=" + document.getElementById("Valberry").value + "/\
Cecilia_Cookie=" + document.getElementById("Cecilia").value + "/\
Windwheel_Aster_Cookie=" + document.getElementById("Windwheel_Aster").value + "/\
Philanemo_Mushroom_Cookie=" + document.getElementById("Philanemo_Mushroom").value + "/\
Jueyun_Chili_Cookie=" + document.getElementById("Jueyun_Chili").value + "/\
Noctilucous_Jade_Cookie=" + document.getElementById("Noctilucous_Jade").value + "/\
Silk_Flower_Cookie=" + document.getElementById("Silk_Flower").value + "/\
Glaze_Lily_Cookie=" + document.getElementById("Glaze_Lily").value + "/\
Qingxin_Cookie=" + document.getElementById("Qingxin").value + "/\
Starconch_Cookie=" + document.getElementById("Starconch").value + "/\
Violetgrass_Cookie=" + document.getElementById("Violetgrass").value + "/\
Small_Lamp_Grass_Cookie=" + document.getElementById("Small_Lamp_Grass").value + "/\
Dandelion_Seed_Cookie=" + document.getElementById("Dandelion_Seed").value + "/\
Cor_Lapis_Cookie=" + document.getElementById("Cor_Lapis").value + "/\
Onikabuto_Cookie=" + document.getElementById("Onikabuto").value + "/\
Sakura_Bloom_Cookie=" + document.getElementById("Sakura_Bloom").value + "/\
Crystal_Marrow_Cookie=" + document.getElementById("Crystal_Marrow").value + "/\
Dendrobium_Cookie=" + document.getElementById("Dendrobium").value + "/\
Naku_Weed_Cookie=" + document.getElementById("Naku_Weed").value + "/\
Sea_Ganoderma_Cookie=" + document.getElementById("Sea_Ganoderma").value + "/\
Sango_Pearl_Cookie=" + document.getElementById("Sango_Pearl").value + "/\
Amakumo_Fruit_Cookie=" + document.getElementById("Amakumo_Fruit").value + "/\
Fluorescent_Fungus_Cookie=" + document.getElementById("Fluorescent_Fungus").value + "/\
; expires=" + now + "; max-age=31536000; path=/; SameSite=Strict;";
}

document.getElementById('Save').onclick = function changeContent() {
  Save();
  M.toast({
    html: 'Saved',
    displayLength: '1000'
  })
}


// ロード系
function CharacterLoad() {
  var Character_Cookies = document.cookie.replace(/.*?;?\s?Character\d=(.*);\sCharacter\d=(.*);\sCharacter\d=(.*);\sCharacter\d=(.*)\//i, '$1$2$3$4');
  var Character_CookieLoad = Character_Cookies.split( '/' )
  for (var i = 0; i < Character_CookieLoad.length; i++) {
    var Character_CookieLoading = Character_CookieLoad[i].split( '=' );
    var Character_CookieName = Character_CookieLoading[0];
    window[Character_CookieName] = Character_CookieLoading[1];
  }
  try{Sangonomiya_Kokomi_Ex.noUiSlider.set([Sangonomiya_Kokomi_Ex_CookieMin, Sangonomiya_Kokomi_Ex_CookieMax]);} catch(e){}
  try{Sangonomiya_Kokomi_Ex.noUiSlider.set([Sangonomiya_Kokomi_Ex_CookieMin, Sangonomiya_Kokomi_Ex_CookieMax]);} catch(e){}
  try{Sangonomiya_Kokomi_Pr.noUiSlider.set([Sangonomiya_Kokomi_Pr_CookieMin, Sangonomiya_Kokomi_Pr_CookieMax]);} catch(e){}
  try{Sangonomiya_Kokomi_T1.noUiSlider.set([Sangonomiya_Kokomi_T1_CookieMin, Sangonomiya_Kokomi_T1_CookieMax]);} catch(e){}
  try{Sangonomiya_Kokomi_T2.noUiSlider.set([Sangonomiya_Kokomi_T2_CookieMin, Sangonomiya_Kokomi_T2_CookieMax]);} catch(e){}
  try{Sangonomiya_Kokomi_T3.noUiSlider.set([Sangonomiya_Kokomi_T3_CookieMin, Sangonomiya_Kokomi_T3_CookieMax]);} catch(e){}
  try{Raiden_Shogun_Ex.noUiSlider.set([Raiden_Shogun_Ex_CookieMin, Raiden_Shogun_Ex_CookieMax]);} catch(e){}
  try{Raiden_Shogun_Pr.noUiSlider.set([Raiden_Shogun_Pr_CookieMin, Raiden_Shogun_Pr_CookieMax]);} catch(e){}
  try{Raiden_Shogun_T1.noUiSlider.set([Raiden_Shogun_T1_CookieMin, Raiden_Shogun_T1_CookieMax]);} catch(e){}
  try{Raiden_Shogun_T2.noUiSlider.set([Raiden_Shogun_T2_CookieMin, Raiden_Shogun_T2_CookieMax]);} catch(e){}
  try{Raiden_Shogun_T3.noUiSlider.set([Raiden_Shogun_T3_CookieMin, Raiden_Shogun_T3_CookieMax]);} catch(e){}
  try{Kujou_Sara_Ex.noUiSlider.set([Kujou_Sara_Ex_CookieMin, Kujou_Sara_Ex_CookieMax]);} catch(e){}
  try{Kujou_Sara_Pr.noUiSlider.set([Kujou_Sara_Pr_CookieMin, Kujou_Sara_Pr_CookieMax]);} catch(e){}
  try{Kujou_Sara_T1.noUiSlider.set([Kujou_Sara_T1_CookieMin, Kujou_Sara_T1_CookieMax]);} catch(e){}
  try{Kujou_Sara_T2.noUiSlider.set([Kujou_Sara_T2_CookieMin, Kujou_Sara_T2_CookieMax]);} catch(e){}
  try{Kujou_Sara_T3.noUiSlider.set([Kujou_Sara_T3_CookieMin, Kujou_Sara_T3_CookieMax]);} catch(e){}
  try{Yoimiya_Ex.noUiSlider.set([Yoimiya_Ex_CookieMin, Yoimiya_Ex_CookieMax]);} catch(e){}
  try{Yoimiya_Pr.noUiSlider.set([Yoimiya_Pr_CookieMin, Yoimiya_Pr_CookieMax]);} catch(e){}
  try{Yoimiya_T1.noUiSlider.set([Yoimiya_T1_CookieMin, Yoimiya_T1_CookieMax]);} catch(e){}
  try{Yoimiya_T2.noUiSlider.set([Yoimiya_T2_CookieMin, Yoimiya_T2_CookieMax]);} catch(e){}
  try{Yoimiya_T3.noUiSlider.set([Yoimiya_T3_CookieMin, Yoimiya_T3_CookieMax]);} catch(e){}
  try{Sayu_Ex.noUiSlider.set([Sayu_Ex_CookieMin, Sayu_Ex_CookieMax]);} catch(e){}
  try{Sayu_Pr.noUiSlider.set([Sayu_Pr_CookieMin, Sayu_Pr_CookieMax]);} catch(e){}
  try{Sayu_T1.noUiSlider.set([Sayu_T1_CookieMin, Sayu_T1_CookieMax]);} catch(e){}
  try{Sayu_T2.noUiSlider.set([Sayu_T2_CookieMin, Sayu_T2_CookieMax]);} catch(e){}
  try{Sayu_T3.noUiSlider.set([Sayu_T3_CookieMin, Sayu_T3_CookieMax]);} catch(e){}
  try{Kamisato_Ayaka_Ex.noUiSlider.set([Kamisato_Ayaka_Ex_CookieMin, Kamisato_Ayaka_Ex_CookieMax]);} catch(e){}
  try{Kamisato_Ayaka_Pr.noUiSlider.set([Kamisato_Ayaka_Pr_CookieMin, Kamisato_Ayaka_Pr_CookieMax]);} catch(e){}
  try{Kamisato_Ayaka_T1.noUiSlider.set([Kamisato_Ayaka_T1_CookieMin, Kamisato_Ayaka_T1_CookieMax]);} catch(e){}
  try{Kamisato_Ayaka_T2.noUiSlider.set([Kamisato_Ayaka_T2_CookieMin, Kamisato_Ayaka_T2_CookieMax]);} catch(e){}
  try{Kamisato_Ayaka_T3.noUiSlider.set([Kamisato_Ayaka_T3_CookieMin, Kamisato_Ayaka_T3_CookieMax]);} catch(e){}
  try{Kaedehara_Kazuha_Ex.noUiSlider.set([Kaedehara_Kazuha_Ex_CookieMin, Kaedehara_Kazuha_Ex_CookieMax]);} catch(e){}
  try{Kaedehara_Kazuha_Pr.noUiSlider.set([Kaedehara_Kazuha_Pr_CookieMin, Kaedehara_Kazuha_Pr_CookieMax]);} catch(e){}
  try{Kaedehara_Kazuha_T1.noUiSlider.set([Kaedehara_Kazuha_T1_CookieMin, Kaedehara_Kazuha_T1_CookieMax]);} catch(e){}
  try{Kaedehara_Kazuha_T2.noUiSlider.set([Kaedehara_Kazuha_T2_CookieMin, Kaedehara_Kazuha_T2_CookieMax]);} catch(e){}
  try{Kaedehara_Kazuha_T3.noUiSlider.set([Kaedehara_Kazuha_T3_CookieMin, Kaedehara_Kazuha_T3_CookieMax]);} catch(e){}
  try{Eula_Ex.noUiSlider.set([Eula_Ex_CookieMin, Eula_Ex_CookieMax]);} catch(e){}
  try{Eula_Pr.noUiSlider.set([Eula_Pr_CookieMin, Eula_Pr_CookieMax]);} catch(e){}
  try{Eula_T1.noUiSlider.set([Eula_T1_CookieMin, Eula_T1_CookieMax]);} catch(e){}
  try{Eula_T2.noUiSlider.set([Eula_T2_CookieMin, Eula_T2_CookieMax]);} catch(e){}
  try{Eula_T3.noUiSlider.set([Eula_T3_CookieMin, Eula_T3_CookieMax]);} catch(e){}
  try{Yanfei_Ex.noUiSlider.set([Yanfei_Ex_CookieMin, Yanfei_Ex_CookieMax]);} catch(e){}
  try{Yanfei_Pr.noUiSlider.set([Yanfei_Pr_CookieMin, Yanfei_Pr_CookieMax]);} catch(e){}
  try{Yanfei_T1.noUiSlider.set([Yanfei_T1_CookieMin, Yanfei_T1_CookieMax]);} catch(e){}
  try{Yanfei_T2.noUiSlider.set([Yanfei_T2_CookieMin, Yanfei_T2_CookieMax]);} catch(e){}
  try{Yanfei_T3.noUiSlider.set([Yanfei_T3_CookieMin, Yanfei_T3_CookieMax]);} catch(e){}
  try{Rosaria_Ex.noUiSlider.set([Rosaria_Ex_CookieMin, Rosaria_Ex_CookieMax]);} catch(e){}
  try{Rosaria_Pr.noUiSlider.set([Rosaria_Pr_CookieMin, Rosaria_Pr_CookieMax]);} catch(e){}
  try{Rosaria_T1.noUiSlider.set([Rosaria_T1_CookieMin, Rosaria_T1_CookieMax]);} catch(e){}
  try{Rosaria_T2.noUiSlider.set([Rosaria_T2_CookieMin, Rosaria_T2_CookieMax]);} catch(e){}
  try{Rosaria_T3.noUiSlider.set([Rosaria_T3_CookieMin, Rosaria_T3_CookieMax]);} catch(e){}
  try{HuTao_Ex.noUiSlider.set([HuTao_Ex_CookieMin, HuTao_Ex_CookieMax]);} catch(e){}
  try{HuTao_Pr.noUiSlider.set([HuTao_Pr_CookieMin, HuTao_Pr_CookieMax]);} catch(e){}
  try{HuTao_T1.noUiSlider.set([HuTao_T1_CookieMin, HuTao_T1_CookieMax]);} catch(e){}
  try{HuTao_T2.noUiSlider.set([HuTao_T2_CookieMin, HuTao_T2_CookieMax]);} catch(e){}
  try{HuTao_T3.noUiSlider.set([HuTao_T3_CookieMin, HuTao_T3_CookieMax]);} catch(e){}
  try{Xiao_Ex.noUiSlider.set([Xiao_Ex_CookieMin, Xiao_Ex_CookieMax]);} catch(e){}
  try{Xiao_Pr.noUiSlider.set([Xiao_Pr_CookieMin, Xiao_Pr_CookieMax]);} catch(e){}
  try{Xiao_T1.noUiSlider.set([Xiao_T1_CookieMin, Xiao_T1_CookieMax]);} catch(e){}
  try{Xiao_T2.noUiSlider.set([Xiao_T2_CookieMin, Xiao_T2_CookieMax]);} catch(e){}
  try{Xiao_T3.noUiSlider.set([Xiao_T3_CookieMin, Xiao_T3_CookieMax]);} catch(e){}
  try{Ganyu_Ex.noUiSlider.set([Ganyu_Ex_CookieMin, Ganyu_Ex_CookieMax]);} catch(e){}
  try{Ganyu_Pr.noUiSlider.set([Ganyu_Pr_CookieMin, Ganyu_Pr_CookieMax]);} catch(e){}
  try{Ganyu_T1.noUiSlider.set([Ganyu_T1_CookieMin, Ganyu_T1_CookieMax]);} catch(e){}
  try{Ganyu_T2.noUiSlider.set([Ganyu_T2_CookieMin, Ganyu_T2_CookieMax]);} catch(e){}
  try{Ganyu_T3.noUiSlider.set([Ganyu_T3_CookieMin, Ganyu_T3_CookieMax]);} catch(e){}
  try{Albedo_Ex.noUiSlider.set([Albedo_Ex_CookieMin, Albedo_Ex_CookieMax]);} catch(e){}
  try{Albedo_Pr.noUiSlider.set([Albedo_Pr_CookieMin, Albedo_Pr_CookieMax]);} catch(e){}
  try{Albedo_T1.noUiSlider.set([Albedo_T1_CookieMin, Albedo_T1_CookieMax]);} catch(e){}
  try{Albedo_T2.noUiSlider.set([Albedo_T2_CookieMin, Albedo_T2_CookieMax]);} catch(e){}
  try{Albedo_T3.noUiSlider.set([Albedo_T3_CookieMin, Albedo_T3_CookieMax]);} catch(e){}
  try{Zhongli_Ex.noUiSlider.set([Zhongli_Ex_CookieMin, Zhongli_Ex_CookieMax]);} catch(e){}
  try{Zhongli_Pr.noUiSlider.set([Zhongli_Pr_CookieMin, Zhongli_Pr_CookieMax]);} catch(e){}
  try{Zhongli_T1.noUiSlider.set([Zhongli_T1_CookieMin, Zhongli_T1_CookieMax]);} catch(e){}
  try{Zhongli_T2.noUiSlider.set([Zhongli_T2_CookieMin, Zhongli_T2_CookieMax]);} catch(e){}
  try{Zhongli_T3.noUiSlider.set([Zhongli_T3_CookieMin, Zhongli_T3_CookieMax]);} catch(e){}
  try{Xinyan_Ex.noUiSlider.set([Xinyan_Ex_CookieMin, Xinyan_Ex_CookieMax]);} catch(e){}
  try{Xinyan_Pr.noUiSlider.set([Xinyan_Pr_CookieMin, Xinyan_Pr_CookieMax]);} catch(e){}
  try{Xinyan_T1.noUiSlider.set([Xinyan_T1_CookieMin, Xinyan_T1_CookieMax]);} catch(e){}
  try{Xinyan_T2.noUiSlider.set([Xinyan_T2_CookieMin, Xinyan_T2_CookieMax]);} catch(e){}
  try{Xinyan_T3.noUiSlider.set([Xinyan_T3_CookieMin, Xinyan_T3_CookieMax]);} catch(e){}
  try{Tartaglia_Ex.noUiSlider.set([Tartaglia_Ex_CookieMin, Tartaglia_Ex_CookieMax]);} catch(e){}
  try{Tartaglia_Pr.noUiSlider.set([Tartaglia_Pr_CookieMin, Tartaglia_Pr_CookieMax]);} catch(e){}
  try{Tartaglia_T1.noUiSlider.set([Tartaglia_T1_CookieMin, Tartaglia_T1_CookieMax]);} catch(e){}
  try{Tartaglia_T2.noUiSlider.set([Tartaglia_T2_CookieMin, Tartaglia_T2_CookieMax]);} catch(e){}
  try{Tartaglia_T3.noUiSlider.set([Tartaglia_T3_CookieMin, Tartaglia_T3_CookieMax]);} catch(e){}
  try{Diona_Ex.noUiSlider.set([Diona_Ex_CookieMin, Diona_Ex_CookieMax]);} catch(e){}
  try{Diona_Pr.noUiSlider.set([Diona_Pr_CookieMin, Diona_Pr_CookieMax]);} catch(e){}
  try{Diona_T1.noUiSlider.set([Diona_T1_CookieMin, Diona_T1_CookieMax]);} catch(e){}
  try{Diona_T2.noUiSlider.set([Diona_T2_CookieMin, Diona_T2_CookieMax]);} catch(e){}
  try{Diona_T3.noUiSlider.set([Diona_T3_CookieMin, Diona_T3_CookieMax]);} catch(e){}
  try{Klee_Ex.noUiSlider.set([Klee_Ex_CookieMin, Klee_Ex_CookieMax]);} catch(e){}
  try{Klee_Pr.noUiSlider.set([Klee_Pr_CookieMin, Klee_Pr_CookieMax]);} catch(e){}
  try{Klee_T1.noUiSlider.set([Klee_T1_CookieMin, Klee_T1_CookieMax]);} catch(e){}
  try{Klee_T2.noUiSlider.set([Klee_T2_CookieMin, Klee_T2_CookieMax]);} catch(e){}
  try{Klee_T3.noUiSlider.set([Klee_T3_CookieMin, Klee_T3_CookieMax]);} catch(e){}
  try{Venti_Ex.noUiSlider.set([Venti_Ex_CookieMin, Venti_Ex_CookieMax]);} catch(e){}
  try{Venti_Pr.noUiSlider.set([Venti_Pr_CookieMin, Venti_Pr_CookieMax]);} catch(e){}
  try{Venti_T1.noUiSlider.set([Venti_T1_CookieMin, Venti_T1_CookieMax]);} catch(e){}
  try{Venti_T2.noUiSlider.set([Venti_T2_CookieMin, Venti_T2_CookieMax]);} catch(e){}
  try{Venti_T3.noUiSlider.set([Venti_T3_CookieMin, Venti_T3_CookieMax]);} catch(e){}
  try{Keqing_Ex.noUiSlider.set([Keqing_Ex_CookieMin, Keqing_Ex_CookieMax]);} catch(e){}
  try{Keqing_Pr.noUiSlider.set([Keqing_Pr_CookieMin, Keqing_Pr_CookieMax]);} catch(e){}
  try{Keqing_T1.noUiSlider.set([Keqing_T1_CookieMin, Keqing_T1_CookieMax]);} catch(e){}
  try{Keqing_T2.noUiSlider.set([Keqing_T2_CookieMin, Keqing_T2_CookieMax]);} catch(e){}
  try{Keqing_T3.noUiSlider.set([Keqing_T3_CookieMin, Keqing_T3_CookieMax]);} catch(e){}
  try{Mona_Ex.noUiSlider.set([Mona_Ex_CookieMin, Mona_Ex_CookieMax]);} catch(e){}
  try{Mona_Pr.noUiSlider.set([Mona_Pr_CookieMin, Mona_Pr_CookieMax]);} catch(e){}
  try{Mona_T1.noUiSlider.set([Mona_T1_CookieMin, Mona_T1_CookieMax]);} catch(e){}
  try{Mona_T2.noUiSlider.set([Mona_T2_CookieMin, Mona_T2_CookieMax]);} catch(e){}
  try{Mona_T3.noUiSlider.set([Mona_T3_CookieMin, Mona_T3_CookieMax]);} catch(e){}
  try{Qiqi_Ex.noUiSlider.set([Qiqi_Ex_CookieMin, Qiqi_Ex_CookieMax]);} catch(e){}
  try{Qiqi_Pr.noUiSlider.set([Qiqi_Pr_CookieMin, Qiqi_Pr_CookieMax]);} catch(e){}
  try{Qiqi_T1.noUiSlider.set([Qiqi_T1_CookieMin, Qiqi_T1_CookieMax]);} catch(e){}
  try{Qiqi_T2.noUiSlider.set([Qiqi_T2_CookieMin, Qiqi_T2_CookieMax]);} catch(e){}
  try{Qiqi_T3.noUiSlider.set([Qiqi_T3_CookieMin, Qiqi_T3_CookieMax]);} catch(e){}
  try{Diluc_Ex.noUiSlider.set([Diluc_Ex_CookieMin, Diluc_Ex_CookieMax]);} catch(e){}
  try{Diluc_Pr.noUiSlider.set([Diluc_Pr_CookieMin, Diluc_Pr_CookieMax]);} catch(e){}
  try{Diluc_T1.noUiSlider.set([Diluc_T1_CookieMin, Diluc_T1_CookieMax]);} catch(e){}
  try{Diluc_T2.noUiSlider.set([Diluc_T2_CookieMin, Diluc_T2_CookieMax]);} catch(e){}
  try{Diluc_T3.noUiSlider.set([Diluc_T3_CookieMin, Diluc_T3_CookieMax]);} catch(e){}
  try{Jean_Ex.noUiSlider.set([Jean_Ex_CookieMin, Jean_Ex_CookieMax]);} catch(e){}
  try{Jean_Pr.noUiSlider.set([Jean_Pr_CookieMin, Jean_Pr_CookieMax]);} catch(e){}
  try{Jean_T1.noUiSlider.set([Jean_T1_CookieMin, Jean_T1_CookieMax]);} catch(e){}
  try{Jean_T2.noUiSlider.set([Jean_T2_CookieMin, Jean_T2_CookieMax]);} catch(e){}
  try{Jean_T3.noUiSlider.set([Jean_T3_CookieMin, Jean_T3_CookieMax]);} catch(e){}
  try{Sucrose_Ex.noUiSlider.set([Sucrose_Ex_CookieMin, Sucrose_Ex_CookieMax]);} catch(e){}
  try{Sucrose_Pr.noUiSlider.set([Sucrose_Pr_CookieMin, Sucrose_Pr_CookieMax]);} catch(e){}
  try{Sucrose_T1.noUiSlider.set([Sucrose_T1_CookieMin, Sucrose_T1_CookieMax]);} catch(e){}
  try{Sucrose_T2.noUiSlider.set([Sucrose_T2_CookieMin, Sucrose_T2_CookieMax]);} catch(e){}
  try{Sucrose_T3.noUiSlider.set([Sucrose_T3_CookieMin, Sucrose_T3_CookieMax]);} catch(e){}
  try{Chongyun_Ex.noUiSlider.set([Chongyun_Ex_CookieMin, Chongyun_Ex_CookieMax]);} catch(e){}
  try{Chongyun_Pr.noUiSlider.set([Chongyun_Pr_CookieMin, Chongyun_Pr_CookieMax]);} catch(e){}
  try{Chongyun_T1.noUiSlider.set([Chongyun_T1_CookieMin, Chongyun_T1_CookieMax]);} catch(e){}
  try{Chongyun_T2.noUiSlider.set([Chongyun_T2_CookieMin, Chongyun_T2_CookieMax]);} catch(e){}
  try{Chongyun_T3.noUiSlider.set([Chongyun_T3_CookieMin, Chongyun_T3_CookieMax]);} catch(e){}
  try{Noelle_Ex.noUiSlider.set([Noelle_Ex_CookieMin, Noelle_Ex_CookieMax]);} catch(e){}
  try{Noelle_Pr.noUiSlider.set([Noelle_Pr_CookieMin, Noelle_Pr_CookieMax]);} catch(e){}
  try{Noelle_T1.noUiSlider.set([Noelle_T1_CookieMin, Noelle_T1_CookieMax]);} catch(e){}
  try{Noelle_T2.noUiSlider.set([Noelle_T2_CookieMin, Noelle_T2_CookieMax]);} catch(e){}
  try{Noelle_T3.noUiSlider.set([Noelle_T3_CookieMin, Noelle_T3_CookieMax]);} catch(e){}
  try{Bennett_Ex.noUiSlider.set([Bennett_Ex_CookieMin, Bennett_Ex_CookieMax]);} catch(e){}
  try{Bennett_Pr.noUiSlider.set([Bennett_Pr_CookieMin, Bennett_Pr_CookieMax]);} catch(e){}
  try{Bennett_T1.noUiSlider.set([Bennett_T1_CookieMin, Bennett_T1_CookieMax]);} catch(e){}
  try{Bennett_T2.noUiSlider.set([Bennett_T2_CookieMin, Bennett_T2_CookieMax]);} catch(e){}
  try{Bennett_T3.noUiSlider.set([Bennett_T3_CookieMin, Bennett_T3_CookieMax]);} catch(e){}
  try{Fischl_Ex.noUiSlider.set([Fischl_Ex_CookieMin, Fischl_Ex_CookieMax]);} catch(e){}
  try{Fischl_Pr.noUiSlider.set([Fischl_Pr_CookieMin, Fischl_Pr_CookieMax]);} catch(e){}
  try{Fischl_T1.noUiSlider.set([Fischl_T1_CookieMin, Fischl_T1_CookieMax]);} catch(e){}
  try{Fischl_T2.noUiSlider.set([Fischl_T2_CookieMin, Fischl_T2_CookieMax]);} catch(e){}
  try{Fischl_T3.noUiSlider.set([Fischl_T3_CookieMin, Fischl_T3_CookieMax]);} catch(e){}
  try{Ningguang_Ex.noUiSlider.set([Ningguang_Ex_CookieMin, Ningguang_Ex_CookieMax]);} catch(e){}
  try{Ningguang_Pr.noUiSlider.set([Ningguang_Pr_CookieMin, Ningguang_Pr_CookieMax]);} catch(e){}
  try{Ningguang_T1.noUiSlider.set([Ningguang_T1_CookieMin, Ningguang_T1_CookieMax]);} catch(e){}
  try{Ningguang_T2.noUiSlider.set([Ningguang_T2_CookieMin, Ningguang_T2_CookieMax]);} catch(e){}
  try{Ningguang_T3.noUiSlider.set([Ningguang_T3_CookieMin, Ningguang_T3_CookieMax]);} catch(e){}
  try{Xingqiu_Ex.noUiSlider.set([Xingqiu_Ex_CookieMin, Xingqiu_Ex_CookieMax]);} catch(e){}
  try{Xingqiu_Pr.noUiSlider.set([Xingqiu_Pr_CookieMin, Xingqiu_Pr_CookieMax]);} catch(e){}
  try{Xingqiu_T1.noUiSlider.set([Xingqiu_T1_CookieMin, Xingqiu_T1_CookieMax]);} catch(e){}
  try{Xingqiu_T2.noUiSlider.set([Xingqiu_T2_CookieMin, Xingqiu_T2_CookieMax]);} catch(e){}
  try{Xingqiu_T3.noUiSlider.set([Xingqiu_T3_CookieMin, Xingqiu_T3_CookieMax]);} catch(e){}
  try{Beidou_Ex.noUiSlider.set([Beidou_Ex_CookieMin, Beidou_Ex_CookieMax]);} catch(e){}
  try{Beidou_Pr.noUiSlider.set([Beidou_Pr_CookieMin, Beidou_Pr_CookieMax]);} catch(e){}
  try{Beidou_T1.noUiSlider.set([Beidou_T1_CookieMin, Beidou_T1_CookieMax]);} catch(e){}
  try{Beidou_T2.noUiSlider.set([Beidou_T2_CookieMin, Beidou_T2_CookieMax]);} catch(e){}
  try{Beidou_T3.noUiSlider.set([Beidou_T3_CookieMin, Beidou_T3_CookieMax]);} catch(e){}
  try{Xiangling_Ex.noUiSlider.set([Xiangling_Ex_CookieMin, Xiangling_Ex_CookieMax]);} catch(e){}
  try{Xiangling_Pr.noUiSlider.set([Xiangling_Pr_CookieMin, Xiangling_Pr_CookieMax]);} catch(e){}
  try{Xiangling_T1.noUiSlider.set([Xiangling_T1_CookieMin, Xiangling_T1_CookieMax]);} catch(e){}
  try{Xiangling_T2.noUiSlider.set([Xiangling_T2_CookieMin, Xiangling_T2_CookieMax]);} catch(e){}
  try{Xiangling_T3.noUiSlider.set([Xiangling_T3_CookieMin, Xiangling_T3_CookieMax]);} catch(e){}
  try{Razor_Ex.noUiSlider.set([Razor_Ex_CookieMin, Razor_Ex_CookieMax]);} catch(e){}
  try{Razor_Pr.noUiSlider.set([Razor_Pr_CookieMin, Razor_Pr_CookieMax]);} catch(e){}
  try{Razor_T1.noUiSlider.set([Razor_T1_CookieMin, Razor_T1_CookieMax]);} catch(e){}
  try{Razor_T2.noUiSlider.set([Razor_T2_CookieMin, Razor_T2_CookieMax]);} catch(e){}
  try{Razor_T3.noUiSlider.set([Razor_T3_CookieMin, Razor_T3_CookieMax]);} catch(e){}
  try{Barbara_Ex.noUiSlider.set([Barbara_Ex_CookieMin, Barbara_Ex_CookieMax]);} catch(e){}
  try{Barbara_Pr.noUiSlider.set([Barbara_Pr_CookieMin, Barbara_Pr_CookieMax]);} catch(e){}
  try{Barbara_T1.noUiSlider.set([Barbara_T1_CookieMin, Barbara_T1_CookieMax]);} catch(e){}
  try{Barbara_T2.noUiSlider.set([Barbara_T2_CookieMin, Barbara_T2_CookieMax]);} catch(e){}
  try{Barbara_T3.noUiSlider.set([Barbara_T3_CookieMin, Barbara_T3_CookieMax]);} catch(e){}
  try{Lisa_Ex.noUiSlider.set([Lisa_Ex_CookieMin, Lisa_Ex_CookieMax]);} catch(e){}
  try{Lisa_Pr.noUiSlider.set([Lisa_Pr_CookieMin, Lisa_Pr_CookieMax]);} catch(e){}
  try{Lisa_T1.noUiSlider.set([Lisa_T1_CookieMin, Lisa_T1_CookieMax]);} catch(e){}
  try{Lisa_T2.noUiSlider.set([Lisa_T2_CookieMin, Lisa_T2_CookieMax]);} catch(e){}
  try{Lisa_T3.noUiSlider.set([Lisa_T3_CookieMin, Lisa_T3_CookieMax]);} catch(e){}
  try{Kaeya_Ex.noUiSlider.set([Kaeya_Ex_CookieMin, Kaeya_Ex_CookieMax]);} catch(e){}
  try{Kaeya_Pr.noUiSlider.set([Kaeya_Pr_CookieMin, Kaeya_Pr_CookieMax]);} catch(e){}
  try{Kaeya_T1.noUiSlider.set([Kaeya_T1_CookieMin, Kaeya_T1_CookieMax]);} catch(e){}
  try{Kaeya_T2.noUiSlider.set([Kaeya_T2_CookieMin, Kaeya_T2_CookieMax]);} catch(e){}
  try{Kaeya_T3.noUiSlider.set([Kaeya_T3_CookieMin, Kaeya_T3_CookieMax]);} catch(e){}
  try{Amber_Ex.noUiSlider.set([Amber_Ex_CookieMin, Amber_Ex_CookieMax]);} catch(e){}
  try{Amber_Pr.noUiSlider.set([Amber_Pr_CookieMin, Amber_Pr_CookieMax]);} catch(e){}
  try{Amber_T1.noUiSlider.set([Amber_T1_CookieMin, Amber_T1_CookieMax]);} catch(e){}
  try{Amber_T2.noUiSlider.set([Amber_T2_CookieMin, Amber_T2_CookieMax]);} catch(e){}
  try{Amber_T3.noUiSlider.set([Amber_T3_CookieMin, Amber_T3_CookieMax]);} catch(e){}
  try{Aloy_Ex.noUiSlider.set([Aloy_Ex_CookieMin, Aloy_Ex_CookieMax]);} catch(e){}
  try{Aloy_Pr.noUiSlider.set([Aloy_Pr_CookieMin, Aloy_Pr_CookieMax]);} catch(e){}
  try{Aloy_T1.noUiSlider.set([Aloy_T1_CookieMin, Aloy_T1_CookieMax]);} catch(e){}
  try{Aloy_T2.noUiSlider.set([Aloy_T2_CookieMin, Aloy_T2_CookieMax]);} catch(e){}
  try{Aloy_T3.noUiSlider.set([Aloy_T3_CookieMin, Aloy_T3_CookieMax]);} catch(e){}
}
function InventoryLoad() {
  var Character_Cookies = document.cookie.replace(/.*?;?\s?Inventory\d=(.*);\sInventory\d=(.*);\sInventory\d=(.*)\//i, '$1$2$3');
  var Character_CookieLoad = Character_Cookies.split( '/' )
  for (var i = 0; i < Character_CookieLoad.length; i++) {
    var Character_CookieLoading = Character_CookieLoad[i].split( '=' );
    var Character_CookieName = Character_CookieLoading[0];
    window[Character_CookieName] = Character_CookieLoading[1];
  }
  try{document.getElementById("Heros_Wit").value = Heros_Wit_Cookie} catch(e){}
  try{document.getElementById("Adventurers_Experience").value = Adventurers_Experience_Cookie} catch(e){}
  try{document.getElementById("Wanderers_Advice").value = Wanderers_Advice_Cookie} catch(e){}
  try{document.getElementById("Mora").value = Mora_Cookie} catch(e){}
  try{document.getElementById("Slime_Concentrate").value = Slime_Concentrate_Cookie} catch(e){}
  try{document.getElementById("Slime_Secretions").value = Slime_Secretions_Cookie} catch(e){}
  try{document.getElementById("Slime_Condensate").value = Slime_Condensate_Cookie} catch(e){}
  try{document.getElementById("Ominous_Mask").value = Ominous_Mask_Cookie} catch(e){}
  try{document.getElementById("Stained_Mask").value = Stained_Mask_Cookie} catch(e){}
  try{document.getElementById("Damaged_Mask").value = Damaged_Mask_Cookie} catch(e){}
  try{document.getElementById("Forbidden_Curse_Scroll").value = Forbidden_Curse_Scroll_Cookie} catch(e){}
  try{document.getElementById("Sealed_Scroll").value = Sealed_Scroll_Cookie} catch(e){}
  try{document.getElementById("Divining_Scroll").value = Divining_Scroll_Cookie} catch(e){}
  try{document.getElementById("Weathered_Arrowhead").value = Weathered_Arrowhead_Cookie} catch(e){}
  try{document.getElementById("Sharp_Arrowhead").value = Sharp_Arrowhead_Cookie} catch(e){}
  try{document.getElementById("Firm_Arrowhead").value = Firm_Arrowhead_Cookie} catch(e){}
  try{document.getElementById("Lieutenants_Insignia").value = Lieutenants_Insignia_Cookie} catch(e){}
  try{document.getElementById("Sergeants_Insignia").value = Sergeants_Insignia_Cookie} catch(e){}
  try{document.getElementById("Recruits_Insignia").value = Recruits_Insignia_Cookie} catch(e){}
  try{document.getElementById("Golden_Raven_Insignia").value = Golden_Raven_Insignia_Cookie} catch(e){}
  try{document.getElementById("Silver_Raven_Insignia").value = Silver_Raven_Insignia_Cookie} catch(e){}
  try{document.getElementById("Treasure_Hoarder_Insignia").value = Treasure_Hoarder_Insignia_Cookie} catch(e){}
  try{document.getElementById("Energy_Nectar").value = Energy_Nectar_Cookie} catch(e){}
  try{document.getElementById("Shimmering_Nectar").value = Shimmering_Nectar_Cookie} catch(e){}
  try{document.getElementById("Whopperflower_Nectar").value = Whopperflower_Nectar_Cookie} catch(e){}
  try{document.getElementById("Famed_Handguard").value = Famed_Handguard_Cookie} catch(e){}
  try{document.getElementById("Kageuchi_Handguard").value = Kageuchi_Handguard_Cookie} catch(e){}
  try{document.getElementById("Old_Handguard").value = Old_Handguard_Cookie} catch(e){}
  try{document.getElementById("Spectral_Nucleus").value = Spectral_Nucleus_Cookie} catch(e){}
  try{document.getElementById("Spectral_Heart").value = Spectral_Heart_Cookie} catch(e){}
  try{document.getElementById("Spectral_Husk").value = Spectral_Husk_Cookie} catch(e){}
  try{document.getElementById("Dvalins_Plume").value = Dvalins_Plume_Cookie} catch(e){}
  try{document.getElementById("Dvalins_Claw").value = Dvalins_Claw_Cookie} catch(e){}
  try{document.getElementById("Dvalins_Sigh").value = Dvalins_Sigh_Cookie} catch(e){}
  try{document.getElementById("Tail_of_Boreas").value = Tail_of_Boreas_Cookie} catch(e){}
  try{document.getElementById("Ring_of_Boreas").value = Ring_of_Boreas_Cookie} catch(e){}
  try{document.getElementById("Spirit_Locket_of_Boreas").value = Spirit_Locket_of_Boreas_Cookie} catch(e){}
  try{document.getElementById("Tusk_of_Monoceros_Caeli").value = Tusk_of_Monoceros_Caeli_Cookie} catch(e){}
  try{document.getElementById("Shard_of_a_Foul_Legacy").value = Shard_of_a_Foul_Legacy_Cookie} catch(e){}
  try{document.getElementById("Shadow_of_the_Warrior").value = Shadow_of_the_Warrior_Cookie} catch(e){}
  try{document.getElementById("Dragon_Lords_Crown").value = Dragon_Lords_Crown_Cookie} catch(e){}
  try{document.getElementById("Bloodjade_Branch").value = Bloodjade_Branch_Cookie} catch(e){}
  try{document.getElementById("Gilded_Scale").value = Gilded_Scale_Cookie} catch(e){}
  try{document.getElementById("Molten_Moment").value = Molten_Moment_Cookie} catch(e){}
  try{document.getElementById("Hellfire_Butterfly").value = Hellfire_Butterfly_Cookie} catch(e){}
  try{document.getElementById("Ashen_Heart").value = Ashen_Heart_Cookie} catch(e){}
  try{document.getElementById("Hurricane_Seed").value = Hurricane_Seed_Cookie} catch(e){}
  try{document.getElementById("Lightning_Prism").value = Lightning_Prism_Cookie} catch(e){}
  try{document.getElementById("Basalt_Pillar").value = Basalt_Pillar_Cookie} catch(e){}
  try{document.getElementById("Hoarfrost_Core").value = Hoarfrost_Core_Cookie} catch(e){}
  try{document.getElementById("Everflame_Seed").value = Everflame_Seed_Cookie} catch(e){}
  try{document.getElementById("Cleansing_Heart").value = Cleansing_Heart_Cookie} catch(e){}
  try{document.getElementById("Juvenile_Jade").value = Juvenile_Jade_Cookie} catch(e){}
  try{document.getElementById("Crystalline_Bloom").value = Crystalline_Bloom_Cookie} catch(e){}
  try{document.getElementById("Marionette_Core").value = Marionette_Core_Cookie} catch(e){}
  try{document.getElementById("Perpetual_Heart").value = Perpetual_Heart_Cookie} catch(e){}
  try{document.getElementById("Smoldering_Pearl").value = Smoldering_Pearl_Cookie} catch(e){}
  try{document.getElementById("Dew_of_Repudiation").value = Dew_of_Repudiation_Cookie} catch(e){}
  try{document.getElementById("Storm_Beads").value = Storm_Beads_Cookie} catch(e){}
  try{document.getElementById("Agate_Gemstone").value = Agate_Gemstone_Cookie} catch(e){}
  try{document.getElementById("Agate_Chunk").value = Agate_Chunk_Cookie} catch(e){}
  try{document.getElementById("Agate_Fragment").value = Agate_Fragment_Cookie} catch(e){}
  try{document.getElementById("Agate_Sliver").value = Agate_Sliver_Cookie} catch(e){}
  try{document.getElementById("Lazurite_Gemstone").value = Lazurite_Gemstone_Cookie} catch(e){}
  try{document.getElementById("Lazurite_Chunk").value = Lazurite_Chunk_Cookie} catch(e){}
  try{document.getElementById("Lazurite_Fragment").value = Lazurite_Fragment_Cookie} catch(e){}
  try{document.getElementById("Lazurite_Sliver").value = Lazurite_Sliver_Cookie} catch(e){}
  try{document.getElementById("Amethyst_Gemstone").value = Amethyst_Gemstone_Cookie} catch(e){}
  try{document.getElementById("Amethyst_Chunk").value = Amethyst_Chunk_Cookie} catch(e){}
  try{document.getElementById("Amethyst_Fragment").value = Amethyst_Fragment_Cookie} catch(e){}
  try{document.getElementById("Amethyst_Sliver").value = Amethyst_Sliver_Cookie} catch(e){}
  try{document.getElementById("Turquoise_Gemstone").value = Turquoise_Gemstone_Cookie} catch(e){}
  try{document.getElementById("Turquoise_Chunk").value = Turquoise_Chunk_Cookie} catch(e){}
  try{document.getElementById("Turquoise_Fragment").value = Turquoise_Fragment_Cookie} catch(e){}
  try{document.getElementById("Turquoise_Sliver").value = Turquoise_Sliver_Cookie} catch(e){}
  try{document.getElementById("Jade_Gemstone").value = Jade_Gemstone_Cookie} catch(e){}
  try{document.getElementById("Jade_Chunk").value = Jade_Chunk_Cookie} catch(e){}
  try{document.getElementById("Jade_Fragment").value = Jade_Fragment_Cookie} catch(e){}
  try{document.getElementById("Jade_Sliver").value = Jade_Sliver_Cookie} catch(e){}
  try{document.getElementById("Topaz_Gemstone").value = Topaz_Gemstone_Cookie} catch(e){}
  try{document.getElementById("Topaz_Chunk").value = Topaz_Chunk_Cookie} catch(e){}
  try{document.getElementById("Topaz_Fragment").value = Topaz_Fragment_Cookie} catch(e){}
  try{document.getElementById("Topaz_Sliver").value = Topaz_Sliver_Cookie} catch(e){}
  try{document.getElementById("Emerald_Gemstone").value = Emerald_Gemstone_Cookie} catch(e){}
  try{document.getElementById("Emerald_Chunk").value = Emerald_Chunk_Cookie} catch(e){}
  try{document.getElementById("Emerald_Fragment").value = Emerald_Fragment_Cookie} catch(e){}
  try{document.getElementById("Emerald_Sliver").value = Emerald_Sliver_Cookie} catch(e){}
  try{document.getElementById("Philosophies_of_Freedom").value = Philosophies_of_Freedom_Cookie} catch(e){}
  try{document.getElementById("Guide_to_Freedom").value = Guide_to_Freedom_Cookie} catch(e){}
  try{document.getElementById("Teachings_of_Freedom").value = Teachings_of_Freedom_Cookie} catch(e){}
  try{document.getElementById("Philosophies_of_Ballad").value = Philosophies_of_Ballad_Cookie} catch(e){}
  try{document.getElementById("Guide_to_Ballad").value = Guide_to_Ballad_Cookie} catch(e){}
  try{document.getElementById("Teachings_of_Ballad").value = Teachings_of_Ballad_Cookie} catch(e){}
  try{document.getElementById("Philosophies_of_Resistance").value = Philosophies_of_Resistance_Cookie} catch(e){}
  try{document.getElementById("Guide_to_Resistance").value = Guide_to_Resistance_Cookie} catch(e){}
  try{document.getElementById("Teachings_of_Resistance").value = Teachings_of_Resistance_Cookie} catch(e){}
  try{document.getElementById("Philosophies_of_Prosperity").value = Philosophies_of_Prosperity_Cookie} catch(e){}
  try{document.getElementById("Guide_to_Prosperity").value = Guide_to_Prosperity_Cookie} catch(e){}
  try{document.getElementById("Teachings_of_Prosperity").value = Teachings_of_Prosperity_Cookie} catch(e){}
  try{document.getElementById("Philosophies_of_Diligence").value = Philosophies_of_Diligence_Cookie} catch(e){}
  try{document.getElementById("Guide_to_Diligence").value = Guide_to_Diligence_Cookie} catch(e){}
  try{document.getElementById("Teachings_of_Diligence").value = Teachings_of_Diligence_Cookie} catch(e){}
  try{document.getElementById("Philosophies_of_Gold").value = Philosophies_of_Gold_Cookie} catch(e){}
  try{document.getElementById("Guide_to_Gold").value = Guide_to_Gold_Cookie} catch(e){}
  try{document.getElementById("Teachings_of_Gold").value = Teachings_of_Gold_Cookie} catch(e){}
  try{document.getElementById("Philosophies_of_Transience").value = Philosophies_of_Transience_Cookie} catch(e){}
  try{document.getElementById("Guide_to_Transience").value = Guide_to_Transience_Cookie} catch(e){}
  try{document.getElementById("Teachings_of_Transience").value = Teachings_of_Transience_Cookie} catch(e){}
  try{document.getElementById("Philosophies_of_Elegance").value = Philosophies_of_Elegance_Cookie} catch(e){}
  try{document.getElementById("Guide_to_Elegance").value = Guide_to_Elegance_Cookie} catch(e){}
  try{document.getElementById("Teachings_of_Elegance").value = Teachings_of_Elegance_Cookie} catch(e){}
  try{document.getElementById("Philosophies_of_Light").value = Philosophies_of_Light_Cookie} catch(e){}
  try{document.getElementById("Guide_to_Light").value = Guide_to_Light_Cookie} catch(e){}
  try{document.getElementById("Teachings_of_Light").value = Teachings_of_Light_Cookie} catch(e){}
  try{document.getElementById("Crown_of_Insight").value = Crown_of_Insight_Cookie} catch(e){}
  try{document.getElementById("Calla_Lily").value = Calla_Lily_Cookie} catch(e){}
  try{document.getElementById("Wolfhook").value = Wolfhook_Cookie} catch(e){}
  try{document.getElementById("Valberry").value = Valberry_Cookie} catch(e){}
  try{document.getElementById("Cecilia").value = Cecilia_Cookie} catch(e){}
  try{document.getElementById("Windwheel_Aster").value = Windwheel_Aster_Cookie} catch(e){}
  try{document.getElementById("Philanemo_Mushroom").value = Philanemo_Mushroom_Cookie} catch(e){}
  try{document.getElementById("Jueyun_Chili").value = Jueyun_Chili_Cookie} catch(e){}
  try{document.getElementById("Noctilucous_Jade").value = Noctilucous_Jade_Cookie} catch(e){}
  try{document.getElementById("Silk_Flower").value = Silk_Flower_Cookie} catch(e){}
  try{document.getElementById("Glaze_Lily").value = Glaze_Lily_Cookie} catch(e){}
  try{document.getElementById("Qingxin").value = Qingxin_Cookie} catch(e){}
  try{document.getElementById("Starconch").value = Starconch_Cookie} catch(e){}
  try{document.getElementById("Violetgrass").value = Violetgrass_Cookie} catch(e){}
  try{document.getElementById("Small_Lamp_Grass").value = Small_Lamp_Grass_Cookie} catch(e){}
  try{document.getElementById("Dandelion_Seed").value = Dandelion_Seed_Cookie} catch(e){}
  try{document.getElementById("Cor_Lapis").value = Cor_Lapis_Cookie} catch(e){}
  try{document.getElementById("Onikabuto").value = Onikabuto_Cookie} catch(e){}
  try{document.getElementById("Sakura_Bloom").value = Sakura_Bloom_Cookie} catch(e){}
  try{document.getElementById("Crystal_Marrow").value = Crystal_Marrow_Cookie} catch(e){}
  try{document.getElementById("Dendrobium").value = Dendrobium_Cookie} catch(e){}
  try{document.getElementById("Naku_Weed").value = Naku_Weed_Cookie} catch(e){}
  try{document.getElementById("Sea_Ganoderma").value = Sea_Ganoderma_Cookie} catch(e){}
  try{document.getElementById("Sango_Pearl").value = Sango_Pearl_Cookie} catch(e){}
  try{document.getElementById("Amakumo_Fruit").value = Amakumo_Fruit_Cookie} catch(e){}
  try{document.getElementById("Fluorescent_Fungus").value = Fluorescent_Fungus_Cookie} catch(e){}
}
CharacterLoad();
InventoryLoad();

document.getElementById('Load').onclick = function changeContent() {
  CharacterLoad();
  InventoryLoad();
  Calculator();
  M.toast({
    html: 'Loaded',
    displayLength: '1000'
  })
}

// 苦肉のエラー回避
setTimeout(Sleep, 1000);