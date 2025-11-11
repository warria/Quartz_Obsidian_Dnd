# Jaconian kahleet – Session 10

**Päiväys:**  
**Sijainti:**  [[Warthin rauniot]]

---

## Pelaajat & hahmot

- **Silja** → [[Nerefina]], Elf Rogue
- **Ippu** → [[Ena]], Elf Warlock
- **Eemeli** → [[Lucifer]], Vampire Bard
- **Rain** → [[💀 Xin-Xin]], Vulpin Monk
---

# Jaconia lyhyesti

[[Jaconia]] on pieni maa muinaisen kulttuurin raunioiden keskellä. Sen rajat määrittää [[Suden autiomaa]], joka suojaa maailmaa ulkopuolella olevasta [[Borvaria]]lta – mustan magian ja hirviöiden rauniomaalta.

Nykyhetkessä Jaconia on jakautunut ihmisten ja taikaolentojen kesken, mutta rauhaa ei ole: taikuus on pelättyä, taikaolennot halveksittuja ja pohjoisessa sodan uhka kasvaa. Keskellä maata sijaitseva [[Farrignia]] on valtakunnan sydän ja kampanjan lähtöpiste.

```leaflet  
id: jaconia ### Must be unique with no spaces  
image: [[Jaconia_color.jpg]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [1529, 2048]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 600px  ### Size of the leaflet embed in px on your screen  
width: 100% ### Size of the leaflet embed in your note  
lat: 764.5 ### To center the map, make this half of the map height.  
long: 1024 ### To center the map, make this half of the map width.  
minZoom: -1.6 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 1.2 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: -0.5 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
unit: miles ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 1.040625 ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### markermarker: Kaupunki (Marquise),569,1072,Ci,,-0.5,

```
---

## Kertaus (lyhennettynä)

- [[Ena]] heräsi painajaiseen.
- [[Andrew]] istui ulkona kiillottamassa haarniskaa → [[Ena]] toi hänelle ruokaa.
- Aamupala yhdessä.
- [[Livia]] pyysi toimittamaan korin ja kirjeen [[Maamikoille]].
- Hyvästien sanominen → [[Andrew]] ei tule mukaan.
- Keskustassa [[Fukus the Cat]] + pikku [[Maatilan tyttö]] + [[Kalastajan poika]] → veivät [[Pelaajat|partyä]] [[Maamikoille]].
- [[Kalastajan poika|Poika]] kertoi nähneensä ison lentävän pedon. [[Kalastajan poika|Isä]] sodassa, perhe [[Maamikoilla]].
- Palkkiona hevoset, vaimo paranee lääkkeillä.
- [[Pelaajat|Party]] hajosi hetkeksi, auttoi kyläläisiä.
- Ratsastus [[Warthin rauniot|raunioille]] (2–3h). Maasto muuttuu: mustia suonimaisia jokia.
- [[Hevoset]] kieltäytyivät → sidottiin maatilan aitaan.
- Ilmassa kuolemaa ja [[Kirous|kirouksen]] merkkejä.
- Löysivät kuolemaa tekevän lehmän ([[Betty]]), jonka musta mönjä turmeli.
- Savu → Leiri hylättynä, mömmökasat joissa hampaita ja hiuksia.
- Löysivät [[Maalais tytön piirustus|piirustuksen]] (maatilan tytön tekemä).
- 5 jähmettynyttä hahmoa: [[dire wolf|dire wolfit]] → heräävät kun yhtä vahingoitetaan.
- Taistelu alkaa.

---

# Session valmistelu

## Session aloitus – Monologipaikka

_Oh, I do love a good story…  
and this band of misfits has caught my eye.

Their bond, forged through hardship, despair, and greed, is far from unbreakable.  
  
It hangs by the thinnest of threads, each one frayed and worn, ready to snap at a single mistake.  
  
…  
  
Yesterday, I might have said that all was well with our so-called heroes,  if you can even call them that.  
  
But then again, who truly decides who is worthy of the title of hero?  
  
Is a hero the one who burns a prison to the ground, freeing hundreds, …

yet leaves behind only ruins and death?

(Have you ever thought that the thousands of guards they killed had families of their own?)  
  
Or is a hero the one who would risk everything, every bond, every life, no matter the cost, to protect those they hold dear to them?  
  
…  
  
And perhaps, nothing in this world is ever as simple as black and white.  
  
For this is Jaconia, a realm forged from the ruins of empires lost to time, surrounded and shadowed by the withering wastes of Borvaria.  
  
Here, survival is often called justice, cruelty is mistaken for strength, and ruthlessness is mercy upon ourselves.  
  
So tell me—what is a hero in such a place?  
  
OR Perhaps the answer is already lost, scattered like embers along their path—  
a path that may itself burn away long before its end.

One truth, however, I can promise you,  
this tale is no fairytale.  
  
Not after our so-called heroes set foot where they should never have, among the forbidden ruins  
  
And the story may end far sooner than any of them dare to hope.  
  
…  
  
How sad…  
that it has only just begun.

##### Missä ollaan/Mihin jäätiin:

Ilmassa leijuu raskas, metallinen haju, jossa on sekoitus mätänemistä ja murenevien raunioiden tunkkaista kosteutta – kuin itse maa olisi imenyt sisäänsä kuoleman ja ajan painon.

Tuuli ujeltaa raunioiden läpi, kuljettaen mukanaan pölyä ja hiekanmurusia, jotka rapisevat kivetyksellä kuin kuivuneet lehdet syksyn tuulessa.

Kuulette, kuinka jähmettyneet sudet räsähtelevät kuin kuivat oksat, ääni joka rikkoo raunioiden hiljaisuuden kuin salamanisku. 

Niiden turkki, paakkuuntunut ja revitty, nytkähtää liikkeeseen, kun musta lima pulppuaa ulos – täyttäen niiden suut, silmäkuopat ja repeytyneet haavat. Lima valuu pitkin niiden raatoja, kiiltävänä ja elävänä, kuin se olisi ainoa voima, joka pitää ne kasassa.

Yhtäkkiä kaikki pedot heräävät liikkeeseen, silmät tyhjät ja vääristyneet, ja niiden katseet porautuvat teihin yhtäaikaisesti, kylmänä ja laskelmoivana. 

Liike on kankea ja vääristynyt, kuin näkymätön voima olisi repäissyt ne pystyyn. Kuolleiden, harmaiden ja tyhjien silmien katseet seuraavat teitä, samalla kun mädän ja rapautuvien raunioiden raskas, tunkkainen ilma ympäröi teidät.

Ennen kuin ehditte reagoida, pedot syöksyvät teitä kohti


---

## Suunnitelma

### 1. [[Suonet]] ja matkanteko

- [[Pelaajat]] seuraavat [[Suonet|suonia]], jotka johtavat eteenpäin.
- Tunnelma: hiljaista, pelottavaa, mätää ja kuollutta.
- Uusi hahmo tietää turvallisesta yöpymispaikasta – testaa luottamusta.
- Matkan pituus: n. 5 päivää kävellen.
- [[Sho]] jää kiinni, koska on seurannut heitä.
- Matkan varrella ilmenee [[kiroukset]] (hahmoihin kohdistuvia vaikutuksia).

### 2. Romuuntunut linna – Näky

- [[Pelaajat]] pääsevät linnalle.
- Tunnelma: kuin olisivat [[Musta meri|mustan meren]] pohjalla, ahdistava.
- Näkykohtaus etenee unenomaisesti:
    - [[Livian Majatalo]] → [[Farrignian vankila|palava vankila]] → juhlat → vene [[Musta meri|mustalla merellä]].
- Herääminen: [[Sho]] onnistuu ravistelemaan muut pois illuusiosta.

### 3. Suuret valtaistuimet ja Busle-istuimet

- Salissa viisi [[Valtaistuin|valtaistuinta]] ympyrässä, yksi rikottu.
- [[Suonet]] pysähtyvät [[Mosaiikki|muraalille]] ([[Jaconian kartta|Jaconian valtakunta]]).
- Jokainen istuu vuorollaan: vanhan [[Velhokuninkaat|velhokuninkaan ääni]] kertoo tarinan.
- [[Mosaiikki]] paljastaa kierreportaat alas. Jalanjälkiä näkyvissä.

### 4. Whartin rauniot / katakombit

- Kulku vanhojen [[ansa|ansojen]] läpi.
- Puolet [[ansa|ansoista]] rikki → tuo rappeutunut fiilis.
- Yksi [[ansa]] aktiivinen (nuolia).
- Veripisarat johtavat samaan suuntaan kuin [[Suonet]].
- Tunnelma: kuiskauksia, tarkkailun tunne.
- Edestä kuuluu kiroilua ja ääniä.

### 5. Taikaesineen löytö

- Huone täynnä pylväitä, roomalainen tyyli.
- [[Romenoor]] on loukkaantuneena.
- [[Pelaajat]]illa valinta: suora riskialtis lähestyminen vs. varovainen tutkiminen.

### 6. [[Muinaiset_Taikaesineet|Taikaesine]] & uhka

- [[Musta lima|Musta mönjä]] imeytyy [[Muinaiset_Taikaesineet|Taikaesine]]eseen.
- [[kiroukset|Kirous]] katoaa, ilma selkeytyy.
- Katto romahtaa, [[jabberwock|hirviö]] hyökkää.
- Katse suuntautuu [[Muinaiset_Taikaesineet|Taikaesineen]] haltijaan.

### 7. [[Romenoor]]in uhraus & [[teleportti]]

- [[Romenoor]] käyttää liian voimakasta [[teleportti]]a.
- Veri vuotaa, mutta hän pakottaa Portaalin auki.
- [[Pelaajat]] syöksyvät portaalista läpi.
- [[jabberwock]]in karjaisu jää taakse.

### 8. Maiseman muutos

- [[Pelaajat]] ilmestyvät [[raunion reuna]]lle.
- Sama matka kuin 5 päivän kävely → nyt hetkessä kuljettu.
- [[kiroukset|Kirous]] poissa, ilma kirkasta.
---

## Monologit & kuvaukset

### saavat sudet tapettua

Raunioiden hiljaisuus katkeaa yhdellä, kaukaa kantautuvalla, läpitunkevalla huudolla — niin äkillisesti ettette tiedä onko se varoitus vai avun pyyntö,

[[💀 Xin-Xin]], vain sinä tunnistat tämän tutun äänen.

Nosta katseesi ja näette [[Pelaajat|partysi]], kumppaneidesi kasvot — täynnä kauhua. Ja silloin tunnet sen.

Kipu, joka ei pitäisi kuulua tämän maailman lakeihin. Sisuksesi repäistään auki, käännetään nurin, murskataan ja muovataan uudelleen. Jotain vierasta ja kylmää pakottaa lihaksesi tottelemaan.

Katsoessasi alas, valtava [[Musta piikki|piikki]] on lävistänyt läpisi ja tunnet jalkasi nouseman maasta kuin tämä [[Musta piikki|piikki]] / [[Musta lima|otus]] nostaa sinua ylemmäs. [[Musta lima]] alkaa valua silmistäsi, korvistasi, nenästäsi, suustasi. Jokainen hengenveto on tuskaa, et pysty saamaan henkeä, keuhkosi täyttyy tällä [[Musta lima|mustalla mönjällä]], tunnet kehosi menevän veltoksi,

Kaikki tapahtuu liian nopeasti. Kauhu, kipu ja epätoivo kietoutuvat yhteen niin tiukasti, että mielesi ei ehdi edes käsittää niitä. [[Pelaajat|Ystäväsi]] huutavat, mutta äänet hukkuvat mustaan, läpitunkevaan kaaokseen.

Kaukaisuudessa hahmo juoksee — nopeammin kuin mikään ihminen voisi. Juoksuaskeleet, täynnä pelkoa ja epätoivoa kohti sinua niin kovaa kuin pystyy. Mutta tiedät, syvällä sisälläs hän ei ehdi pelastamaan sinua tällä kertaa.

[[Musta lima]] sekoittuu kyyneleisiisi. Tunnet kuinka ajatuksesi eivät ala olla omiasi enää, haluat vain tuhota, kasvaa, vallata. Yrität sanoa anteeksi kaikesta, mutta sanoja ei tule ulos ja Viimeinen oma ajatuksesi on katumus: ettet pystynyt pitämään lupaustasi, pysyä turvassa, pysyä hengissä.

### Kuvaus Susien mutaatoimisesta

[[💀 Xin-Xin]]in veri alkaa virrata puroina maata pitkin, muodostaen kiemurtelevia polkuja.

Kuolleet, rikkoutuneet ruumiit – joista on jäljellä vain limaisia kasoja – alkavat nykiä maassa.  
Tahmeat massat luikertelevat eteenpäin [[💀 Xin-Xin]]in verta pitkin, liukuen kohti kehoa.

Lima liikkuu uutta kuollutta ruumista kohti kuin nälkäinen peto, valmiina repimään saaliinsa paloiksi, energiaksi.  
Se kietoutuu [[💀 Xin-Xin]]in ympärille tahmeana, vetelänä massana, imen elinvoimaa jokaisesta solusta ja jokaisesta jäljellä olevasta voimasta – veren, lihan ja jäänteiden hengen rippeistä.

Se alkaa kasvaa, muuntua.

Limamassat yhdistyvät, kasautuvat ja sulautuvat. Jokaisen kuolleen suden [[Ooze dire wolf|suden]] lima alkaa valua, liittyä yhteen muodostaen valtavan, vääristyneen olennon.

Sen viisi päätä kääntyilevät arvaamattomasti eri suuntiin. Mustaa limaa valuu jatkuvasti sen massasta, ja sen haju – täynnä mätää, verta ja kuolemaa – täyttää ilman.

Raajoja on liikaa laskea, ja niiden joukossa voi nähdä tutut raajat, jotka kuuluivat ystävällenne, joka seisoi vierellänne vielä hetki sitten.

Edessänne kohoaa nyt jotain, joka ei tunne armoa. Musta lima liikkuu, venyy ja syöksyy eteenpäin. Kaikki, mikä on sen tiellä, on alistettu sen tahdolle.

![[content/Kuvat_kartat/5_hedes_wolf.png]]

---

### Musiikki & tunnelma

- Taustamusiikki:
- Tappelumusiikki:
- Soittolistat:

---

## NPCt – liikkeet ja dialogi

* ***[[Sho]]:**
	- **Suunniteltu liike / teko sessiolle:** Paljastuu seuraajaksi, pitänyt partyä silmällä [[Livia]]n pyynnöstä -> kysyy mitä pieni pinkki on kadonnut -> on pahoillaan ettei ollut paikalla auttamassa. On avainasemassa illuusion herättämisessä
	- **Äänenpainot / fiilis:** Kuiva, monotoninen ja väsyneen kuuloinen, ikään kuin hänellä ei olisi energiaa tuhlattavaksi turhaan puhumiseen.
	- **Tavoitteet pelaajien suuntaan:** Pitää loput heistä turvassa ja pois vaikeuksista ja kerätä tietoa [[Livia]]lle

* ***Lines:**
	- “Jos olisitte oikeasti tarkkaavaisia, olisitte huomanneet minut jo eilen.”
	- “Rauhoittukaa. Jos olisin vihollinen, ette olisi enää pystyssä.”
	- “Seuratkaa jälkiä, ei ole minun vikani että liikutte kuin norsut metsässä"
	- “Armeijalla ei ole [[Livia]]a. En vienyt häntä heille.”
	- “Tyttäresi ei ole edes kaukana täältä, voit olla hänen kansan pian”


* ***[[Romenoor]]:**
	- **Suunniteltu liike / teko sessiolle:** Löytyy pylvässalista loukkaantuneena. Aluksi vastahakoinen, hyökkää sanallisesti pelaajia vastaan. Loppupuolella tekee suuren uhrauksen: käyttää voimakasta teleporttitaikaa pelastaakseen kaikki [[jabberwock]]ilta.
	- **Äänenpainot / fiilis:** Katkera, uupunut, epätoivoinen. Äänessä sarkastinen nauru ja syvä katkeruus, mutta myös häivähdys rakastavan isän pakkomiellettä.
	- **Tavoitteet pelaajien suuntaan:** Suojella tytärtään hinnalla millä hyvänsä. Saada esine → uskoo sen olevan ainoa keino vaihtaa tyttärensä takaisin armeijan käsistä.

* **Lines:**

	- “Ihan loistavaa. Juuri te, viimeiset naamat, jotka halusin nähdä täällä.”
	- “Ja tietenkin mukana on armeijan oma kultapoika. Tai pitäisikö sanoa – entinen.”
	- “[[Sho]], vieläkö sinä kuvittelet olevasi sankari? Sinusta tuli se, mitä vannoit tuhoavasi.”
	- “Hei sano [[Dalia]]lle terveisiä” (Shoun sisko)
	- “Se taikaesine… ette te sitä pidä. Armeija saa sen ennemmin tai myöhemmin. Ja minä saan vihdoin tyttäreni takaisin.”
	- “Ei eie eieie, valehtelet, meidän pitää mennä heti” (Romenoorin vinkkien avulla armeija on löytänyt ja tuhonnut kylän)

---

## Hirviöt / viholliset

[[Ooze dire wolf]]:
* Vähemmän Hit Pointeja -> 25
* Kun tekee vahnkoa viholliseen hiilaa 1d10 + 4  **Action**

![[dire_wolf.png]]

[[Mutantti dire wolf]]:
* 5 Päätä joista jokainen tekee iskun
	* **Bite:** +6 to hit, reach 10ft. **Hit**: 1d8 + 3 piercing ja 1d4 poison. 
* Kun tekee vahnkoa viholliseen hiilaa 1d10 + 4 **Action**
* **Armor Class**: 15 (natural armor)
* **Hit pont**: 150
	* 150hp jaettu 5 päähän -> 30hp per pää -> kun 30hp menny yksi pää tuhoutuu -> 1 vähemmän **Bite attack**
	* Pää tuhoutuu ei voi tulla enään takaisin
	* Peto päästää kamalan karjauksen joka aktivoi **kirouksia DC 16 con**
* **Speed**: 30ft.

[[jabberwock]]:

![[jabberwock.jpg]]

---

### Taistelukartat / sijainnit

[[Warthin rauniot|Warthin raunioiden]] kadut -> ympärillä rikkoutuneita taloja

---

## Ympäristön kuvailut & aistihavainnot

###### **Suot ja matkanteko**

- **Näkö:** Maa on täynnä mustia, kiemurtelevia [[Suonet]] kuin kuivuneita jokia. Puiden lehdet ovat ruskeanharmaita, oksat roikkuvat kuolleina. Taivas on samea, aurinko himmeä.
- **Kuulo:** Ei lintujen laulua, vain satunnaista tuulen ujellusta ja rätisevien oksien ääntä. [[Pelaajat|Partyn]] askeleet kaikuvat kuin liian kovina hiljaisuudessa.
- **Haju / maku:** [[Mätä]]neen lihan ja seisovan veden löyhkä. Ilmassa metallinen maku, kuin Veri olisi imeytynyt maaperään.
- **Tunnelma:** Painostava, tyhjä, Luonto tuntuu vetäytyneen pois ja jättänyt jäljelle vain kuoleman.
---

###### **Romuuntunut linna – Näky**

- **Näkö:** [[Romuuntunut linna]] edessä, hajonneet muurit, kuin Meri olisi repinyt ne palasiksi. Valot ja varjot vääristyvät, seinät tuntuvat liikkuvan.
- **Kuulo:** Äänet kaikuvat oudosti, kuin tulisivat väärästä suunnasta. Ensin [[Livian Majatalo]]n hiljaisuus, sitten huudot [[Farrignian vankila]]sta, Musiikki, ja lopulta veden painostava kohina.
- **Haju / maku:** Ei hajua, ei makua – kuin kaikki Aistit olisi imetty pois. Veden alla olemisen tunne painaa kurkkua.
- **Tunnelma:** Unenomainen, klaustrofobinen, hallitsematon. Jokainen hetki tuntuu lipsuvan käsistä.
---

###### **Valtaistuinsali**

- **Näkö:** Viisi [[Valtaistuin|valtaistuinta]] ympyrässä, kivisiä ja lohkeilleita. Yksi on murskana. Lattian [[Mosaiikki]] kuvaa vanhaa [[Jaconia]]a, pöly ja Hämähäkinseitit täyttävät kulmat.
- **Kuulo:** Kaiku askelista, kaukainen ritinä kuin joku muu liikkuisi salissa. Kun joku istuu, ääni muuttuu – vanhan [[Velhokuninkaat|velhokuninkaan]] sanat kaikuvat suusta.
- **Haju / maku:** Kivipöly, kosteus, ikivanha homeinen ilma. Suussa kitkerä, kuiva tunne.
- **Tunnelma:** Arvokas mutta kuollut. Historia painaa ilmassa, ja jokainen hetki tuntuu kuin joku katsoisi selän takaa.

---

###### **Pylvässali – Taikaesineen löytö**

- **Näkö:** Roomalaisen tyylisiä marmoripylväitä, osa kaatuneita. Katto romahtanut, valonsäteet osuvat Pölyn keskelle. Keskellä [[Romenoor]], verinen ja uupunut.
- **Kuulo:** Hiekan ja kivien rapsahtelu, kaukaiset tippuvat kivenmuruset. [[Romenoor]]in hengitys raskas, ajoittain yskä verestä.
- **Haju / maku:** Kivin ja Pölyn haju, kuivan veren pistävyys. Suussa jauhoinen tunne kivipölystä.
- **Tunnelma:** Suuri, mutta rappeutunut. Huoneessa on viimeisen näytöksen odottava hiljaisuus, kuin Aika pidättäisi hengitystään.

---

###### **Jabberwockin hyökkäys**

- **Näkö:** Katto repeää ja romahtaa, kivenmurikat syöksyvät alas. [[jabberwock]] täyttää huoneen, sen silmät hehkuvat, säteet sulattavat pylväitä.
- **Kuulo:** Kiviet romahtavat, olennon Karjaisu täyttää ilman. Syvä, resonanssimainen ääni joka tuntuu luissa asti.
- **Haju / maku:** Rikki, Savu ja sulaneen kiven katku. Suussa katkera palaneen maku.
- **Tunnelma:** Musertava, epätoivo herää heti. [[jabberwock|Hirviö]]n läsnäolo vääristää Painovoimaa ja saa sydämen hakkaamaan kuin pakokauhun vallassa.

---

## Salaisuudet / käänteet

* [[💀 Xin-Xin]] kuolee -> sisko liityy partyyn
- [[Sho]] on seurannut [[Pelaajat|partyä]]
- [[Velhokuninkaat|Viisi vanhaa velhokuningasta]] -> tarina paljastuu [[Muinaiset_Taikaesineet|Muinaisista taikaesineistä]] 
- [[Romenoor]] on täälä -> tyttären paljastuminen
- [[jabberwock]] -> vartija

---

### Sivupolut / vaihtoehdot

- Ovatko ystävällisiä romenoorille -> pelastaako romenoor heidät

---

### Busle

1. istunto – Ensimmäinen istuin

“Me olimme viisi [[Velhokuninkaat|velhokuningasta]], jotka pitivät [[Jaconia]]n turvassa.  
Meidän kasvomme ja nimemme on unohdettu, mutta velkamme ja voimamme jättivät jäljen maailmaan.  
Yhdessä me puolustimme tätä maata [[Borvaria]]n pimeydeltä.”

---

2. istunto – Toinen istuin

“Hän oli nuorin meistä, ja hänen himonsa oli suuri, liikaa.  
Hän halusi tuhota [[Suden autiomaa]]n ja levittää kaaosta kaikkialle: kuolemaa ja nälkää, sotaa ja pelkoa, tautia ja epäluuloa.

Hän halusi myrkyttää maaperän ja veden, kääntää ystävät vihollisiksi ja taivuttaa maan [[Ihmiset]] ja [[Taikaolennot|taikaolennot]] omaan palvelukseensa.  
Me tiesimme, että hänen valtansa tuhoaisi kaiken.”

---

3. istunto – Kolmas istuin

“Yhdistimme voimamme ja kukistimme hänet.  
Hänen voimansa… se jäi maailmaan tavalla, jota kukaan ei täysin ymmärrä.  
Neljä meistä jakoi hänen voimansa neljään [[Taikaesineet|taikaesineeseen]].  
Näin meidän voimamme pysyivät yhtä suurina ja [[Jaconia]] säilyi turvassa.

Viimeisillä hetkillämme, kun tiesimme elämämme olevan lopussa, kätkimme [[Taikaesineet|taikaesineet]] ja loimme [[jabberwock|suojelijan]] – olennon, joka vartioisi niitä ja HÄNEN voimiaan vielä kauan meidän kuolemamme jälkeen.”

---

4. istunto – Neljäs istuin (varoitus ja kehotus)

“[[Taikaesineet|Taikaesineiden]] puhtaus hiipuu, ja HÄNEN voimansa maailmassa alkaa vääristyä.  
[[jabberwock|Vartija]] ei enää seuraa tarkoitustaan, sen mieli on turmeltunut ja se kantaa mukanaan kaiken vanhan taijan vääristymän.

Pahuus alkaa näyttää kasvonsa, ja meidän voimamme tästä maailmasta hiipuu.  
Pelkäämme HÄNEN paluuta.  
Teidän on autett..v………………”

---

## Session lopetus – siirtymä seuraavaan kertaan

- Mitä vihjeitä / asioita jätetään auki:
- Mitä pelaajien pitäisi huomata seuraavaa sessiota varten: