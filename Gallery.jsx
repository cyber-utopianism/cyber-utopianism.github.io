/* eslint-disable no-prototype-builtins */
import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';
// import Comp1638801157233 from '../assets/13_desserts/1638801157233_comp.jpg';

class MyGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
    };
  }

  setCustomTags(i) {
    return i.tags.map((t) => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      );
    });
  }

  render() {
    var images = this.state.images.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
          {i.hasOwnProperty('tags') && this.setCustomTags(i)}
        </div>
      );
      return i;
    });

    return (
      <div
        style={{
          display: 'block',
          height: '100%',
          width: '100%',
          border: '1px solid #ddd',
        }}
      >
        <Gallery images={images} enableImageSelection={false} />
      </div>
    );
  }
}

MyGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const captionStyle = {
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  maxHeight: '240px',
  position: 'absolute',
  bottom: '0',
  width: '100%',
  color: 'white',
  padding: '2px',
  fontSize: '90%',
};

const customTagStyle = {
  wordWrap: 'break-word',
  display: 'inline-block',
  backgroundColor: 'white',
  height: 'auto',
  fontSize: '75%',
  fontWeight: '600',
  lineHeight: '1',
  padding: '.2em .6em .3em',
  borderRadius: '.25em',
  color: 'black',
  verticalAlign: 'baseline',
  margin: '2px',
};

MyGallery.defaultProps = {
  images: [
    // {
    //   src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
    //   thumbnail:
    //     'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg',
    //   thumbnailWidth: 271,
    //   thumbnailHeight: 320,
    //   tags: [{ value: 'Nature', title: 'Nature | Flowers' }],
    //   caption: 'Orange Macro (Tom Eversley - isorepublic.com)',
    // },
    // {
    //   src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    //   thumbnail:
    //     'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 190,
    //   tags: [
    //     { value: 'Architecture', title: 'Architecture | Outdoors' },
    //     { value: 'Industrial', title: 'Industrial' },
    //   ],
    //   caption: '286H (gratisography.com)',
    // },
    // {
    //   src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    //   thumbnail:
    //     'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 148,
    //   tags: [
    //     { value: 'People', title: 'People' },
    //     { value: 'Architecture', title: 'Architecture | Outdoors' },
    //     { value: 'Industrial', title: 'Industrial' },
    //   ],
    //   caption: '315H (gratisography.com)',
    // },
    // {
    //   src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
    //   thumbnail:
    //     'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 213,
    //   caption: '201H (gratisography.com)',
    // },
    // {
    //   src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    //   thumbnail:
    //     'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
    //   thumbnailWidth: 248,
    //   thumbnailHeight: 320,
    //   caption: 'Big Ben (Tom Eversley - isorepublic.com)',
    // },
    // {
    //   src: 'https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg',
    //   thumbnail:
    //     'https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 113,
    //   tags: [
    //     { value: 'People', title: 'People' },
    //     { value: 'Industrial', title: 'Industrial' },
    //   ],
    //   caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
    // },
    // {
    //   src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
    //   thumbnail:
    //     'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
    //   thumbnailWidth: 313,
    //   thumbnailHeight: 320,
    //   caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
    // },
    // {
    //   src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
    //   thumbnail:
    //     'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 213,
    //   tags: [{ value: 'Nature', title: 'Nature | Flowers' }],
    //   caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
    // },
    {
      src: './assets/13_desserts/1638801157233_comp.jpg',
      thumbnail: './assets/13_desserts/1638801157233_comp.jpg',
      tags: [{ value: '13 desserts', title: '13 desserts' },{value:'2022',title:'2022'}],
      caption: ' "croquis de texte" présenté à @atelier.ve.marseille le 5 décembre 2022 pour l\'événement 13desserts du festival Laterna Magica de @fotokino (accrochage collectif, workshop, banquet et performances des membres de l’atelier et des artistes invitXs autour des 13 desserts marseillais)',
    },
    {
      src: '../assets/13_desserts/1638801157268_comp.jpg',
      thumbnail: '../assets/13_desserts/1638801157268_comp.jpg',
      tags: [{ value: '13 desserts', title: '13 desserts' },{value:'2022',title:'2022'}],
      caption: ' "croquis de texte" présenté à @atelier.ve.marseille le 5 décembre 2022 pour l\'événement 13desserts du festival Laterna Magica de @fotokino (accrochage collectif, workshop, banquet et performances des membres de l’atelier et des artistes invitXs autour des 13 desserts marseillais)',
    },
    {
      src: '../assets/13_desserts/1638801157287_compressed.jpg',
      thumbnail: '../assets/13_desserts/1638801157287_compressed.jpg',
      tags: [{ value: '13 desserts', title: '13 desserts' },{value:'2022',title:'2022'}],
      caption: ' "croquis de texte" présenté à @atelier.ve.marseille le 5 décembre 2022 pour l\'événement 13desserts du festival Laterna Magica de @fotokino (accrochage collectif, workshop, banquet et performances des membres de l’atelier et des artistes invitXs autour des 13 desserts marseillais)',
    },
    {
      src: '../assets/dreaming_of_industrial_ruins/IMG_0058_comp.jpg',
      thumbnail: '../assets/dreaming_of_industrial_ruins/IMG_0058_comp.jpg',
      tags: [{ value: 'Dreaming of Industrial Ruins', title: 'Dreaming of Industrial Ruins' },{ value: '2020', title: '2020' }],
      caption: 'D.A/stylism: @heroines_of_god @cyber.utopianism Photo: @bahcestlou',
    },
    {
      src: '../assets/dreaming_of_industrial_ruins/IMG_117_comp.jpg',
      thumbnail: '../assets/dreaming_of_industrial_ruins/IMG_117_comp.jpg',
      tags: [{ value: 'Dreaming of Industrial Ruins', title: 'Dreaming of Industrial Ruins' },{ value: '2020', title: '2020' }],
      caption: 'D.A/stylism: @heroines_of_god @cyber.utopianism Photo: @bahcestlou',
    },
    {
      src: '../assets/TTristana/CI7A8114.jpg',
      thumbnail: '../assets/TTristana/CI7A8114.jpg',
      tags: [{ value: 'Ttristana', title: 'TTristana' },{value:'2021',title:'2021'}],
      caption: 'Stylisme pour la captation vidéo de son live de sortie de résidence au Cabaret aléatoire en Mai 2021  @maurice_morjane & @divinasie',
    },
    {
      src: '../assets/TTristana/CI7A8125.jpg',
      thumbnail: '../assets/TTristana/CI7A8125.jpg',
      tags: [{ value: 'Ttristana', title: 'TTristana' },{value:'2021',title:'2021'}],
      caption: 'Stylisme pour la captation vidéo de son live de sortie de résidence au Cabaret aléatoire en Mai 2021  @maurice_morjane & @divinasie',
    },
    {
      src: '../assets/TTristana/CI7A8155.jpg',
      thumbnail: '../assets/TTristana/CI7A8155.jpg',
      tags: [{ value: 'Ttristana', title: 'TTristana' },{value:'2021',title:'2021'}],
      caption: 'Stylisme pour la captation vidéo de son live de sortie de résidence au Cabaret aléatoire en Mai 2021  @maurice_morjane & @divinasie',
    },
    {
      src: '../assets/TTristana/CI7A8230.jpg',
      thumbnail: '../assets/TTristana/CI7A8230.jpg',
      tags: [{ value: 'Ttristana', title: 'TTristana' },{value:'2021',title:'2021'}],
      caption: 'Stylisme pour la captation vidéo de son live de sortie de résidence au Cabaret aléatoire en Mai 2021  @maurice_morjane & @divinasie',
    },
    {
      src: '../assets/TTristana/CI7A8319.jpg',
      thumbnail: '../assets/TTristana/CI7A8319.jpg',
      tags: [{ value: 'Ttristana', title: 'TTristana' },{value:'2021',title:'2021'}],
      caption: 'Stylisme pour la captation vidéo de son live de sortie de résidence au Cabaret aléatoire en Mai 2021  @maurice_morjane & @divinasie',
    },
    {
      src: '../assets/TTristana/CI7A8387.jpg',
      thumbnail: '../assets/TTristana/CI7A8387.jpg',
      tags: [{ value: 'Ttristana', title: 'TTristana' },{value:'2021',title:'2021'}],
      caption: 'Stylisme pour la captation vidéo de son live de sortie de résidence au Cabaret aléatoire en Mai 2021  @maurice_morjane & @divinasie',
    },
    {
      src: '../assets/TTristana/CI7A8618.jpg',
      thumbnail: '../assets/TTristana/CI7A8618.jpg',
      tags: [{ value: 'Ttristana', title: 'TTristana' },{value:'2021',title:'2021'}],
      caption: 'Stylisme pour la captation vidéo de son live de sortie de résidence au Cabaret aléatoire en Mai 2021  @maurice_morjane & @divinasie',
    },
    {
      src: '../assets/izem/Numeriser.jpeg',
      thumbnail: '../assets/izem/Numeriser.jpeg',
      tags: [{ value: 'Izem', title: 'Izem' },{value:'2021',title:'2021'}],
      caption: 'Texte pour la collection d’art portable de @itdl. Image of a faraway bewitched volcano]',
    },
    {
      src: '../assets/izem/jeannine_x_izem_3.png',
      thumbnail: '../assets/izem/jeannine_x_izem_3.png',
      tags: [{ value: 'Izem', title: 'Izem' },{value:'2021',title:'2021'}],
      caption: 'Texte pour la collection d’art portable de @itdl. Image of a faraway bewitched volcano]',
    } ,
    {
      src: '../assets/mystique_moesha/moesha/_1080533.jpg',
      thumbnail: '../assets/mystique_moesha/moesha/_1080533.jpg',
      tags: [{ value: 'Moesha', title: 'Moesha' },{value:'2021',title:'2021'}],
      caption: '',
    },
    {
      src: '../assets/mystique_moesha/moesha/_1080549.jpg',
      thumbnail: '../assets/mystique_moesha/moesha/_1080549.jpg',
      tags: [{ value: 'Moesha', title: 'Moesha' },{value:'2021',title:'2021'}],
      caption: '',
    },
    {
      src: '../assets/mystique_moesha/moesha/_1080580.jpg',
      thumbnail: '../assets/mystique_moesha/moesha/_1080580.jpg',
      tags: [{ value: 'Moesha', title: 'Moesha' },{value:'2021',title:'2021'}],
      caption: '',
    },
    {
      src: '../assets/mystique_moesha/moesha/_1080587.jpg',
      thumbnail: '../assets/mystique_moesha/moesha/_1080587.jpg',
      tags: [{ value: 'Moesha', title: 'Moesha' },{value:'2021',title:'2021'}],
      caption: '',
    },
    {
      src: '../assets/mystique_moesha/mystique/014_13A_2.jpg',
      thumbnail: '../assets/mystique_moesha/mystique/014_13A_2.jpg',
      tags: [{ value: 'Mystique', title: 'Mystique' },{value:'2021',title:'2021'}],
      caption: '',
    },
    {
      src: '../assets/mystique_moesha/mystique/019_18A.jpg',
      thumbnail: '../assets/mystique_moesha/mystique/019_18A.jpg',
      tags: [{ value: 'Mystique', title: 'Mystique' },{value:'2021',title:'2021'}],
      caption: '',
    },
    {
      src: '../assets/mystique_moesha/mystique/022_21A-1_glissees.jpg',
      thumbnail: '../assets/mystique_moesha/mystique/022_21A-1_glissees.jpg',
      tags: [{ value: 'Mystique', title: 'Mystique' },{value:'2021',title:'2021'}],
      caption: '',
    },
    {
      src: '../assets/mystique_moesha/mystique/035_32A.jpg',
      thumbnail: '../assets/mystique_moesha/mystique/035_32A.jpg',
      tags: [{ value: 'Mystique', title: 'Mystique' },{value:'2021',title:'2021'}],
      caption: '',
    },
    {
      src: '../assets/m3c/m3Ccc_1_1.jpg',
      thumbnail: '../assets/m3c/m3Ccc_1_1.jpg',
      tags: [{ value: 'M3c', title: 'M3c' },{value:'2021',title:'2021'}],
      caption: '~ SCI-FI FLUIDE ~ Full story on @manifesto21 Model: @m3c.music Artistic direction & styling : @cyber.utopianism Artistic direction, photo & digital painting : @manontombe Accessories : @itdl MUA : @insaeii Location : @metaphore.collectif',
    },
    {
      src: '../assets/m3c/m3Ccc_1_11.jpg',
      thumbnail: '../assets/m3c/m3Ccc_1_11.jpg',
      tags: [{ value: 'M3c', title: 'M3c' },{value:'2021',title:'2021'}],
      caption: '~ SCI-FI FLUIDE ~ Full story on @manifesto21 Model: @m3c.music Artistic direction & styling : @cyber.utopianism Artistic direction, photo & digital painting : @manontombe Accessories : @itdl MUA : @insaeii Location : @metaphore.collectif',
    },
    {
      src: '../assets/m3c/m3Ccc_2_11.jpg',
      thumbnail: '../assets/m3c/m3Ccc_2_11.jpg',
      tags: [{ value: 'M3c', title: 'M3c' },{value:'2021',title:'2021'}],
      caption: '~ SCI-FI FLUIDE ~ Full story on @manifesto21 Model: @m3c.music Artistic direction & styling : @cyber.utopianism Artistic direction, photo & digital painting : @manontombe Accessories : @itdl MUA : @insaeii Location : @metaphore.collectif',
    },
    {
      src: '../assets/m3c/m3Ccc_3_11.jpg',
      thumbnail: '../assets/m3c/m3Ccc_3_11.jpg',
      tags: [{ value: 'M3c', title: 'M3c' },{value:'2021',title:'2021'}],
      caption: '~ SCI-FI FLUIDE ~ Full story on @manifesto21 Model: @m3c.music Artistic direction & styling : @cyber.utopianism Artistic direction, photo & digital painting : @manontombe Accessories : @itdl MUA : @insaeii Location : @metaphore.collectif',
    },
    {
      src: '../assets/m3c/m3Ccc_4_11.jpg',
      thumbnail: '../assets/m3c/m3Ccc_4_11.jpg',
      tags: [{ value: 'M3c', title: 'M3c' },{value:'2021',title:'2021'}],
      caption: '~ SCI-FI FLUIDE ~ Full story on @manifesto21 Model: @m3c.music Artistic direction & styling : @cyber.utopianism Artistic direction, photo & digital painting : @manontombe Accessories : @itdl MUA : @insaeii Location : @metaphore.collectif',
    },
    {
      src: '../assets/m3c/m3Ccc_6_11.jpg',
      thumbnail: '../assets/m3c/m3Ccc_6_11.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      tags: [{ value: 'M3c', title: 'M3c' },{value:'2021',title:'2021'}],
      caption: '~ SCI-FI FLUIDE ~ Full story on @manifesto21 Model: @m3c.music Artistic direction & styling : @cyber.utopianism Artistic direction, photo & digital painting : @manontombe Accessories : @itdl MUA : @insaeii Location : @metaphore.collectif',
    },
    {
      src: '../assets/m3c/m3Ccc_7_11.jpg',
      thumbnail: '../assets/m3c/m3Ccc_7_11.jpg',
      tags: [{ value: 'M3c', title: 'M3c' },{value:'2021',title:'2021'}],
      caption: '~ SCI-FI FLUIDE ~ Full story on @manifesto21 Model: @m3c.music Artistic direction & styling : @cyber.utopianism Artistic direction, photo & digital painting : @manontombe Accessories : @itdl MUA : @insaeii Location : @metaphore.collectif',
    },
    {
      src: '../assets/m3c/m3Ccc_11_11.jpg',
      thumbnail: '../assets/m3c/m3Ccc_11_11.jpg',
      tags: [{ value: 'M3c', title: 'M3c' },{value:'2021',title:'2021'}],
      caption: '~ SCI-FI FLUIDE ~ Full story on @manifesto21 Model: @m3c.music Artistic direction & styling : @cyber.utopianism Artistic direction, photo & digital painting : @manontombe Accessories : @itdl MUA : @insaeii Location : @metaphore.collectif',
    },
    {
      src: '../assets/parallele/11/DSC_0818.jpg',
      thumbnail: '../assets/parallele/11/DSC_0818.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/parallele/11/DSC_0821.jpg',
      thumbnail: '../assets/parallele/11/DSC_0821.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/parallele/11/DSC_0875.jpg',
      thumbnail: '../assets/parallele/11/DSC_0875.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/parallele/11/DSC_0893.jpg',
      thumbnail: '../assets/parallele/11/DSC_0893.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/parallele/11/DSC_0963.jpg',
      thumbnail: '../assets/parallele/11/DSC_0963.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/parallele/11/DSC_1002.jpg',
      thumbnail: '../assets/parallele/11/DSC_1002.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/parallele/11/DSC_1046.jpg',
      thumbnail: '../assets/parallele/11/DSC_1046.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/parallele/11/DSC_1048.jpg',
      thumbnail: '../assets/parallele/11/DSC_1048.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/parallele/11/ManifestoXXIDreamy-9.jpg',
      thumbnail: '../assets/parallele/11/ManifestoXXIDreamy-9.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/parallele/11/ManifestoXXIDreamy-10.jpg',
      thumbnail: '../assets/parallele/11/ManifestoXXIDreamy-10.jpg',
      tags: [{ value: 'Parallèle 11', title: 'Parallèle 11' },{value:'2021',title:'2021'}],
      caption: 'À l\'occasion de la 11e édition du festival Parallèle (@plateformeparallele), qui s\'est tenu à jauges réduites du 24 au 30 janvier 2021 concept-shooting en collaboration avec le photographe Robin Plus (@robin.plus), à partir d\'une sélection des œuvres de cinq des artistes exposé.es',
    },
    {
      src: '../assets/oustal/img.jpg',
      thumbnail: '../assets/oustal/img.jpg',
      tags: [{ value: 'L’OUSTAL', title: 'L’OUSTAL' },{value:'2022',title:'2022'}],
      caption: 'atelier.ve.marseille L\'OUSTAL 30/10/21-02/11/21 Hybrides marins, 2021 Colle chaude, mousse expansive, grillage à poules, fausses mèches, bâche de protection, wax, bombe argent et chrome',
    },
    {
      src: '../assets/oustal/img_1.jpg',
      thumbnail: '../assets/oustal/img_1.jpg',
      tags: [{ value: 'L’OUSTAL', title: 'L’OUSTAL' },{value:'2022',title:'2022'}],
      caption: 'atelier.ve.marseille L\'OUSTAL 30/10/21-02/11/21 Hybrides marins, 2021 Colle chaude, mousse expansive, grillage à poules, fausses mèches, bâche de protection, wax, bombe argent et chrome',
    },
    {
      src: '../assets/oustal/img_2.jpg',
      thumbnail: '../assets/oustal/img_2.jpg',
      tags: [{ value: 'L’OUSTAL', title: 'L’OUSTAL' },{value:'2022',title:'2022'}],
      caption: 'atelier.ve.marseille L\'OUSTAL 30/10/21-02/11/21 Hybrides marins, 2021 Colle chaude, mousse expansive, grillage à poules, fausses mèches, bâche de protection, wax, bombe argent et chrome',
    },
    {
      src: '../assets/oustal/img_3.jpg',
      thumbnail: '../assets/oustal/img_3.jpg',
      tags: [{ value: 'L’OUSTAL', title: 'L’OUSTAL' },{value:'2022',title:'2022'}],
      caption: 'atelier.ve.marseille L\'OUSTAL 30/10/21-02/11/21 Hybrides marins, 2021 Colle chaude, mousse expansive, grillage à poules, fausses mèches, bâche de protection, wax, bombe argent et chrome',
    },
    {
      src: '../assets/oustal/img_4.jpg',
      thumbnail: '../assets/oustal/img_4.jpg',
      tags: [{ value: 'L’OUSTAL', title: 'L’OUSTAL' },{value:'2022',title:'2022'}],
      caption: 'atelier.ve.marseille L\'OUSTAL 30/10/21-02/11/21 Hybrides marins, 2021 Colle chaude, mousse expansive, grillage à poules, fausses mèches, bâche de protection, wax, bombe argent et chrome',
    },
    {
      src: '../assets/oustal/img_5.jpg',
      thumbnail: '../assets/oustal/img_5.jpg',
      tags: [{ value: 'L’OUSTAL', title: 'L’OUSTAL' },{value:'2022',title:'2022'}],
      caption: 'atelier.ve.marseille L\'OUSTAL 30/10/21-02/11/21 Hybrides marins, 2021 Colle chaude, mousse expansive, grillage à poules, fausses mèches, bâche de protection, wax, bombe argent et chrome',
    },
    {
      src: '../assets/oustal/img_8.jpg',
      thumbnail: '../assets/oustal/img_8.jpg',
      tags: [{ value: 'L’OUSTAL', title: 'L’OUSTAL' },{value:'2022',title:'2022'}],
      caption: 'atelier.ve.marseille L\'OUSTAL 30/10/21-02/11/21 Hybrides marins, 2021 Colle chaude, mousse expansive, grillage à poules, fausses mèches, bâche de protection, wax, bombe argent et chrome',
    },
    {
      src: '../assets/oustal/img_10.jpg',
      thumbnail: '../assets/oustal/img_10.jpg',
      tags: [{ value: 'L’OUSTAL', title: 'L’OUSTAL' },{value:'2022',title:'2022'}],
      caption: 'atelier.ve.marseille L\'OUSTAL 30/10/21-02/11/21 Hybrides marins, 2021 Colle chaude, mousse expansive, grillage à poules, fausses mèches, bâche de protection, wax, bombe argent et chrome',
    },
    {
      src: '../assets/parallele/12/AglaeMiguel_insta1.jpg',
      thumbnail: '../assets/parallele/12/AglaeMiguel_insta1.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/AglaeMiguel_insta2.jpg',
      thumbnail: '../assets/parallele/12/AglaeMiguel_insta2.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/ClaireBouffay_insta1.jpg',
      thumbnail: '../assets/parallele/12/ClaireBouffay_insta1.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/CollectifGrapain_insta1.jpg',
      thumbnail: '../assets/parallele/12/CollectifGrapain_insta1.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/CollectifGrapain_insta2.jpg',
      thumbnail: '../assets/parallele/12/CollectifGrapain_insta2.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/CollectifGrapain_insta3.jpg',
      thumbnail: '../assets/parallele/12/CollectifGrapain_insta3.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/CollectifGrapain_insta4.jpg',
      thumbnail: '../assets/parallele/12/CollectifGrapain_insta4.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/LeaDeCacqueray_insta1.jpg',
      thumbnail: '../assets/parallele/12/LeaDeCacqueray_insta1.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/LeaDeCacqueray_insta2.jpg',
      thumbnail: '../assets/parallele/12/LeaDeCacqueray_insta2.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/LeaDeCacqueray_insta3.jpg',
      thumbnail: '../assets/parallele/12/LeaDeCacqueray_insta3.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/LeaDeCacqueray_insta4.jpg',
      thumbnail: '../assets/parallele/12/LeaDeCacqueray_insta4.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/PrunePhi_insta1.jpg',
      thumbnail: '../assets/parallele/12/PrunePhi_insta1.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/PrunePhi_insta2.jpg',
      thumbnail: '../assets/parallele/12/PrunePhi_insta2.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/parallele/12/PrunePhi_insta3.jpg',
      thumbnail: '../assets/parallele/12/PrunePhi_insta3.jpg',
      tags: [{ value: 'Parallèle 12', title: 'Parallèle 12' },{value:'2022',title:'2022'}],
      caption: 'UN LIEU, UNE NUIT : CONCEPT-SHOOTING 2.0 en format hybride inspiré des œuvres de @lea.decacqueray, @prunephi, @maevagrapain et @arnaudgrapain du collectif Grapain, @aglaemiguel et @clairebffay. Photographié par @heroines_of_god et Fabrizio Scarpignato',
    },
    {
      src: '../assets/venus/img_5.jpg',
      thumbnail: '../assets/venus/img_5.jpg',
      tags: [{ value: 'venus', title: 'venus' }],
      caption: 'venus',
    },
    {
      src: '../assets/venus/img_6.jpg',
      thumbnail: '../assets/venus/img_6.jpg',
      tags: [{ value: 'venus', title: 'venus' }],
      caption: 'venus',
    },
    {
      src: '../assets/venus/img_9.jpg',
      thumbnail: '../assets/venus/img_9.jpg',
      tags: [{ value: 'venus', title: 'venus' }],
      caption: 'venus',
    },
    {
      src: '../assets/venus/img_12.jpg',
      thumbnail: '../assets/venus/img_12.jpg',
      tags: [{ value: 'venus', title: 'venus' }],
      caption: 'venus',
    },
    {
      src: '../assets/venus/img_13.jpg',
      thumbnail: '../assets/venus/img_13.jpg',
      tags: [{ value: 'venus', title: 'venus' }],
      caption: 'venus',
    },
    {
      src: '../assets/venus/img_22.jpg',
      thumbnail: '../assets/venus/img_22.jpg',
      tags: [{ value: 'venus', title: 'venus' }],
      caption: 'venus',
    },
    {
      src: '../assets/venus/img_24.jpg',
      thumbnail: '../assets/venus/img_24.jpg',
      tags: [{ value: 'venus', title: 'venus' }],
      caption: 'venus',
    },
    {
      src: '../assets/webiliscious/IMG-3809.jpg',
      thumbnail: '../assets/webiliscious/IMG-3809.jpg',
      tags: [{ value: 'webiliscious', title: 'webiliscious' },{value:'2021',title:'2021'}],
      caption: 'Collaboration avec Bridget Low pour l’exposition Monstera au @hangarbelledemai avec @opale.mirman @delphine.denereaz @lena.gayaud du 2 au 11 septembre 2021',
    },
    //{
     // src: '../assets/webiliscious/IMG_3856.jpg',
    //  thumbnail: '../assets/webiliscious/IMG_3856.jpg',
   //   tags: [{ value: 'webiliscious', title: 'webiliscious' },{value:'2021',title:'2021'}],
   //   caption: 'webiliscious',
   // },
   // {
   //   src: '../assets/webiliscious/IMG_3861.jpg',
   //   thumbnail: '../assets/webiliscious/IMG_3861.jpg',
   //   tags: [{ value: 'webiliscious', title: 'webiliscious' },{value:'2021',title:'2021'}],
   //   caption: 'webiliscious',
   // },
   // {
   //   src: '../assets/webiliscious/IMG_3860.jpg',
   //   thumbnail: '../assets/webiliscious/IMG_3860.jpg',
   //   tags: [{ value: 'webiliscious', title: 'webiliscious' },{value:'2021',title:'2021'}],
   // },
   // {
   //   src: '../assets/webiliscious/IMG_3859.jpg',
   //   thumbnail: '../assets/webiliscious/IMG_3859.jpg',
   //   tags: [{ value: 'webiliscious', title: 'webiliscious' },{value:'2021',title:'2021'}],
   //   caption: 'webiliscious',
   // },
   // {
   //   src: '../assets/webiliscious/IMG_3855.jpg',
   //   thumbnail: '../assets/webiliscious/IMG_3855.jpg',
   //   tags: [{ value: 'webiliscious', title: 'webiliscious' },{value:'2021',title:'2021'}],
   //   caption: 'webiliscious',
   // },
      {
      src: '../assets/webiliscious/IMG_1.jpg',
      thumbnail: '../assets/webiliscious/IMG_1.jpg',
      tags: [{ value: 'webiliscious', title: 'webiliscious' },{value:'2021',title:'2021'}],
      caption: 'Collaboration avec Bridget Low pour l’exposition Monstera au @hangarbelledemai avec @opale.mirman @delphine.denereaz @lena.gayaud du 2 au 11 septembre 2021',
    },
    {
      src: '../assets/webiliscious/IMG_2.jpg',
      thumbnail: '../assets/webiliscious/IMG_2.jpg',
      tags: [{ value: 'webiliscious', title: 'webiliscious' },{value:'2021',title:'2021'}],
      caption: 'Collaboration avec Bridget Low pour l’exposition Monstera au @hangarbelledemai avec @opale.mirman @delphine.denereaz @lena.gayaud du 2 au 11 septembre 2021',
    },
    {
      src: '../assets/viree_seche/011Viree_Seche.jpg',
      thumbnail: '../assets/viree_seche/011Viree_Seche.jpg',
      tags: [{ value: 'Virée sèche', title: 'Virée sèche' },{value:'2021',title:'2021'}],
      caption: 'Film catastrophe dans un Marseille psychédélique. Écrit+réalisé par @theolaglisse. Production @grec_info',
    },
    {
      src: '../assets/viree_seche/143Viree_Seche.jpg',
      thumbnail: '../assets/viree_seche/143Viree_Seche.jpg',
      tags: [{ value: 'Virée sèche', title: 'Virée sèche ' },{value:'2021',title:'2021'}],
      caption: 'Film catastrophe dans un Marseille psychédélique. Écrit+réalisé par @theolaglisse. Production @grec_info',
    },
    {
      src: '../assets/viree_seche/144Viree_Seche.jpg',
      thumbnail: '../assets/viree_seche/144Viree_Seche.jpg',
      tags: [{ value: 'Virée sèche ', title: 'Virée sèche' },{value:'2021',title:'2021'}],
      caption: 'Film catastrophe dans un Marseille psychédélique. Écrit+réalisé par @theolaglisse. Production @grec_info',
    },
    {
      src: '../assets/viree_seche/146Viree_Seche.jpg',
      thumbnail: '../assets/viree_seche/146Viree_Seche.jpg',
      tags: [{ value: 'Virée sèche', title: 'Virée sèche' },{value:'2021',title:'2021'}],
      caption: 'Film catastrophe dans un Marseille psychédélique. Écrit+réalisé par @theolaglisse. Production @grec_info',
    },
    {
      src: '../assets/viree_seche/157Viree_Seche.jpg',
      thumbnail: '../assets/viree_seche/157Viree_Seche.jpg',
      tags: [{ value: 'Virée sèche', title: 'Virée sèche' },{value:'2021',title:'2021'}],
      caption: 'Film catastrophe dans un Marseille psychédélique. Écrit+réalisé par @theolaglisse. Production @grec_info',
    },
    {
      src: '../assets/viree_seche/184Viree_Seche.jpg',
      thumbnail: '../assets/viree_seche/184Viree_Seche.jpg',
      tags: [{ value: 'Virée sèche', title: 'Virée sèche' },{value:'2021',title:'2021'}],
      caption: 'Film catastrophe dans un Marseille psychédélique. Écrit+réalisé par @theolaglisse. Production @grec_info',
    },
    {
      src: '../assets/viree_seche/313Viree_Seche.jpg',
      thumbnail: '../assets/viree_seche/313Viree_Seche.jpg',
      tags: [{ value: 'Virée sèche', title: 'Virée sèche' },{value:'2021',title:'2021'}],
      caption: 'Film catastrophe dans un Marseille psychédélique. Écrit+réalisé par @theolaglisse. Production @grec_info',
    },
    {
      src: '../assets/viree_seche/319Viree_Seche.jpg',
      thumbnail: '../assets/viree_seche/319Viree_Seche.jpg',
      tags: [{ value: 'Virée sèche', title: 'Virée sèche' },{value:'2021',title:'2021'}],
      caption: 'Film catastrophe dans un Marseille psychédélique. Écrit+réalisé par @theolaglisse. Production @grec_info',
    },
    {
      src: '../assets/thesaurus_cyber/Cyber_7.jpg',
      thumbnail: '../assets/thesaurus_cyber/Cyber_7.jpg',
      tags: [{ value: 'Thesaurus Cyber And (u_dys)topia', title: 'Thesaurus Cyber And (u_dys)topia'},{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/thesaurus_cyber/Cyber_6.jpg',
      thumbnail: '../assets/thesaurus_cyber/Cyber_6.jpg',
      tags: [{ value: 'Thesaurus Cyber And (u_dys)topia', title: 'Thesaurus Cyber And (u_dys)topia' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/thesaurus_cyber/Cyber_16.jpg',
      thumbnail: '../assets/thesaurus_cyber/Cyber_16.jpg',
      tags: [{ value: 'Thesaurus Cyber And (u_dys)topia', title: 'Thesaurus Cyber And (u_dys)topia' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/thesaurus_cyber/Cyber_20.jpg',
      thumbnail: '../assets/thesaurus_cyber/Cyber_20.jpg',
      tags: [{ value: 'Thesaurus Cyber And (u_dys)topia', title: 'Thesaurus Cyber And (u_dys)topia' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/thesaurus_cyber/Cyber_17.jpg',
      thumbnail: '../assets/thesaurus_cyber/Cyber_17.jpg',
      tags: [{ value: 'Thesaurus Cyber And (u_dys)topia', title: 'Thesaurus Cyber And (u_dys)topia' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/thesaurus_cyber/Cyber_18.jpg',
      thumbnail: '../assets/thesaurus_cyber/Cyber_18.jpg',
      tags: [{ value: 'Thesaurus Cyber And (u_dys)topia', title: 'Thesaurus Cyber And (u_dys)topia' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_1/IMG_20200320_161111.jpg',
      thumbnail: '../assets/quarantine_diaries/day_1/IMG_20200320_161111.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_1/IMG_20200320_161254.jpg',
      thumbnail: '../assets/quarantine_diaries/day_1/IMG_20200320_161254.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_1/IMG_20200320_161622.jpg',
      thumbnail: '../assets/quarantine_diaries/day_1/IMG_20200320_161622.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_1/IMG_20200320_161944.jpg',
      thumbnail: '../assets/quarantine_diaries/day_1/IMG_20200320_161944.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_2/IMG_20200320_152305.jpg',
      thumbnail: '../assets/quarantine_diaries/day_2/IMG_20200320_152305.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_2/IMG_20200320_152650.jpg',
      thumbnail: '../assets/quarantine_diaries/day_2/IMG_20200320_152650.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_3_4/IMG_20200322_183735.jpg',
      thumbnail: '../assets/quarantine_diaries/day_3_4/IMG_20200322_183735.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_3_4/IMG_20200326_231624.jpg',
      thumbnail: '../assets/quarantine_diaries/day_3_4/IMG_20200326_231624.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_8/IMG_20200328_171540.jpg',
      thumbnail: '../assets/quarantine_diaries/day_8/IMG_20200328_171540.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/quarantine_diaries/day_8/IMG_20200328_172937.jpg',
      thumbnail: '../assets/quarantine_diaries/day_8/IMG_20200328_172937.jpg',
      tags: [{ value: 'Quarantine Diaries', title: 'Quarantine Diaries' },{ value: '2020', title: '2020' }],
      caption: '',
    },
    {
      src: '../assets/nEEd_x_gufo/COmpos_A3_1_pages-to-jpg-0001.jpg',
      thumbnail: '../assets/nEEd_x_gufo/COmpos_A3_1_pages-to-jpg-0001.jpg',
      tags: [{ value: 'nEEd x gufo', title: 'nEEd x gufo' },{ value: '2020', title: '2020' }],
       caption: 'Dans le cadre de Pain Perdus, projet de livraison de pains accompagnés d’une microédition en collaboration avec unX ou plusieurXs artistes ou collectifs à l’initiative de @gufo. NOOSxGufo W/@cyber.utopianism NOOS prépare une édition limitée, dégustable et diggable avec @gufo_gufo_gufo',
    },
    {
      src: '../assets/nEEd_x_gufo/COmpos_A3_1_pages-to-jpg-0002.jpg',
      thumbnail: '../assets/nEEd_x_gufo/COmpos_A3_1_pages-to-jpg-0002.jpg',
      tags: [{ value: 'nEEd x gufo', title: 'nEEd x gufo' },{ value: '2020', title: '2020' }],
      caption: 'Dans le cadre de Pain Perdus, projet de livraison de pains accompagnés d’une microédition en collaboration avec unX ou plusieurXs artistes ou collectifs à l’initiative de @gufo. NOOSxGufo W/@cyber.utopianism NOOS prépare une édition limitée, dégustable et diggable avec @gufo_gufo_gufo',
    },
    {
      src: '../assets/nEEd_x_gufo/COmpos_A3_2_pages-to-jpg-0001.jpg',
      thumbnail: '../assets/nEEd_x_gufo/COmpos_A3_2_pages-to-jpg-0001.jpg',
      tags: [{ value: 'nEEd x gufo', title: 'nEEd x gufo' },{ value: '2020', title: '2020' }],
      caption: 'Dans le cadre de Pain Perdus, projet de livraison de pains accompagnés d’une microédition en collaboration avec unX ou plusieurXs artistes ou collectifs à l’initiative de @gufo. NOOSxGufo W/@cyber.utopianism NOOS prépare une édition limitée, dégustable et diggable avec @gufo_gufo_gufo',
    },
    {
      src: '../assets/nEEd_x_gufo/COmpos_A3_2_pages-to-jpg-0002.jpg',
      thumbnail: '../assets/nEEd_x_gufo/COmpos_A3_2_pages-to-jpg-0002.jpg',
      tags: [{ value: 'nEEd x gufo', title: 'nEEd x gufo' },{ value: '2020', title: '2020' }],
      caption: 'Dans le cadre de Pain Perdus, projet de livraison de pains accompagnés d’une microédition en collaboration avec unX ou plusieurXs artistes ou collectifs à l’initiative de @gufo. NOOSxGufo W/@cyber.utopianism NOOS prépare une édition limitée, dégustable et diggable avec @gufo_gufo_gufo',
    },
    {
      src: '../assets/nEEd_x_gufo/COmpos_A3_3_pages-to-jpg-0001.jpg',
      thumbnail: './assets/nEEd_x_gufo/COmpos_A3_3_pages-to-jpg-0001.jpg',
      tags: [{ value: 'nEEd x gufo', title: 'nEEd x gufo' },{ value: '2020', title: '2020' }],
      caption: 'Dans le cadre de Pain Perdus, projet de livraison de pains accompagnés d’une microédition en collaboration avec unX ou plusieurXs artistes ou collectifs à l’initiative de @gufo. NOOSxGufo W/@cyber.utopianism NOOS prépare une édition limitée, dégustable et diggable avec @gufo_gufo_gufo',
    },
    {
      src: '../assets/nEEd_x_gufo/COmpos_A3_3_pages-to-jpg-0002.jpg',
      thumbnail: '../assets/nEEd_x_gufo/COmpos_A3_3_pages-to-jpg-0002.jpg',
      tags: [{ value: 'nEEd x gufo', title: 'nEEd x gufo' },{ value: '2020', title: '2020' }],
      caption: 'Dans le cadre de Pain Perdus, projet de livraison de pains accompagnés d’une microédition en collaboration avec unX ou plusieurXs artistes ou collectifs à l’initiative de @gufo. NOOSxGufo W/@cyber.utopianism NOOS prépare une édition limitée, dégustable et diggable avec @gufo_gufo_gufo',
    },
]
};

export default MyGallery;
