
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import './App.css';


// 1. 왼쪽 : 연락처 등록하는 폼 / 오른쪽 : 연락처 리스트와 검색창
// 2. 리스트에 유저 이름과 전화번호 추가 기능
// 3. 리스트에 아이템이 몇 개 있는지 알 수 있다.
// 4. 사용자가 유저를 이름 검색으로 찾을 수 있다.
function App() {
  return (
    <div>
      <h1 className='title'>연락처</h1>
      <div className='wrap'>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
