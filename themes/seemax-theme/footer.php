<!-- FOOTER  -->
<footer class="footer" role="contentinfo">
	<div class="content">
		<div class="footer-column">
			<ul>
				<li>
					<?php $image = get_field('footer_logo', 'options'); if( !empty($image) ): ?>
						<img class="footer-logo" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
					<?php endif; ?>
				</li>
				<li>
					<a class="c-block-fill" href="<?php the_field('address_map_link', 'options');?>" target="_blank"></a>
					<?php the_field('address', 'options');?>
				</li>
			</ul>
		</div>
		<div class="footer-column">
			<ul>
				<li class="footer-column-header">
					Contact
				</li>
				<li>
					<a class="c-block-fill" href="tel:<?php the_field('phone_number', 'options');?>"></a>
					<?php the_field('phone_number', 'options');?>
				</li>
				<li>
					<a class="c-block-fill" href="mailto:<?php the_field('contact_email', 'options');?>"></a>
					<?php the_field('contact_email', 'options');?>
				</li>
			</ul>
		</div>
		<div class="footer-column">
			<ul>
				<li class="footer-column-header">
					Social
				</li>
				<?php if( get_field('twitter_link', 'options') ): ?>
					<li class="footer-social-icon">
						<a class="c-block-fill" href="<?php the_field('twitter_link', 'options');?>" target="_blank"></a>
						<img src="<?php echo get_template_directory_uri(); ?>/img/social-icons/twitter-icon.png" >
					</li>
				<?php endif; ?>
				<?php if( get_field('medium_link', 'options') ): ?>
					<li class="footer-social-icon">
					<a class="c-block-fill" href="<?php the_field('medium_link', 'options');?>" target="_blank"></a>
					<img src="<?php echo get_template_directory_uri(); ?>/img/social-icons/medium-icon.png" >
					</li>
				<?php endif; ?>
				<?php if( get_field('linkedin_link', 'options') ): ?>
					<li class="footer-social-icon">
					<a class="c-block-fill" href="<?php the_field('linkedin_link', 'options');?>" target="_blank"></a>
					<img src="<?php echo get_template_directory_uri(); ?>/img/social-icons/linkedin-icon.png" >
					</li>
				<?php endif; ?>
			</ul>
		</div>
		<div class="footer-copyright">
			<?php the_field('copyright_language', 'options');?>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</div><!-- WRAPPER -->
</body>
</html>