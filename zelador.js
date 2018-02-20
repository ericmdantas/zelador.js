javascript:(function(){
	const JIRA = "jira.alterdata.com.br";
	const WEBMAIL = "webmail.alterdata.com.br";
	const PHYS_ORG = "phys.org";
	const HN = "news.ycombinator.com";
	
	switch(location.host) {
		case JIRA: 
			cleanIssueJira();
			break;
		case WEBMAIL:
			cleanWebmail();
			break;
		case PHYS_ORG:
			cleanPhysOrg();
			break;		
		case HN:
			cleanHN();
			break;
	}
	
	function cleanIssueJira() {
		if (/filter=-1/.test(location.search)) {
			return;
		}
		
		document.body.style.background = '#fff';
		
		let _assinee = document.getElementById('assignee-val');
		let _status = document.getElementById('status-val');
		
		let _specialContainer = document.createElement('div');
		_specialContainer.setAttribute('id', 'special-container');
		_specialContainer.style.position = 'fixed';
		_specialContainer.style.top = '15px';
		_specialContainer.style.right = '45px';
		_specialContainer.style.padding = '25px 15px';
		_specialContainer.style.border = '1px solid rgb(59, 127, 196)';
		_specialContainer.style.borderRadius = '12px';
		_specialContainer.style.textAlign = 'center';
		_specialContainer.style.backgroundColor = '#fafbfc';
		_specialContainer.innerHTML = _assinee.querySelectorAll('.aui-avatar.aui-avatar-small .aui-avatar-inner')[0].innerHTML;
		_specialContainer.innerHTML += '<br>' + _status.innerHTML;
		
		if (!document.querySelectorAll('#special-container').length) {
			document.body.appendChild(_specialContainer);
		}
		
		let _specialContainerImage = document.querySelectorAll('#special-container img');
		_specialContainerImage[0].style.width = '60px';
		_specialContainerImage[0].style.height = '60px';
		_specialContainerImage[0].style.borderRadius = '100%';
		
		[
			'header',
			'navigator-sidebar',
			'layout-switcher-button',
			'announcement-banner',
			'opsbar-jira.issue.tools',
			'attachmentmodule',
			'greenhopper-agile-issue-web-panel',
			'issue-tabs',
			'datesmodule',
			'customfieldmodule',
			'timetrackingmodule',
			'details-module',
			'peoplemodule',
			'comment-issue',
			'add-links-link',
		].forEach((id) => {
			if (document.getElementById(id)) {
				document.getElementById(id).style.display = 'none';
			}
		});
		
		
		[
			'.saved-search-operations',
			'.aui-page-header-image',
			'.list-ordering',
			'.aui-sidebar',
			'.status-view',
			'.aui-page-header-image',
			'.issue-header-content .aui-page-header-image',
			'.aui-nav-breadcrumbs li',
			'#special-container .aui-iconfont-edit',
		].forEach((clazz) => {
			[].forEach.call(document.querySelectorAll(clazz), (item) => {
				if (item) {
					item.style.display = 'none';
				}
			});
		});
		
		document.getElementById('peopledetails').style.display = 'block';
		
		[].forEach.call(document.querySelectorAll('.mod-header'), (item) => {
			item.style.background = 'none';
		});
		
		[].forEach.call(document.querySelectorAll('.mod-header h2'), (item) => {
			item.style.borderLeft = '2px solid #3b7fc4';
			item.style.paddingLeft = '10px';
			item.style.paddingBottom = '10px';
			item.style.paddingTop = '10px';
			item.style.fontWeight = 'normal';
		});
		
		document.getElementById('footer-comment-button').style.width = '100%';
		
		let _issueSideBar = document.getElementById('viewissuesidebar');
		_issueSideBar.style.paddingLeft = '0';
		
		[].forEach.call(document.querySelectorAll('.toggle-title'), (item) => {
			item.classList = "";
		});
		
		let _issueHeaderInner = document.querySelectorAll('.issue-header-content .aui-page-header-inner');
		_issueHeaderInner[0].style.borderLeft = '5px solid rgb(59, 127, 196)';
		
		let _issueHeaderContent = document.querySelectorAll('.issue-header-content');
		_issueHeaderContent[0].style.maxWidth = '900px';
		_issueHeaderContent[0].style.margin = '0 auto';
		
		let _issueBodyContent = document.querySelectorAll('.issue-body-content');
		_issueBodyContent[0].style.maxWidth = '900px';
		_issueBodyContent[0].style.margin = '0 auto';
		_issueBodyContent[0].style.padding = '0 0 20px 20px';
		
		let _descriptionModule = document.getElementById('descriptionmodule');
		_descriptionModule.style.marginTop = '0';
		_descriptionModule.style.paddingTop = '0';
		
		let _issuePageHeader = document.querySelectorAll('.issue-header .issue-header-content>.aui-page-header');
		_issuePageHeader[0].style.paddingLeft = '10px';
	}
	
	function cleanPhysOrg() {
		[
			'header',
			'slick-social',
			'news-holder',
		].forEach((id) => {
			let _item = document.getElementById(id);
			if (_item) {
				_item.style.display = 'none';
			}
		});
		
		[
			'.footer-main',
			'.banner-holder',
			'.rss-box',
			'.content-right-box',
			'.head-menu',
			'.sidebar',
			'.bf-banner',		
			'.com-holder',
			'.container-bottom',
			'.bread-crumbs',
			'.box-ads-native',
			'div[id^=google]',
			'iframe[id^=google]',
		].forEach((clazz) => {
			[].forEach.call(document.querySelectorAll(clazz), (c) => {
				c.style.display = 'none';
			});
		});
		
		let _stories = document.querySelectorAll('.wrapper-box-stories');
		if (_stories[0]) {
			_stories[0].style.width = '830px';
			_stories[0].style.margin = '0 auto';
		}
	}
	
	function cleanWebmail() {
		[].forEach.call(document.querySelectorAll('.tableRow'), (row, index) => {
		  if (index < 100) return;

		  row.style.display = 'none';
		})
	}
	
	function cleanHN() {
		let _hnMain = document.getElementById('hnmain');
		_hnMain.style.width = '700px';
		_hnMain.style.border = '1px solid rgba(255, 102, 0, .3)';
		
		let _body = document.body;
		_body.innerHTML = document.body.innerHTML.replace(/\|/g, '·');
		_body.style.backgroundColor = 'rgb(251, 251, 251)';
		
		[
			'.sitebit',
			'.athing .rank',
			'.score',
			'.age',
			'.morelink',
			'a[href^=newest]',
			'a[href^=threads]',
			'a[href^=newcomments]',
			'a[href^=show]',
			'a[href^=ask]',
			'a[href^=jobs]',
			'#logout',
			'form[method=get]',
			'.yclinks',
			'table>tbody>tr>td>img+table+br',
			'table>tbody>tr>td>img+table+br+center',
			'table>tbody>tr>td>img+table+br+center+br',			
			'table>tbody>tr>td>img+table+br+center+br+center',			
		].forEach((item) => {
			[].forEach.call(document.querySelectorAll(item), (c) => {
				c.style.display = 'none';
			});
		});
		
		[].forEach.call(document.querySelectorAll('.athing .votelinks'), (c) => {
			c.style.padding = '0 5px';
		});
		
		[].forEach.call(document.querySelectorAll('.spacer'), (c) => {
			c.style.height = '10px';
		});
		
		[].forEach.call(document.querySelectorAll('.pagetop'), (clazz) => {
			clazz.innerHTML = clazz.innerHTML.replace(/·/g, "");
		});
	}
}());