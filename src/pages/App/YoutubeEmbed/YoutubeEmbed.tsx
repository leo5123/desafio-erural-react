
import PropTypes from 'prop-types';
import styles from './YoutubeEmbed.module.scss';

const YoutubeEmbed = ({ embedId } : {embedId:any}) => (
    <div className={styles.responsiveIframe}>
    
        <iframe
            width="850" height="500"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Youtube video"
            className={styles.iframe}
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string
};

export default YoutubeEmbed;

  

