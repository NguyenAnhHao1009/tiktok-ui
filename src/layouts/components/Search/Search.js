import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const [showResult, setShowResult] = useState(true);

    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();

        setLoading(true);
    }, [debouncedValue]);

    const searchInputRef = useRef();

    const handleResetSearch = () => {
        setSearchValue('');
        setSearchResult([]);
        searchInputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        } else {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div></div> tag around the reference element solves
        // this by  creating a new parentNode context

        <div>
            <HeadlessTippy
                onClickOutside={handleHideResult}
                delay={[50, 300]}
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((each) => (
                                <AccountItem key={each.id} data={each} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={searchInputRef}
                        value={searchValue}
                        onChange={handleChange}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleResetSearch}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon className={cx('search-icon')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
