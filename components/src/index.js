import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from  './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments ">
          <ApprovalCard>
            <div>
              <h4>Будте внимательны!</h4>
              Вы действительно хотите это сделать?
            </div>
          </ApprovalCard>

        
          <ApprovalCard>
            <CommentDetail
              author="Sam"
              timeAgo="Todey at 4:50PM"
              post="Супер жизнь у этих чудаков!" 
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author="Alex"
              timeAgo="Todey at 2:00AM"
              post="Не знаю как выживать в карантине..."
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          
          <ApprovalCard>
            <CommentDetail
              author="Jane"
              timeAgo="Ysterday at 5:00PM"
              post="Люблю холодное вино"
              avatar={faker.image.avatar()}
          />
          </ApprovalCard>
          
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))


