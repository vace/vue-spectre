<template>
	<section id="empty" class="container grid-960">
	    <header class="text-center"><h4>empty states/blank slates</h4></header>
	    <section class="notes">
	        <p><strong>Empty states/blank slates</strong> are commonly used as placeholders for first time use, empty data and error screens.</p>
	    </section>
	    <div class="columns">
	        <div class="column col-6">

<Showyourcode>
<div>
	        	<empty icon="weixin" title="You have no new messages" meta="Click the button to start a conversation.">
	        		<button class="btn btn-primary">Send a message</button>
	        	</empty>
</div>
</Showyourcode>

	        </div>
	        <div class="column col-6">

<Showyourcode>
<div>
	        	<empty icon="weixin" title="You have no new messages">
	        		<button class="btn btn-primary">Discover people</button>
	        	</empty>
</div>
</Showyourcode>

	        </div>
	    </div>

	    <section class="notes">
	        <p>An empty state component can include icons, messages(title and meta messages) and action buttons or any combination of those elements. </p>
	    </section>
	 </section>
</template>