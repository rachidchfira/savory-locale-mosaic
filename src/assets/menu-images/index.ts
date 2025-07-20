// Menu images imports
import phoBo from './pho.png';
import phoHaiSan from './pho hai san.png';
import phoNew1 from './pho-new.png';
import phoNew2 from './pho-new.png';
import bunChaLua from './Bun Cha Lua.jpg';
import comBoXao from './Com Bo Xao.jpg';
import comSuon from './Com Suon.jpg';
import chaLua from './Cha Lua.png';
import bunMangVit from './Bun Mang Vit.png';
import goiCuon from './Goi Cuon.jpg';
import bunThitNuong from './Bun Thit Nuong.jpg';
import thitSuonChien from './thit suon chien.png';
import vietnameseCoffee from './Vietnamese coffe.png';

export const menuImages = {
  phoBo,
  phoHaiSan,
  phoNew1,
  phoNew2,
  bunChaLua,
  comBoXao,
  comSuon,
  chaLua,
  bunMangVit,
  goiCuon,
  bunThitNuong,
  thitSuonChien,
  vietnameseCoffee
} as const;

export type MenuImageKey = keyof typeof menuImages;

export default menuImages;
