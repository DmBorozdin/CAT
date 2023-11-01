import { FC, useState, useEffect } from 'react';
import { ICurrenci, Select, useGetCurrenciesQuery } from '../../shared';
import catLogo from '../../shared/icon/Kitten.png';
import styles from './Main.module.scss';

const Main: FC = () => {
  const { data: currencies, isSuccess, isLoading } = useGetCurrenciesQuery();
  const [selectedOption, setSelectedOption] = useState(currencies?.data[0]);

  useEffect(() => {
    setSelectedOption(currencies?.data[0]);
  }, [isSuccess]);

  const handleOptionChange = (value: ICurrenci) => {
    setSelectedOption(value);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>CAT</h1>
            <p className={styles.titleDescription}>currencies academic terms</p>
          </div>
          <div className={styles.select}>
            {isSuccess && selectedOption && (
              <Select
                options={currencies?.data}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
              />
            )}
          </div>
        </div>
        <div className={styles.logoContainer}>
          <img src={catLogo} alt='Изображение кошки' />
        </div>
      </header>
      <main className={styles.main}>
        {isSuccess && <p className={styles.mainText}>{selectedOption?.name}</p>}
        {isLoading && <div>Загрузка ...</div>}
      </main>
    </div>
  );
};

export default Main;
