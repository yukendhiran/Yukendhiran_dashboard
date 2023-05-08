import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card(props) {
	
	
  return (
    <div>
    
      <div 
		style={{ backgroundColor: props.accent }}     
      className='lg:w-[150px] xl:w-[221.05px] lg:h-[90px] lg:rounded-md  xl:h-[120px] xl:rounded-[20px]'
      >
        <FontAwesomeIcon icon={props.icon} color="black" className='xl:ml-[169px] lg:ml-[120px] lg:mt-[10px]  xl:mt-[20px]' />
        <div className=' lg:ml-[15px]   xl:ml-[25px]  font-sansl font-normal lg:text-[14px]  xl:text-[14px] xl:leading-[16.8px]'>{props.title}</div>
        <div className='lg:ml-[15px] xl:ml-[25px] xl:mt-[5px] font-sanso font-normal lg:text-[12px]  xl:text-[24px] xl:leading-[32.8px]'>{props.count}</div>
      </div>
    </div>
  );
}