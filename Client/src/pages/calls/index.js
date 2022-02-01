import Header from '../header';
import Footer from '../footer';
import Content from './content';

const Calendar = () =>{
    return(
        <div>
            <Header title={'On-Call Support'}/>
            <Content />
            <Footer />
        </div>
    );
}
export default Calendar;