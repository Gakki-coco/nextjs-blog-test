import Link from 'next/link'
import _ from 'lodash'

type Options = {
    count: number
    page: number
    totalPage: number
    urlMaker?: (n: number) => string
}

const defaultUrlMaker = (n: number) => `?page=${n}`

export const usePager = (options: Options) => {
    const {count, page, totalPage, urlMaker: _urlMaker} = options
    const urlMaker = _urlMaker || defaultUrlMaker
    const numbers = []
    numbers.push(1)
    for (let i = page - 3; i <= page + 3; i++) {
        numbers.push(i)
    }
    numbers.push(totalPage)

    const x = _.uniq(numbers).sort((a, b) => a - b).filter(n => n >= 1 && n <= totalPage)
    const pageNumbers = x.reduce((result, current) => current - (result[result.length - 1] || 0) === 1 ?
        result.concat(current) : result.concat(-1, current), [])
    const pager = (
        <div className='wrapper'>
            共 {count} 篇文章，当前是第 {page} / {totalPage} 页
            {
                page !== 1 &&
                <Link href={urlMaker(page - 1)}>
                    <a>上一页</a>
                </Link>
            }

            {pageNumbers.map(n => n === -1 ? <span>...</span> : <Link href={urlMaker(n)}><a>{n}</a></Link>)}

            {
                page < totalPage &&
                <Link href={urlMaker(page + 1)}>
                    <a>下一页</a>
                </Link>
            }

            <style jsx>{`
                .wrapper > a, .wrapper > span {
                  margin: 0 8px;
                }
            `}</style>
        </div>
    )
    return {
        pager
    }
}