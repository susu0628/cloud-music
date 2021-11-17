import React, { useEffect, useRef, useState } from 'react';
import BScroll from 'better-scroll';
import { ScrollContainer } from './style';

const Scroll = ({
  children,
  direction = 'vertical',  // 滚动方向 默认为垂直方向
  click = true, // 是否支持点击
  refresh = true,  // 是否刷新
  onScroll,  // 滑动触发的回调函数
  pullUp, // 上拉加载逻辑
  pullDown, // 下拉加载逻辑
  pullUploading = false, // 是否显示上拉loading动画
  pullDownLoading = false, // 是否显示下拉loading动画
  bounceTop = true, // 是否支持向上吸顶
  bounceBottom = true // 是否支持向下吸顶
}) => {
  const scrollContainerRef = useRef();
  const [bScroll, setBScroll] = useState();
  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3, // 实时派发scroll事件
      click,
      bounce: { // 当滚动超过边缘时会有一小段回弹动画
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    setBScroll(scroll)
    return () => {
      setBScroll(null)
    }
  }, [])

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    // on(type, fn, [context]) 监听当前实例上的钩子函数 如：scroll、scrollEnd等
    bScroll.on('scroll', (scroll) => {
      onScroll(scroll)
    })
    return () => {
      // off(type, fn)  移除自定义事件监听器。只会移除这个回调的监听器
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    // 触发时机：滚动结束或者让一个正在滚动的content强制停止
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp()
      }
    })
    return () => {
      bScroll.off('scrollEnd')
    }
  }, [pullUp, bScroll])

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    // 触发时机：用户手指离开滚动区域
    bScroll.on('touchEnd', (pos) => {
      if (pos.y > 50) { // 判断用户下拉
        pullDown()
      }
    })
    return () => {
      bScroll.off('touchEnd')
    }
  }, [pullDown, bScroll])

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  })


  return (
    <ScrollContainer ref={scrollContainerRef}>
      {children}
    </ScrollContainer>
  )
}
export default Scroll;