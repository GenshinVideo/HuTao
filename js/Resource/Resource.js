let requestURL = '../../Resource/package.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  let list = request.response;
  json = JSON.parse(JSON.stringify(list));
  LoadScript();
}

function LoadScript() {
  var SelectBox1 = document.getElementById("SelectBoxEins");
  var AddSelectBox1 = document.createElement("option");
  AddSelectBox1.value = "ReedMe";
  AddSelectBox1.textContent = "Type";
  SelectBox1.appendChild(AddSelectBox1);
  var SelectBox2 = document.getElementById("SelectBoxZwei");
  var AddSelectBox2 = document.createElement("option");
  AddSelectBox2.value = "ReedMe";
  AddSelectBox2.textContent = "Version";
  SelectBox2.appendChild(AddSelectBox2);
  var SelectBox3 = document.getElementById("SelectBoxDrei");
  SelectBox3.classList.remove("is-success");
  SelectBox3.style.pointerEvents = "none";


  var type = "";
  Object.keys(json).forEach(function (key) {
    type = type + [key][0] + ",";
  });
  var types = type.split(",");
  for (var i = 0 ; i < types.length - 1 ; i++){
    var AddSelectBox1 = document.createElement("option");
    AddSelectBox1.value = types[i];
    AddSelectBox1.textContent = types[i];
    SelectBox1.appendChild(AddSelectBox1);
  }

  function ChoiceType(type) {
    SelectBox2.selectedIndex = 0;
    var options = SelectBox2.options;
    for (var i = options.length - 1; 0 <= i; --i) {
      if(!options[i].selected) {
        SelectBox2.removeChild(options[i]);
      }
    }
    if (type == "ReedMe") {
      return;
    }
    var version = "";
    var SelectType = eval(`json.${type}.version`);
    Object.keys(SelectType).forEach(function (key) {
      version = version + [key][0] + ",";
    });
    var version = version.replace(/v/g, "");
    var version = version.replace(/to/g, " > ");
    var version = version.replace(/_/g, ".");
    var versions = version.split(",");
    for (var i = 0 ; i < versions.length - 1 ; i++){
    var AddSelectBox2 = document.createElement("option");
    AddSelectBox2.value = versions[i];
    AddSelectBox2.textContent = versions[i];
    SelectBox2.appendChild(AddSelectBox2);
    }
  }
  function ChoiceVersion(version) {
    var version = version.replace(/\./g, "_");
    var version = version.replace(/\s>\s/g, "to");
    if (version == "ReedMe") {
      SelectBox3.classList.remove("is-success");
      SelectBox3.style.pointerEvents = "none";
      document.getElementById("urlbox").innerText = "URL: ";
      document.getElementById("md5box").innerText = "MD5: ";
      return;
    } else {
      var url = eval(`json.${SelectBox1.value}.version.v${version}.url`);
      var md5 = eval(`json.${SelectBox1.value}.version.v${version}.md5`);
      SelectBox3.classList.add("is-success");
      SelectBox3.style.pointerEvents = "auto";
      SelectBox3.setAttribute('href', url);
    }
    document.getElementById("urlbox").innerText = "URL: " + url;
    document.getElementById("md5box").innerText = "MD5: " + md5;
  }

  SelectBox1.addEventListener('change', (e) => {
    SelectBox3.classList.remove("is-success");
    SelectBox3.style.pointerEvents = "none";
    document.getElementById("urlbox").innerText = "URL: ";
    document.getElementById("md5box").innerText = "MD5: ";
    ChoiceType(e.target.value);
  })

  SelectBox2.addEventListener('change', (e) => {
    ChoiceVersion(e.target.value);
  })
}

function LoadWait() {
  if ( !document.querySelectorAll('a[class="button is-success"]')[1] ) {
    setTimeout( LoadWait, 100 );
    return;
  } else {
    FixURL();
  }
}
LoadWait();
function FixURL() {
  if (document.querySelectorAll('a[class="button is-success"]')[1].href == location.href) {
    var FixVersion = document.querySelector('strong[id="versiontext"]').textContent;
    var FixDlLink = document.querySelectorAll('a[class="button is-success is-outlined"]')[4].href.replace(/(.*?pc_zip\/[^\/]+)\/.*$/g, "$1/GenshinImpact_" + FixVersion + ".zip")
    document.querySelectorAll('a[class="button is-success"]')[1].href = FixDlLink;
  }
}