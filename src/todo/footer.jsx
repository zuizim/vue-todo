import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'Jerry',
      date: 'Jan.25,2018',
      link: 'https://www.imooc.com/video/16412'
    }
  },
  render() {
    return (
      <div id="footer">
        <p class="center">written by {this.author} on {this.date}</p>
        <p class="center"><a href={this.link}>感谢慕课课程视频</a></p>
      </div>
    )
  }
}