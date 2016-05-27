<template>
	<header class="navbar">
	    <section class="navbar-section">
	        <slot name="left"></slot>
	    </section>
	    <slot></slot>
	    <section class="navbar-section">
	        <slot name="right"></slot>
	    </section>
	</header>
</template>