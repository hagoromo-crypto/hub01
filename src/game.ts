import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"
import Script2 from "../7e78cd70-5414-4ec4-be5f-198ec9879a5e/src/item"
import Script3 from "../ab743f36-176b-4e74-897e-19e28cc6e425/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(14.240118026733398, 3.511324882507324, 13.433237075805664),
  rotation: new Quaternion(-4.065307948809176e-15, -0.40111613273620605, 4.781677276355367e-8, -0.9160272479057312),
  scale: new Vector3(3.6887784004211426, 3.375, 1.9494459629058838)
})
nft.addComponentOrReplace(transform2)
const nftShape = new NFTShape("ethereum://0x5d00d312e171be5342067c09bae883f9bcb2003b/30574")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(14.69124698638916, 1, 12.61582088470459),
  rotation: new Quaternion(-3.690772002389953e-15, -0.5555702447891235, 6.622913417686505e-8, -0.8314695954322815),
  scale: new Vector3(3.459066152572632, 3.2804837226867676, 1.7825267314910889)
})
nft2.addComponentOrReplace(transform3)
const nftShape2 = new NFTShape("ethereum://0x5d00d312e171be5342067c09bae883f9bcb2003b/25255")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const nft6 = new Entity('nft6')
engine.addEntity(nft6)
nft6.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(12.388657569885254, 1, 14.243874549865723),
  rotation: new Quaternion(-7.0243628691457616e-9, 0.09801711142063141, 1.457097886792269e-9, 0.9951847791671753),
  scale: new Vector3(3.750020980834961, 3, 1.0000057220458984)
})
nft6.addComponentOrReplace(transform4)
const nftShape3 = new NFTShape("ethereum://0x5d00d312e171be5342067c09bae883f9bcb2003b/25236")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft6.addComponentOrReplace(nftShape3)

const teleport = new Entity('teleport')
engine.addEntity(teleport)
teleport.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(14.322550773620605, 0, 1.1641167402267456),
  rotation: new Quaternion(4.006679716332022e-15, 0.7184963822364807, -8.565143616579007e-8, -0.6955307126045227),
  scale: new Vector3(0.5100003480911255, 0.5, 0.5000002980232239)
})
teleport.addComponentOrReplace(transform5)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseSand_01/FloorBaseSand_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform6)

const teleport2 = new Entity('teleport2')
engine.addEntity(teleport2)
teleport2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(8.51138687133789, 0, 15.249903678894043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport2.addComponentOrReplace(transform7)

const teleport3 = new Entity('teleport3')
engine.addEntity(teleport3)
teleport3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(7.011386871337891, 0, 15.249903678894043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport3.addComponentOrReplace(transform8)

const teleport4 = new Entity('teleport4')
engine.addEntity(teleport4)
teleport4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(5.511387348175049, 0, 15.249903678894043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport4.addComponentOrReplace(transform9)

const teleport5 = new Entity('teleport5')
engine.addEntity(teleport5)
teleport5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(4.011387348175049, 0, 15.249903678894043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport5.addComponentOrReplace(transform10)

const teleport6 = new Entity('teleport6')
engine.addEntity(teleport6)
teleport6.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(2.488612651824951, 0, 15.250290870666504),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport6.addComponentOrReplace(transform11)

const tree = new Entity('tree')
engine.addEntity(tree)
tree.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(13.879593849182129, 0, 13.975139617919922),
  rotation: new Quaternion(1.7912677956454784e-15, -0.1950903683900833, 2.3256582437625184e-8, -0.9807853102684021),
  scale: new Vector3(1.0000014305114746, 1.1472723484039307, 1.0000014305114746)
})
tree.addComponentOrReplace(transform12)
const gltfShape2 = new GLTFShape("models/HWN20_Tree_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
tree.addComponentOrReplace(gltfShape2)

const signpostTree = new Entity('signpostTree')
engine.addEntity(signpostTree)
signpostTree.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(5.5, 1.6090991497039795, 15.750097274780273),
  rotation: new Quaternion(6.691670821108589e-15, -1, 1.1920927533992653e-7, -7.450580596923828e-8),
  scale: new Vector3(4.153737545013428, 3.49953031539917, 1)
})
signpostTree.addComponentOrReplace(transform13)

const teleport7 = new Entity('teleport7')
engine.addEntity(teleport7)
teleport7.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(15.250290870666504, 3.5762786865234375e-7, 9.51138687133789),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport7.addComponentOrReplace(transform14)

const signpostTree2 = new Entity('signpostTree2')
engine.addEntity(signpostTree2)
signpostTree2.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(15.750097274780273, 1.446375846862793, 6.499999046325684),
  rotation: new Quaternion(1.1837153300739076e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(4.153737545013428, 3.49953031539917, 1)
})
signpostTree2.addComponentOrReplace(transform15)

const teleport8 = new Entity('teleport8')
engine.addEntity(teleport8)
teleport8.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(15.249903678894043, 2.384185791015625e-7, 7.988611698150635),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport8.addComponentOrReplace(transform16)

const teleport9 = new Entity('teleport9')
engine.addEntity(teleport9)
teleport9.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(15.249903678894043, 5.960464477539063e-8, 6.488612174987793),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport9.addComponentOrReplace(transform17)

const teleport10 = new Entity('teleport10')
engine.addEntity(teleport10)
teleport10.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(15.249903678894043, 0, 4.988612174987793),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport10.addComponentOrReplace(transform18)

const teleport11 = new Entity('teleport11')
engine.addEntity(teleport11)
teleport11.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(15.249902725219727, 0, 3.488612413406372),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport11.addComponentOrReplace(transform19)

const signpostTree3 = new Entity('signpostTree3')
engine.addEntity(signpostTree3)
signpostTree3.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(15.507766723632812, 1.0305261355370021e-7, 1.1418241262435913),
  rotation: new Quaternion(4.006679716332022e-15, 0.7184963822364807, -8.565143616579007e-8, -0.6955307126045227),
  scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
})
signpostTree3.addComponentOrReplace(transform20)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(teleport, {"x":"-92","y":"-74","name":"Ethermon house"}, createChannel(channelId, teleport, channelBus))
script1.spawn(teleport2, {"x":"-48","y":"-57","name":""}, createChannel(channelId, teleport2, channelBus))
script1.spawn(teleport3, {"x":"-92","y":"-88","name":""}, createChannel(channelId, teleport3, channelBus))
script1.spawn(teleport4, {"x":"49","y":"-91","name":""}, createChannel(channelId, teleport4, channelBus))
script1.spawn(teleport5, {"x":"91","y":"38","name":""}, createChannel(channelId, teleport5, channelBus))
script1.spawn(teleport6, {"x":"72","y":"39","name":""}, createChannel(channelId, teleport6, channelBus))
script2.spawn(signpostTree, {"text":"\nEthermon Wild-grass\nLEGENDARY locations\nwith garden + egg meta","fontSize":30}, createChannel(channelId, signpostTree, channelBus))
script1.spawn(teleport7, {"x":"137","y":"-23","name":""}, createChannel(channelId, teleport7, channelBus))
script2.spawn(signpostTree2, {"text":"\nEthermon Wild-grass\nLEGENDARY locations\nwith garden or egg meta","fontSize":30}, createChannel(channelId, signpostTree2, channelBus))
script1.spawn(teleport8, {"x":"58","y":"-24","name":""}, createChannel(channelId, teleport8, channelBus))
script1.spawn(teleport9, {"x":"-36","y":"3","name":""}, createChannel(channelId, teleport9, channelBus))
script1.spawn(teleport10, {"x":"142","y":"-59","name":""}, createChannel(channelId, teleport10, channelBus))
script1.spawn(teleport11, {"x":"88","y":"29","name":""}, createChannel(channelId, teleport11, channelBus))
script3.spawn(signpostTree3, {"text":"Ethermon\nHouse","fontSize":50}, createChannel(channelId, signpostTree3, channelBus))