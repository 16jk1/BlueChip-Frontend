import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import { 
  AHFS,
  AHFT,
  AHDS,
  AHDT,
  ALFS,
  ALFT,
  ALDS,
  ALDT,
  PHFS,
  PHFT,
  PHDS,
  PHDT,
  PLFS,
  PLFT,
  PLDS,
  PLDT
} from '../definitions/BriggsDef'

class Briggs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAHFS: false,
      showAHFT: false,
      showAHDS: false,
      showAHDT: false,
      showALFS: false,
      showALFT: false,
      showALDS: false,
      showALDT: false,
      showPHFS: false,
      showPHFT: false,
      showPHDS: false,
      showPHDT: false,
      showPLFS: false,
      showPLFT: false,
      showPLDS: false,
      showPLDT: false
    }
    this.onAHFS_click = this.onAHFS_click.bind(this)
    this.onAHFT_click = this.onAHFT_click.bind(this)
    this.onAHDS_click = this.onAHDS_click.bind(this)
    this.onAHDT_click = this.onAHDT_click.bind(this)
    this.onALFS_click = this.onALFS_click.bind(this)
    this.onALFT_click = this.onALFT_click.bind(this)
    this.onALDS_click = this.onALDS_click.bind(this)
    this.onALDT_click = this.onALDT_click.bind(this)
    this.onPHFS_click = this.onPHFS_click.bind(this)
    this.onPHFT_click = this.onPHFT_click.bind(this)
    this.onPHDS_click = this.onPHDS_click.bind(this)
    this.onPHDT_click = this.onPHDT_click.bind(this)
    this.onPLFS_click = this.onPLFS_click.bind(this)
    this.onPLFT_click = this.onPLFT_click.bind(this)
    this.onPLDS_click = this.onPLDS_click.bind(this)
    this.onPLDT_click = this.onPLDT_click.bind(this)
  }

  renderAHFS() {
    return (
      <AHFS
        title={'AHFS'}
        content={`당신은 사자와 같이 전략적으로 행동하며 한 우물만 파는 공격적인 투자`}
        onBackClick={this.onAHFS_click}
      />
    )
  }

  renderAHFT() {
    return (
      <AHFT
        title={'당신은 AHFT 입니다 '}
        content={`호랑이처럼 민첩하고 대범한 판단력이 빠른 투자유형`}
        onBackClick={this.onAHFT_click}
      />
    )
  }

  renderAHDS() {
    return (
      <AHDS
        title={'당신은 AHDS 입니다'}
        content={`고양이처럼 치밀하고 활동적이며 계산적인 투자유형`}
        onBackClick={this.onAHDS_click}
      />
    )
  }

  renderAHDT() {
    return (
      <AHDT
        title={'늑대'}
        content={`모험을 즐기는 팔방미인형 투자유형`}
        onBackClick={this.onAHDT_click}
      />
    )
  }

  renderALFS() {
    return (
      <ALFS
        title={'판다'}
        content={`안정성을 추구하고 미래를 설계하는 투자유형`}
        onBackClick={this.onALFS_click}
      />
    )
  }

  renderALFT() {
    return (
      <ALFT
        title={'불곰'}
        content={`필요에 의해서 재빠르게 움직이는 투자유형`}
        onBackClick={this.onALFT_click}
      />
    )
  }

  renderALDS() {
    return (
      <ALDS
        title={'얼룩말'}
        content={`활동적이지만 위험감수는 피하는 스타일`}
        onBackClick={this.onALDS_click}
      />
    )
  }

  renderALDT() {
    return (
      <ALDT
        title={'치타'}
        content={`트렌드를 잘 살피고 시장에 재빨리 대응하는 유형`}
        onBackClick={this.onALDT_click}
      />
    )
  }

  renderPHFS() {
    return (
      <PHFS
        title={'코알라'}
        content={`대체로 소심하지만 도전적인 면이 있는 투자유형`}
        onBackClick={this.onPHFS_click}
      />
    )
  }

  renderPHFT() {
    return (
      <PHFT
        title={'토끼'}
        content={`민첩하고 눈치 있게 대처하는 투자자`}
        onBackClick={this.onPHFT_click}
      />
    )
  }

  renderPHDS() {
    return (
      <PHDS
        title={'유니콘'}
        content={`실제로 보기 매운 드문 유형, 설명 불가`}
        onBackClick={this.onPHDS_click}
      />
    )
  }

  renderPHDT() {
    return (
      <PHDT
        title={'유니콘'}
        content={`실제로 보기 매운 드문 유형, 설명 불가`}
        onBackClick={this.onPHDT_click}
      />
    )
  }

  renderPLFS() {
    return (
      <PLFS
        title={'흰수염고래'}
        content={`묵묵하게 기다릴 줄 아는 인내형`}
        onBackClick={this.onPLFS_click}
      />
    )
  }

  renderPLFT() {
    return (
      <PLFT
        title={'돌고래'}
        content={`차분하게 기다리지만 기회를 놓치지 않는 유형`}
        onBackClick={this.onPLFT_click}
      />
    )
  }

  renderPLDS() {
    return (
      <PLDS
        title={'거북이'}
        content={`당장은 아무것도 안 하는듯 하나 의외의 전략가 유형`}
        onBackClick={this.onPLDS_click}
      />
    )
  }

  renderPLDT() {
    return (
      <PLDT
        title={'오리너구리'}
        content={`어디에도 있으나 어디에도 없는 유형`}
        onBackClick={this.onPLDT_click}
      />
    )
  }

  render() {
    let showAHFS = this.state.showAHFS
    let showAHFT = this.state.showAHFT
    let showAHDS = this.state.showAHDS
    let showAHDT = this.state.showAHDT
    let showALFS = this.state.showALFS
    let showALFT = this.state.showALFT
    let showALDS = this.state.showALDS
    let showALDT = this.state.showALDT
    let showPHFS = this.state.showPHFS
    let showPHFT = this.state.showPHFT
    let showPHDS = this.state.showPHDS
    let showPHDT = this.state.showPHDT
    let showPLFS = this.state.showPLFS
    let showPLFT = this.state.showPLFT
    let showPLDS = this.state.showPLDS
    let showPLDT = this.state.showPLDT
    if (showAHFS) {
      return this.renderAHFS()
    } else if (showAHFT) {
      return this.renderAHFT()
    } else if (showAHDS) {
      return this.renderAHDS()
    } else if (showAHDT) {
      return this.renderAHDT()
    } else if (showALFS) {
      return this.renderALFS()
    } else if (showALFT) {
      return this.renderALFT()
    } else if (showALDS) {
      return this.renderALDS()
    } else if (showALDT) {
      return this.renderALDT()
    } else if (showPHFS) {
      return this.renderPHFS()
    } else if (showPHFT) {
      return this.renderPHFT()
    } else if (showPHDS) {
      return this.renderPHDS()
    } else if (showPHDT) {
      return this.renderPHDT()
    } else if (showPLFS) {
      return this.renderPLFS()
    } else if (showPLFT) {
      return this.renderPLFT()
    } else if (showPLDS) {
      return this.renderPLDS()
    } else if (showPLDT) {
      return this.renderPLDT()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">당신은</h1>
        <h2 className="display-6 resultTxt">{this.props.resultBriggs} </h2>
        <h3 className="display-4 title"> 입니다! </h3>
        <hr className="my-5" />
        <p className="lead">유형들의 의미는?</p>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onAHFS_click}>
            AHFS
          </li>
          <li className="list-group-item" onClick={this.onAHFT_click}>
            AHFT
          </li>
          <li className="list-group-item" onClick={this.onAHDS_click}>
            AHDS
          </li>
          <li className="list-group-item" onClick={this.onAHDT_click}>
            AHDT
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onALFS_click}>
            ALFS
          </li>
          <li className="list-group-item" onClick={this.onALFT_click}>
            ALFT
          </li>
          <li className="list-group-item" onClick={this.onALDS_click}>
            ALDS
          </li>
          <li className="list-group-item" onClick={this.onALDT_click}>
            ALDT
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onPHFS_click}>
            PHFS
          </li>
          <li className="list-group-item" onClick={this.onPHFT_click}>
            PHFT
          </li>
          <li className="list-group-item" onClick={this.onPHDS_click}>
            PHDS
          </li>
          <li className="list-group-item" onClick={this.onPHDT_click}>
            PHDT
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onPLFS_click}>
            PLFS
          </li>
          <li className="list-group-item" onClick={this.onPLFT_click}>
            PLFT
          </li>
          <li className="list-group-item" onClick={this.onPLDS_click}>
            PLDS
          </li>
          <li className="list-group-item" onClick={this.onPLDT_click}>
            PLDT
          </li>
        </ul>
        <div class="addthis_inline_share_toolbox_qc3e"></div>
      </Wrapper>
    )
  }

  onAHFS_click() {
    let showAHFS = this.state.showAHFS
    this.setState({ showAHFS: !showAHFS })
  }

  onAHFT_click() {
    let showAHFT = this.state.showAHFT
    this.setState({ showAHFT: !showAHFT })
  }

  onAHDS_click() {
    let showAHDS = this.state.showAHDS
    this.setState({ showAHDS: !showAHDS })
  }

  onAHDT_click() {
    let showAHDT = this.state.showAHDT
    this.setState({ showAHDT: !showAHDT })
  }

  onALFS_click() {
    let showALFS = this.state.showALFS
    this.setState({ showALFS: !showALFS })
  }

  onALFT_click() {
    let showALFT = this.state.showALFT
    this.setState({ showALFT: !showALFT })
  }

  onALDS_click() {
    let showALDS = this.state.showALDS
    this.setState({ showALDS: !showALDS })
  }

  onALDT_click() {
    let showALDT = this.state.showALDT
    this.setState({ showALDT: !showALDT })
  }
  onPHFS_click() {
    let showPHFS = this.state.showPHFS
    this.setState({ showPHFS: !showPHFS })
  }

  onPHFT_click() {
    let showPHFT = this.state.showPHFT
    this.setState({ showPHFT: !showPHFT })
  }

  onPHDS_click() {
    let showPHDS = this.state.showPHDS
    this.setState({ showPHDS: !showPHDS })
  }

  onPHDT_click() {
    let showPHDT = this.state.showPHDT
    this.setState({ showPHDT: !showPHDT })
  }

  onPLFS_click() {
    let showPLFS = this.state.showPLFS
    this.setState({ showPLFS: !showPLFS })
  }

  onPLFT_click() {
    let showPLFT = this.state.showPLFT
    this.setState({ showPLFT: !showPLFT })
  }

  onPLDS_click() {
    let showPLDS = this.state.showPLDS
    this.setState({ showPLDS: !showPLDS })
  }

  onPLDT_click() {
    let showPLDT = this.state.showPLDT
    this.setState({ showPLDT: !showPLDT })
  }
}

Briggs.propTypes = {
  resultBriggs: PropTypes.string.isRequired
}

export default Briggs
