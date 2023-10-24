import { useDispatch } from 'react-redux';
import { Icon } from '../../../../../../components';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';
import styled from 'styled-components';

const CommentContainer = ({ className, postId, id, author, publishedAt, content }) => {
	const dispatc = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatc(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatc(removeCommentAsync(requestServer, postId, id));
					dispatc(CLOSE_MODAL);
				},
				onCancel: () => dispatc(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id="fa-user-circle-o"
							size="18px"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							id="fa-calendar-o"
							size="18px"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id="fa-trash-o"
				size="21px"
				margin="0 0 0 10px"
				onClick={() => onCommentRemove(id)}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .author {
		display: flex;
	}
	& .published-at {
		display: flex;
	}

	& .comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px solid #000;
		// font-size: 40px;
	}
`;