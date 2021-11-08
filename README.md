
# 광운대학교_소프트웨어학부_졸업작품 <br> "Raspberry Pi를 활용한 스마트 거울"

## 🤷‍♂️ 무슨 프로젝트 인가요?

**➡️** 라즈베리파이를 활용하여 거울의 기본적인 기능을 함은 물론이고, Google Assistant, 안면인식을 통한 개인 맞춤 알림 서비스, Azure를 활용한 온/습도 데이터화등 심화된 IoT 기능을 제공하도록 구성한 프로젝트입니다.

## 💁‍♂️ 어떤 식으로 구성되고 작동하나요?

**➡️** 구성 방식은 다음과 같습니다.

### HW

**- 전면**

![image](https://user-images.githubusercontent.com/65067460/140688918-db1c88a2-63f8-413f-bb2a-cae63f511393.png)


**- 후면**

![image](https://user-images.githubusercontent.com/65067460/140688831-6276e7cf-ac68-4a8e-97e6-d4674d06ca05.png)

### SW

![image](https://user-images.githubusercontent.com/65067460/140689253-7b0a83e2-8beb-4da4-a614-f3da18ccb41e.png)


**- MagicMirror 2**
https://github.com/MichMich/MagicMirror

**- MagicMirroe 2 Modules (Google Assistant, Face Recognition, Phone Notification 등)**
https://github.com/MichMich/MagicMirror/wiki/3rd-Party-Modules

**- MicroSoft Azure IoT**
https://docs.microsoft.com/ko-kr/azure/iot-hub/iot-hub-raspberry-pi-kit-node-get-started

**- Grafana를 활용한 온/습도 시계열 데이터화**
https://sandervandevelde.wordpress.com/2021/06/15/cloud-iot-dashboards-using-grafana-with-azure-iot/


## 🧐 어떠한 기능이 있죠?

➡️ 구성된 기능은 다음과 같습니다.

|기능|상세 소개|자세히 알아보기| 
|:---:|:---:|:---| 
|시계, 날씨, 일정|제공되는 기본 기능|https://docs.magicmirror.builders/development/node-helper.html#module-instance-methods| 
|유튜브 스트리밍|유튜브 N-Screen 기능||
|휴대전화 Notification 연동|개인 휴대전화의 알림을 거울로 확인|https://github.com/basknol/MMM-PushBulletNotifications|
|안면인식|안면인식을 기능|https://github.com/normyx/MMM-Facial-Recognition-OCV3|
|프로필 체인저|'안면인식' 기능과 연동, 개인 맞춤 서비스|https://github.com/tosti007/MMM-ProfileSwitcher|
|Google Assistant|'구글 어시스턴트' 기능, 각종 'Action'을 통해 다양한 음성인식 솔루션 이용 가능|http://wiki.bugsounet.fr/en/MMM-GoogleAssistant|
|온/습도 빅데이터화|Azure와 Grafana를 활용, 온/습도 데이터를 빅데이터화 함|https://sandervandevelde.wordpress.com/2021/06/15/cloud-iot-dashboards-using-grafana-with-azure-iot/|

# 위 기능을 구현하기 위해 다음의 프로젝트를 사용하였습니다.




For the full documentation including **[installation instructions](https://docs.magicmirror.builders/getting-started/installation.html)**, please visit our dedicated documentation website: [https://docs.magicmirror.builders](https://docs.magicmirror.builders).





<p style="text-align: center">
	<a href="https://bestpractices.coreinfrastructure.org/projects/347"><img src="https://bestpractices.coreinfrastructure.org/projects/347/badge" alt="CLI Best Practices"></a>
	<a href="https://codecov.io/gh/MichMich/MagicMirror"><img src="https://codecov.io/gh/MichMich/MagicMirror/branch/master/graph/badge.svg?token=LEG1KitZR6" alt="CodeCov Status"/></a>
	<a href="https://choosealicense.com/licenses/mit"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
	<a href="https://github.com/MichMich/MagicMirror/actions?query=workflow%3A%22Automated+Tests%22"><img src="https://github.com/MichMich/MagicMirror/workflows/Automated%20Tests/badge.svg" alt="Tests"></a>
</p>

**MagicMirror²** is an open source modular smart mirror platform. With a growing list of installable modules, the **MagicMirror²** allows you to convert your hallway or bathroom mirror into your personal assistant. **MagicMirror²** is built by the creator of [the original MagicMirror](https://michaelteeuw.nl/tagged/magicmirror) with the incredible help of a [growing community of contributors](https://github.com/MichMich/MagicMirror/graphs/contributors).

MagicMirror² focuses on a modular plugin system and uses [Electron](https://www.electronjs.org/) as an application wrapper. So no more web server or browser installs necessary!

## Documentation

For the full documentation including **[installation instructions](https://docs.magicmirror.builders/getting-started/installation.html)**, please visit our dedicated documentation website: [https://docs.magicmirror.builders](https://docs.magicmirror.builders).

## Links

- Website: [https://magicmirror.builders](https://magicmirror.builders)
- Documentation: [https://docs.magicmirror.builders](https://docs.magicmirror.builders)
- Forum: [https://forum.magicmirror.builders](https://forum.magicmirror.builders)
  - Technical discussions: https://forum.magicmirror.builders/category/11/core-system
- Discord: [https://discord.gg/J5BAtvx](https://discord.gg/J5BAtvx)
- Blog: [https://michaelteeuw.nl/tagged/magicmirror](https://michaelteeuw.nl/tagged/magicmirror)
- Donations: [https://magicmirror.builders/#donate](https://magicmirror.builders/#donate)

## Contributing Guidelines

Contributions of all kinds are welcome, not only in the form of code but also with regards to

- bug reports
- documentation
- translations

For the full contribution guidelines, check out: [https://docs.magicmirror.builders/getting-started/contributing.html](https://docs.magicmirror.builders/getting-started/contributing.html)

## Enjoying MagicMirror? Consider a donation!

MagicMirror² is opensource and free. That doesn't mean we don't need any money.

Please consider a donation to help us cover the ongoing costs like webservers and email services.
If we receive enough donations we might even be able to free up some working hours and spend some extra time improving the MagicMirror² core.

To donate, please follow [this](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G5D8E9MR5DTD2&source=url) link.

<p style="text-align: center">
	<a href="https://forum.magicmirror.builders/topic/728/magicmirror-is-voted-number-1-in-the-magpi-top-50"><img src="https://magicmirror.builders/img/magpi-best-watermark-custom.png" width="150" alt="MagPi Top 50"></a>
</p>
