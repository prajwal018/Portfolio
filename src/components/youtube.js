import PropTypes from 'prop-types';
import React from 'react';

const YoutubeEmbed = ({ embedId }) => (
	<div className="video-responsive">
		<iframe
			width="853"
			height="480"
			src={`https://www.youtube.com/embed/Y2jyjfcp1as`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
		/>
	</div>
);

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
