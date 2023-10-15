// 判断是否是视频
export function isVideo(fileName: string): boolean {
  const index = fileName.lastIndexOf('.')
  if (index !== -1) {
    let flag: boolean = false;
    const suffix = fileName.substring(index + 1);
    switch (suffix) {
      case 'mp4':
      case 'mkv': 
      case 'avi': 
      case 'mov': 
      case 'wmv': 
      case 'flv': 
      case 'webm': 
      case 'mpeg': 
      case '3gp': 
      case 'm3u8': // m3u8并非视频扩展名，后端返回的地址是.m3u8 
        flag = true
        break;
      default:
        break;
    }
    return flag;
  } else {
    return false;
  }
}