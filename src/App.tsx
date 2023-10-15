import { useEffect, useState } from 'react';
import './App.less';
import { LeftOutline } from 'antd-mobile-icons';
import ImageViewer from './image-viewer'
import { isVideo } from './image-viewer/utils';
import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.mp4';
import five from './assets/5.mp4';

interface ImageType {
  url: string;
}

function App() {
  const [images, setImages] = useState<ImageType[]>([]);

  const handleClick = (index: number) => {
    const previewImages: string[] = [];
    images.forEach((it: ImageType) => {
      previewImages.push(it.url);
    })
    ImageViewer.Multi.show({
      images: previewImages,
      defaultIndex: index,
      renderFooter: () => <LeftOutline style={{ fontSize: 20, color: 'white' }} />
    })
  }

  useEffect(() => {
    setImages([
      { url: one },
      { url: five },
      { url: two },
      { url: three },
      { url: four },
    ])
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          images.map((it: ImageType, index: number) => {
            return (
              <div className='pic' onClick={() => handleClick(index)} key={it.url}>
                {
                  it.url.endsWith('jpg') ? <img src={it.url} alt="" /> :
                    <video autoPlay={true}>
                      <source src={it.url} />
                    </video>
                }
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
