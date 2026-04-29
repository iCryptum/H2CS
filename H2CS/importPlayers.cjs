const fs = require('fs');

const rawText = `S+ (6 pts)
AssT SaaaaN
iNN oJuliThoooo
iNNx D4v1Dx
iTs So FreNNzy
LxThaaaal1
StoRmY v2
SWAT Antiviruz
AssT Bleisser

S (5pts)
AssT Szicko WTF
BlaaaziN 
GuN ShoT
iDaF EsTeBaaNMd
iDaF GettA
iDaF JoTa
iMosT SPLINTER2K
iNNxLxDrAk
iNNxReyHalo
iNNxSicLoNxAjii
J u L y xl
Mariin
Masek
Minds
N0 Pro ReSpAwNx
RoNxLxT
Sparkz
ThatWasSorinha
tn2step

A+ (4.5pts)
AcTiViSioN
AlexisCoMp
Andrexe17
AssT Jag
AssT Judio
AssT Skept1kaL
AssT ZeRo
Bleey iTz
CoMp Juancho
CoMp July 
CoMp Keops
DinamoZ
Duckzz
Dvke FB Gaming
Epilogo
Erick8652
Fk1 Monkey03
FumonLv
GF3 Darkness
GF3 Fabian
GF3 G3FORC3
GF3 JeanPaul
GoaCkZzZ x
H2BXGattiXxJk
HellionStraiker
iEstebanBR
iFORTIN
iMosT Alejo PlI09
iMosT Bauh GG
iMosT Danicol10
iMosT DaaNG3r
iMosT EquinoxX
iMosT Guy
iMosT iController
iMosT iNaipe
iMosT JuanPro
iMosT Keff ZzZ
iMosT Super Sobri
iNanoshot 2kZ
iShinx
iSports 2kz
iTs So Blessito
iTs So CesarxD
iTs So DeaDxZoN
iTs So PuniSheRxL
iTs So Steven
Just Colish Hz
Kirals
Klay
LeNNoX
LvlJilDeGaN
lxl GoTeN lxl
MechxS
Method Man
MiTSukii
N0 Pro JoSelo
N0 Pro Kartalizm
ONX VANDER
Phury 2 PwNs
PrawN
PredatorLLss
Punkoz
RafaGaOeste
Reiinau
RG4 xNaZzZz
RxFxGXS
s p o o k y
SantyMiaz
SaSoRii
SB On3sHoT
SonGoku
Summer
SWAT Pelu
Top MakEshiftTh3
VenuzDragon
Walshy

A (4pts)
AssT Ratzor
ANDREW coL
AssT Bastian
BalttxSarZz
BELJO
BOL1VAR
Brayan AB
Caustic
Clutch / Burn ITZ
CoMp Adrena
CoMp DitroiiDYz
CoMp GODROCHEL
CoMp Kasuo
CoMp LeGen
CoMp Legendaryyy
CoMp Nino
CoMp Raizen
CoMp Sagittario
CoMp Socrates
CoMp Terry
CoMp xjrX
CoMp xNemesisxx
CTK ezzpartako
Cristian Lopez
Cryptum
Dakiti
DDT Neofi7
Deathx
DimiTry
Dusky
Euphoria
Froyy
FxTHaL
G3D Adiidas
G3D Arcanay
G3D Dark/Chaparro
G3D DuVaN Xc
G3D Diozz
G3D GOMEXX
G3D Homero
G3D i X O z Z x
G3D IvIBORTEZlvl
G3D NeiluZz
G3D NOT Fray
G3D Perfect
G3D Rayden
G3D SaNs
G3D Yes 1515
G3D Zaaiden
Genocyber
GF3 GRiiMLY
GF3 Kakashi
GF3 PUNISHER
GF3 xandres02kx 2kz
GoD Galaxi z
GoD SaNs
GoD Xx Jp Xx
Guelo
Helber
iCh0mE l0 2kZ
iDaF FackJack
iDestrunT 2kz
iExillumM 2kZ
iGoDl NelUzz
iKingAka
iMosT Chakal
iMosT GlobaNy
iMosT IYonesTvI
iMosT Kiinvy iTz
iMosT Killer
iMosT Krayzer
iMosT MaFiIaAa
iMosT Murdog Vg
iMosT iNaNdol R
iMosT SeebaaSs
iMosT Silvax
iMosT xBeST HulK
iMosT xiSiKSix
iMosTxChesTeRv3
iPh9lxPReD4T0Rx
iPrede
iReTurNNNN
iSaiki 2kz
iSANTAMA 2kz
iSLasHXX1 2kz
iStDl s4iiK0Zp
iTs So CliX uu
iTs So GloBeR
iTs So JhonxiTho
iTs So ShoTo /Jaal
iWarLocK
Kaiser Ramirez
KaMiKaZe
Kapucho
Katiuz
KILLMASTER
King MaGo
koiiko
LitlusX
Machiavelli
MeNFis
MHaroldC
MS Lone
Michaellx
N44ru
NoTorius
NTxRal
Ph9 Tartarus
Ph9 Warlock
Ph9 zCaTaKooz
PHK LDS
PHK SAIYAM
PrezorHdz
Profeta
Pumking
Rachy
Sebin
SeNseeii
Seya
Shifu VG
SHX Alex
SHX BicTatikoO
SHX Daeriblack
SHX Legolaz
SHX Richard
SHX Rugal
SHX SoyKaos
SHX Warning
SHX Xg4rgol4
Skr3amer
Sp3j0
STARK
StD Trabukko
StevenCG99
ToP Nospheratu
Top PrymnE
UFO Pro
xD3m3ntT3xX
Xempra
xRFs Randy pro
xSergioMz
xSPARTANWOLFx
xXSpecialSoulXx
zBrigGxxx1
ZoDia4KcJc
Zoniik

B+ (3.5 pts)
2xShots
Alejantrox
ALUCARD1717
ArKy
Asthamuz
BackxMoDz
Churfull
CoMp MASAO LvL
CTK Thor
DAMIAN WsK
DDT LeoNaRDox
DDT llsTarll
DDT R4VEN
DDTTheMarinsXxX
Dilan
Doom93
EcHiSeRo Lvl
ELiT iAnDreZz
Eg NiN3
El VeRaX
F3aRk1lleRs
FATHRlvl
Faulty
Fon Seca
G3D Average
G3D Baron Rojo
G3D BlxsTer
G3D brayan123
G3D DeadPool
G3D Eduard
G3D Ikki
G3D Inmortal
G3D iZ Fuzion Zi
G3D KryzWolf
G3D LAV
G3D Leitho
G3D N4DIE
G3D Poli
G3D SaanToz
G3D SerCri
G3D Stone
G3D Wipito
G3D Yenox
garlick
GF3 Anticebos
GF3 BLACKMASTER
GF3 Wilinton
GoD Banster
GoD Levi
Gohan
Gomelo
GOT Yoryo
H2K Naru
HermesRdz
Hinexus
Hitman
iBYakox
iCol JUDAAX
iG3Dl Spectro
iMosT Aiizen
iMosT Camilo
iMosT COMPAX
iMosT ghost 12
iMosT h3r3rx
iMosT KronoZzz
iMosT Rayku
iMosT ReyBlack
iMosT ZikosiXx
iMosTxXD3h1dArAx
INN BRONCHO
iTs So Blindz
iTs So Brayan
iTs So Sangarlo
iTs So Yessi
JuanPat
K41VO
Kairox
Kblocker
Killimanjaro
KillShot
Kimera
Kratoz
Lly
LordTaz
Luis is mad
LvlJuAn
MasterKLegend
Medayork
MS iToweer
MS TUNDER
Naka murfee
NARCOS
Oppr3ssor 
Panic Prxss
Ph9 General
Ph9xShooCkZitho
PHK PERO
Predeterminado
PrH2ZuB Zero
R4Zi3L
RAR CrispierT
RAR Helios
RAR Logan
SALINAS / Chapulii
sh3rmanLvl
SHX DOMINATOR
SHX Donet
SHX Dreiko
SHX JAMSEK
SHX MeNoR
SHX Miloc
SHX Noa
SHX SlipNot
StD THE SNAKE
SWAT Fantasma
SWAT Nemesiz
SWAT Soldier
Tank 2 Nasty
TgC Bambiz
The Hereje
ToP C4ZADOR
ToP Magnex
Vampy Saenz
VeGaaaTx
Who iS OiiLeoO
x Ander x
xSakuPwn
xSauronx
xVEGETAx
Yugi
Zeus`;

const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
const players = [];
let currentRank = '';
let idCount = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.match(/^[SAB]\+? \(/)) {
    currentRank = line.split(' ')[0];
  } else {
    players.push({
      id: idCount++,
      name: line,
      rank: currentRank,
      status: 'ACTIVO' // As requested by some examples
    });
  }
}

fs.writeFileSync('src/data/players.json', JSON.stringify(players, null, 2));
console.log('Generated players.json with ' + players.length + ' players.');
