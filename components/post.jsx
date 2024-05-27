import styled from 'styled-components/native';


const PostView = styled.View`
flex-direction: row-reverse;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  background-color: white;
`;

const PostImage = styled.Image`
  border-radius: 13px;
  width: 100px;
  height: 100px;
  margin-right: 12px; 
`;

const TitleforPost = styled.Text`
  font-size: 18px;
  font-weight: 700;
  font-family: 'Play';

`;

const PostDetails = styled.View`
  justify-content: center;
  flex: 1;

`;

const DescriptionforPost = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;

`;



const truncateTitle = (str) => {
    if (str.lenght > 50) {
        return str.substring(0, 50) + '...';
    }

    return str;
}

export const Post = ({title, ImageUrl, createdAt}) => {
    return (
      
        <PostView>
                <PostImage source = {{uri: ImageUrl}} />
            <PostDetails >
                <TitleforPost>{truncateTitle(title)}</TitleforPost>
                <DescriptionforPost>{createdAt}</DescriptionforPost>
            </PostDetails>
        </PostView>
    );
}